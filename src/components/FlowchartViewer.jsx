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
    <div style={styles.container}>
      <div style={styles.header}>
        <span style={styles.title}>
          <Eye size={15} color="#38bdf8" /> Interactive Flowchart Diagram
        </span>
        <div style={styles.zoomControls}>
          <button style={styles.iconBtn} onClick={handleZoomOut} title="Zoom Out"><ZoomOut size={14} /></button>
          <span style={styles.zoomText}>{Math.round(zoom * 100)}%</span>
          <button style={styles.iconBtn} onClick={handleZoomIn} title="Zoom In"><ZoomIn size={14} /></button>
          <button style={styles.iconBtn} onClick={handleResetZoom} title="Reset View"><RotateCcw size={14} /></button>
        </div>
      </div>

      <div style={styles.viewport} ref={containerRef}>
        {isLoading && (
          <div style={styles.statusOverlay}>
            <div style={styles.spinner}></div>
            <p>Analyzing control flow AST...</p>
          </div>
        )}

        {!isLoading && !svgContent && (
          <div style={styles.statusOverlay}>
            <p style={{ color: '#64748b' }}>Enter valid JavaScript code to generate a flowchart.</p>
          </div>
        )}

        {!isLoading && svgContent && (
          <div 
            style={{
              ...styles.svgContainer,
              transform: `scale(${zoom})`,
              transformOrigin: 'top center'
            }}
            dangerouslySetInnerHTML={{ __html: svgContent }}
          />
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    backgroundColor: '#0b0f19',
    position: 'relative',
    overflow: 'hidden'
  },
  header: {
    padding: '10px 16px',
    backgroundColor: '#1e293b',
    borderBottom: '1px solid #334155',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: '0.85rem',
    fontWeight: '600',
    color: '#cbd5e1',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  zoomControls: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px'
  },
  zoomText: {
    fontSize: '0.75rem',
    color: '#94a3b8',
    minWidth: '42px',
    textAlign: 'center'
  },
  iconBtn: {
    background: '#0f172a',
    border: '1px solid #334155',
    color: '#cbd5e1',
    padding: '4px 8px',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  viewport: {
    flex: 1,
    overflow: 'auto',
    position: 'relative',
    padding: '24px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  svgContainer: {
    transition: 'transform 0.15s ease-out',
    maxWidth: '100%'
  },
  statusOverlay: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    color: '#94a3b8',
    fontSize: '0.9rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px'
  },
  spinner: {
    width: '28px',
    height: '28px',
    border: '3px solid #334155',
    borderTop: '3px solid #38bdf8',
    borderRadius: '50%',
    animation: 'spin 0.8s linear infinite'
  }
};