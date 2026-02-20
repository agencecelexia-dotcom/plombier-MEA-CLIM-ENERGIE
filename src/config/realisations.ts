import type { Realisation } from "@/types";

export const realisations: Realisation[] = [
  {
    id: "clim-maison-individuelle",
    title: "Installation climatisation maison",
    category: "Climatisation",
    city: "votre secteur",
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
    city: "votre secteur",
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
    category: "Thermodynamique",
    city: "votre secteur",
    description:
      "Installation d'un ballon thermodynamique en remplacement d'un chauffe-eau électrique vieillissant. Réduction de 70% de la consommation d'eau chaude sanitaire.",
    beforePrompt:
      "Vieux chauffe-eau électrique encrassé dans placard technique, tuyaux oxydés, photo réaliste, ratio 4:3",
    afterPrompt:
      "Ballon thermodynamique neuf blanc dans placard propre, tuyauterie cuivre neuve, étiquette énergie A+++, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "clim-multi-split",
    title: "Multi-split 3 pièces",
    category: "Climatisation",
    city: "votre secteur",
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
    title: "Chauffage individuel gaz",
    category: "Chauffage",
    city: "votre secteur",
    description:
      "Installation d'une chaudière gaz à condensation dernière génération avec thermostat connecté. Entretien annuel inclus la première année.",
    beforePrompt:
      "Vieille chaudière gaz murale encrassée 20 ans, tuyaux anciens, thermostat analogique, photo réaliste, ratio 4:3",
    afterPrompt:
      "Chaudière gaz condensation murale blanche moderne, écran digital, tuyauterie cuivre propre, thermostat connecté Netatmo, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "plomberie-sanitaire",
    title: "Réfection plomberie sanitaire",
    category: "Plomberie",
    city: "votre secteur",
    description:
      "Remplacement complet de la tuyauterie d'une salle de bain avec installation d'une douche et d'un lavabo encastré. Travail soigné, délai respecté.",
    beforePrompt:
      "Salle de bain avec tuyauterie apparente rouillée, robinet qui goutte, sol mouillé, photo réaliste, ratio 4:3",
    afterPrompt:
      "Salle de bain rénovée avec tuyauterie neuve encastrée, robinetterie chromée moderne, sol sec et propre, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "depannage-clim",
    title: "Dépannage climatisation",
    category: "Dépannage",
    city: "votre secteur",
    description:
      "Intervention de dépannage sur un climatiseur qui ne refroidissait plus. Détection de la fuite de fluide frigorigène, remplacement du détendeur et rechargement.",
    beforePrompt:
      "Unité extérieure climatisation couverte de glace, unité intérieure affichant erreur sur écran, photo réaliste, ratio 4:3",
    afterPrompt:
      "Climatiseur réparé fonctionnel, technicien en train de tester avec manomètre, unité propre et fonctionnelle, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
];
