export default function SiteFooter() {
  return (
    <footer className="border-t border-[#2c342d] bg-[#171c18] px-5 py-9 text-sm text-[#9da99a] sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-7">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#a6d58e]">Get in touch</p>
          <p className="font-semibold text-[#edf1e8]">Designed and developed by Md Foysal Ahmmed Siam.</p>
          <p className="max-w-2xl leading-relaxed">Have a question, idea, or collaboration in mind? I&apos;d be happy to hear from you.</p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <a className="group inline-flex items-center gap-3 py-1 transition hover:text-white" href="mailto:foysalchansiam@gmail.com">
            <svg className="size-5 shrink-0 text-[#a6d58e]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M3 5.5h18v13H3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
              <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span><span className="block text-xs text-[#778477]">Email</span><span className="font-semibold text-[#dce5d8] underline decoration-[#53634f] underline-offset-4 group-hover:text-white group-hover:decoration-[#a6d58e]">Connect with me via Email</span></span>
          </a>

          <a className="group inline-flex items-center gap-3 py-1 transition hover:text-white" href="https://www.linkedin.com/in/foysal-chan-siam" target="_blank" rel="noreferrer">
            <svg className="size-5 shrink-0 text-[#a6d58e]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M5.2 3.5A2.2 2.2 0 1 1 5.2 7.9a2.2 2.2 0 0 1 0-4.4ZM3.3 9.6h3.8v10.9H3.3V9.6Zm6.1 0h3.6v1.5h.1c.5-.9 1.7-1.9 3.5-1.9 3.8 0 4.5 2.5 4.5 5.8v5.5h-3.8v-4.9c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7v5h-3.8V9.6Z" />
            </svg>
            <span><span className="block text-xs text-[#778477]">LinkedIn</span><span className="font-semibold text-[#dce5d8] underline decoration-[#53634f] underline-offset-4 group-hover:text-white group-hover:decoration-[#a6d58e]">Connect with me via LinkedIn</span></span>
          </a>
        </div>

        <div className="border-t border-[#2c342d] pt-4 text-xs text-[#778477]">
          © 2026 Md Foysal Ahmmed Siam. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
