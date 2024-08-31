import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'SVJ',
      links: [
        {
          text: 'O nás',
          href: getPermalink('/homes/saas'),
        },
        {
          text: 'Služby',
          href: getPermalink('/homes/startup'),
        },
        {
          text: 'Rozdělení SVJ',
          href: getPermalink('/homes/mobile-app'),
        },
        {
          text: 'Otázky a odpovědi',
          href: getPermalink('/homes/personal'),
        },
        {
          text: 'Dokumenty ke stažení',
          href: getPermalink('/homes/personal'),
        },
        {
          text: 'Ceník',
          href: getPermalink('/homes/personal'),
        },
      ],
    },
    {
      text: 'Údržba',
      href: '#',
    },
    {
      text: 'Družstva',
      links: [
        {
          text: 'Kaštany',
          href: getPermalink('/#features'),
        },
        {
          text: 'Lípa',
          href: getPermalink('/services'),
        },
        {
          text: 'Pastelky',
          href: getPermalink('/pricing'),
        },
      ],
    },
    {
      text: 'Teplo',
      href: '/teplo',
    },
    {
      text: 'Služby',
      href: '/sluzby',
    },
    {
      text: 'Pro zaměstnance',
      href: '/ke-stazeni/pro-zamestnance',
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
  ],
  actions: [{ text: 'Kontakt', href: '/kontakt' }],
};

export const footerData = {
  secondaryLinks: [
    { text: 'Zpracování osobních údajů', href: getPermalink('/privacy') },
    { text: 'Mapa stránek', href: getPermalink('/terms') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/m%C4%9Bstsk%C3%A1-bytov%C3%A1-spr%C3%A1va-spol-s-r-o-hodon%C3%ADn/'},
  ],
  footNote: `
    Je to složité, ale někdo to udělat musel – <a class="text-blue-600 dark:text-muted" href="https://petrv.eu"> </a>
    <a href="https://petrv.eu" target="_blanck">
        <img class="w-5 h-4 md:w-10 md:h-4 md:ml-2 md:mt-1 float-right rtl:float-right rounded-sm" src="../src/assets/favicons/logo_petrv_RGB.png" alt="PetrV_logo">
    </a>  `,
};
