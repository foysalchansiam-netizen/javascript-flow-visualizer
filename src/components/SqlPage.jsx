import React, { useEffect, useRef, useState } from 'react';
import initSqlJs from 'sql.js';
import wasmUrl from 'sql.js/dist/sql-wasm.wasm?url';
import { BookOpen, Database, Play, RotateCcw, Table2 } from 'lucide-react';
import QuickAccessNav from './QuickAccessNav';
import SQL_LESSONS from '../data/sqlLessons';
const STARTER_SQL = `-- Try a query, then edit the data and run it again
SELECT name, department, salary
FROM employees
WHERE salary >= 70000
ORDER BY salary DESC;`;

const SCHEMA_SQL = `
CREATE TABLE employees (id INTEGER PRIMARY KEY, name TEXT, department TEXT, salary INTEGER);
INSERT INTO employees VALUES
  (1, 'Ari', 'Engineering', 92000),
  (2, 'Bea', 'Design', 68000),
  (3, 'Chen', 'Engineering', 84000),
  (4, 'Drew', 'Marketing', 72000),
  (5, 'Eli', 'Design', 61000);
CREATE TABLE departments (name TEXT PRIMARY KEY, floor INTEGER);
INSERT INTO departments VALUES ('Engineering', 4), ('Design', 3), ('Marketing', 2);`;

function makeDatabase(SQL) {
  const db = new SQL.Database();
  db.run(SCHEMA_SQL);
  return db;
}

export default function SqlPage() {
  const dbRef = useRef(null);
  const sqlModuleRef = useRef(null);
  const [sql, setSql] = useState(() => new URLSearchParams(window.location.search).get('query') || STARTER_SQL);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    initSqlJs({ locateFile: () => wasmUrl })
      .then(SQL => {
        if (cancelled) return;
        sqlModuleRef.current = SQL;
        dbRef.current = makeDatabase(SQL);
        setReady(true);
      })
      .catch(() => setError('SQLite could not be loaded. Refresh the page and try again.'));
    return () => { cancelled = true; dbRef.current?.close(); };
  }, []);

  const runQuery = () => {
    if (!dbRef.current || !sql.trim()) return;
    try {
      const queryResults = dbRef.current.exec(sql);
      const first = queryResults[0];
      setResult(first ? { columns: first.columns, values: first.values } : { columns: [], values: [], message: 'Statement executed successfully.' });
      setError(null);
    } catch (queryError) {
      setResult(null);
      setError(queryError.message);
    }
  };

  const resetDatabase = () => {
    if (!dbRef.current) return;
    dbRef.current.close();
    dbRef.current = makeDatabase(sqlModuleRef.current);
    setResult(null);
    setError(null);
  };

  return (
    <div className="min-h-dvh bg-[#111512] text-[#edf1e8]">
      <QuickAccessNav activePage="sql" />
      <main className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#a6d58e]">Browser database playground</p>
            <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">SQL Lab</h1>
            <p className="mt-3 max-w-2xl leading-relaxed text-[#b4beb2]">Write and execute real SQLite queries locally in WebAssembly. Your data stays in this page.</p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#3d553e] bg-[#1b291d] px-3 py-2 text-xs font-semibold text-[#bce596]">
            <Database size={14} /> {ready ? 'SQLite ready' : 'Loading SQLite…'}
          </span>
        </div>

        <section className="mt-8 overflow-hidden rounded-2xl border border-[#354137] bg-[#1b211c] shadow-xl shadow-black/10">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#2c342d] px-4 py-3">
            <span className="flex items-center gap-2 text-sm font-semibold text-[#dce2d6]"><Table2 size={16} className="text-[#d1f36a]" /> Query editor</span>
            <div className="flex gap-2">
              <button onClick={resetDatabase} className="inline-flex items-center gap-2 rounded-md border border-[#394139] px-3 py-2 text-xs font-semibold text-[#c2c9bc] hover:bg-[#252f26]"><RotateCcw size={14} /> Reset data</button>
              <button onClick={runQuery} disabled={!ready} className="inline-flex items-center gap-2 rounded-md bg-[#d1f36a] px-4 py-2 text-xs font-bold text-[#1b2414] disabled:opacity-40"><Play size={14} fill="currentColor" /> Run query</button>
            </div>
          </div>
          <textarea value={sql} onChange={event => setSql(event.target.value)} spellCheck={false} className="min-h-52 w-full resize-y bg-[#151b16] p-5 font-mono text-sm leading-7 text-[#d5e89d] outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-[#718b43]" aria-label="SQL query editor" />
          {error && <div className="border-t border-[#783d35] bg-[#301e1b] px-5 py-3 font-mono text-xs text-[#ffb4a2]">{error}</div>}
          {result && <div className="overflow-x-auto border-t border-[#2c342d] p-4">
            {result.message ? <p className="text-sm text-[#bce596]">{result.message}</p> : <table className="w-full min-w-120 text-left text-sm"><thead><tr>{result.columns.map(column => <th key={column} className="border-b border-[#445244] px-3 py-2 font-semibold text-[#a6d58e]">{column}</th>)}</tr></thead><tbody>{result.values.map((row, index) => <tr key={index} className="border-b border-[#29332b] last:border-0">{row.map((value, cellIndex) => <td key={cellIndex} className="px-3 py-2 text-[#d9e2d6]">{value == null ? <span className="text-[#778477]">NULL</span> : String(value)}</td>)}</tr>)}</tbody></table>}
          </div>}
        </section>

        <section className="mt-10">
          <div className="flex items-center gap-3"><BookOpen className="text-[#a6d58e]" /><h2 className="text-2xl font-bold text-white">SQL learning cards</h2></div>
          <p className="mt-2 text-[#b4beb2]">Choose a concept to read a short explanation and see a practical query.</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{SQL_LESSONS.map((lesson, index) => <article key={lesson.slug} className="sql-lesson-card group rounded-2xl border border-[#354137] bg-[#1b211c] p-5">
            <div className="flex items-start justify-between gap-3"><span className="flex size-9 items-center justify-center rounded-xl bg-[#29352a] text-xs font-bold text-[#a6d58e] transition-colors group-hover:bg-[#d1f36a] group-hover:text-[#17200f]">{String(index + 1).padStart(2, '0')}</span><span className="rounded-full border border-[#3d553e] px-2 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#82927e]">Mini lesson</span></div>
            <h3 className="mt-5 font-mono text-lg font-bold text-[#d1f36a]">{lesson.title}</h3><p className="mt-2 min-h-12 text-sm leading-relaxed text-[#b4beb2]">{lesson.description}</p>
            <div className="mt-4 rounded-lg bg-[#121813] p-3"><p className="mb-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#778477]">A query to explore</p><code className="block font-mono text-xs leading-relaxed text-[#d9e2d6]">{lesson.example}</code></div>
            <div className="mt-5 flex items-center gap-4 text-xs font-bold"><a href={`/sql/lessons/${lesson.slug}`} className="sql-lesson-action text-[#a6d58e] hover:text-white">Explain it <span aria-hidden="true">→</span></a><a href={`/sql?query=${encodeURIComponent(lesson.example)}`} className="sql-lesson-action text-[#c2c9bc] hover:text-white">Try it <span aria-hidden="true">↗</span></a></div>
          </article>)}</div>
        </section>
      </main>
    </div>
  );
}
