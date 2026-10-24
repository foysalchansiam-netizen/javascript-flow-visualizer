export default {
  name: 'Selection Sort',
  slug: 'selection-sort',
  complexity: {
    best: { notation: 'O(n²)', growth: 'quadratic' },
    average: { notation: 'O(n²)', growth: 'quadratic' },
    worst: { notation: 'O(n²)', growth: 'quadratic' },
    space: { notation: 'O(1)', growth: 'constant' },
  },
  description: 'Selection Sort finds the smallest item, puts it at the front, then repeats on the rest of the list until everything is sorted.',
  content: `
Selection Sort

Selection Sort keeps picking the smallest item left and placing it at the front, one spot at a time.

How it works

Find the smallest item in the unsorted part
Swap it with the first item in the unsorted part
Move the boundary one step right
Repeat until the whole list is sorted

Example with 4, 2, 7, 1

Smallest is 1, swap with 4, now 1, 2, 7, 4
Smallest of the rest is 2, already in place
Smallest of the rest is 4, swap with 7, now 1, 2, 4, 7

When to use it

Selection Sort is simple and always does the same number of swaps, which is handy when writing data is costly. But it is slow on big lists, running in O(n squared), and it is not stable. For large data, Quick Sort or Merge Sort are much better.
`,
  instagramEmbedUrl: 'https://www.instagram.com/reel/DeVlMO1otIE/?cplk=MWQ1ZGUxMzBkMA==&srtk=MWQ1ZGUxMzBkMA==',
};
