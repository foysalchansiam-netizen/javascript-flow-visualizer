import { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, Play, RotateCcw } from 'lucide-react';
import QuickAccessNav from './QuickAccessNav';

const NODES = [
  { id: 'A', x: 70, y: 200 }, { id: 'B', x: 190, y: 70 }, { id: 'C', x: 190, y: 330 },
  { id: 'D', x: 330, y: 200 }, { id: 'E', x: 450, y: 70 }, { id: 'F', x: 450, y: 330 },
  { id: 'G', x: 590, y: 70 }, { id: 'H', x: 590, y: 330 }, { id: 'I', x: 750, y: 200 },
  { id: 'J', x: 330, y: 60 }, { id: 'K', x: 730, y: 440 },
];

const EDGES = [
  ['A', 'B', 4], ['A', 'C', 2], ['B', 'D', 5], ['C', 'D', 1], ['B', 'J', 3],
  ['J', 'E', 2], ['D', 'E', 2], ['D', 'F', 4], ['C', 'F', 7], ['E', 'G', 2],
  ['F', 'H', 2], ['E', 'F', 3], ['G', 'H', 3], ['G', 'I', 3], ['H', 'I', 2],
  ['F', 'K', 3], ['H', 'K', 2], ['K', 'I', 2],
];

const nodeById = Object.fromEntries(NODES.map(node => [node.id, node]));

function neighbors(id) {
  return EDGES.flatMap(([from, to, weight]) => {
    if (from === id) return [{ id: to, weight }];
    if (to === id) return [{ id: from, weight }];
    return [];
  });
}

function heuristic(from, to) {
  const a = nodeById[from];
  const b = nodeById[to];
  return Math.hypot(a.x - b.x, a.y - b.y) / 100;
}

function findPath(mode, start, goal) {
  const distance = Object.fromEntries(NODES.map(({ id }) => [id, Infinity]));
  const previous = {};
  const open = [{ id: start, priority: 0 }];
  const visited = [];
  distance[start] = 0;

  while (open.length) {
    open.sort((a, b) => a.priority - b.priority);
    const current = open.shift().id;
    if (visited.includes(current)) continue;
    visited.push(current);
    if (current === goal) break;

    neighbors(current).forEach(({ id, weight }) => {
      const nextDistance = distance[current] + weight;
      if (nextDistance < distance[id]) {
        distance[id] = nextDistance;
        previous[id] = current;
        const estimate = mode === 'astar' ? heuristic(id, goal) : 0;
        open.push({ id, priority: nextDistance + estimate });
      }
    });
  }

  const path = [];
  let current = goal;
  while (current) {
    path.unshift(current);
    current = previous[current];
  }
  return { visited, path: path[0] === start ? path : [], distance: distance[goal] };
}

function Select({ label, value, onChange, options }) {
  return <label className="flex items-center gap-2 text-xs font-semibold text-[#b9c5b7]">{label}<select value={value} onChange={event => onChange(event.target.value)} className="rounded-md border border-[#455244] bg-[#202a20] px-2 py-1.5 text-sm text-white outline-none focus:border-[#a6d58e]">{options.map(option => <option key={option} value={option}>{option}</option>)}</select></label>;
}

