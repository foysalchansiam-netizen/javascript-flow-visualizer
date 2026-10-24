export default {
  name: 'Bubble Sort',
  slug: 'bubble-sort',
  complexity: {
    best: { notation: 'O(n)', growth: 'linear' },
    average: { notation: 'O(n²)', growth: 'quadratic' },
    worst: { notation: 'O(n²)', growth: 'quadratic' },
    space: { notation: 'O(1)', growth: 'constant' },
  },
  description:
    'Bubble Sort is a simple sorting algorithm that compares adjacent items and swaps them if they are in the wrong order, pushing larger elements to the end of the list like bubbles rising in soda.',
  content: `
Bubble Sort

Imagine a line of toys you want to order from smallest to biggest.

Compare two toys next to each other. If the left one is bigger, swap them. Then move one step right and do it again.

You keep walking down the line, swapping any two toys in the wrong order. The biggest toy keeps getting pushed to the end, like a bubble floating up in a glass of soda.

After one full walk, the biggest toy is in the last spot, so you skip it next time. Repeat until nothing needs swapping.

A tiny example with 3, 1, 2

Compare 3 and 1, swap, now 1, 3, 2
Compare 3 and 2, swap, now 1, 2, 3
Check again, nothing to swap, done.

How it works

Start at the beginning of the list
Compare the first two items
If the left one is bigger, swap them
Move one position right and repeat
After reaching the end, the largest item is in its final place
Repeat for the remaining items, ignoring the sorted ones at the end
Stop when a full pass happens with no swaps

When to use it

Almost never for real work, since Quick Sort or Merge Sort are much faster. But it is a wonderful first algorithm to learn because it teaches comparing, swapping, and looping, which show up everywhere in computer science.
`,
  instagramEmbedUrl: 'https://www.instagram.com/reel/DeI4KS_IzPq/',
};
