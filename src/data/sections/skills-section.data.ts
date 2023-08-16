import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  visualStudioCode,
  apolloGraphql,
  astro,
  pnpm,
  git,
  insomnia,
  docker,
  nextJs,
  react,
  tailwindCss,
  typescript,
  shopify,
  macOS,
  linux,
} from '../helpers/skills';

const skillsSectionData = {
  config: {
    title: 'Skills',
    slug: 'skills',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },
  skillSets: [
    {
      title: "What I know and what I'd love to excell at",
      skills: [
        react({ level: 4 }),
        astro({ level: 1 }),
        typescript({ level: 3 }),
        apolloGraphql({ level: 3 }),
        nextJs({ level: 3 }),
        shopify({ level: 4 }),
        tailwindCss({ level: 4 }),
        docker({ level: 4 }),
        pnpm({ level: 3 }),
      ],
    },
    {
      title: 'Tools I use',
      skills: [visualStudioCode(), macOS(), linux(), git(), insomnia()],
    },
    {
      title: 'I speak',
      skills: [
        { icon: 'circle-flags:it', name: 'Italian - native' },
        { icon: 'circle-flags:uk', name: 'English - B2' },
      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
