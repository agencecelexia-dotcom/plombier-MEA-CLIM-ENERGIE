import type { Realisation } from "@/types";

export const realisations: Realisation[] = [
  {
    id: "clim-maison-individuelle",
    title: "Installation climatisation maison",
    category: "Climatisation",
    city: "Charly",
    description:
      "Installation d'un système de climatisation réversible split Daikin dans une maison individuelle. Pose de l'unité extérieure, passage des liaisons frigorifiques et mise en service complète.",
    beforePrompt:
      "Salon maison individuelle française, chaleur étouffante, ventilateur posé au sol, rideaux fermés, photo réaliste, ratio 4:3",
    afterPrompt:
      "Salon moderne avec unité intérieure climatisation murale Daikin blanche installée proprement, intérieur frais et lumineux, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "pac-air-eau-maison",
    title: "Pompe à chaleur air-eau",
    category: "Chauffage",
    city: "Givors",
    description:
      "Remplacement d'une vieille chaudière fioul par une pompe à chaleur air-eau Atlantic. Éligible MaPrimeRénov'. Économies de 60% sur la facture de chauffage.",
    beforePrompt:
      "Vieille chaudière fioul volumineuse dans buanderie sombre, tuyaux rouillés et encrassés, photo réaliste, ratio 4:3",
    afterPrompt:
      "Pompe à chaleur air-eau Atlantic blanche moderne installée dans buanderie propre, écran digital, tuyauterie cuivre neuve, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "ballon-thermodynamique",
    title: "Ballon thermodynamique",
    category: "Chauffe-eau",
    city: "Vernaison",
    description:
      "Installation d'un ballon thermodynamique en remplacement d'un chauffe-eau électrique vieillissant. Réduction de 70% de la consommation d'eau chaude sanitaire.",
    beforePrompt:
      "Vieux chauffe-eau électrique encrassé dans placard technique, tuyaux oxydés, photo réaliste, ratio 4:3",
    afterPrompt:
      "Ballon thermodynamique neuf blanc dans placard propre, tuyauterie cuivre neuve, étiquette énergie A+++, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "chauffe-eau-solaire",
    title: "Chauffe-eau solaire thermique",
    category: "Chauffe-eau",
    city: "Millery",
    description:
      "Installation d'un chauffe-eau solaire thermique sur une maison individuelle. Panneaux solaires thermiques en toiture, ballon 300L. Couverture de 70% des besoins en eau chaude.",
    beforePrompt:
      "Toit de maison sans panneau solaire, chauffe-eau électrique standard dans garage, photo réaliste, ratio 4:3",
    afterPrompt:
      "Panneaux solaires thermiques installés proprement sur toit, ballon de stockage 300L dans garage propre, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "renovation-salle-de-bain",
    title: "Rénovation salle de bain complète",
    category: "Salle de bain",
    city: "Charly",
    description:
      "Rénovation complète d'une salle de bain : douche à l'italienne, carrelage, robinetterie design. Plomberie entièrement refaite. Résultat moderne et fonctionnel.",
    beforePrompt:
      "Vieille salle de bain avec baignoire en céramique jaunie, carrelage ancien, robinets rouillés, photo réaliste, ratio 4:3",
    afterPrompt:
      "Salle de bain moderne rénovée avec douche italienne à paroi vitrée, grand format carrelage gris, robinetterie noire mate, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "douche-italienne",
    title: "Pose douche à l'italienne",
    category: "Salle de bain",
    city: "Grigny",
    description:
      "Transformation d'une ancienne baignoire en douche à l'italienne avec receveur extra-plat et paroi vitrée. Travaux de plomberie et carrelage compris.",
    beforePrompt:
      "Salle de bain avec vieille baignoire fonte, carrelage beige années 80, tuyauterie apparente, photo réaliste, ratio 4:3",
    afterPrompt:
      "Douche italienne moderne avec receveur extra-plat, paroi vitrée, carrelage grand format blanc, robinetterie chromée, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "clim-multi-split",
    title: "Multi-split 3 pièces",
    category: "Climatisation",
    city: "Irigny",
    description:
      "Installation d'un système multi-split Mitsubishi Electric pour climatiser 3 pièces avec une seule unité extérieure. Devis gratuit, installation soignée.",
    beforePrompt:
      "Appartement moderne avec 3 pièces sans climatisation, chaleur visible, photo réaliste, ratio 4:3",
    afterPrompt:
      "Appartement avec 3 unités intérieures climatisation murale Mitsubishi bien installées, intérieur frais et confortable, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "chauffage-individuel",
    title: "Chaudière gaz condensation",
    category: "Chauffage",
    city: "Ternay",
    description:
      "Installation d'une chaudière gaz à condensation dernière génération avec thermostat connecté Netatmo. Entretien annuel inclus la première année.",
    beforePrompt:
      "Vieille chaudière gaz murale encrassée 20 ans, tuyaux anciens, thermostat analogique, photo réaliste, ratio 4:3",
    afterPrompt:
      "Chaudière gaz condensation murale blanche moderne, écran digital, tuyauterie cuivre propre, thermostat connecté Netatmo, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "depannage-clim",
    title: "Dépannage climatisation",
    category: "Dépannage",
    city: "Saint-Symphorien-d'Ozon",
    description:
      "Intervention de dépannage sur un climatiseur qui ne refroidissait plus. Détection de la fuite de fluide frigorigène, remplacement du détendeur et rechargement.",
    beforePrompt:
      "Unité extérieure climatisation couverte de glace, unité intérieure affichant erreur sur écran, photo réaliste, ratio 4:3",
    afterPrompt:
      "Climatiseur réparé fonctionnel, technicien en train de tester avec manomètre, unité propre et fonctionnelle, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
];
