import type { HTMLAttributes } from 'astro/types';

export interface Taxonomy {
  slug: string;
  title: string;
}

export interface INameValue {
  name?: string;
  value?: string;
}

export interface IWidget {
  id?: string;
  isDark?: boolean;
  bg?: string;
  classes?: Record<string, string | Record<string, string>>;
}

export interface IImage {
  src: string;
  alt?: string;
  aspectRatio?: string;
}

export interface ILink {
  href?: string;
  text?: string;
}

export interface IItem {
  title?: string;
  description?: string;
  icon?: string;
  classes?: Record<string, string>;
  callToAction?: ICallToAction;
  image?: IImage;
  data?: INameValue[];
  links?: ILink[];
  badge?: any;
  after?: any;
}

export interface IItemGrid {
  items?: Array<Item>;
  columns?: number;
  defaultIcon?: string;
  classes?: Record<string, string>;
}

export interface IHeadline {
  title?: string;
  subtitle?: string;
  tagline?: string;
  classes?: Record<string, string>;
}

export interface IFeatures extends Omit<IHeadline, 'classes'>, IWidget {
  image?: string | unknown;
  video?: Video;
  items?: IItem[];
  columns?: number;
  defaultIcon?: string;
  callToAction1?: ICallToAction;
  callToAction2?: ICallToAction;
  isReversed?: boolean;
  isBeforeContent?: boolean;
  isAfterContent?: boolean;
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

// COMPONENTS
export interface ICallToAction extends Omit<HTMLAttributes<'a'>, 'slot'> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link' | 'icon';
  text?: string;
  icon?: string;
  classes?: Record<string, string>;
  type?: 'button' | 'submit' | 'reset';
}


/**
 * ItemGrid0
 *
 * @param _props - Record<string, any>
 * @param _props.columns
 * @param _props.classes.container - Optional. Additional CSS class names
 */
type ItemGrid0 = typeof import('../index.js').ItemGrid0
export const ItemGrid0: ItemGrid0;


/**
 * Item
 *
 * @param _props - Record<string, any>
 * @param _props.columns
 */
type Item = typeof import('../index.js').Item
export const Item: Item;


/**
 * Features0
 *
 * @param _props - Record<string, any>
 * @param _props.title
 * @param _props.subtitle
 * @param _props.tagline
 * @param _props.id
 * @param _props.isDark
 * @param _props.classes - Record<string, string>
 * @param _props.bg
 */
type Features0 = typeof import('../index.js').Features0
export const Features0: Features0;


/**
 * Features1
 *
 * @param _props - Record<string, any>
 * @param _props.title
 * @param _props.subtitle
 * @param _props.tagline
 * @param _props.id
 * @param _props.isDark
 * @param _props.classes - Record<string, string>
 * @param _props.bg
 */
type Features1 = typeof import('../index.js').Features1
export const Features1: Features1;


/**
 * WidgetWrapper
 *
 * @param _props - Record<string, any>
 * @param _props.
 */
type WidgetWrapper = typeof import('../index.js').WidgetWrapper
export const WidgetWrapper: WidgetWrapper;


/**
 * Layout
 *
 * @param _props - Record<string, any>
 * @param _props.metadata
 */
type Layout = typeof import('../index.js').Layout
export const Layout: Layout;


/**
 * BackToTopButton
 *
 * @param _props - Record<string, any>
 * @param _props.metadata
 */
type BackToTopButton = typeof import('../index.js').BackToTopButton
export const BackToTopButton: BackToTopButton;


/**
 * Button
 *
 * @param _props - Record<string, any>
 * @param _props.variant - Optional. Set button variant: default | primary | accent | destructive | outline | ghost | link
 * @param _props.size -  Optional. Set size button: default | sm | lg | icon 
 * @param _props.class - Optional. CSS class names
 */
type Button = typeof import('../index.js').Button
export const Button: Button;


/**
 * Image
 *   
 * @param _props - Record<string, any>
 * @param _props.src
 * @param _props.width
 * @param _props.height
 * @param _props.alt
 * @param _props.loading - 'eager' - Loads an image immediately (Default). 'lazy'- Defer loading of images until some conditions are met
 * @param _props.decoding
 * @param _props.style
 * @param _props.srcset
 * @param _props.sizes
 * @param _props.fetchpriority
 * @param _props.layout
 * @param _props.widths
 * @param _props.aspectRatio
 * @param _props.objectPosition
 * @param _props.format
 */