export default function PathfindingPage({ algorithm }) {
  const mode = algorithm.slug === 'a-star' ? 'astar' : 'dijkstra';
  const [start, setStart] = useState('A');
  const [goal, setGoal] = useState('G');
  const [visited, setVisited] = useState([]);
  const [path, setPath] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const [runNumber, setRunNumber] = useState(0);
  const [hoveredNode, setHoveredNode] = useState(null);
  const result = useMemo(() => findPath(mode, start, goal), [mode, start, goal]);

  useEffect(() => {
    if (!isRunning) return undefined;
    const timer = window.setInterval(() => {
      setVisited(current => {
        if (current.length >= result.visited.length) {
          window.clearInterval(timer);
          setPath(result.path);
          setIsRunning(false);
          return current;
        }
        return [...current, result.visited[current.length]];
      });
    }, 420);
    return () => window.clearInterval(timer);
  }, [isRunning, result]);

  const run = () => {
    setVisited([]);
    setPath([]);
    setRunNumber(value => value + 1);
    setIsRunning(true);
  };

  const reset = () => {
    setVisited([]);
    setPath([]);
    setIsRunning(false);
  };

  const pathEdges = new Set(path.slice(1).map((node, index) => [path[index], node].sort().join('-')));
  const visitedSet = new Set(visited);
  const choices = NODES.map(({ id }) => id);

  const selectGraphDestination = nodeId => {
    if (nodeId === start) return;
    setGoal(nodeId);
    reset();
  };

  return <div className="min-h-dvh bg-[#111512] text-[#edf1e8]">
    <QuickAccessNav activePage="algorithms" />
    <main className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-12">
      <a href="/algorithms" className="fun-link inline-flex items-center gap-2 rounded-xl border border-[#39443a] px-4 py-2.5 font-semibold text-[#cbd5c8] hover:border-[#8fbe78] hover:bg-[#1c251d] hover:text-white"><ArrowLeft size={16} /> All algorithms</a>
      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-start">
        <section>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#a6d58e]">{algorithm.category}</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">{algorithm.name}</h1>
          <p className="mt-5 text-lg leading-relaxed text-[#b4beb2]">{algorithm.description}</p>
          <div className="mt-7 rounded-2xl border border-[#354137] bg-[#1b211c] p-5 sm:p-6">
            <div className="flex items-center gap-2 text-[#d1f36a]"><h2 className="font-bold">How it works, step by step</h2></div>
            <ol className="mt-4 space-y-3 text-sm leading-6 text-[#c7d1c4]">{(mode === 'astar' ? [
              'Start at the chosen node with a route cost of zero.',
              'Give every possible next node a score: the route cost so far plus an estimate of the distance to the goal.',
              'Explore the node with the smallest combined score, then check each of its neighbors.',
              'If a new route is cheaper, remember it and move that neighbor into the queue.',
              'Continue until the goal is chosen, then follow the remembered connections backward to reveal the path.',
            ] : [
              'Start at the chosen node with a route cost of zero. Every other node begins at infinity.',
              'Choose the unvisited node with the smallest known route cost.',
              'Check its neighbors and update their costs when this new route is cheaper.',
              'Mark the node as visited and repeat the process with the next cheapest node.',
              'When the goal is reached, follow the remembered connections backward to reveal the shortest path.',
            ]).map((step, index) => <li key={step} className="flex gap-3"><span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#d1f36a] text-xs font-bold text-[#1b2414]">{index + 1}</span><span>{step}</span></li>)}</ol>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-3 rounded-2xl border border-[#354137] bg-[#171e18] p-4"><Select label="From" value={start} onChange={value => { setStart(value); reset(); }} options={choices} /><Select label="To" value={goal} onChange={value => { setGoal(value); reset(); }} options={choices} /><button onClick={run} disabled={isRunning || start === goal} className="ml-auto inline-flex items-center gap-2 rounded-md bg-[#d1f36a] px-4 py-2.5 text-sm font-bold text-[#1b2414] disabled:cursor-not-allowed disabled:opacity-40"><Play size={15} fill="currentColor" /> {isRunning ? 'Exploring…' : 'Find the path'}</button><button onClick={reset} className="inline-flex items-center gap-2 rounded-md border border-[#394139] px-3 py-2.5 text-sm font-semibold text-[#c2c9bc] hover:bg-[#252f26]"><RotateCcw size={15} /> Reset</button></div>
        </section>

        <section className="overflow-hidden rounded-2xl border border-[#354137] bg-[#1b211c] shadow-xl shadow-black/10">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#2c342d] px-5 py-4"><div><h2 className="font-bold text-white">Explore the graph</h2><p className="mt-1 text-xs text-[#899688]">{hoveredNode ? `Node ${hoveredNode}: click to make it your destination` : visited.length ? `${visited.length} place${visited.length === 1 ? '' : 's'} explored` : 'Click a node or press find the path to begin'}</p></div></div>
          <div className="diagram-grid overflow-x-auto bg-[#e4e8dc] p-3 sm:p-6"><svg key={runNumber} viewBox="0 0 820 500" className="mx-auto min-w-[700px]" role="img" aria-label={`${algorithm.name} graph visualization from ${start} to ${goal}`}>
            {EDGES.map(([from, to, weight]) => { const edgeKey = [from, to].sort().join('-'); const a = nodeById[from]; const b = nodeById[to]; const labelX = (a.x + b.x) / 2 + (edgeKey === 'F-K' ? 24 : 0); const labelY = (a.y + b.y) / 2 + (edgeKey === 'F-K' ? 24 : 0); return <g key={edgeKey}><line x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke={pathEdges.has(edgeKey) ? '#6f9d42' : '#85927e'} strokeWidth={pathEdges.has(edgeKey) ? 7 : 3} strokeLinecap="round" /><rect x={labelX - 13} y={labelY - 11} width="26" height="22" rx="8" fill="#f4f6ed" /><text x={labelX} y={labelY + 4} textAnchor="middle" fontSize="12" fontWeight="700" fill="#30412e">{weight}</text></g>; })}
            {NODES.map(node => { const isStart = node.id === start; const isGoal = node.id === goal; const isVisited = visitedSet.has(node.id); const isHovered = node.id === hoveredNode; return <g key={node.id} className="cursor-pointer" onClick={() => selectGraphDestination(node.id)} onMouseEnter={() => setHoveredNode(node.id)} onMouseLeave={() => setHoveredNode(null)}><title>{isStart ? 'Starting node' : isGoal ? 'Goal node — click another node to change it' : `Node ${node.id} — click to make it the goal`}</title><circle cx={node.x} cy={node.y} r={isHovered ? 34 : 28} fill={isStart ? '#d1f36a' : isGoal ? '#f0a673' : isVisited ? '#a6d58e' : '#f6f8ef'} stroke={isHovered ? '#243b24' : isVisited || isStart || isGoal ? '#38522f' : '#788674'} strokeWidth={isHovered ? 5 : 3} /><text x={node.x} y={node.y + 6} textAnchor="middle" fontSize="18" fontWeight="800" fill="#1c281c">{node.id}</text>{isStart && <text x={node.x} y={node.y - 39} textAnchor="middle" fontSize="11" fontWeight="700" fill="#38522f">START</text>}{isGoal && <text x={node.x} y={node.y - 39} textAnchor="middle" fontSize="11" fontWeight="700" fill="#864a29">GOAL</text>}</g>; })}
          </svg></div>
        </section>
      </div>
    </main>
  </div>;
}
