import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { github, website } from '../helpers/links';
import { eslint, pnpm, prettier, java, maven, bash, astro, tailwindCss, contentful } from '../helpers/skills';

const portfolioSectionData = {
  config: {
    title: 'Projects',
    slug: 'projects',
    icon: 'fa6-solid:rocket',
    visible: true,
    screenshots: {
      title: 'Screenshots',
      icon: 'fa6-solid:images',
    },
  },
  projects: [
    {
      name: 'PowsUp!',
      image: import('@/assets/portfolio/powsup-logo.jpg'),
      dates: [new Date('2023-07'), null],
      details: [
        { label: 'Team size', value: '10 people' },
        { label: 'My role', value: ['Full stack web developer', 'Dev ops'] },
        { label: 'Category', value: ['Web app', 'Open source'] },
      ],
      pdfDetails: [
        { label: 'Demo', value: 'https://powsup.net/', url: 'https://powsup.net/' },
        { label: 'Organization', value: 'https://github.com/PowsUp', url: 'https://github.com/PowsUp' },
      ],
      description: `<i>PowsUp!</i> is an Italian group for the organization and creation of Furry events in Lazio and Central Italy.
        My role in the group is to manage the website and the general IT infrastructure in collaboration with other three developers.
        We are actively developing a blog to post future events, it's still a work in progress but the main employed tecnologies are Astro and Contentful.`,
      tagsList: {
        title: 'Technologies',
        tags: [astro(), contentful(), tailwindCss(), pnpm(), eslint(), prettier()],
      },
      links: [website({ url: 'https://powsup.net/' }), github({ url: 'https://github.com/PowsUp' })],
    },
    {
      name: 'Update cloudflare record',
      image: import('@/assets/portfolio/bash-logo.jpg'),
      dates: [new Date('2018-11'), null],
      details: [
        { label: 'Team size', value: '1 person' },
        { label: 'Category', value: ['Shell scripts'] },
      ],
      pdfDetails: [
        {
          label: 'Repository',
          value: 'https://github.com/CatMonster/update-cloudflare-record',
          url: 'https://github.com/CatMonster/update-cloudflare-record',
        },
      ],
      description:
        'A simple and ugly script to update a single "cloudflare A" record and get notified when it happens via email Use case: home server, raspberry pi open on network...',
      tagsList: {
        title: 'Technologies',
        tags: [bash()],
      },
      links: [github({ url: 'https://github.com/CatMonster/update-cloudflare-record' })],
    },
    {
      name: 'Dyslexo',
      image: import('@/assets/portfolio/dyslexo-logo.jpg'),
      dates: [new Date('2016-01'), new Date('2017-06')],
      details: [
        { label: 'Team size', value: '1 person' },
        { label: 'My role', value: ['Developer', 'Designer'] },
        { label: 'Category', value: ['Desktop application', 'Open source'] },
      ],
      pdfDetails: [
        {
          label: 'Repository',
          value: 'https://github.com/CatMonster/Dyslexo',
          url: 'https://github.com/CatMonster/Dyslexo',
        },
      ],
      description:
        'Dyslexo - A simple Text To Speech launcher for dyslexic people, is an open source screen-reader designed for dyslexic users. This project is born from a personal necessity: enjoy text to speech through simple and not bloated software meant to be used day-to-day. Dyslexo features seamless multilingual support and automatic language recognition. Its features include adjustable playback, pause functionalities, and the option to save generated audio as files for later playback.',
      tagsList: {
        title: 'Technologies',
        tags: [java(), maven()],
      },
      links: [
        website({ url: 'https://www.imparando.net/sito/tesine/dyslexo.htm' }),
        github({ url: 'https://github.com/CatMonster/Dyslexo' }),
      ],
    },
  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;
