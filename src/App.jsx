import React, { useState, useEffect } from 'react';
import Toolbar from './components/Toolbar';
import CodeEditor from './components/CodeEditor';
import FlowchartViewer from './components/FlowchartViewer';
import { convertCodeToFlowchartSvg } from './utils/convertCode';
import { exportSvg } from './utils/exportDiagram';

const INITIAL_CODE = `let age = 20;

console.log("Checking age");

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

console.log("Finished");`;

export default function App() {
  const [code, setCode] = useState(INITIAL_CODE);
  const [svgContent, setSvgContent] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const handler = setTimeout(() => {
      const { svg, error: parseError } = convertCodeToFlowchartSvg(code);
      if (parseError) {
        setError(parseError);
        setSvgContent(null);
      } else {
        setError(null);
        setSvgContent(svg);
      }
      setIsLoading(false);
    }, 250);

    return () => clearTimeout(handler);
  }, [code]);

  const handleClear = () => {
    setCode('');
    setSvgContent(null);
    setError(null);
  };

  const handleExport = () => {
    if (svgContent) {
      exportSvg(svgContent, 'flowchart.svg');
    }
  };

  return (
  <div className="w-full bg-[#111512] text-[#edf1e8]">
    {/* 1. Upper Viewport Section (Stays fixed to the screen height) */}
    <div className="flex h-dvh min-h-105 w-full flex-col overflow-hidden">
      <Toolbar 
        onClear={handleClear}
        onExport={handleExport}
        hasSvg={!!svgContent}
      />

      <main className="grid min-h-0 flex-1 grid-cols-1 grid-rows-[minmax(260px,0.9fr)_minmax(280px,1.1fr)] overflow-hidden lg:grid-cols-[minmax(340px,0.85fr)_minmax(0,1.5fr)] lg:grid-rows-1">
        <section className="min-h-0 overflow-hidden border-b border-[#2c342d] lg:border-b-0 lg:border-r">
          <CodeEditor code={code} onChange={setCode} error={error} />
        </section>
        <section className="min-h-0 overflow-hidden">
          <FlowchartViewer svgContent={svgContent} isLoading={isLoading} />
        </section>
      </main>
    </div>

    {/* 2. Lower Content Section (Scroll down to view this) */}
    <div className="w-full px-6 py-12 lg:px-16 bg-[#161a17] border-t border-[#2c342d]">
      <div className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-xl font-bold text-white">Additional Content</h2>
        <p className="text-[#edf1e8] leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets.
        </p>
        <p className="text-[#edf1e8] leading-relaxed">
          It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.
        </p>
        
      </div>
    </div>
  </div>
);
}