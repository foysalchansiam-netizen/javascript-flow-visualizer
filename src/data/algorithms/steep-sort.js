export default {
  name: 'Steep Sort',
  slug: 'steep-sort',
  complexity: {
    best: { notation: 'O(n²)', growth: 'quadratic' },
    average: { notation: 'O(n²)', growth: 'quadratic' },
    worst: { notation: 'O(n²)', growth: 'quadratic' },
    space: { notation: 'O(1)', growth: 'constant' },
    note: 'Steep Sort is not a widely standardized algorithm; these estimates are placeholders. Replace them with verified values for your implementation.',
  },
  description: 'Sleep Sort is a joke algorithm that creates a separate background timer for every number and waits for each number to "wake up" after sleeping for its own value in seconds.',
  content: `
Sleep Sort

Sleep Sort is a joke algorithm that relies on time instead of comparing numbers directly. It tells every item in the list to go to sleep for a duration equal to its value. The numbers that wake up first are outputted first!

How it works

Start a timer for every number in the input list
Set each timer's sleep duration proportional to its value
When a timer finishes, its number wakes up and prints itself
Since smaller numbers wake up sooner, the output arrives in sorted order!

Example with 3, 1, 4, 2, 5

Start 5 timers simultaneously for each value
1 wakes up after 1 second -> print 1
2 wakes up after 2 seconds -> print 2
3 wakes up after 3 seconds -> print 3
4 wakes up after 4 seconds -> print 4
5 wakes up after 5 seconds -> print 5
Result is 1, 2, 3, 4, 5

When to use it

Never in production software. It depends heavily on computer timing accuracy, fails with negative numbers, and takes forever if you have a number like 1,000,000 (which would take over 11 days to sleep!). It is a humorous meme algorithm created to show how hardware timers can perform sorting in parallel.
`,
  instagramEmbedUrl: 'https://www.instagram.com/reel/DeNKvTKIuCr/?rpxt=MWQ1ZGUxMzBkMA==&srtk=MWQ1ZGUxMzBkMA==',
};
