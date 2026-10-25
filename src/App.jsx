import React, { useState, useEffect } from 'react';
import CodeEditor from './components/CodeEditor';
import FlowchartViewer from './components/FlowchartViewer';
import AlgorithmPage from './components/AlgorithmPage';
import AlgorithmLibraryPage from './components/AlgorithmLibraryPage';
import QuickAccessNav from './components/QuickAccessNav';
import SORTING_ALGORITHMS from './data/algorithms';
import SEARCHING_ALGORITHMS from './data/search-algorithms';
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
  const [pathname, setPathname] = useState(() => window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setPathname(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  if (pathname === '/algorithms') {
    return <AlgorithmLibraryPage />;
  }

  const currentAlgorithm = [...SORTING_ALGORITHMS, ...SEARCHING_ALGORITHMS].find(
    ({ slug }) => pathname === `/algorithms/${slug}`,
  );

  if (currentAlgorithm) {
    return <AlgorithmPage algorithm={currentAlgorithm} />;
  }

  return <FlowchartApp />;
}
function FlowchartApp() {
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
  <div className="flex min-h-dvh w-full flex-col bg-[#111512] text-[#edf1e8]">
    <QuickAccessNav activePage="flowchart" />
    <div className="flex h-[calc(100dvh-4rem)] min-h-105 w-full flex-col overflow-hidden">
      <main className="grid min-h-0 flex-1 grid-cols-1 grid-rows-[minmax(260px,0.9fr)_minmax(280px,1.1fr)] overflow-hidden lg:grid-cols-[minmax(340px,0.85fr)_minmax(0,1.5fr)] lg:grid-rows-1">
        <section className="min-h-0 overflow-hidden border-b border-[#2c342d] lg:border-b-0 lg:border-r lg:border-r-[#39443a]">
          <CodeEditor code={code} onChange={setCode} error={error} />
        </section>
        <section className="min-h-0 overflow-hidden">
          <FlowchartViewer
            svgContent={svgContent}
            isLoading={isLoading}
            onClear={handleClear}
            onExport={handleExport}
            hasSvg={!!svgContent}
          />
        </section>
      </main>
    </div>

  </div>
);
}