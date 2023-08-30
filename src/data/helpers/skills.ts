import createSkillFactory from '@/data/_internals/create-skill-factory';

/*

Place where you can define all your skills.
This way, you can ensure one skill has the same name, icon, and URL among all resume sections.

Where skills are used:
- experience-section.data.ts
- portfolio-section.data.ts
- skills-section.data.ts

Usage examples:
skill() — returns skill object without any customizations.
skill({ level: 3 }) — returns a levelled-skill. It can be used only in skills-section.data.ts.
skill({ name: '...' }) — returns skill object with a custom name.
skill({ description: '...' }) — returns skill with a description displayed when user hovers over it.

*/

export const bash = createSkillFactory({
  name: 'Bash',
  icon: 'simple-icons:gnubash',
  iconColor: '#333333',
  url: 'https://www.gnu.org/software/bash/',
});

export const java = createSkillFactory({
  name: 'Java',
  icon: 'fa6-brands:java',
  iconColor: '#333333',
  url: 'https://www.java.com/',
});

export const maven = createSkillFactory({
  name: 'Maven',
  icon: 'simple-icons:apachemaven',
  iconColor: '#BE3F29',
  url: 'https://maven.apache.org/',
});

export const insomnia = createSkillFactory({
  name: 'Insomnia',
  icon: 'simple-icons:insomnia',
  iconColor: '#4000BF',
  url: 'https://insomnia.rest/',
});

export const git = createSkillFactory({
  name: 'git',
  icon: 'simple-icons:git',
  iconColor: '#F14E32',
  url: 'https://git-scm.com/',
});

export const macOS = createSkillFactory({
  name: 'macOS',
  icon: 'simple-icons:macos',
  iconColor: '#333',
  url: '#',
});

export const linux = createSkillFactory({
  name: 'Linux',
  icon: 'simple-icons:linux',
  iconColor: '#333',
  url: '#',
});

export const visualStudioCode = createSkillFactory({
  name: 'Visual Studio Code',
  icon: 'simple-icons:visualstudiocode',
  iconColor: '#0066B8',
  url: 'https://code.visualstudio.com/',
});

export const wordPress = createSkillFactory({
  name: 'WordPress',
  icon: 'simple-icons:wordpress',
  iconColor: '#21759B',
  url: 'https://wordpress.com/',
});

export const php = createSkillFactory({
  name: 'PHP',
  icon: 'simple-icons:php',
  iconColor: '#7A86B8',
  url: 'https://www.php.net/',
});

export const jquery = createSkillFactory({
  name: 'JQuery',
  icon: 'simple-icons:jquery',
  iconColor: '#7ACEF4',
  url: 'https://www.php.net/',
});

export const phpmyadmin = createSkillFactory({
  name: 'phpMyAdmin',
  icon: 'simple-icons:phpmyadmin',
  iconColor: '#333',
  url: 'https://www.phpmyadmin.net/',
});

export const pug = createSkillFactory({
  name: 'Pug',
  icon: 'simple-icons:pug',
  iconColor: '#A86454',
  url: 'https://pugjs.org/',
});

export const redux = createSkillFactory({
  name: 'Redux',
  icon: 'simple-icons:redux',
  iconColor: '#764ABC',
  url: 'https://redux.js.org/',
});

export const html = createSkillFactory({
  name: 'HTML',
  icon: 'simple-icons:html5',
  iconColor: '#E65100',
  url: '#',
});

export const css = createSkillFactory({
  name: 'CSS',
  icon: 'simple-icons:css3',
  iconColor: '#0277BD',
  url: '#',
});

export const javaScript = createSkillFactory({
  name: 'JavaScript',
  icon: 'simple-icons:javascript',
  iconColor: '#FFD600',
  url: '#',
});

export const angular = createSkillFactory({
  name: 'Angular',
  icon: 'simple-icons:angular',
  iconColor: '#DD0031',
  url: 'https://angular.io/',
});

export const aws = createSkillFactory({
  name: 'AWS',
  icon: 'simple-icons:amazonaws',
  iconColor: '#F90',
  url: 'https://aws.amazon.com/',
});

export const styledComponents = createSkillFactory({
  name: 'Styled Components',
  icon: 'simple-icons:styledcomponents',
  iconColor: '#FFD300',
  url: 'https://styled-components.com/',
});

export const docker = createSkillFactory({
  name: 'Docker',
  icon: 'simple-icons:docker',
  iconColor: '#007BFF',
  url: 'https://www.docker.com/',
});

export const turborepo = createSkillFactory({
  name: 'Turbo',
  icon: 'simple-icons:turborepo',
  iconColor: '#333333',
  url: 'https://turbo.build/',
});

