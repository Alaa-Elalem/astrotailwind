import type { CollectionEntry } from "astro:content";

export type Frontmatter = CollectionEntry<"blog">["data"];

export interface TagType {
  tag: string;
  count: number;
  pages: CollectionEntry<"blog">[];
}

export const SiteMetadata = {
  title: "شركة دراهم للوساطة و التجارة الالكترونية",
  description: "An Astro starter for corporate/marketing/blog websites.",
  author: {
    name: "Chris Tham",
    twitter: "@chris1tham",
    url: "https://christham.net",
    email: "chris@christham.net",
    summary: "Outrageous actualiser.",
  },
  org: {
    name: "Hello Tham",
    twitter: "@hellothamcom",
    url: "https://hellotham.com",
    email: "info@hellotham.com",
    summary:
      "Hello Tham is a boutique management consulting firm. We specialise in Business and IT strategies, operating models, strategic roadmaps, enterprise architecture, analytics and business process design.",
  },
  location: "Rivendell, Middle Earth",
  latlng: [-33.86785, 151.20732] as [number, number],
  repository: "https://github.com/hellotham/hello-astro",
  social: [
    {
      name: "Email",
      link: "mailto:info@darahem.ly",
      icon: "envelope",
    },
    {
      name: "Phone",
      link: "091-6656699",
      icon: "telephone",
    },
    // {
    //   name: "LinkedIn",
    //   link: "https://www.linkedin.com/hellothamcom",
    //   icon: "linkedin",
    // },
    {
      name: "Facebook",
      link: "https://www.facebook.com/profile.php?id=100088916312958",
      icon: "facebook",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/darahem.ly/",
      icon: "instagram",
    },
    {
      name: "Twitter",
      link: "https://twitter.com/hellothamcom",
      icon: "twitter",
    },
    // {
    //   name: "Github",
    //   link: "https://github.com/hellothamcom",
    //   icon: "github",
    // },
  ],
  buildTime: new Date(),
};

// export const Logo = './assets/svg/astro/logomark-light.svg'
// export const Logo = "./assets/favicon.svg";
// export const LogoImage = "./assets/astro/full-logo-light.png";
// export const FeaturedSVG = "./assets/svg/darahem/darahem.jpg";
// export const DefaultSVG = "./assets/svg/undraw/undraw_my_feed.svg";
// export const DefaultImage = "./assets/undraw/undraw_my_feed.png";

export { default as Logo } from "./assets/favicon.svg";
export { default as LogoImage } from "./assets/svg/darahem/darahem.svg";
export { default as FeaturedSVG } from "./assets/svg/darahem/herepbg.svg";
export { default as DefaultSVG } from "./assets/svg/undraw/undraw_my_feed.svg";
export { default as DefaultImage } from "./assets/undraw/undraw_my_feed.png";

export const NavigationLinks = [
  { name: "الصفحة الرئيسية", href: "" },
  { name: "خدماتنا", href: "about" },
  { name: "تواصل معنا", href: "contact" },
  { name: "لماذا نحن", href: "blog" },
  { name: "طرق الدفع", href: "doc/introduction" },
];

export const footerLinks = [
  { name: "من نحن", href: "" },
  { name: "خدماتنا", href: "about" },
  { name: "اتصل بنا", href: "contact" },
  { name: " أعمالنا", href: "" },
];

export const CategoryDetail = [
  {
    category: "instructions",
    coverSVG: "./assets/svg/undraw/undraw_instruction_manual.svg",
    socialImage: "./assets/undraw/undraw_instruction_manual.png",
    description: "Guidelines on using this starter.",
  },
  {
    category: "information",
    coverSVG: "./assets/svg/undraw/undraw_instant_information.svg",
    socialImage: "./assets/undraw/undraw_instant_information.png",
    description: "Information articles.",
  },
];

export function categoryDetail(category: string | undefined) {
  const details = CategoryDetail.filter((cat) => cat.category == category);

  if (details.length == 1) {
    return details[0];
  }
  return {
    category: "General",
    coverSVG: "./assets/svg/undraw/undraw_instant_information.svg",
    socialImage: "./assets/undraw/undraw_instant_information.png",
    description: "Category " + category,
  };
}
export const AuthorDetail = [
  {
    name: "Chris Tham",
    description: "Hello World",
    contact: "chris@christham.net",
    image: "./assets/authors/Chris Tham.jpg",
  },
];

export const DefaultAuthor = {
  name: "Hello Astro",
  image: "./assets/authors/default.png",
  contact: "info@hellotham.com",
  description: "Astronaut",
};

export function authorDetail(author: string | undefined) {
  const details = AuthorDetail.filter((person) => person.name == author);

  if (details.length == 1) {
    return details[0];
  }
  return DefaultAuthor;
}

export const PAGE_SIZE = 6;

export const GITHUB_EDIT_URL = `https://github.com/hellotham/hello-astro`;

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

export type Sidebar = Record<string, { text: string; link: string }[]>;

export const SIDEBAR: Sidebar = {
  "Section Header": [
    { text: "Introduction", link: "doc/introduction" },
    { text: "Page 2", link: "doc/page-2" },
    { text: "Page 3", link: "doc/page-3" },
  ],
  "Another Section": [{ text: "Page 4", link: "doc/page-4" }],
};
