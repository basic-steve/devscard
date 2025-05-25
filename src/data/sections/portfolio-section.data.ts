import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { github, website } from '../helpers/links';
import { figma, turborepo, pnpm, react, java, maven, bash, astro, tailwindCss, contentful } from '../helpers/skills';

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
      name: 'TailTown',
      image: import('@/assets/portfolio/tailtown-logo.png'),
      dates: [new Date('2024-01'), null],
      details: [
        { label: 'Team size', value: '3 people' },
        { label: 'My role', value: ['Front-end developer', 'UX/UI designer'] },
      ],
      pdfDetails: [{ label: 'Github', value: 'https://github.com/TailTown' }],
      description: `<i>TailTown</i> is a cross-platform application that features a redesigned user experience for accessing content from an early 2000s forum-like website, aiming to resemble social media platforms like Instagram or Twitter rather than a legacy forum.
My role includes designing the UI from scratch, developing new views and components using modern frontend technologies. I focused on delivering a clean, responsive, and user-friendly interface, with particular attention to usability, accessibility, and performance, while adhering to the constraints of the original platform.`,
      tagsList: {
        title: 'Technologies',
        tags: [react(), turborepo(), tailwindCss(), pnpm(), figma()],
      },
      links: [github({ url: 'https://github.com/TailTown' })],
    },
    {
      name: 'PowsUp!',
      image: import('@/assets/portfolio/powsup-logo.jpg'),
      dates: [new Date('2023-07'), null],
      details: [
        { label: 'Team size', value: '10 people' },
        { label: 'My role', value: ['Full-stack web developer', 'Dev Ops'] },
      ],
      pdfDetails: [
        { label: 'Demo', value: 'https://powsup.net/', url: 'https://powsup.net/' },
        { label: 'Organization', value: 'https://github.com/PowsUp', url: 'https://github.com/PowsUp' },
      ],
      description: `<i>PowsUp!</i> is an Italian group for the organization and creation of furry events in Italy.
      I'm part of the main staff and I'm also the IT team leader. With the other three developers, we manage the website and general IT infrastructure.
      We developed a blog to post future events, the main employed technologies are Astro and Contentful.
      Other future projects will be:
      <ul><li>A custom-made bar web app to handle attendees beverage orders, a cashier takes orders on their client and a barman receives them on their client.</li><li>Custom attendee self-area to manage personal credentials at events.</li><li>Ticket system powered by Pretix.</li></ul>
      `,
      tagsList: {
        title: 'Technologies',
        tags: [astro(), contentful(), tailwindCss(), pnpm()],
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
          value: 'https://github.com/basic-steve/update-cloudflare-record',
          url: 'https://github.com/basic-steve/update-cloudflare-record',
        },
      ],
      description: `A simple and ugly script to update a single "cloudflare DNS A" record and get notified when it happens via email.
        Use case: home server, raspberry pi open on network etc`,
      tagsList: {
        title: 'Technologies',
        tags: [bash()],
      },
      links: [github({ url: 'https://github.com/basic-steve/update-cloudflare-record' })],
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
          value: 'https://github.com/basic-steve/Dyslexo',
          url: 'https://github.com/basic-steve/Dyslexo',
        },
      ],
      description:
        'Dyslexo - A simple Text To Speech launcher for dyslexic people, is an open source screen reader designed for dyslexic users. This project is born from a personal need: enjoy text to speech through simple and not bloated software meant to be used day-to-day. Dyslexo features seamless multilingual support and automatic language recognition. Its features include adjustable playback, pause functionalities, and the option to save generated audio as files for later playback.',
      tagsList: {
        title: 'Technologies',
        tags: [java(), maven()],
      },
      links: [
        website({ url: 'https://www.imparando.net/sito/tesine/dyslexo.htm' }),
        github({ url: 'https://github.com/basic-steve/Dyslexo' }),
      ],
    },
  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;
