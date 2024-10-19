import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'SVJ',
      links: [
        {
          text: 'O nás',
          href: getPermalink('/svj/o-nas'),
        },
        {
          text: 'Rozdělení SVJ',
          href: getPermalink('/svj/rozdeleni-svj'),
        },
        {
          text: 'Profi předseda',
          href: getPermalink('/svj/profi-predseda'),
        },
        {
          text: 'Ceník',
          href: getPermalink('/svj/cenik'),
        },
        {
          text: 'Otázky a odpovědi',
          href: getPermalink('/svj/faq'),
        },
        {
          text: 'BD Kaštany',
          href: getPermalink('/svj/bd-kastany'),
        },
        {
          text: 'BD Lípa',
          href: getPermalink('/svj/bd-lipa'),
        },
        {
          text: 'BD Pastelky',
          href: getPermalink('/svj/bd-pastelky'),
        },
      ],
    },
    {
      text: 'Údržba',
      href: '/udrzba',
    },
    {
      text: 'Teplo',
      href: '/teplo',
    },
    {
      text: 'Hotel Krystal',
      href: 'https://www.hotel-krystal.cz/',
      target: '_blank',
    },
    {
      text: 'Ke stažení',
      href: '/ke-stazeni',
    },
    {
      text: 'Kariéra',
      href: '/kariera',
    },
    {
      text: 'Aktuality',
      links: [
        {
          text: 'Seznam aktualit',
          href: getBlogPermalink(),
        },
        {
          text: 'Oznámení o odstávce tepla a teplé vody',
          href: getPermalink('oznameni-odstavka-teplo', 'post'),
        },
      ],
    },
  ],
  actions: [{ text: 'Kontakt', href: '/kontakt' }],
};

export const footerData = {
  secondaryLinks: [{ text: 'Zpracování osobních údajů', href: getPermalink('/privacy') }],
  socialLinks: [
    //{ ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '/' },
    //{ ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '/' },
    {
      ariaLabel: 'LinkedIn',
      icon: 'tabler:brand-linkedin',
      href: 'https://www.linkedin.com/company/m%C4%9Bstsk%C3%A1-bytov%C3%A1-spr%C3%A1va-spol-s-r-o-hodon%C3%ADn/',
    },
  ],
  footNote: `
    Každá stránka má svůj příběh – <a class="text-blue-600 dark:text-muted" href="https://petrv.eu"> </a>
    <a href="https://petrv.eu" target="_blank">
        <img class="w-5 h-4 md:w-10 md:h-4 md:ml-2 md:mt-1 float-right rtl:float-right rounded-sm dark:hidden" 
             src="/assets/images/logo_petrv_RGB.png" 
             alt="PetrV_logo">

        <img class="w-5 h-4 md:w-10 md:h-4 md:ml-2 md:mt-1 float-right rtl:float-right rounded-sm hidden dark:block" 
             src="/assets/images/logo_petrv_inverzni_RGB.png" 
             alt="PetrV_logo_dark">    </a>  `,
};
