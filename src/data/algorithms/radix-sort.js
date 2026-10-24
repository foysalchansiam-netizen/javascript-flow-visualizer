export default {
  name: 'Radix Sort',
  slug: 'radix-sort',
  complexity: {
    best: { notation: 'O(d(n + k))', growth: 'linear' },
    average: { notation: 'O(d(n + k))', growth: 'linear' },
    worst: { notation: 'O(d(n + k))', growth: 'linear' },
    space: { notation: 'O(n + k)', growth: 'linear' },
    note: 'd is the number of digits and k is the radix. The graph treats d and k as fixed.',
  },
  description: 'Radix Sort sorts numbers digit by digit, starting from the last digit and moving to the first, grouping items into buckets each time.',
  content: `
Radix Sort

Radix Sort does not compare numbers directly. It sorts them one digit at a time, starting from the rightmost digit and moving left.

How it works

Look at the last digit of each number
Group the numbers into buckets 0 to 9 based on that digit
Collect them back in order
Move one digit to the left and repeat
After the first digit, the list is sorted

Example with 170, 45, 75, 90

Sort by last digit, now 170, 90, 75, 45
Sort by middle digit, now 170, 45, 75, 90
Sort by first digit, now 45, 75, 90, 170

When to use it

Radix Sort is very fast for whole numbers, especially when there are many of them and the digits are few. It runs in linear time, beating comparison sorts like Quick Sort. The catch is that it only works on numbers or fixed-length strings, and it needs extra memory for the buckets. For mixed data, use Quick Sort or Merge Sort instead.
`,
  instagramEmbedUrl: 'https://www.instagram.com/reel/DepQU_lI-d3/?vrfl=MWQ1ZGUxMzBkMA==&srtk=MWQ1ZGUxMzBkMA==',
};
