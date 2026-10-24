export default {
  name: 'BOGO Sort',
  slug: 'bogo-sort',
  complexity: {
    best: { notation: 'O(n)', growth: 'linear' },
    average: { notation: 'O(n · n!)', growth: 'n-factorial' },
    worst: { notation: 'Unbounded', growth: 'n-factorial' },
    space: { notation: 'O(1)', growth: 'constant' },
    note: 'The worst case has no finite upper bound. Its plotted curve uses O(n · n!) as a finite comparison proxy.',
  },
  description: 'BOGO Sort, short for bogus sort, is a joke sorting algorithm that shuffles the list randomly over and over until it happens to be sorted. It is incredibly slow and only used for fun or to show what not to do.',
  content:  `
BOGO Sort

BOGO Sort is a joke algorithm. It does not sort in a smart way. It just shuffles the list randomly and checks if it is sorted. If not, it shuffles again. And again. Until by pure luck the list comes out in order.

How it works

Check if the list is sorted
If yes, stop
If no, shuffle the whole list randomly
Repeat forever until it is sorted

Example with 3, 1, 2

Is it sorted? No
Shuffle, maybe 2, 3, 1, not sorted
Shuffle, maybe 1, 2, 3, sorted, done

Or it could take a thousand shuffles. It all depends on luck.

When to use it

Never, really. BOGO Sort is not used for real work because it can take an absurd amount of time. On average it needs n factorial tries to sort n items, which grows faster than almost anything. It is only used as a joke, in coding challenges, or to teach why smart algorithms matter.
`,
  instagramEmbedUrl: 'https://www.instagram.com/reel/DeKCU7OIeOx/?srtk=MWQ1ZGUxMzBkMA==',
};
