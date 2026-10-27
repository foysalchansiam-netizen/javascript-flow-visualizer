import { useMemo, useState } from 'react';

const WRONG_DESCRIPTIONS = [
  'It repeatedly checks the first item and ignores the rest of the list.',
  'It randomly changes the list until the result looks correct.',
  'It always splits the list into exactly two equal halves and stops there.',
];

function makeQuestion(prompt, correct, incorrect, explanation) {
  const fallbackChoices = ['Not applicable', 'O(n³)', 'O(2ⁿ)', 'Unknown'];
  const uniqueIncorrect = [...new Set(incorrect.filter((text) => text !== correct))];
  for (const fallback of fallbackChoices) {
    if (uniqueIncorrect.length === 3) break;
    if (fallback !== correct && !uniqueIncorrect.includes(fallback)) uniqueIncorrect.push(fallback);
  }
  const choices = [correct, ...uniqueIncorrect].map((text, index) => ({ text, isCorrect: index === 0 }));
  const rotation = prompt.length % choices.length;
  const rotatedChoices = choices.slice(rotation).concat(choices.slice(0, rotation));

  return {
    prompt,
    choices: rotatedChoices.map(({ text }) => text),
    answer: rotatedChoices.findIndex(({ isCorrect }) => isCorrect),
    explanation,
  };
}

function buildQuiz(algorithm) {
  const { complexity = {} } = algorithm;
  const category = algorithm.category || 'Sorting algorithm';
  const isSearch = category.toLowerCase().includes('search');
  const best = complexity.best?.notation || 'Not listed';
  const average = complexity.average?.notation || 'Not listed';
  const worst = complexity.worst?.notation || 'Not listed';
  const space = complexity.space?.notation || 'Not listed';
  const action = isSearch ? 'find a target in a collection' : 'rearrange a collection into sorted order';
  const requirement = isSearch ? 'look for a target item' : 'sort the input values';

  return [
    makeQuestion(
      `What is the main idea behind ${algorithm.name}?`,
      algorithm.description,
      WRONG_DESCRIPTIONS,
      algorithm.description,
    ),
    makeQuestion(
      `What kind of algorithm is ${algorithm.name}?`,
      category,
      [isSearch ? 'Sorting algorithm' : 'Searching algorithm', 'Graph traversal algorithm', 'Compression algorithm'],
      `${algorithm.name} is listed as a ${category.toLowerCase()}.`,
    ),
    makeQuestion(
      `What is the best-case time complexity of ${algorithm.name}?`,
      best,
      [average, worst, 'O(1) in every case'],
      `The best-case complexity is ${best}.`,
    ),
    makeQuestion(
      `What is the average-case time complexity of ${algorithm.name}?`,
      average,
      [best, worst, 'O(n²) in every case'],
      `The average-case complexity is ${average}.`,
    ),
    makeQuestion(
      `What is the worst-case time complexity of ${algorithm.name}?`,
      worst,
      [best, average, 'O(1)'],
      `The worst-case complexity is ${worst}.`,
    ),
    makeQuestion(
      `What auxiliary space complexity is listed for ${algorithm.name}?`,
      space,
      [best, average, 'O(n²) always'],
      `The listed space complexity is ${space}.`,
    ),
    makeQuestion(
      `Which task is ${algorithm.name} designed to ${action}?`,
      isSearch ? 'Locate a target item' : 'Put values into sorted order',
      isSearch ? ['Put values into sorted order', 'Render a flowchart', 'Compress an image'] : ['Locate a target item', 'Traverse a graph', 'Encrypt a message'],
      `${algorithm.name} is a ${category.toLowerCase()} used to ${requirement}.`,
    ),
    makeQuestion(
      `If the input becomes much larger, which measure helps predict ${algorithm.name}'s running time?`,
      'Its time-complexity growth rate',
      ['The color of the chart', 'The variable names in the code', 'The screen size'],
      'Big-O growth describes how running time changes as input size grows.',
    ),
    makeQuestion(
      `Which result should you expect after using ${algorithm.name} correctly?`,
      isSearch ? 'The target is found or reported as missing' : 'The values are ordered from low to high',
      isSearch ? ['The values are automatically sorted', 'Every value is deleted', 'A random value is returned'] : ['The target index is always returned', 'The list becomes empty', 'A graph is drawn'],
      isSearch ? 'A search either identifies the target or confirms it is not present.' : 'A sorting algorithm produces an ordered collection.',
    ),
    makeQuestion(
      `What does the complexity graph help you compare for ${algorithm.name}?`,
      'How time and space growth change with input size',
      ['The visual color palette', 'The exact output for one fixed input', 'The number of lines in the file'],
      `The graph compares the growth of the listed best, average, worst, and space cases.`,
    ),
  ];
}

