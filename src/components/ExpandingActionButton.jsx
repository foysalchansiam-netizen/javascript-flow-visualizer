export default function ExpandingActionButton({ children, icon, onClick, disabled = false, title, theme = 'light' }) {
  return (
    <button
      type="button"
      className={`group relative isolate h-10 w-32 rounded-xl text-center text-xs font-semibold transition-transform duration-200 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-40 sm:w-36 ${theme === 'dark' ? 'bg-[#1b211c] text-[#edf1e8]' : 'bg-white text-black'}`}
      onClick={onClick}
      disabled={disabled}
      title={title}
    >
      <span className="pointer-events-none absolute left-1 top-1 z-10 flex h-8 w-1/4 items-center justify-center rounded-lg bg-[#a6d58e] transition-all duration-500 group-hover:w-[calc(100%-8px)]">
        {icon}
      </span>
      <span className="relative z-0 inline-block translate-x-2 whitespace-nowrap transition-opacity duration-200 group-hover:opacity-0">{children}</span>
    </button>
  );
}
