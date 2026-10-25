function navigateTo(event, href) {
  event.preventDefault();
  if (window.location.pathname === href) return;

  const updateRoute = () => {
    window.history.pushState({}, '', href);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  if (document.startViewTransition) {
    document.startViewTransition(updateRoute);
  } else {
    updateRoute();
  }
}

export default function QuickAccessNav({ activePage }) {
  const activeClass = activePage === 'algorithms' ? 'is-algorithms' : 'is-flowchart';

  return (
    <header className="site-header flex h-16 shrink-0 items-center justify-between border-b border-[#2c342d] bg-[#171c18] px-5 sm:px-7">
      <a href="/" onClick={event => navigateTo(event, '/')} className="brand-link group rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a6d58e]">
        <span className="tech-text" aria-label="Flow Buddy">
          <span aria-hidden="true">Flow Buddy</span>
        </span>
      </a>

      <nav className={`glass-nav ${activeClass}`} aria-label="Quick access">
        <span className="glass-nav__highlight" aria-hidden="true" />
        <a href="/" onClick={event => navigateTo(event, '/')} aria-current={activePage === 'flowchart' ? 'page' : undefined} className="glass-nav__link">
          Flowchart
        </a>
        <a href="/algorithms" onClick={event => navigateTo(event, '/algorithms')} aria-current={activePage === 'algorithms' ? 'page' : undefined} className="glass-nav__link">
          Algorithms
        </a>
      </nav>
    </header>
  );
}