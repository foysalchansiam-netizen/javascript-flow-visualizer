export default {
  name: 'Bitonic Sort',
  slug: 'bitonic-sort',
  complexity: {
    best: { notation: 'O(n log² n)', growth: 'n-log-squared' },
    average: { notation: 'O(n log² n)', growth: 'n-log-squared' },
    worst: { notation: 'O(n log² n)', growth: 'n-log-squared' },
    space: { notation: 'O(n)', growth: 'linear' },
  },
  description: 'Bitonic Sort is a sorting algorithm that builds bitonic sequences, which first go up and then go down, and merges them together until the whole list is sorted. It is designed to be fast on parallel hardware.',
  content:  `
A bitonic sequence first goes up then goes down, like 1, 3, 5, 4, 2. A list that only goes up, or only goes down, also counts.

First, build bitonic sequences. Split the list into pairs and sort each pair, alternating direction. One pair goes small to big, the next goes big to small, and so on. Then flip every descending pair. Now the whole list goes up then down.

Second, merge them. To merge two bitonic sequences, compare items a fixed distance apart, one from each half, and swap if they are wrong. Halve the distance and repeat until the gap reaches zero. Then double the size of the sorted runs and merge again, until the whole list is sorted.

Example with 3, 1, 4, 2

Sort pairs with alternating directions
3 and 1 become 1, 3 going up
4 and 2 become 4, 2 going down, flip to 2, 4
Now we have 1, 3, 2, 4, a bitonic sequence

Merge the two halves
Compare 1 and 2, fine
Compare 3 and 4, fine
Now we have 1, 2, 3, 4, sorted

When to use it

Bitonic Sort shines when many processors work at the same time, because its comparisons can all run in parallel. It is used in hardware and on GPUs. On a single processor it does more work than simpler algorithms like Quick Sort, so it is not the best pick for everyday sorting. It is a great way to learn about parallel algorithms.
`,
  instagramEmbedUrl: 'https://www.instagram.com/reel/DeW7mRso8nV/?obrf=MWQ1ZGUxMzBkMA==&srtk=MWQ1ZGUxMzBkMA==',
};
