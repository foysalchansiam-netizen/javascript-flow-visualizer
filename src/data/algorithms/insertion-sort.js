export default {
  name: 'Insertion Sort',
  slug: 'insertion-sort',
  complexity: {
    best: { notation: 'O(n)', growth: 'linear' },
    average: { notation: 'O(n²)', growth: 'quadratic' },
    worst: { notation: 'O(n²)', growth: 'quadratic' },
    space: { notation: 'O(1)', growth: 'constant' },
  },
  description: 'Insertion Sort builds a sorted list one item at a time, taking each new item and sliding it into its correct place among the items already sorted.',
  content: `
Insertion Sort

Insertion Sort works like sorting a hand of cards. You pick up one card at a time and slide it into the right spot among the cards you already hold.

How it works

Start with the first item as a sorted list of one
Take the next item and compare it with the sorted items from right to left
Slide it left until it sits in the right place
Repeat for every item in the list

Example with 5, 2, 4, 1

Start with 5
Take 2, slide it before 5, now 2, 5
Take 4, slide it between 2 and 5, now 2, 4, 5
Take 1, slide it to the front, now 1, 2, 4, 5

When to use it

Insertion Sort is great for small lists or lists that are almost sorted, where it is very fast. It is simple, stable, and sorts in place. But on big random lists it slows down to O(n squared), so Quick Sort or Merge Sort are better there.
`,
  instagramEmbedUrl: 'https://www.instagram.com/reel/DePQntno29h/?psln=MWQ1ZGUxMzBkMA==&srtk=MWQ1ZGUxMzBkMA==',
};
