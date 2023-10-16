import type { FavoritesSection } from '@/types/sections/favorites-section.types';
import type { ReadonlyDeep } from 'type-fest';

const favoritesSectionData = {
  config: {
    title: 'My favourite',
    slug: 'favorites',
    icon: 'fa6-solid:star',
    visible: true,
  },
  books: {
    title: `Books I read`,
    data: [
      {
        image: import('@/assets/favorites/books/refactoring-ui.png'),
        title: 'Refactoring UI',
        author: 'Adam Wathan, Steve Schoger',
        url: 'https://www.refactoringui.com/',
      },
      {
        image: import('@/assets/favorites/books/typescript-50.jpg'),
        title: 'TypeScript in 50 Lessons',
        author: 'Stefan Baumgartner',
        url: 'https://typescript-book.com/',
      },
    ],
  },
  // people: {
  //   title: 'People I learn from',
  //   data: [
  //     {
  //       image: import('@/assets/favorites/people/person-1.jpg'),
  //       name: 'Kent C. Dodds',
  //       url: 'https://kentcdodds.com/',
  //     },
  //     {
  //       image: import('@/assets/favorites/people/person-2.jpeg'),
  //       name: 'Kent Beck',
  //       url: 'https://www.kentbeck.com/',
  //     },
  //     {
  //       image: import('@/assets/favorites/people/person-3.jpeg'),
  //       name: 'Eric Evans',
  //       url: 'https://www.domainlanguage.com/',
  //     },
  //     {
  //       image: import('@/assets/favorites/people/person-4.jpeg'),
  //       name: 'Martin Fowler',
  //       url: 'https://martinfowler.com/',
  //     },
  //     {
  //       image: import('@/assets/favorites/people/person-5.jpg'),
  //       name: 'Robert C. Martin',
  //       url: 'http://cleancoder.com/',
  //     },
  //     {
  //       image: import('@/assets/favorites/people/person-6.jpeg'),
  //       name: 'Adam Dymitruk',
  //       url: 'https://eventmodeling.org/',
  //     },
  //   ],
  // },
  videos: {
    title: 'Courses I followed',
    data: [
      {
        image: import('@/assets/favorites/videos/just-javascript.jpg'),
        title: 'Just JavaScript',
        url: 'https://justjavascript.com/',
      },
    ],
  },
  medias: {
    title: 'Media I follow',
    data: [
      {
        image: import('@/assets/favorites/media/emilkowalski.jpg'),
        title: '@emilkowalski_',
        type: 'Twitter profile',
        url: 'https://twitter.com/emilkowalski_',
      },
      {
        image: import('@/assets/favorites/media/fireship.jpeg'),
        title: 'Fireship.io',
        type: 'YouTube channel',
        url: 'https://www.youtube.com/@Fireship',
      },
      {
        image: import('@/assets/favorites/media/matt_pocock.jpg'),
        title: 'Matt Pocock',
        type: 'YouTube channel',
        url: 'https://www.youtube.com/@mattpocockuk',
      },
      {
        image: import('@/assets/favorites/media/net_ninja.jpg'),
        title: 'Net Ninja',
        type: 'YouTube channel',
        url: 'https://www.youtube.com/@NetNinja',
      },
      {
        image: import('@/assets/favorites/media/web_dev_simplified.jpg'),
        title: 'Web Dev Simplified',
        type: 'YouTube channel',
        url: 'https://www.youtube.com/@WebDevSimplified',
      },
      {
        image: import('@/assets/favorites/media/bytes.png'),
        title: 'Bytes',
        type: 'Newsletter',
        url: 'https://bytes.dev/',
      },
    ],
  },
} as const satisfies ReadonlyDeep<FavoritesSection>;

export default favoritesSectionData;
