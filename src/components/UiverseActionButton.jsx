export default function UiverseActionButton({ children, href, onClick, disabled = false, title, className = '' }) {
  const Element = href ? 'a' : 'button';

  return (
    <Element
      href={href}
      type={href ? undefined : 'button'}
      className={`group relative inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-md bg-[#1b211c] px-8 py-2.5 tracking-tighter text-white transition-transform duration-200 hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-40 ${className}`}
      onClick={onClick}
      disabled={href ? undefined : disabled}
      title={title}
    >
      <span className="absolute h-0 w-0 rounded-full bg-[#718f43] transition-all duration-500 ease-out group-hover:h-56 group-hover:w-56" />
      <span className="absolute bottom-0 left-0 -ml-2 h-full">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-auto object-stretch opacity-100" viewBox="0 0 487 487" aria-hidden="true">
          <path fillOpacity=".1" fillRule="nonzero" fill="#FFF" d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z" />
        </svg>
      </span>
      <span className="absolute right-0 top-0 -mr-3 h-full w-12">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full object-cover" viewBox="0 0 487 487" aria-hidden="true">
          <path fillOpacity=".1" fillRule="nonzero" fill="#FFF" d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z" />
        </svg>
      </span>
      <span className="absolute inset-0 -mt-1 h-full w-full rounded-lg bg-gradient-to-b from-transparent via-transparent to-gray-200 opacity-30" />
      <span className="relative w-full text-left text-base font-semibold">{children}</span>
    </Element>
  );
}
