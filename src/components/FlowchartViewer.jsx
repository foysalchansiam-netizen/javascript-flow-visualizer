import React, { useState, useEffect, useRef } from 'react';
import { ZoomIn, ZoomOut, RotateCcw, Eye } from 'lucide-react';

export default function FlowchartViewer({ svgContent, isLoading }) {
  const [zoom, setZoom] = useState(1);
  const containerRef = useRef(null);

  useEffect(() => {
    setZoom(1);
  }, [svgContent]);

  const handleZoomIn = () => setZoom(z => Math.min(z + 0.2, 3.0));
  const handleZoomOut = () => setZoom(z => Math.max(z - 0.2, 0.4));
  const handleResetZoom = () => setZoom(1);

  return (
    <div className="relative flex h-full min-h-0 flex-col overflow-hidden bg-[#f1f2e9]">
      <div className="flex h-12 shrink-0 items-center justify-around gap-4 border-b border-[#d8dbce] bg-[#f8f8f1] px-4">
       
        <span className="flex min-w-0 items-center gap-2.5 truncate text-xs font-semibold text-[#343a31]">
           Flowchart
        </span>
       
        <div className="flex shrink-0 items-center gap-1">
          <button className="flex size-8 items-center justify-center rounded-md text-[#5e6758] transition-colors hover:bg-[#e6e9dc] hover:text-[#222820] focus-visible:outline-2 focus-visible:outline-[#8aa34b]" onClick={handleZoomOut} title="Zoom Out" aria-label="Zoom out"><ZoomOut size={15} /></button>
          <span className="min-w-10 text-center font-mono text-[11px] text-[#666e60]">{Math.round(zoom * 100)}%</span>
          <button className="flex size-8 items-center justify-center rounded-md text-[#5e6758] transition-colors hover:bg-[#e6e9dc] hover:text-[#222820] focus-visible:outline-2 focus-visible:outline-[#8aa34b]" onClick={handleZoomIn} title="Zoom In" aria-label="Zoom in"><ZoomIn size={15} /></button>
          <button className="ml-1 flex size-8 items-center justify-center rounded-md border-l border-[#d8dbce] pl-2 text-[#5e6758] transition-colors hover:text-[#222820] focus-visible:outline-2 focus-visible:outline-[#8aa34b]" onClick={handleResetZoom} title="Reset View" aria-label="Reset view"><RotateCcw size={14} /></button>
        </div>
      </div>

      <div className="diagram-grid relative flex min-h-0 flex-1 items-start justify-center overflow-auto p-6 sm:p-8" ref={containerRef}>
        {isLoading && (
          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-3 text-center text-sm text-[#68705f]">
            <div className="size-7 animate-spin rounded-full border-[3px] border-[#d7dccb] border-t-[#788d42]" />
            <p>Analyzing control flow...</p>
          </div>
        )}

        {!isLoading && !svgContent && (
          <div className="absolute left-1/2 top-1/2 max-w-64 -translate-x-1/2 -translate-y-1/2 text-center text-sm leading-6 text-[#747b6e]">
            <p>Enter valid JavaScript code to generate a flowchart.</p>
          </div>
        )}

        {!isLoading && svgContent && (
          <div 
            className="max-w-full origin-top transition-transform duration-150 ease-out [&>svg]:h-auto [&>svg]:max-w-full"
            style={{ transform: `scale(${zoom})` }}
            dangerouslySetInnerHTML={{ __html: svgContent }}
          />
        )}
      </div>
    </div>
  );
}