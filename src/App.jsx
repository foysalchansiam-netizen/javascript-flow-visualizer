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
    <div style={styles.appContainer}>
      <Toolbar 
        onClear={handleClear}
        onExport={handleExport}
        hasSvg={!!svgContent}
      />

      <main style={styles.mainGrid}>
        <div style={styles.panel}>
          <CodeEditor code={code} onChange={setCode} error={error} />
        </div>
        <div style={styles.panel}>
          <FlowchartViewer svgContent={svgContent} isLoading={isLoading} />
        </div>
      </main>
    </div>
  );
}

const styles = {
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100vw',
    backgroundColor: '#0f172a'
  },
  mainGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    flex: 1,
    overflow: 'hidden'
  },
  panel: {
    height: '100%',
    overflow: 'hidden'
  }
};