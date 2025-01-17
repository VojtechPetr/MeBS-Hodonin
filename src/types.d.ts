import type { AstroComponentFactory } from 'astro/runtime/server/index.js';
import type { HTMLAttributes, ImageMetadata } from 'astro/types';

export interface Post {
  /** A unique ID number that identifies a post. */
  id: string;

  /** A post’s unique slug – part of the post’s URL based on its name, i.e. a post called “My Sample Page” has a slug “my-sample-page”. */
  slug: string;

  /**  */
  permalink: string;

  /**  */
  publishDate: Date;
  /**  */
  updateDate?: Date;

  /**  */
  title: string;
  /** Optional summary of post content. */
  excerpt?: string;
  /**  */
  image?: ImageMetadata | string;

  /**  */
  category?: Taxonomy;
  /**  */
  tags?: Taxonomy[];
  /**  */
  author?: string;

  /**  */
  metadata?: MetaData;

  /**  */
  draft?: boolean;

  /**  */
  Content?: AstroComponentFactory;
  content?: string;

  /**  */
  readingTime?: number;
}

export interface Taxonomy {
  slug: string;
  title: string;
}

export interface MetaData {
  title?: string;
  ignoreTitleTemplate?: boolean;

  canonical?: string;

  robots?: MetaDataRobots;

  description?: string;

  openGraph?: MetaDataOpenGraph;
  twitter?: MetaDataTwitter;
}

export interface MetaDataRobots {
  index?: boolean;
  follow?: boolean;
}

export interface MetaDataImage {
  url: string;
  width?: number;
  height?: number;
}

export interface MetaDataOpenGraph {
  url?: string;
  siteName?: string;
  images?: Array<MetaDataImage>;
  locale?: string;
  type?: string;
}

export interface MetaDataTwitter {
  handle?: string;
  site?: string;
  cardType?: string;
}

export interface Image {
  src: string;
  alt?: string;
}

export interface Video {
  src: string;
  type?: string;
}

export interface Widget {
  id?: string;
  isDark?: boolean;
  bg?: string;
  classes?: Record<string, string | Record<string, string>>;
}

export interface Headline {
  title?: string;
  subtitle?: string;
  tagline?: string;
  classes?: Record<string, string>;
}

interface TeamMember {
  name?: string;
  job?: string;
  image?: Image;
  socials?: Array<Social>;
  description?: string;
  classes?: Record<string, string>;
}

interface Social {
  icon?: string;
  href?: string;
}

export interface Stat {
  amount?: number | string;
  title?: string;
  icon?: string;
}

export interface Price {
  title?: string;
  subtitle?: string;
  description?: string;
  price?: number | string;
  period?: string;
  items?: Array<Item>;
  callToAction?: CallToAction;
  hasRibbon?: boolean;
  ribbonTitle?: string;
}

export interface Testimonial {
  title?: string;
  testimonial?: string;
  name?: string;
  job?: string;
  image?: string | unknown;
}

export interface Input {
  type: HTMLInputTypeAttribute;
  name: string;
  label?: string;
  autocomplete?: string;
  placeholder?: string;
}

export interface Textarea {
  label?: string;
  name?: string;
  placeholder?: string;
  rows?: number;
}

export interface Disclaimer {
  label?: string;
}

export interface Property {
  adresa: string;
}

export interface Office {
  cislo: string;
  spravce: string;
  barva: string;
  nemovitosti: Property[];
}

export interface HousingAssociation {
  nazev: string;
}

export interface ContentData {
  titulek?: string;
  podtitulek?: string;
  kancelare?: Office[];
  bytova_druzstva?: HousingAssociation[];
}

export interface KontaktyData {
  departments: Department[];
}

export type CenikData = {
  items: {
    service: string;
    price: string;
    price_with_tax: string;
  }[];
  hero_title: string;
  hero_subtitle: string;
  footer_text_1: string;
  footer_text_2: string;
  footer_text_3: string;
};

export interface AkceItem {
  title: string;
}

export interface AkceData {
  title: string;
  items: AkceItem[];
}

export interface PlannedRepairItem {
  title: string;
  icon: string;
}

// TeploData
export interface TeploData {
  planned_repairs: {
    title: string;
    subtitle: string;
    items: PlannedRepairItem[];
  };
  heating_season: {
    title: string;
    items: HeatingSeasonItem[];
  };
  pricing: {
    title: string;
    items: PricingItem[];
  };
}

export interface PlannedRepairItem {
  title: string;
  icon: string;
}

export interface HeatingSeasonItem {
  description: string;
  icon: string;
}

export interface PricingItem {
  description: string;
  icon: string;
}

// COMPONENTS
export interface CallToAction extends Omit<HTMLAttributes<'a'>, 'slot'> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link';
  text?: string;
  icon?: string;
  classes?: Record<string, string>;
  type?: 'button' | 'submit' | 'reset';
}

