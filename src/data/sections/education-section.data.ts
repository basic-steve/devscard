import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';

const educationSectionData = {
  config: {
    title: 'Education',
    slug: 'education',
    icon: 'fa6-solid:graduation-cap',
    visible: true,
  },
  diplomas: [
    {
      title: 'Master',
      institution: 'Digital Universitas Superpartes',
      image: import('@/assets/logos/digital-universitas-logo.jpg'),
      dates: [new Date('2017.07'), new Date('2018.02')],
      description: 'Digital transformation and management master.',
      links: [website({ url: 'https://digitaluniversitas.com/' })],
    },
    {
      title: '',
      institution: 'I.I.S. Castelli - Brescia',
      image: import('@/assets/logos/iis-castelli-logo.jpg'),
      dates: [new Date('2011.09'), new Date('2017.06')],
      description: 'Degree EQF level 4, Perito informatico (high school diploma).',
      links: [website({ url: 'https://www.iiscastelli.edu.it/' })],
    },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;
