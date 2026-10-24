export default {
  name: 'Pancake Sort',
  slug: 'pancake-sort',
  complexity: {
    best: { notation: 'O(n)', growth: 'linear' },
    average: { notation: 'O(n²)', growth: 'quadratic' },
    worst: { notation: 'O(n²)', growth: 'quadratic' },
    space: { notation: 'O(1)', growth: 'constant' },
  },
  description: 'Pancake Sort sorts a list using only one move, flipping a stack of items from the top, like flipping pancakes with a spatula.',
  content:  `
Pancake Sort

Pancake Sort works like flipping pancakes. The only move you can make is to slide a spatula under a pancake and flip everything above it, reversing that whole stack.

How it works

Find the biggest item in the unsorted part
Flip so the biggest item goes to the top
Flip again so it lands at the end of the unsorted part
Shrink the unsorted part by one and repeat until sorted

Example with 3, 1, 2

Biggest is 3, already at the top
Flip the whole stack, now 2, 1, 3, so 3 is in place
Biggest of the rest is 2, flip to bring it to the top, now 1, 2
Flip the first two, now 2, 1, then place 2, result is 1, 2, 3

When to use it

Pancake Sort is mostly a puzzle and a fun problem in computer science. It is useful for learning about flips and permutations. In real work it does more flips than needed, so normal sorts like Quick Sort are much better.
`,
  instagramEmbedUrl: 'https://www.instagram.com/reel/Dee2MAqInOb/?srtk=MWQ1ZGUxMzBkMA==',
};
