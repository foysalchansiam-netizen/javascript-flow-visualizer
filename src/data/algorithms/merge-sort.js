export default {
  name: 'Merge Sort',
  slug: 'merge-sort',
  complexity: {
    best: { notation: 'O(n log n)', growth: 'linearithmic' },
    average: { notation: 'O(n log n)', growth: 'linearithmic' },
    worst: { notation: 'O(n log n)', growth: 'linearithmic' },
    space: { notation: 'O(n)', growth: 'linear' },
  },
  description:  'Merge Sort splits the list into small pieces, sorts each piece, then merges the pieces back together in order until the whole list is sorted.',
  content: `
Merge Sort

Merge Sort uses a simple idea. Split the list in half, sort each half, then merge the two sorted halves into one sorted list.

How it works

Split the list in half
Keep splitting until each piece has one item, which is already sorted
Merge pairs of pieces by comparing their front items and taking the smaller one
Keep merging until the whole list is back together, now sorted

Example with 4, 1, 3, 2

Split into 4, 1 and 3, 2
Split again into 4, 1, 3, 2
Merge 4 and 1 into 1, 4
Merge 3 and 2 into 2, 3
Merge 1, 4 and 2, 3 into 1, 2, 3, 4

When to use it

Merge Sort is reliable and always runs in O(n log n), even in the worst case. It is stable and great for large lists or linked lists. The catch is that it needs extra memory to merge, so it is not the best choice when memory is tight. For in-place sorting, Quick Sort or Heap Sort are better.
`,
  instagramEmbedUrl: 'https://www.instagram.com/reel/DeMsk8AIcLA/?psln=MWQ1ZGUxMzBkMA==&srtk=MWQ1ZGUxMzBkMA==',
};
