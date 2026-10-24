export default {
  name: 'Linear Search',
  slug: 'linear-search',
  complexity: {
    best: { notation: 'O(1)', growth: 'constant' },
    average: { notation: 'O(n)', growth: 'linear' },
    worst: { notation: 'O(n)', growth: 'linear' },
    space: { notation: 'O(1)', growth: 'constant' },
  },
  category: 'Searching algorithm',
  description: 'Linear Search is a searching algorithm that finds a target item by checking each element in a list one by one from the beginning until the item is found or the list ends.',
  content:  `
How it works

Start at the first item in the list
Compare the current item with the target
If they match, the item is found
If they do not match, move to the next item
Repeat until the target is found or the list ends

Example with 30, 10, 50, 20, 40

Let's search for 20.

Step 1: Check 30
30 is not 20, so move to the next item

Step 2: Check 10
10 is not 20, so move to the next item

Step 3: Check 50
50 is not 20, so move to the next item

Step 4: Check 20
20 matches the target, so stop searching

Result: 20 is found at the fourth position.
`,
  instagramEmbedUrl: 'https://www.instagram.com/reel/DewybChoury/?cplk=MWQ1ZGUxMzBkMA==&srtk=MWQ1ZGUxMzBkMA==',
};