export interface ItemGrid {
  items?: Array<Item>;
  columns?: number;
  defaultIcon?: string;
  classes?: Record<string, string>;
}

export interface Collapse {
  iconUp?: string;
  iconDown?: string;
  items?: Array<Item>;
  columns?: number;
  classes?: Record<string, string>;
}

export interface Form {
  inputs?: Array<Input>;
  textarea?: Textarea;
  disclaimer?: Disclaimer;
  button?: string;
  description?: string;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface YamlSearchData {
  id?: string;
  title?: string;
  slug?: string;
  content?: string;
  [key: string]: any;
}
/* eslint-enable @typescript-eslint/no-explicit-any */

// WIDGETS
export interface Hero extends Omit<Headline, 'classes'>, Omit<Widget, 'isDark' | 'classes'> {
  mtOffset?: number;
  content?: string;
  actions?: string | CallToAction[];
  image?: string | unknown;
}

export interface Team extends Omit<Headline, 'classes'>, Widget {
  team?: Array<TeamMember>;
}

export interface Stats extends Omit<Headline, 'classes'>, Widget {
  stats?: Array<Stat>;
}

export interface Pricing extends Omit<Headline, 'classes'>, Widget {
  prices?: Array<Price>;
}

export interface Testimonials extends Omit<Headline, 'classes'>, Widget {
  testimonials?: Array<Testimonial>;
  callToAction?: CallToAction;
}

export interface Brands extends Omit<Headline, 'classes'>, Widget {
  icons?: Array<string>;
  images?: Array<Image>;
}

export interface Features extends Omit<Headline, 'classes'>, Widget {
  image?: string | unknown;
  video?: Video;
  items?: Array<Item>;
  columns?: number;
  defaultIcon?: string;
  callToAction1?: CallToAction;
  callToAction2?: CallToAction;
  isReversed?: boolean;
  isBeforeContent?: boolean;
  isAfterContent?: boolean;
}

export interface ContactInfo {
  type?: 'email' | 'phone';
  value?: string;
}

export interface SVJKontaktyData {
  contacts: Contact[];
}

export interface Contact {
  name?: string;
  title?: string;
  icon?: string;
  contactInfo?: Array<ContactInfo>;
}

export interface Department {
  department?: string;
  anchor?: string;
  contacts?: Array<Contact>;
}

export interface PopUpProps {
  timer?: number; // Delay before showing the popup
  imageURL?: string; // Image source URL
  href?: string; // Link URL for the image
  description: string; // ARIA label description
}

export interface Features21 extends Omit<Headline, 'classes'>, Widget {
  image?: string | unknown;
  video?: Video;
  items?: Array<Item>;
  structure?: Array<Department>;
  columns?: number;
  defaultIcon?: string;
  callToAction1?: CallToAction;
  callToAction2?: CallToAction;
  isReversed?: boolean;
  isBeforeContent?: boolean;
  isAfterContent?: boolean;
}

export interface Item {
  title?: string;
  description?: string;
  icon?: string;
  classes?: Record<string, string>;
  callToAction?: CallToAction;
  image?: Image;
  link?: string;
  target?: string;
  contacts?: ContactInfo[];
}

export interface ItemGrid3 {
  items?: Array<Item>;
  columns?: number;
  defaultIcon?: string;
  classes?: Record<string, string>;
}

export interface Faqs extends Omit<Headline, 'classes'>, Widget {
  iconUp?: string;
  iconDown?: string;
  items?: Array<Item>;
  columns?: number;
}

export interface Steps extends Omit<Headline, 'classes'>, Widget {
  items: Array<{
    title: string;
    description?: string;
    icon?: string;
    classes?: Record<string, string>;
  }>;
  callToAction?: string | CallToAction;
  image?: string | Image;
  isReversed?: boolean;
}

export interface Content extends Omit<Headline, 'classes'>, Widget {
  content?: string;
  image?: string | unknown;
  items?: Array<Item>;
  columns?: number;
  isReversed?: boolean;
  isAfterContent?: boolean;
  isSingle?: boolean;
  callToAction?: CallToAction;
}

export interface Contact extends Omit<Headline, 'classes'>, Form, Widget {}

declare global {
  interface Window {
    toggleSearchBar: () => void;
    search: (event: KeyboardEvent) => Promise<void>;
  }

  interface PopUpElement extends HTMLElement {
    timer: number | null;
    popUpClose: HTMLButtonElement | null;
    boundHandleOutsideClick: (e: MouseEvent) => void;
    boundHandleEscapeKey: (e: KeyboardEvent) => void;
    boundClosePop: () => void;
  }

  interface CloseButtonProps {
    id?: string; // Optional ID for the button
    customClass?: string; // Custom CSS class
    onclick?: () => void; // Optional click handler
  }
}
