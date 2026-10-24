export default {
  name: 'Counting Sort',
  slug: 'counting-sort',
  complexity: {
    best: { notation: 'O(n + k)', growth: 'linear' },
    average: { notation: 'O(n + k)', growth: 'linear' },
    worst: { notation: 'O(n + k)', growth: 'linear' },
    space: { notation: 'O(n + k)', growth: 'linear' },
    note: 'k is the range of input values. The graph uses linear growth with k proportional to n.',
  },
  description: 'Counting Sort is a fast sorting algorithm for whole numbers in a small range. It counts how many times each value appears, then rebuilds the list in order using those counts.',
  content: `
Counting Sort

Counting Sort does not compare items to each other. Instead, it counts them.

Imagine you have a list of numbers and you know the biggest number. You make a row of boxes, one for each possible value from 0 up to that biggest number. Then you walk through the list and put a tally in the matching box for each number.

When you are done, you read the boxes from left to right and write out each number as many times as its tally says. The list comes out sorted.

How it works

Find the largest value in the list
Make a count array of zeros, one slot for each value from 0 to the largest
Walk through the list and add one to the count for each value
Walk through the count array from left to right
For each value, write it out as many times as its count
The result is sorted

Example with 4, 2, 2, 8, 3, 3, 1

Count array for values 0 to 8
After counting, slot 1 has 1, slot 2 has 2, slot 3 has 2, slot 4 has 1, slot 8 has 1
Read the slots in order and write out each value its count times
Result is 1, 2, 2, 3, 3, 4, 8

When to use it

Counting Sort is very fast when the numbers are whole and the range is small, like ages, scores, or grades. It runs in linear time, which beats comparison sorts like Quick Sort. But it uses extra memory for the count array, so it is a poor fit when the range is huge or when the values are not whole numbers. For those cases, stick with Quick Sort or Merge Sort.
`,
  instagramEmbedUrl: 'https://www.instagram.com/reel/DehacbHIM7Y/?psln=MWQ1ZGUxMzBkMA==&srtk=MWQ1ZGUxMzBkMA==',
};
