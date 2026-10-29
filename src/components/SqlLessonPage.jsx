import React from 'react';
import { ArrowLeft, BookOpen, Play } from 'lucide-react';
import QuickAccessNav from './QuickAccessNav';

function goToSql(event) {
  event.preventDefault();
  window.history.pushState({}, '', '/sql');
  window.dispatchEvent(new PopStateEvent('popstate'));
}

export default function SqlLessonPage({ lesson }) {
  return (
    <div className="min-h-dvh bg-[#111512] text-[#edf1e8]">
      <QuickAccessNav activePage="sql" />
      <main className="mx-auto max-w-3xl px-5 py-10 sm:px-8 lg:py-16">
        <a href="/sql" onClick={goToSql} className="inline-flex items-center gap-2 text-sm font-semibold text-[#a6d58e] hover:text-white"><ArrowLeft size={16} /> Back to SQL Lab</a>
        <div className="mt-10 flex items-center gap-3 text-[#a6d58e]"><BookOpen size={20} /><span className="text-sm font-bold uppercase tracking-[0.2em]">SQL explanation</span></div>
        <h1 className="mt-3 font-mono text-4xl font-bold text-white">{lesson.title}</h1>
        <p className="mt-4 text-xl leading-relaxed text-[#b4beb2]">{lesson.description}</p>
        <section className="mt-8 rounded-2xl border border-[#354137] bg-[#1b211c] p-6 sm:p-8">
          <h2 className="text-lg font-bold text-white">How it works</h2>
          <p className="mt-3 leading-8 text-[#c4cdc1]">{lesson.explanation}</p>
          <div className="mt-7 rounded-xl border border-[#334333] bg-[#121813] p-5"><p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#778477]">Example</p><code className="block whitespace-pre-wrap font-mono text-sm leading-7 text-[#d5e89d]">{lesson.example}</code></div>
          <p className="mt-6 rounded-xl bg-[#263325] px-4 py-3 text-sm leading-relaxed text-[#dce8d3]"><strong className="text-[#d1f36a]">Tip:</strong> {lesson.tip}</p>
          <a href={`/sql?query=${encodeURIComponent(lesson.example)}`} className="mt-7 inline-flex items-center gap-2 rounded-md bg-[#d1f36a] px-4 py-2.5 text-sm font-bold text-[#1b2414] hover:bg-[#defb80]"><Play size={15} fill="currentColor" /> Try this query</a>
        </section>
      </main>
    </div>
  );
}
