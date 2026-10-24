export default {
  name: 'Stalin Sort',
  slug: 'stalin-sort',
  complexity: {
    best: { notation: 'O(n)', growth: 'linear' },
    average: { notation: 'O(n)', growth: 'linear' },
    worst: { notation: 'O(n)', growth: 'linear' },
    space: { notation: 'O(n)', growth: 'linear' },
    note: 'Space assumes the algorithm builds a separate output list.',
  },
  description: 'Stalin Sort is a joke algorithm that walks through the list once and removes any item that is smaller than the one before it, leaving a sorted list behind.',
  content: `
Stalin Sort

Stalin Sort is a joke algorithm. It does not move items around. It just removes any item that is out of order. Whatever survives is sorted.

How it works

Start with the first item as the current maximum
Walk through the list
If an item is bigger than or equal to the current maximum, keep it and update the maximum
If it is smaller, remove it
What is left is sorted

Example with 3, 1, 4, 2, 5

Keep 3
1 is smaller than 3, remove it
4 is bigger than 3, keep it
2 is smaller than 4, remove it
5 is bigger than 4, keep it
Result is 3, 4, 5

When to use it

Never for real work, because it loses data. It is a joke that pokes fun at strict leaders who remove anything that does not fit. The real lesson is that a sort should keep every item, only reorder them.
`,
  instagramEmbedUrl: 'https://www.instagram.com/reel/DeKCiWRIVeX/?srtk=MWQ1ZGUxMzBkMA==',
};