export default function AlgorithmQuiz({ algorithm }) {
  const questions = useMemo(() => buildQuiz(algorithm), [algorithm]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const question = questions[current];

  const chooseAnswer = (choiceIndex) => {
    if (selected !== null) return;
    setSelected(choiceIndex);
    if (choiceIndex === question.answer) setScore((value) => value + 1);
  };

  const goNext = () => {
    if (current === questions.length - 1) {
      setIsComplete(true);
      return;
    }
    setCurrent((value) => value + 1);
    setSelected(null);
  };

  const restart = () => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setIsComplete(false);
  };

  return (
    <section className="mt-10 rounded-3xl border border-[#39443a] bg-[#182019] p-5 shadow-[0_12px_30px_rgb(0_0_0_/0.18)] sm:p-7" aria-labelledby="quiz-title">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a6d58e]">Knowledge check</p>
          <h2 id="quiz-title" className="mt-2 text-2xl font-bold text-white sm:text-3xl">Test your understanding</h2>
        </div>
        {!isComplete && <span className="rounded-full bg-[#263428] px-3 py-1 text-sm font-semibold text-[#cbd5c8]">{current + 1} / {questions.length}</span>}
      </div>

      {!isComplete ? (
        <div className="mt-6">
          <div className="mb-6 h-2 overflow-hidden rounded-full bg-[#2a352b]" aria-label={`Question ${current + 1} of ${questions.length}`}>
            <div className="h-full rounded-full bg-[#a6d58e] transition-all" style={{ width: `${((current + 1) / questions.length) * 100}%` }} />
          </div>
          <h3 className="text-lg font-semibold leading-relaxed text-[#edf1e8] sm:text-xl">{question.prompt}</h3>
          <div className="mt-5 grid gap-3">
            {question.choices.map((choice, index) => {
              const isSelected = selected === index;
              const isCorrect = question.answer === index;
              const choiceStyle = selected === null
                ? 'border-[#3d4b3e] bg-[#202b21] hover:border-[#a6d58e] hover:bg-[#263428]'
                : isCorrect
                  ? 'border-[#8fbe78] bg-[#29402b]'
                  : isSelected
                    ? 'border-[#d77d6f] bg-[#432b29]'
                    : 'border-[#303b31] bg-[#1b241c] opacity-70';
              return (
                <button key={choice} type="button" onClick={() => chooseAnswer(index)} disabled={selected !== null} className={`rounded-2xl border px-4 py-3 text-left text-sm leading-relaxed text-[#e4ebdf] transition sm:text-base ${choiceStyle}`}>
                  <span className="mr-3 font-bold text-[#a6d58e]">{String.fromCharCode(65 + index)}.</span>{choice}
                </button>
              );
            })}
          </div>
          {selected !== null && (
            <div className={`mt-5 rounded-2xl border p-4 text-sm leading-relaxed ${selected === question.answer ? 'border-[#668e5c] bg-[#213222] text-[#d8f0ce]' : 'border-[#89534b] bg-[#382524] text-[#f0d1ca]'}`}>
              <p className="font-bold">{selected === question.answer ? 'Correct!' : 'Not quite.'}</p>
              <p className="mt-1">{question.explanation}</p>
            </div>
          )}
          <button type="button" onClick={goNext} disabled={selected === null} className="fun-link mt-6 w-full rounded-2xl bg-[#a6d58e] px-5 py-3 font-bold text-[#162014] disabled:cursor-not-allowed disabled:opacity-40">
            {current === questions.length - 1 ? 'See results' : 'Next question'}
          </button>
        </div>
      ) : (
        <div className="mt-8 rounded-2xl bg-[#202b21] p-6 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#a6d58e]">Quiz complete</p>
          <p className="mt-3 text-4xl font-bold text-white">{score} / {questions.length}</p>
          <p className="mt-3 text-[#b9c6b5]">You answered {score === questions.length ? 'every question correctly' : `${score} question${score === 1 ? '' : 's'} correctly`}.</p>
          <button type="button" onClick={restart} className="fun-link mt-6 rounded-2xl border border-[#8fbe78] px-5 py-3 font-bold text-[#d8f0ce] hover:bg-[#2c432d]">Try again</button>
        </div>
      )}
    </section>
  );
}
