import React from 'react';
import { AlertCircle, Code } from 'lucide-react';

export default function CodeEditor({ code, onChange, error }) {
  const lineCount = code.split('\n').length || 1;
  const lineNumbers = Array.from({ length: lineCount }, (_, i) => i + 1);

  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden bg-[#151a16]">
      <div className="flex h-12 shrink-0 items-center justify-between border-b border-[#2c342d] bg-[#1b211c] px-4">
        <span className="flex items-center gap-2.5 text-xs font-semibold text-[#dce2d6]">
          <Code size={15} className="text-[#d1f36a]" /> JavaScript source
        </span>
      </div>

      <div className="flex min-h-0 flex-1 overflow-hidden">
        <div className="min-w-10 select-none border-r border-[#252d26] bg-[#121612] px-2.5 py-4 text-right font-mono text-[12px] leading-normal text-[#657064]">
          {lineNumbers.map(n => (
            <div key={n} className="h-4.5">{n}</div>
          ))}
        </div>

        <textarea
          className="min-w-0 flex-1 resize-none overflow-auto bg-transparent px-4 py-4 font-mono text-[12px] leading-normal text-[#d5e89d] outline-none placeholder:text-[#586257] focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-[#718b43]"
          value={code}
          onChange={(e) => onChange(e.target.value)}
          placeholder="// Paste or write JavaScript code here..."
          spellCheck={false}
        />
      </div>

      {error && (
        <div className="flex max-h-30 gap-2.5 overflow-y-auto border-t border-[#783d35] bg-[#301e1b] px-4 py-3">
          <AlertCircle size={17} className="mt-0.5 shrink-0 text-[#f08e78]" />
          <div>
            <div className="text-xs font-semibold text-[#ffb4a2]">Parsing / Syntax Error</div>
            <div className="mt-1 font-mono text-[11px] text-[#e89b89]">{error}</div>
          </div>
        </div>
      )}
    </div>
  );
}