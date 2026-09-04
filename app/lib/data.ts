import type { IconType } from "react-icons";
import {
  FaInstagram,
  FaGithub,
  FaPhoneAlt,
  FaGlobe,
  FaWhatsapp,
  FaFolderOpen,
} from "react-icons/fa";

export type LinkNode = {
  /** the "filename" shown in the shell */
  name: string;
  /** command alias the user can type */
  cmd: string;
  label: string;
  detail: string;
  href: string;
  internal?: boolean;
  icon: IconType;
  accent: string; // css var name
};

export const IDENTITY = {
  name: "Adham Osman",
  handle: "adham",
  host: "portfolio",
  role: "Software Engineer",
  bio: "I design and build fast, modern web experiences — from company platforms to polished product front-ends. Currently building Mega Devs.",
  location: "Egypt",
  since: 2007,
};

export const LINKS: LinkNode[] = [
  {
    name: "projects/",
    cmd: "projects",
    label: "Projects",
    detail: "portfolio & recent work",
    href: "/projects",
    internal: true,
    icon: FaFolderOpen,
    accent: "--magenta",
  },
  {
    name: "github.link",
    cmd: "github",
    label: "GitHub",
    detail: "open-source & code",
    href: "https://github.com/AdhamBinAhmed",
    icon: FaGithub,
    accent: "--text",
  },
  {
    name: "megadevs.link",
    cmd: "megadevs",
    label: "Mega Devs",
    detail: "software company — in the making",
    href: "https://megadevs.vercel.app",
    icon: FaGlobe,
    accent: "--cyan",
  },
  {
    name: "instagram.link",
    cmd: "instagram",
    label: "Instagram",
    detail: "@adham20_07",
    href: "https://www.instagram.com/adham20_07",
    icon: FaInstagram,
    accent: "--magenta",
  },
  {
    name: "whatsapp.link",
    cmd: "whatsapp",
    label: "WhatsApp",
    detail: "let's talk",
    href: "https://wa.me/201023382444",
    icon: FaWhatsapp,
    accent: "--green",
  },
  {
    name: "call.link",
    cmd: "call",
    label: "Call",
    detail: "+20 102 338 2444",
    href: "tel:+201023382444",
    icon: FaPhoneAlt,
    accent: "--amber",
  },
];

export type Project = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  href: string;
  status: "live" | "wip";
  accent: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "mega-devs",
    title: "Mega Devs",
    description:
      "A modern software-engineering company platform — the home base for top-tier digital solutions and the team behind them.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    href: "https://megadevs.vercel.app",
    status: "live",
    accent: "--cyan",
  },
  {
    slug: "kira-decoration",
    title: "Kira Decoration",
    description:
      "An elegant, premium storefront + portfolio for a decoration brand, featuring smooth motion and 3D-flavoured interactions.",
    tech: ["Next.js", "Framer Motion", "Tailwind"],
    href: "https://kiradecoration.vercel.app",
    status: "live",
    accent: "--amber",
  },
  {
    slug: "mega-roms",
    title: "Mega ROMs",
    description:
      "A repository and download platform for custom Android ROMs, with developer resources and a clean browsing experience.",
    tech: ["React", "Web Platform", "UI/UX"],
    href: "https://roms.megadevs.site/",
    status: "live",
    accent: "--green",
  },
];
