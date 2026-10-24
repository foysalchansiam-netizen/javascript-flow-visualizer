export default {
  name: 'Shell Sort',
  slug: 'shell-sort',
  complexity: {
    best: { notation: 'O(n log n)', growth: 'linearithmic' },
    average: { notation: 'O(n^1.5)', growth: 'n-to-1.5' },
    worst: { notation: 'O(n²)', growth: 'quadratic' },
    space: { notation: 'O(1)', growth: 'constant' },
    note: 'Time bounds depend on the chosen gap sequence.',
  },
 description: 'Shell Sort is an improved version of Insertion Sort that compares items far apart first, then closes the gap until the list is sorted.',
  content: `
Shell Sort

Shell Sort is like Insertion Sort with a head start. Instead of comparing only neighbors, it compares items that are far apart, then gradually shrinks the gap.

How it works

Pick a gap, like half the list length
Compare items that are that gap apart and swap if needed
Shrink the gap and repeat
When the gap is 1, it becomes plain Insertion Sort, but the list is nearly sorted by then

Example with 5, 2, 8, 1, 9

Gap 2, compare 5 and 8, 2 and 1, swap to 5, 1, 8, 2, 9
Gap 1, do Insertion Sort, result is 1, 2, 5, 8, 9

When to use it

Shell Sort is fast for medium lists and needs no extra memory. It beats plain Insertion Sort on messy data. The catch is that its speed depends on the gap choices, and Quick Sort is usually faster for large lists.
`,
  instagramEmbedUrl: 'https://www.instagram.com/reel/DecyIBCI0O7/?dlrf=MWQ1ZGUxMzBkMA==&srtk=MWQ1ZGUxMzBkMA==',
};
