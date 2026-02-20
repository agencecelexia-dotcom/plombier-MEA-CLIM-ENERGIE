import type { NavItem } from "@/types";

export const mainNavItems: NavItem[] = [
  { label: "Accueil", href: "/" },
  {
    label: "Services",
    href: "#",
    children: [
      { label: "Installation climatisation", href: "/climatisation-installation" },
      { label: "Pompe à chaleur", href: "/chauffage-pompe-chaleur" },
      { label: "Chauffage individuel", href: "/chauffage" },
      { label: "Installation thermodynamique", href: "/thermodynamique" },
      { label: "Plomberie & Sanitaire", href: "/plomberie" },
      { label: "Dépannage frigorifique", href: "/depannage-plomberie" },
    ],
  },
  { label: "Réalisations", href: "/realisations" },
  { label: "Avis clients", href: "/avis-clients" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

export const footerNavItems: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "Réalisations", href: "/realisations" },
  { label: "Avis clients", href: "/avis-clients" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
  { label: "Mentions légales", href: "/mentions-legales" },
];

export const serviceNavItems: NavItem[] = [
  { label: "Installation climatisation", href: "/climatisation-installation" },
  { label: "Pompe à chaleur", href: "/chauffage-pompe-chaleur" },
  { label: "Chauffage individuel", href: "/chauffage" },
  { label: "Installation thermodynamique", href: "/thermodynamique" },
  { label: "Plomberie & Sanitaire", href: "/plomberie" },
  { label: "Dépannage frigorifique", href: "/depannage-plomberie" },
];
