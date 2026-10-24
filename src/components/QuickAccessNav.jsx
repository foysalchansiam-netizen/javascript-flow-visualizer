export default function QuickAccessNav({ activePage }) {
  const linkClass = (page) =>
    `rounded-lg px-4 py-2 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a6d58e] ${
      activePage === page
        ? 'bg-[#29352a] text-[#c5e6b3]'
        : 'text-[#b4beb2] hover:bg-[#222c23] hover:text-white'
    }`;

  return (
    <header className="flex h-14 shrink-0 items-center justify-between border-b border-[#2c342d] bg-[#171c18] px-5 sm:px-7">
      <a
        href="/"
        className="font-semibold tracking-wide text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a6d58e]"
      >
        JS Flow Visualizer
      </a>
      <nav aria-label="Quick access" className="flex items-center gap-2">
        <a href="/" aria-current={activePage === 'flowchart' ? 'page' : undefined} className={linkClass('flowchart')}>
          Flowchart
        </a>
        <a href="/algorithms" aria-current={activePage === 'algorithms' ? 'page' : undefined} className={linkClass('algorithms')}>
          Algorithms
        </a>
      </nav>
    </header>
  );
}
