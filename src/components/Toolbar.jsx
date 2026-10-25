import React from 'react';
import { Trash2, Download, Code2 } from 'lucide-react';

export default function Toolbar({ onClear, onExport, hasSvg }) {
  return (
    <header className="flex flex-wrap items-center justify-between gap-6 border-b border-[#2c342d] bg-[#171c18] px-5 py-3.5 sm:px-7">
      <div className="flex min-w-0 items-center gap-3.5 ">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-[#3b493b] bg-[#202920] text-[#d1f36a] ">
          <Code2 size={20} />
        </div>
        <div className="min-w-0">
          <h1 className="truncate text-[15px] font-semibold tracking-[0.01em] text-[#f0f2e9]">JavaScript to Flowchart</h1>
          <p className="mt-0.5 hidden text-xs text-[#8e998d] sm:block">Turn JavaScript logic into a clear visual map</p>
        </div>
      </div>

      <div className="ml-auto flex items-center gap-2">
        <button className="inline-flex h-9 items-center gap-2 rounded-md border border-[#394139] px-3 text-xs font-medium text-[#c2c9bc] transition-colors hover:border-[#596653] hover:bg-[#222a23] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d1f36a]" onClick={onClear} title="Clear Editor">
          <Trash2 size={15} /> <span>Clear</span>
        </button>

        <button 
          className="inline-flex h-9 items-center gap-2 rounded-md bg-[#d1f36a] px-3.5 text-xs font-semibold text-[#1b2414] transition-colors hover:bg-[#defb80] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d1f36a] disabled:cursor-not-allowed disabled:opacity-40" 
          onClick={onExport} 
          disabled={!hasSvg}
          title="Export SVG Diagram"
        >
          <Download size={15} /> <span>Export SVG</span>
        </button>
      </div>
    </header>
  );
}