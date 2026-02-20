import type { FAQ } from "@/types";

export const faqGeneral: FAQ[] = [
  {
    question: "Vos devis sont-ils gratuits ?",
    answer:
      "Oui, tous nos devis sont gratuits et sans engagement. Nous nous déplaçons pour évaluer vos besoins et vous remettons un devis détaillé sous 48h. Appelez-nous au 07 50 26 49 98.",
  },
  {
    question: "Êtes-vous certifié RGE ?",
    answer:
      "Oui, MEA Clim Énergie est certifié RGE QualiPAC. Cette certification est indispensable pour que vous puissiez bénéficier des aides de l'État : MaPrimeRénov', CEE, éco-PTZ.",
  },
  {
    question: "Êtes-vous assuré ?",
    answer:
      "Oui, nous disposons d'une responsabilité civile professionnelle et d'une assurance décennale pour toutes nos interventions. Vous pouvez nous demander les attestations sur simple demande.",
  },
  {
    question: "Quels modes de paiement acceptez-vous ?",
    answer:
      "Nous acceptons le paiement par chèque, virement bancaire et espèces. Un acompte peut être demandé pour les travaux importants.",
  },
];

export const faqDepannage: FAQ[] = [
  {
    question: "Intervenez-vous en urgence sur une climatisation en panne ?",
    answer:
      "Oui, nous intervenons rapidement pour les dépannages de climatisation et de systèmes frigorifiques. Contactez-nous au 07 50 26 49 98 pour convenir d'un rendez-vous au plus tôt.",
  },
  {
    question: "Qu'est-ce que le dépannage frigorifique ?",
    answer:
      "Le dépannage frigorifique concerne les systèmes de climatisation et de froid : recherche et réparation de fuites de fluide frigorigène, remplacement de compresseurs défaillants, nettoyage des échangeurs, rechargement des circuits.",
  },
  {
    question: "Mon climatiseur ne refroidit plus, que faire ?",
    answer:
      "Plusieurs causes possibles : fuite de fluide frigorigène, filtre encrassé, problème électrique ou compresseur défaillant. Appelez-nous : nous effectuons un diagnostic précis avant toute intervention.",
  },
];

export const faqPlomberie: FAQ[] = [
  {
    question: "Intervenez-vous pour des petits travaux de plomberie ?",
    answer:
      "Oui, nous intervenons pour tous types de travaux de plomberie : remplacement de robinetterie, réparation de fuite, installation de douche, raccordement sanitaire. Contactez-nous pour un devis.",
  },
  {
    question: "Faites-vous aussi les sanitaires (WC, douche, lavabo) ?",
    answer:
      "Oui, nous installons et remplaçons tous les équipements sanitaires : WC suspendu ou au sol, douche, baignoire, lavabo, évier. Fourniture des matériaux et pose sur devis.",
  },
];

export const faqClimatisation: FAQ[] = [
  {
    question: "Quelle marque de climatisation installez-vous ?",
    answer:
      "Nous travaillons avec les grandes marques du marché : Daikin, Mitsubishi Electric, Atlantic, Toshiba, Hitachi. Nous vous conseillons le modèle adapté à votre surface et à vos besoins.",
  },
  {
    question: "Combien coûte l'installation d'un climatiseur ?",
    answer:
      "Le prix varie selon le modèle et la configuration : comptez entre 1 200 et 2 500 euros pour un split mural standard, fourniture et pose incluses. Devis gratuit sur demande.",
  },
  {
    question: "Faut-il entretenir sa climatisation chaque année ?",
    answer:
      "Oui, un entretien annuel est recommandé : nettoyage des filtres, vérification des pressions, contrôle des raccords frigorifiques. Cela prolonge la durée de vie de l'appareil et maintient ses performances.",
  },
];

export const faqChauffage: FAQ[] = [
  {
    question: "L'entretien de la chaudière est-il obligatoire ?",
    answer:
      "Oui, l'entretien annuel de votre chaudière (gaz, fioul, bois) est obligatoire selon le décret du 9 juin 2009. Il garantit votre sécurité et optimise les performances de votre appareil.",
  },
  {
    question: "Combien coûte l'installation d'une pompe à chaleur ?",
    answer:
      "Le coût varie entre 8 000 et 15 000 euros selon le modèle et la puissance. De nombreuses aides existent : MaPrimeRénov', CEE, éco-prêt à taux zéro. Certifié RGE, nous vous aidons à monter votre dossier.",
  },
  {
    question: "Quelle économie réalise-t-on avec une pompe à chaleur ?",
    answer:
      "Une PAC air-eau peut diviser par 3 ou 4 votre facture de chauffage par rapport à une chaudière électrique, et par 2 par rapport au gaz. Le retour sur investissement est généralement atteint en 5 à 8 ans.",
  },
];

export const faqThermodynamique: FAQ[] = [
  {
    question: "Qu'est-ce qu'un ballon thermodynamique ?",
    answer:
      "Un ballon thermodynamique produit l'eau chaude sanitaire en captant les calories de l'air ambiant via une pompe à chaleur intégrée. Il consomme jusqu'à 3 fois moins d'électricité qu'un chauffe-eau classique.",
  },
  {
    question: "Le ballon thermodynamique est-il éligible aux aides ?",
    answer:
      "Oui, il est éligible aux Certificats d'Économies d'Énergie (CEE) et parfois à MaPrimeRénov' selon votre situation. L'investissement (1 800 - 3 500 euros) est amorti en 3 à 5 ans.",
  },
];

// Alias pour compatibilité avec les pages existantes
export const faqSalleDeBain: FAQ[] = [];
export const faqChauffeEau: FAQ[] = faqThermodynamique;
