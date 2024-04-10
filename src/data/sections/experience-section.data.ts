import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { linkedin, website } from '../helpers/links';
import {
  wordPress,
  jquery,
  php,
  angular,
  pug,
  redux,
  html,
  css,
  javaScript,
  aws,
  styledComponents,
  docker,
  turborepo,
  serverless,
  shopify,
  nodeJs,
  nextJs,
  apolloGraphql,
  pnpm,
  react,
  tailwindCss,
  typescript,
  sass,
  phpmyadmin,
} from '../helpers/skills';

const experienceSectionData = {
  config: {
    title: 'Work experience',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'Full stack web developer',
      company: 'Velasca 👞, Milan/half-remote',
      image: import('@/assets/logos/velasca-logo.jpeg'),
      dates: [new Date('2021-10'), null],
      description: `
        Development and maintenance of Velasca’s e-commerce based on Shopify, building landing pages from the ground up, internal APIs, internal tools and Dev Ops optimization. 
      `,
      tagsList: {
        title: 'Technologies',
        tags: [
          react(),
          typescript(),
          apolloGraphql(),
          pnpm(),
          nodeJs(),
          shopify(),
          docker(),
          turborepo(),
          serverless(),
          styledComponents(),
          aws(),
        ],
      },
      links: [
        website({ url: 'https://it.velasca.com/' }),
        linkedin({ url: 'https://www.linkedin.com/company/velasca/' }),
      ],
    },
    {
      role: 'Front-end developer',
      company: 'Vigilate, Brescia',
      image: import('@/assets/logos/vigilate-logo.jpg'),
      dates: [new Date('2021-09'), new Date('2021-10')],
      description: `Web app development used for managing video surveillance and traffic on the road.`,
      tagsList: {
        title: 'Technologies',
        tags: [react()],
      },
      links: [website({ url: 'https://www.vigilatevision.com/' })],
    },
    {
      role: 'Front-end developer',
      company: 'Spartan tech, Milano/full-remote',
      image: import('@/assets/logos/spartan-tech-logo.jpg'),
      dates: [new Date('2020-04'), new Date('2021-08')],
      description: `
        Development of SaaS front-end web applications based on blockchain technology, responsive UX/UI.
        Creating email templates for marketing campaigns with MJML templating language.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [react(), typescript(), tailwindCss(), nextJs(), styledComponents()],
      },
      links: [
        website({ url: 'https://www.spartantech.it/' }),
        linkedin({ url: 'https://www.linkedin.com/company/spartantech/' }),
      ],
    },
    {
      role: 'Full stack developer',
      company: 'SI2001, Milan',
      image: import('@/assets/logos/si-2001.jpg'),
      dates: [new Date('2019-04'), new Date('2020-04')],
      description: `
        - <b>Consultant at Maire Tecnimont</b>, front-end web development of an internal managerial web app written in angular Angular, UX/UI redesign.
        - <b>Consultant at Eni</b>, development of two web apps, one open publicly and one designed for Eni’s intranet, to report errors and problems with Eni’s gas infrastructure.
          Employed technologies: React, Redux, immer.js, REST.
        - <b>Internship</b>, training HTML, CSS, ES6, Node, React, Angular.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [react(), redux(), angular(), nodeJs(), html(), css(), javaScript()],
      },
      links: [website({ url: 'https://www.si2001.it/' }), linkedin({ url: 'https://it.linkedin.com/company/si2001' })],
    },
    {
      role: 'Front-end developer',
      company: 'Playground, Milan',
      image: import('@/assets/logos/playground-logo.jpg'),
      dates: [new Date('2018-11'), new Date('2019-02')],
      description: `Front-end development of landing pages to be integrated inside Adobe Experience Manager.`,
      tagsList: {
        title: 'Technologies',
        tags: [html(), css(), javaScript(), sass(), pug()],
      },
      links: [
        website({ url: 'https://www.playground.it/' }),
        linkedin({ url: 'https://www.linkedin.com/company/playground-digital-agency' }),
      ],
    },
    {
      role: 'Full-stack developer',
      company: 'Alkemy Lab, Milan',
      image: import('@/assets/logos/alkemy-logo.jpg'),
      dates: [new Date('2018-03'), new Date('2018-07')],
      description: `Development of Wordpress theme to be used in a hypothetical website designed to book rooms and propose local activities to their guests.`,
      tagsList: {
        title: 'Technologies',
        tags: [wordPress(), html(), css(), jquery(), php(), phpmyadmin()],
      },
      links: [
        website({ url: 'https://www.alkemy.com/' }),
        linkedin({ url: 'https://www.linkedin.com/company/alkemy-enabling-evolution/' }),
      ],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
