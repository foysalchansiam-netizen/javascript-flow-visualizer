export default {
  name: 'Quick Sort',
  slug: 'quick-sort',
  complexity: {
    best: { notation: 'O(n log n)', growth: 'linearithmic' },
    average: { notation: 'O(n log n)', growth: 'linearithmic' },
    worst: { notation: 'O(n²)', growth: 'quadratic' },
    space: { notation: 'O(log n) average; O(n) worst', growth: 'logarithmic' },
    note: 'Recursive call-stack space is O(log n) on average and O(n) in the worst case.',
  },
  description: 'Quick Sort picks a pivot item, puts smaller items on one side and bigger items on the other, then repeats on each side until the whole list is sorted.',
  content: `
Quick Sort

Quick Sort picks one item called the pivot. It moves everything smaller than the pivot to its left and everything bigger to its right. The pivot is now in its final spot. Then it repeats the same trick on the left and right parts until everything is sorted.

How it works

Pick a pivot from the list
Move smaller items to the left and bigger items to the right
The pivot is now in its final place
Repeat on the left part and the right part
Stop when each part has one or zero items

Example with 4, 2, 7, 1, 3

Pick 4 as the pivot
Smaller items go left, bigger go right, now 2, 1, 3, 4, 7
Repeat on 2, 1, 3 and on 7
Result is 1, 2, 3, 4, 7

When to use it

Quick Sort is one of the fastest sorts in practice and is used everywhere. It sorts in place and needs little memory. The catch is that a bad pivot can slow it down to O(n squared), though good pivot choices make that rare. It is not stable, but for speed on large lists it is hard to beat.
`,
  instagramEmbedUrl: 'https://www.instagram.com/reel/DeIqt-dIqdw/?xtok=MWQ1ZGUxMzBkMA==&srtk=MWQ1ZGUxMzBkMA==',
};
