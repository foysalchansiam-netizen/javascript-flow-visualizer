const PATHFINDING_ALGORITHMS = [
  {
    slug: 'dijkstra',
    name: "Dijkstra's Algorithm",
    category: 'Pathfinding algorithm',
    visualizer: 'pathfinding',
    description: 'Dijkstra’s algorithm finds the cheapest route through a weighted graph by always exploring the closest unfinished node next.',
    complexity: {
      best: { notation: 'O((V + E) log V)' },
      average: { notation: 'O((V + E) log V)' },
      worst: { notation: 'O((V + E) log V)' },
      space: { notation: 'O(V)' },
      note: 'With a priority queue and non-negative edge weights.',
    },
  },
  {
    slug: 'a-star',
    name: 'A* Search',
    category: 'Pathfinding algorithm',
    visualizer: 'pathfinding',
    description: 'A* finds a cheap route like Dijkstra’s algorithm, but uses a helpful guess about how far each node is from the goal to search more directly.',
    complexity: {
      best: { notation: 'O(E)' },
      average: { notation: 'Depends on heuristic' },
      worst: { notation: 'O((V + E) log V)' },
      space: { notation: 'O(V)' },
      note: 'A good admissible heuristic helps A* focus its search.',
    },
  },
];

export default PATHFINDING_ALGORITHMS;
