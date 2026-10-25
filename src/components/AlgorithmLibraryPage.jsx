import QuickAccessNav from './QuickAccessNav';
import SORTING_ALGORITHMS from '../data/algorithms';
import SEARCHING_ALGORITHMS from '../data/search-algorithms';

function AlgorithmCards({ algorithms, label }) {
  return (
    <nav
      aria-label={`${label} algorithms`}
      className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      {algorithms.map(({ name, slug }, index) => (
        <a
          key={slug}
          href={`/algorithms/${slug}`}
          className="algorithm-card group flex min-h-28 items-center justify-between gap-4 rounded-2xl border border-[#354137] bg-[#1b211c] px-6 py-5 text-left shadow-lg shadow-black/10 transition duration-200 hover:-translate-y-1 hover:border-[#8fbe78] hover:bg-[#222c23] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a6d58e]"
        >
          <span className="flex items-center gap-4">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#29352a] text-sm font-bold text-[#a6d58e] transition group-hover:bg-[#a6d58e] group-hover:text-[#111512]">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="text-lg font-semibold text-[#edf1e8]">
              {name}
            </span>
          </span>
          <span
            aria-hidden="true"
            className="text-xl text-[#778477] transition group-hover:translate-x-1 group-hover:text-[#a6d58e]"
          >
            &rarr;
          </span>
        </a>
      ))}
    </nav>
  );
}

export default function AlgorithmLibraryPage() {
  return (
    <div className="min-h-dvh bg-[#111512] text-[#edf1e8]">
      <QuickAccessNav activePage="algorithms" />
      <main className="mx-auto max-w-7xl px-6 py-12 lg:px-16">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#a6d58e]">
          Explore
        </p>
        <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
          Algorithms
        </h1>
        <p className="mt-3 max-w-2xl leading-relaxed text-[#b4beb2]">
          Choose an algorithm to open its page with notes and a video.
        </p>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Sorting algorithms
          </h2>
          <AlgorithmCards algorithms={SORTING_ALGORITHMS} label="Sorting" />
        </section>

        <section className="mt-12 border-t border-[#39443a] pt-10">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Searching algorithms
          </h2>
          <AlgorithmCards algorithms={SEARCHING_ALGORITHMS} label="Searching" />
        </section>
      </main>
    </div>
  );
}
