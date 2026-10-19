import React from 'react';
import { AlertCircle, Code } from 'lucide-react';

export default function CodeEditor({ code, onChange, error }) {
  const lineCount = code.split('\n').length || 1;
  const lineNumbers = Array.from({ length: lineCount }, (_, i) => i + 1);

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <span style={styles.title}>
          <Code size={15} color="#38bdf8" /> JavaScript Source Editor
        </span>
        <span style={styles.badge}>Live Sync</span>
      </div>

      <div style={styles.editorBody}>
        <div style={styles.lineNumbers}>
          {lineNumbers.map(n => (
            <div key={n} style={styles.lineNumber}>{n}</div>
          ))}
        </div>

        <textarea
          style={styles.textarea}
          value={code}
          onChange={(e) => onChange(e.target.value)}
          placeholder="// Paste or write JavaScript code here..."
          spellCheck={false}
        />
      </div>

      {error && (
        <div style={styles.errorContainer}>
          <AlertCircle size={18} color="#ef4444" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <div style={styles.errorTitle}>Parsing / Syntax Error</div>
            <div style={styles.errorMessage}>{error}</div>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    backgroundColor: '#0f172a',
    borderRight: '1px solid #1e293b',
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
  badge: {
    fontSize: '0.65rem',
    backgroundColor: '#0369a1',
    color: '#e0f2fe',
    padding: '2px 8px',
    borderRadius: '10px',
    fontWeight: '700',
    textTransform: 'uppercase'
  },
  editorBody: {
    display: 'flex',
    flex: 1,
    position: 'relative',
    overflow: 'hidden'
  },
  lineNumbers: {
    padding: '14px 8px',
    backgroundColor: '#090d16',
    borderRight: '1px solid #1e293b',
    color: '#475569',
    fontFamily: 'Consolas, Monaco, monospace',
    fontSize: '13px',
    lineHeight: '1.5',
    textAlign: 'right',
    userSelect: 'none',
    minWidth: '36px'
  },
  lineNumber: {
    height: '19.5px'
  },
  textarea: {
    flex: 1,
    padding: '14px',
    backgroundColor: 'transparent',
    border: 'none',
    color: '#38bdf8',
    fontFamily: 'Consolas, Monaco, monospace',
    fontSize: '13px',
    lineHeight: '1.5',
    resize: 'none',
    outline: 'none',
    whiteSpace: 'pre',
    overflowX: 'auto'
  },
  errorContainer: {
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
    borderTop: '1px solid #ef4444',
    padding: '12px 16px',
    display: 'flex',
    gap: '10px',
    maxHeight: '120px',
    overflowY: 'auto'
  },
  errorTitle: {
    fontSize: '0.8rem',
    fontWeight: '700',
    color: '#fca5a5'
  },
  errorMessage: {
    fontSize: '0.75rem',
    color: '#f87171',
    fontFamily: 'monospace',
    marginTop: '2px'
  }
};