export const serverless = createSkillFactory({
  name: 'Serverless',
  icon: 'simple-icons:serverless',
  iconColor: '#FD5750',
  url: 'https://www.serverless.com/',
});

export const shopify = createSkillFactory({
  name: 'Shopify',
  icon: 'simple-icons:shopify',
  iconColor: '#95BF47',
  url: 'https://www.shopify.com/',
});

export const nodeJs = createSkillFactory({
  name: 'Node JS',
  icon: 'simple-icons:nodedotjs',
  iconColor: '#43853D',
  url: 'https://nodejs.org/',
});

export const apolloGraphql = createSkillFactory({
  name: 'GraphQL',
  icon: 'simple-icons:graphql',
  iconColor: '#E10098',
  url: 'https://graphql.org/',
});

export const astro = createSkillFactory({
  name: 'Astro',
  icon: 'simple-icons:astro',
  iconColor: '#FF5D01',
  url: 'https://astro.build/',
});

export const chakraUi = createSkillFactory({
  name: 'Chakra UI',
  icon: 'simple-icons:chakraui',
  iconColor: '#319795',
  url: 'https://chakra-ui.com/',
});

export const cypress = createSkillFactory({
  name: 'Cypress',
  icon: 'simple-icons:cypress',
  iconColor: '#17202C',
  url: 'https://www.cypress.io/',
});

export const eslint = createSkillFactory({
  name: 'ESLint',
  icon: 'simple-icons:eslint',
  iconColor: '#4B32C3',
  url: 'https://eslint.org/',
});

export const firebase = createSkillFactory({
  name: 'Firebase',
  icon: 'simple-icons:firebase',
  iconColor: '#FFCA28',
  url: 'https://firebase.google.com/',
});

export const jest = createSkillFactory({
  name: 'Jest',
  icon: 'simple-icons:jest',
  iconColor: '#C21325',
  url: 'https://jestjs.io/',
});

export const mongoDb = createSkillFactory({
  name: 'MongoDB',
  icon: 'simple-icons:mongodb',
  iconColor: '#47A248',
  url: 'https://www.mongodb.com/',
});

export const nestJs = createSkillFactory({
  name: 'NestJS',
  icon: 'simple-icons:nestjs',
  iconColor: '#E0234E',
  url: 'https://nestjs.com/',
});

export const nextJs = createSkillFactory({
  name: 'Next.js',
  icon: 'simple-icons:nextdotjs',
  iconColor: '#000000',
  url: 'https://nextjs.org/',
});

export const nx = createSkillFactory({
  name: 'Nx',
  icon: 'simple-icons:nx',
  iconColor: '#143055',
  url: 'https://nx.dev/',
});

export const pnpm = createSkillFactory({
  name: 'pnpm',
  icon: 'simple-icons:pnpm',
  iconColor: '#F69220',
  url: 'https://pnpm.io/',
});

export const postgreSql = createSkillFactory({
  name: 'PostgreSQL',
  icon: 'simple-icons:postgresql',
  iconColor: '#4169E1',
  url: 'https://www.postgresql.org/',
});

export const prettier = createSkillFactory({
  name: 'Prettier',
  icon: 'simple-icons:prettier',
  iconColor: '#F7B93E',
  url: 'https://prettier.io/',
});

export const react = createSkillFactory({
  name: 'React.js',
  icon: 'simple-icons:react',
  iconColor: '#61DAFB',
  url: 'https://reactjs.org/',
});

export const reactQuery = createSkillFactory({
  name: 'React Query',
  icon: 'simple-icons:reactquery',
  iconColor: '#FF4154',
  url: 'https://tanstack.com/query',
});

export const sass = createSkillFactory({
  name: 'SASS',
  icon: 'simple-icons:sass',
  iconColor: '#CC6699',
  url: 'https://sass-lang.com/',
});

export const supabase = createSkillFactory({
  name: 'Supabase',
  icon: 'simple-icons:supabase',
  iconColor: '#3ECF8E',
  url: 'https://supabase.io/',
});

export const tailwindCss = createSkillFactory({
  name: 'Tailwind CSS',
  icon: 'simple-icons:tailwindcss',
  iconColor: '#06B6D4',
  url: 'https://tailwindcss.com/',
});

export const typescript = createSkillFactory({
  name: 'TypeScript',
  icon: 'simple-icons:typescript',
  iconColor: '#3178C6',
  url: 'https://www.typescriptlang.org/',
});

export const vue = createSkillFactory({
  name: 'Vue.js',
  icon: 'simple-icons:vuedotjs',
  iconColor: '#4FC08D',
  url: 'https://vuejs.org/',
});
