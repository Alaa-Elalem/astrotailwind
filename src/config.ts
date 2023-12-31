import type { CollectionEntry } from "astro:content";

export type Frontmatter = CollectionEntry<"blog">["data"];

export interface TagType {
  tag: string;
  count: number;
  pages: CollectionEntry<"blog">[];
}

export const SiteMetadata = {
  title: "شركة دراهم للوساطة و التجارة الالكترونية",
  description:
    "شركة متخصصة في التجارة الالكترونية وقي تطوير بيئة عمل المواقع وتطبيقات الجوال",
  author: {
    name: "darahem",
    twitter: "@Darahem_ly",
    url: "https://darahem.ly",
    email: "info@darahem.ly",
    summary: "موقع متخصص بخدمات الدفع الالكتروني ,والمنتجات الرقمية",
  },
  org: {
    name: "Darahem Co",
    twitter: "@darahem.ly",
    url: "https://darahem.ly",
    email: "info@darahem.ly",
    summary: "موقع متخصص بخدمات الدفع الالكتروني ,والمنتجات الرقمية",
  },
  location: "طرابلس ليبيا",
  latlng: [-33.86785, 151.20732] as [number, number],
  repository: "",
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
      link: "https://www.instagram.com/406062//",
      icon: "instagram",
    },
    {
      name: "Twitter",
      link: "https://twitter.com/Darahem_ly",
      icon: "twitter",
    },
    // {
    //   name: "Github",
    //   link: "https://github.com/hellothamcom",
    //   icon: "github",
    // },
    {
      name: "WhatsUp",
      link: "https://wa.me/+218916656699",
      icon: "whatsapp-outline",
    },
    {
      name: "tiktok",
      link: "https://www.tiktok.com/@darahem_ly",
      icon: "tiktok2",
    },
  ],
  buildTime: new Date(),
};

export { default as Logo } from "./assets/favicon.svg";
export { default as LogoImage } from "./assets/svg/darahem/darahem.svg";
export { default as FeaturedSVG } from "./assets/svg/darahem/herepbg.svg";
export { default as DefaultSVG } from "./assets/svg/darahem/darahem.svg";
export { default as DefaultImage } from "./assets/svg/darahem/darahem.jpg";

export const NavigationLinks = [
  { name: "الصفحة الرئيسية", href: "/" },
  { name: " من نحن", href: "#" },
  { name: "خدماتنا", href: "#serv" },
  { name: " اعمالنا", href: "#jobs" },
  // { name: "تواصل معنا", href: "#" },
  {
    name: " نموذج طلب الخدمة",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSd-dJWdJfnX2HQxJ4HkNuCbSLOi9SyzhLbScDEInoHuiKRIng/viewform?usp=sf_link",
  },
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
    name: "darahem",
    description: "Darahem Co",
    contact: "info@darahem.ly",
    image: "./assets/authors/darahem.jpg",
  },
];

export const DefaultAuthor = {
  name: "darahem admin",
  image: "./assets/authors/default.png",
  contact: "info@darahem.ly",
  description: "darahem Co",
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
