export default {
  name: 'Heap Sort',
  slug: 'heap-sort',
  complexity: {
    best: { notation: 'O(n log n)', growth: 'linearithmic' },
    average: { notation: 'O(n log n)', growth: 'linearithmic' },
    worst: { notation: 'O(n log n)', growth: 'linearithmic' },
    space: { notation: 'O(1)', growth: 'constant' },
  },
  description: 'Heap Sort builds a special tree-like structure called a heap, then repeatedly pulls out the largest item and places it at the end of the list until everything is sorted.',
  content: `
Heap Sort

Heap Sort uses a heap, a tree where every parent is bigger than its children. The biggest item always sits at the top.

First, build the heap from the list so the heap rule holds. Then swap the top item with the last item, so the biggest goes to its final spot. Shrink the heap by one and fix the rule again. Repeat until the heap is empty. The list is sorted.

How it works

Build a max heap from the list
Swap the top item with the last item
Shrink the heap by one
Restore the heap rule by sifting the new top down
Repeat until the heap is empty

Example with 4, 10, 3, 5, 1

Build the heap, 10 at the root
Swap 10 with the last item, 10 is now in place
Shrink and sift the new top down
Swap the new biggest with the next last item
Repeat, result is 1, 3, 4, 5, 10

When to use it

Heap Sort is a solid all-rounder. It sorts in place, needs no extra memory, and always runs in O(n log n), even in the worst case. The catch is that it is not stable, and Quick Sort is often faster on real data. It is a great choice when you want guaranteed speed and low memory, and the heap idea also powers priority queues.
`,
  instagramEmbedUrl: 'https://www.instagram.com/reel/DeZnd-SIegd/?exln=MWQ1ZGUxMzBkMA==&srtk=MWQ1ZGUxMzBkMA==',
};
