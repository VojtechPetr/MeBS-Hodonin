import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'SVJ a družstva',
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
          text: 'Provozní doba MěBS o vánočních svátcích',
          href: getPermalink('provoz-vanoce', 'post'),
        },
      ],
    },
  ],
  actions: [{ text: 'Kontakt', href: '/kontakt' }],
};

export const footerData = {
  secondaryLinks: [{ text: 'Zpracování osobních údajů', href: getPermalink('/privacy') }],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/bytovka_hodonin/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/profile.php?id=61571060969082' },
    {
      ariaLabel: 'LinkedIn',
      icon: 'tabler:brand-linkedin',
      href: 'https://www.linkedin.com/company/m%C4%9Bstsk%C3%A1-bytov%C3%A1-spr%C3%A1va-spol-s-r-o-hodon%C3%ADn/',
    },
  ],
  footNote: `
    Každá stránka má svůj příběh – 
    <a class="text-blue-600 dark:text-muted inline-flex items-center" href="https://petrv.eu" target="_blank">
        <img class="w-10 h-4 translate-y-1 md:w-11 md:h-4 md:ml-1 md:mt-1 rounded-sm dark:hidden" 
             src="/assets/images/logo_petrv_RGB.png" 
             alt="PetrV_logo">

        <img class="w-10 h-4 translate-y-1 md:w-11 md:h-4 md:ml-1 md:mt-1 rounded-sm hidden dark:block" 
             src="/assets/images/logo_petrv_inverzni_RGB.png" 
             alt="PetrV_logo_dark">    
    </a>`,
};
