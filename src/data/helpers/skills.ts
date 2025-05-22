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
  icon: 'logos:bash-icon',
  iconColor: '#333333',
  url: 'https://www.gnu.org/software/bash/',
});

export const figma = createSkillFactory({
  name: 'Figma',
  icon: 'logos:figma',
  iconColor: '#333333',
  url: 'https://figma.com',
});

export const contentful = createSkillFactory({
  name: 'Contentful',
  icon: 'logos:contentful',
  iconColor: '#166ee0',
  url: 'https://www.contentful.com/',
});

export const java = createSkillFactory({
  name: 'Java',
  icon: 'logos:java',
  iconColor: '#333333',
  url: 'https://www.java.com/',
});

export const maven = createSkillFactory({
  name: 'Maven',
  icon: 'simple-icons:apachemaven',
  iconColor: '#BE3F29',
  url: 'https://maven.apache.org/',
});

export const git = createSkillFactory({
  name: 'git',
  icon: 'logos:git-icon',
  iconColor: '#F14E32',
  url: 'https://git-scm.com/',
});

export const macOS = createSkillFactory({
  name: 'macOS',
  icon: 'logos:macosx',
  iconColor: '#333',
  url: '#',
});

export const linux = createSkillFactory({
  name: 'Linux',
  icon: 'logos:linux-tux',
  iconColor: '#333',
  url: '#',
});

export const visualStudioCode = createSkillFactory({
  name: 'Visual Studio Code',
  icon: 'logos:visual-studio-code',
  iconColor: '#0066B8',
  url: 'https://code.visualstudio.com/',
});

export const wordPress = createSkillFactory({
  name: 'WordPress',
  icon: 'logos:wordpress-icon',
  iconColor: '#21759B',
  url: 'https://wordpress.com/',
});

export const php = createSkillFactory({
  name: 'PHP',
  icon: 'logos:php',
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
  icon: 'logos:pug',
  iconColor: '#A86454',
  url: 'https://pugjs.org/',
});

export const redux = createSkillFactory({
  name: 'Redux',
  icon: 'logos:redux',
  iconColor: '#764ABC',
  url: 'https://redux.js.org/',
});

export const html = createSkillFactory({
  name: 'HTML',
  icon: 'logos:html-5',
  iconColor: '#E65100',
  url: '#',
});

export const css = createSkillFactory({
  name: 'CSS',
  icon: 'logos:css-3',
  iconColor: '#0277BD',
  url: '#',
});

export const javaScript = createSkillFactory({
  name: 'JavaScript',
  icon: 'logos:javascript',
  iconColor: '#FFD600',
  url: '#',
});

export const angular = createSkillFactory({
  name: 'Angular',
  icon: 'logos:angular-icon',
  iconColor: '#DD0031',
  url: 'https://angular.io/',
});

export const aws = createSkillFactory({
  name: 'AWS',
  icon: 'logos:aws',
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
  icon: 'logos:docker-icon',
  iconColor: '#007BFF',
  url: 'https://www.docker.com/',
});

export const turborepo = createSkillFactory({
  name: 'Turbo',
  icon: 'logos:turborepo-icon',
  iconColor: '#333333',
  url: 'https://turbo.build/',
});

export const serverless = createSkillFactory({
  name: 'Serverless',
  icon: 'logos:serverless',
  iconColor: '#FD5750',
  url: 'https://www.serverless.com/',
});

export const shopify = createSkillFactory({
  name: 'Shopify',
  icon: 'logos:shopify',
  iconColor: '#95BF47',
  url: 'https://www.shopify.com/',
});

export const nodeJs = createSkillFactory({
  name: 'Node',
  icon: 'logos:nodejs-icon',
  iconColor: '#43853D',
  url: 'https://nodejs.org/',
});

export const apolloGraphql = createSkillFactory({
  name: 'GraphQL',
  icon: 'logos:graphql',
  iconColor: '#E10098',
  url: 'https://graphql.org/',
});

export const astro = createSkillFactory({
  name: 'Astro',
  icon: 'logos:astro-icon',
  iconColor: '#FF5D01',
  url: 'https://astro.build/',
});

export const chakraUi = createSkillFactory({
  name: 'Chakra UI',
  icon: 'logos:chakraui',
  iconColor: '#319795',
  url: 'https://chakra-ui.com/',
});

export const cypress = createSkillFactory({
  name: 'Cypress',
  icon: 'logos:cypress',
  iconColor: '#17202C',
  url: 'https://www.cypress.io/',
});

export const eslint = createSkillFactory({
  name: 'ESLint',
  icon: 'logos:eslint',
  iconColor: '#4B32C3',
  url: 'https://eslint.org/',
});

export const firebase = createSkillFactory({
  name: 'Firebase',
  icon: 'logos:firebase',
  iconColor: '#FFCA28',
  url: 'https://firebase.google.com/',
});

export const jest = createSkillFactory({
  name: 'Jest',
  icon: 'logos:jest',
  iconColor: '#C21325',
  url: 'https://jestjs.io/',
});

export const mongoDb = createSkillFactory({
  name: 'MongoDB',
  icon: 'logos:mongodb',
  iconColor: '#47A248',
  url: 'https://www.mongodb.com/',
});

export const nestJs = createSkillFactory({
  name: 'NestJS',
  icon: 'logos:nestjs',
  iconColor: '#E0234E',
  url: 'https://nestjs.com/',
});

export const nextJs = createSkillFactory({
  name: 'Next.js',
  icon: 'logos:nextjs-icon',
  iconColor: '#000000',
  url: 'https://nextjs.org/',
});

export const nx = createSkillFactory({
  name: 'Nx',
  icon: 'logos:nx',
  iconColor: '#143055',
  url: 'https://nx.dev/',
});

export const pnpm = createSkillFactory({
  name: 'pnpm',
  icon: 'logos:pnpm',
  iconColor: '#F69220',
  url: 'https://pnpm.io/',
});

export const postgreSql = createSkillFactory({
  name: 'PostgreSQL',
  icon: 'logos:postgresql',
  iconColor: '#4169E1',
  url: 'https://www.postgresql.org/',
});

export const prettier = createSkillFactory({
  name: 'Prettier',
  icon: 'logos:prettier',
  iconColor: '#F7B93E',
  url: 'https://prettier.io/',
});

export const react = createSkillFactory({
  name: 'React',
  icon: 'logos:react',
  iconColor: '#61DAFB',
  url: 'https://reactjs.org/',
});

export const reactQuery = createSkillFactory({
  name: 'React Query',
  icon: 'logos:reactquery',
  iconColor: '#FF4154',
  url: 'https://tanstack.com/query',
});

export const sass = createSkillFactory({
  name: 'SASS',
  icon: 'logos:sass',
  iconColor: '#CC6699',
  url: 'https://sass-lang.com/',
});

export const supabase = createSkillFactory({
  name: 'Supabase',
  icon: 'logos:supabase',
  iconColor: '#3ECF8E',
  url: 'https://supabase.io/',
});

export const tailwindCss = createSkillFactory({
  name: 'Tailwind CSS',
  icon: 'logos:tailwindcss-icon',
  iconColor: '#06B6D4',
  url: 'https://tailwindcss.com/',
});

export const typescript = createSkillFactory({
  name: 'TypeScript',
  icon: 'logos:typescript-icon',
  iconColor: '#3178C6',
  url: 'https://www.typescriptlang.org/',
});

export const vue = createSkillFactory({
  name: 'Vue.js',
  icon: 'logos:vuedotjs',
  iconColor: '#4FC08D',
  url: 'https://vuejs.org/',
});
