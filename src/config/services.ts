import type { Service } from "@/types";

export const services: Service[] = [
  {
    title: "Installation climatisation",
    shortDescription: "Climatiseur réversible, split system, multi-split. Pose propre et garantie.",
    description:
      "Installation de systèmes de climatisation réversible (split, multi-split, gainable) pour votre maison ou local professionnel. Marques Daikin, Mitsubishi, Atlantic, Toshiba. Devis gratuit, pose soignée, mise en service incluse.",
    icon: "Wind",
    slug: "/climatisation-installation",
  },
  {
    title: "Pompe à chaleur",
    shortDescription: "PAC air-air, air-eau. Éligible MaPrimeRénov'. Certifié RGE QualiPAC.",
    description:
      "Installation et remplacement de pompe à chaleur air-air ou air-eau pour le chauffage et le rafraîchissement. Solution écologique et économique. Certifié RGE QualiPAC : bénéficiez des aides MaPrimeRénov', CEE et de l'éco-PTZ.",
    icon: "Zap",
    slug: "/chauffage-pompe-chaleur",
  },
  {
    title: "Chauffage individuel",
    shortDescription: "Chaudière, convecteurs, plancher chauffant, entretien annuel.",
    description:
      "Installation et entretien de systèmes de chauffage individuel : chaudière gaz condensation, plancher chauffant hydraulique, radiateurs. Entretien annuel, dépannage et remplacement de votre installation de chauffage.",
    icon: "Flame",
    slug: "/chauffage",
  },
  {
    title: "Installation thermodynamique",
    shortDescription: "Ballon thermodynamique, PAC ECS. Jusqu'à 70% d'économies sur l'eau chaude.",
    description:
      "Installation de ballons thermodynamiques et systèmes de production d'eau chaude sanitaire haute performance. Réduction de votre consommation électrique jusqu'à 70%. Éligible aux aides de l'État.",
    icon: "Droplets",
    slug: "/thermodynamique",
  },
  {
    title: "Plomberie & Sanitaire",
    shortDescription: "Plomberie, robinetterie, sanitaires, mise aux normes.",
    description:
      "Travaux de plomberie courante et sanitaire : installation, remplacement et mise aux normes de robinetterie, tuyauterie, WC, éviers, douches. Intervention rapide pour les urgences : fuite, canalisation bouchée.",
    icon: "Wrench",
    slug: "/plomberie",
  },
  {
    title: "Dépannage frigorifique",
    shortDescription: "Dépannage clim, fuite frigorigène, rechargement fluide.",
    description:
      "Dépannage et maintenance de systèmes climatisation et frigorifiques. Détection et réparation de fuites de fluide frigorigène, rechargement, nettoyage des filtres. Habilitation manipulation des fluides frigorigènes.",
    icon: "Wrench",
    slug: "/depannage-plomberie",
  },
];
