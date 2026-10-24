export default {
  name: 'Bead Sort',
  slug: 'bead-sort',
  complexity: {
    best: { notation: 'O(n + S)', growth: 'linear' },
    average: { notation: 'O(n + S)', growth: 'linear' },
    worst: { notation: 'O(n + S)', growth: 'linear' },
    space: { notation: 'O(nS)', growth: 'quadratic' },
    note: 'S is the maximum input value. Time assumes the parallel gravity model; the graph treats S as proportional to n.',
  },
  description: 'Bead Sort, also called Gravity Sort, is a natural sorting algorithm that represents positive integers as beads on an abacus and lets gravity drop them into sorted order.',
  content: `
Bead Sort

Bead Sort is inspired by nature. Imagine an abacus with vertical rods. Each number in your list becomes a row of beads. A 4 becomes four beads on the first four rods, a 2 becomes two beads, and so on.

Now let gravity work. Every bead falls down as far as it can. Beads pile up at the bottom. When the beads settle, the rows from top to bottom are now in sorted order.

Why it works

Bigger numbers have more beads, so they push down further and spread wider at the bottom. Smaller numbers have fewer beads and end up on top. The beads naturally arrange themselves from smallest to largest.

Example with 4, 2

Row one has four beads, row two has two beads
Let gravity pull the beads down
The top row now has two beads, the bottom row has four beads
Reading top to bottom gives 2, 4, sorted

When to use it

Bead Sort is mainly a learning tool and a fun idea. In software it is usually slower than normal sorting algorithms like Quick Sort, and it only works on positive whole numbers. It also needs a lot of memory because every bead takes up space. It shines in theory and in hardware, where beads can fall all at once, but for everyday programming on a normal computer it is not the practical choice.
`,
  instagramEmbedUrl: 'https://www.instagram.com/reel/Dero1oSI3vR/?xtok=MWQ1ZGUxMzBkMA==&srtk=MWQ1ZGUxMzBkMA==',
};
