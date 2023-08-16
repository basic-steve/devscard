import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { stackoverflow, github, linkedin } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/my-image.jpeg'),
  fullName: 'Stefano Castiglia',
  role: 'Mid full stack web developer',
  details: [
    { label: 'Email', value: 'stefano.castiglia@protonmail.ch', url: 'mailto:stefano.castiglia@protonmail.ch' },
    { label: 'City', value: 'Brescia/Milan, Italy' },
  ],
  pdfDetails: [
    { label: 'Phone', value: '+39 3466203426' },
    { label: 'Email', value: 'stefano.castiglia@protonmail.ch' },
    { label: 'LinkedIn', value: '/in/stefanocastiglia', url: 'https://linkedin.com/in/stefanocastiglia' },
    { label: 'GitHub', value: '/CatMonster', url: 'https://github.com/CatMonster' },
    { label: 'Website', value: 'stefano.castiglia.dev', url: '/', fullRow: true },
  ],
  description: `I’m Stefano, I’m 26. I’m a full stack web developer and I have always been fascinated by the IT field and loved it. Over the years of my career I specialized in web technologies and I’m working mainly on the latest React version and node. In my spare time I manage a home Linux server as personal cloud: time machine backups, surveillance, home automation, file storage… all on docker layer`,
  tags: [{ name: 'Open for freelance' }, { name: 'Available for mentoring' }, { name: 'Working on side project' }],
  action: {
    label: 'Download CV',
    url: '/cv.pdf',
    downloadedFileName: 'CV-Stefano_Castiglia-fullstack.pdf',
  },
  links: [
    linkedin({ url: 'https://linkedin.com/in/stefanocastiglia' }),
    github({ url: 'https://github.com/CatMonster' }),
    stackoverflow({ url: 'https://stackoverflow.com/users/6442495/steve-wolf' }),
  ],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