type Image = typeof import('../index.js').Image
export const Image: Image;


/**
 * Headline
 *
 * @param _props - Record<string, any>
 * @param _props.title - Optional title string
 * @param _props.subtitle - Optional subtitle string
 * @param _props.tagline - Optional tagline string
 * @param _props.classes - CSS Class Names Object
 */
type Headline = typeof import('../index.js').Headline
export const Headline: Headline;


/**
 * HeroSlider
 *
 * @param _props - Record<string, any>
 * @param _props.label - Optional label
 * @param _props.iconClass - Optional CSS for the icon
 * @param _props.iconName - Optional. Change icon
 * @param _props.class - Optional CSS class names
 */
type HeroSlider = typeof import('../index.js').HeroSlider
export const HeroSlider: HeroSlider;

/**
 * HeroSlide
 *
 * @param _props - Record<string, any>
 * @param _props.title
 * @param _props.description
 * @param _props.image
 * @param _props.class - Optional CSS class names
 * @param _props.callToAction
 */
type HeroSlide = typeof import('../index.js').HeroSlide
export const HeroSlide: HeroSlide;


/**
 * Breadcrumbs item child component
 *
 * @param _props - Record<string, any>
 * @param _props.href - `<a href={href}>` Breadcrumb route string such as "/" or "/blog" - default: "#"
 * @param _props.label - `<a>` text content for descriptive route name
 * @param _props.currentPage - Boolean: isCurrentPage?
 * @param _props.hasIcon - Whether this item has an icon - default: false
 * @param _props.class - Optional CSS class names
 */
export type BreadcrumbsItem = typeof import('../index.js').BreadcrumbsItem
export const BreadcrumbsItem: BreadcrumbsItem

/**
 * Breadcrumbs parent component
 *
 * @param _props - Record<string, any>
 * @param _props.class - Optional CSS class names
 * @param _props.ariaLabel - Accessible label for the breadcrumb navigation - default: 'Breadcrumbs'
 * @param _props.children -
 *  - Expects one or more BreadcrumbsItem components. Parent element: `<ol>`
 *  - WARNING: Astro cannot currently enforce the type of children in a `<slot>`
 */
type Breadcrumbs = typeof import('../index.js').Breadcrumbs
export const Breadcrumbs: Breadcrumbs


/**
 * DarkMode
 *
 * @param _props - Record<string, any>
 * @param _props.class - Optional CSS classes names
 * @param _props.iconClass
 * @param _props.iconName
 * @param _props.initialMode - Optional. Available: "system" | "light" | "dark" | "light:only" | "dark:only". Default: system
 */
type DarkMode = typeof import('../index.js').DarkMode
export const DarkMode: DarkMode;



/**
 * Tabs parent component
 *
 * @param _props - Record<string, any>
 * @param _props.class - Optional CSS class names
 * @param _props.children -
 *  - Expects TabsList and TabsPanel components. Parent element: `<div>`
 *  - WARNING: Astro cannot currently enforce the type of children in a `<slot>`
 */
type Tabs = typeof import('../index.js').Tabs
export const Tabs: Tabs

/**
 * TabsList component
 *
 * @param _props - Record<string, any>
 * @param _props.class - Optional CSS class names
 * @param _props.children -
 *  - Expects TabsTab components. Parent element: `<div role="tablist">`
 *  - WARNING: Astro cannot currently enforce the type of children in a `<slot>`
 */
type TabsList = typeof import('../index.js').TabsList
export const TabsList: TabsList

/**
 * TabsTab component
 *
 * @param _props - Record<string, any>
 * @param _props.id - Unique identifier for the tab
 * @param _props.controls - ID of the panel this tab controls
 * @param _props.selected - Boolean indicating if this tab is selected
 * @param _props.class - Optional CSS class names
 * @param _props.children - Tab label content
 */
type TabsTab = typeof import('../index.js').TabsTab
export const TabsTab: TabsTab

/**
 * TabsPanel component
 *
 * @param _props - Record<string, any>
 * @param _props.id - Unique identifier for the panel
 * @param _props.labelledby - ID of the tab that labels this panel
 * @param _props.selected - Boolean indicating if this panel is selected
 * @param _props.class - Optional CSS class names
 * @param _props.children - Panel content
 */
type TabsPanel = typeof import('../index.js').TabsPanel
export const TabsPanel: TabsPanel
