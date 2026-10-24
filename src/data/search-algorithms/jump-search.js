export default {
  name: 'Jump Search',
  slug: 'jump-search',
  complexity: {
    best: { notation: 'O(1)', growth: 'constant' },
    average: { notation: 'O(√n)', growth: 'square-root' },
    worst: { notation: 'O(√n)', growth: 'square-root' },
    space: { notation: 'O(1)', growth: 'constant' },
  },
  category: 'Searching algorithm',
 description: 'Jump Search is a searching algorithm that searches a sorted list by jumping ahead in fixed-size steps and then checking items one by one within the block where the target may exist.',
  content: `
How it works

Start with a sorted list
Choose a jump size, usually the square root of the list length
Jump forward by that many positions
Compare the current item with the target
If the current item is smaller than the target, keep jumping
If the current item is greater than or equal to the target, search the previous block
Check the items in that block one by one
Stop when the target is found or the target cannot exist in the remaining block

Example with 10, 20, 30, 40, 50, 60, 70, 80, 90

Let's search for 70.

Step 1: Choose a jump size of 3

Step 2: Jump to 30
30 is smaller than 70, so continue jumping

Step 3: Jump to 60
60 is smaller than 70, so continue jumping

Step 4: Jump to 90
90 is greater than 70, so search the previous block

Step 5: Check the items between 60 and 90 one by one
Check 70
The target is found!

Result: 70 is found.
`,
  instagramEmbedUrl: 'https://www.instagram.com/reel/Dez5iCiISmN/?exln=MWQ1ZGUxMzBkMA==&srtk=MWQ1ZGUxMzBkMA==',
};
