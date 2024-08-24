import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

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
          text: 'Náš tým',
          href: getPermalink('/homes/personal'),
        },
        {
          text: 'Napište nám',
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
      href: '#',
    },
    {
      text: 'Služby',
      href: '#',
    },
    {
      text: 'Pro zaměstnance',
      href: '#',
    },
    {
      text: 'Kontakt',
      href: '#',
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
  actions: [{ text: 'Kontakt', href: '#' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Zpracování osobních údajů', href: getPermalink('/privacy') },
    { text: 'Mapa stránek', href: getPermalink('/terms') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    Je to složité, ale někdo to udělat musel – <a class="text-blue-600 dark:text-muted" href="https://petrv.eu"> </a>
    <a href="https://petrv.eu" target="_blanck">
        <img class="w-5 h-4 md:w-10 md:h-4 md:ml-2 md:mt-1 float-right rtl:float-right rounded-sm" src="../src/assets/favicons/logo_petrv_RGB.png" alt="PetrV_logo">
    </a>  `,
};
