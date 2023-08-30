import type { Config } from '@/types/data';
import { enUS } from 'date-fns/locale';
import type { ReadonlyDeep } from 'type-fest';

const config = {
  i18n: {
    locale: enUS,
    dateFormat: 'MMMM yyyy',
    translations: {
      now: 'now',
    },
  },
  meta: {
    title: 'Stefano Castiglia - Full stack web developer',
    description: `Stefano's castigilia portfolio and downloadable curriculum vitae`,
    faviconPath: '/src/assets/my-image.jpeg',
  },
  pdf: {
    footer:
      'In compliance with the Italian legislative Decree no. 196 dated 30/06/2003, I hereby authorize you to use and process my personal details contained in this document.',
  },
} as const satisfies ReadonlyDeep<Config>;

export default config;
