export default {
  name: 'Miracle Sort',
  slug: 'miracle-sort',
  complexity: {
    best: { notation: 'O(n)', growth: 'linear' },
    average: { notation: 'O(n!)', growth: 'factorial' },
    worst: { notation: 'Unbounded', growth: 'factorial' },
    space: { notation: 'O(1)', growth: 'constant' },
    note: 'The worst case has no finite upper bound. Its plotted curve uses O(n!) as a finite comparison proxy.',
  },
  description: 'Miracle Sort is a joke algorithm that checks if the list is sorted and, if not, simply waits and hopes a miracle happens to sort it.',
  content:  `
Miracle Sort

Miracle Sort is a joke algorithm. It does not sort anything. It just checks if the list is sorted. If not, it waits and checks again, hoping a miracle will fix it.

How it works

Check if the list is sorted
If yes, stop
If no, wait a moment and check again
Repeat forever until a miracle happens

Example with 3, 1, 2

Is it sorted? No
Wait, check again, still 3, 1, 2
Wait, check again, still not sorted
It will never be sorted unless something outside changes it

When to use it

Never. Miracle Sort does not actually sort, so it is useless for real work. It is only a joke in coding challenges and a funny way to show why real algorithms matter. It is even worse than BOGO Sort, because at least BOGO Sort shuffles the list.
`,
  instagramEmbedUrl: 'https://www.instagram.com/reel/DenfySKIa_P/?xtok=MWQ1ZGUxMzBkMA==&srtk=MWQ1ZGUxMzBkMA==',
};
