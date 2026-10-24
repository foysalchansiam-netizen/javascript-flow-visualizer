export default {
  name: 'Binary Search',
  slug: 'binary-search',
  complexity: {
    best: { notation: 'O(1)', growth: 'constant' },
    average: { notation: 'O(log n)', growth: 'logarithmic' },
    worst: { notation: 'O(log n)', growth: 'logarithmic' },
    space: { notation: 'O(1) iterative', growth: 'constant' },
    note: 'An iterative implementation uses O(1) auxiliary space; a recursive implementation uses O(log n) stack space.',
  },
  category: 'Searching algorithm',
    description: 'Binary Search is a fast searching algorithm that finds an item in a sorted list by repeatedly checking the middle item and eliminating half of the remaining items.',
  content: `
Important: The list must be sorted before using Binary Search.

How it works

Start with a sorted list
Choose the middle item
Compare the middle item with the item you want to find
If they are equal, the item is found
If the target is smaller, search the left half
If the target is bigger, search the right half
Repeat until the item is found or no items remain

Example with 10, 20, 30, 40, 50, 60, 70, 80, 90

Let's search for 70.

Step 1: Find the middle item
Middle item is 50
70 is bigger than 50, so ignore the left half
Remaining items: 60, 70, 80, 90

Step 2: Find the middle item of the remaining range
Middle item is 70
70 equals the target, so the item is found!

Result: 70 is found.

Why it is fast

Every time we check the middle item, we can eliminate about half of the remaining items. This makes Binary Search much faster than checking every item one by one when the list is large and sorted.

When to use it

Use Binary Search when searching for an item in a sorted list or array. It is especially useful when the list contains many items.

`
,
  instagramEmbedUrl: 'https://www.instagram.com/reel/DefPyOzo64u/?obrf=MWQ1ZGUxMzBkMA==&srtk=MWQ1ZGUxMzBkMA==',
};
