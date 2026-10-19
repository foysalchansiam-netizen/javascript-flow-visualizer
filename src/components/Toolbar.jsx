import React from 'react';
import { Trash2, Download, Code2 } from 'lucide-react';

export default function Toolbar({ onClear, onExport, hasSvg }) {
  return (
    <header style={styles.toolbar}>
      <div style={styles.titleSection}>
        <div style={styles.logoBadge}>
          <Code2 size={22} color="#38bdf8" />
        </div>
        <div>
          <h1 style={styles.title}>JS Flow Visualizer</h1>
          <p style={styles.subtitle}>Convert JavaScript control flow into clear, interactive SVGs</p>
        </div>
      </div>

      <div style={styles.controlsSection}>
        <button style={styles.actionBtnSecondary} onClick={onClear} title="Clear Editor">
          <Trash2 size={16} /> Clear
        </button>

        <button 
          style={{ ...styles.actionBtnPrimary, opacity: hasSvg ? 1 : 0.5, cursor: hasSvg ? 'pointer' : 'not-allowed' }} 
          onClick={onExport} 
          disabled={!hasSvg}
          title="Export SVG Diagram"
        >
          <Download size={16} /> Export SVG
        </button>
      </div>
    </header>
  );
}

const styles = {
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 20px',
    backgroundColor: '#1e293b',
    borderBottom: '1px solid #334155',
    flexWrap: 'wrap',
    gap: '12px'
  },
  titleSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  logoBadge: {
    width: '38px',
    height: '38px',
    borderRadius: '8px',
    backgroundColor: '#0f172a',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #334155'
  },
  title: {
    fontSize: '1.1rem',
    fontWeight: '700',
    color: '#f8fafc',
    letterSpacing: '-0.02em'
  },
  subtitle: {
    fontSize: '0.75rem',
    color: '#94a3b8'
  },
  controlsSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  },
  actionBtnSecondary: {
    background: '#334155',
    border: 'none',
    color: '#f8fafc',
    padding: '7px 14px',
    borderRadius: '6px',
    fontSize: '0.8rem',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    gap: '6px'
  },
  actionBtnPrimary: {
    background: 'linear-gradient(135deg, #0284c7 0%, #2563eb 100%)',
    border: 'none',
    color: '#ffffff',
    padding: '7px 14px',
    borderRadius: '6px',
    fontSize: '0.8rem',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    gap: '6px'
  }
};