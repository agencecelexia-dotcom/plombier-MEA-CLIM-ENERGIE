export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imagePrompt: string;
  readingTime: number; // minutes
  content: string; // HTML
}

export const blogPosts: BlogPost[] = [
  {
    slug: "choisir-climatisation-2026",
    title: "Comment choisir sa climatisation en 2026 : guide complet",
    excerpt: "Split mural, multi-split, gainable… Le marché de la climatisation peut être difficile à décrypter. Voici tout ce qu'il faut savoir pour faire le bon choix selon votre logement et votre budget.",
    date: "2026-01-15",
    category: "Climatisation",
    imagePrompt: "Technicien installant une unité intérieure de climatisation murale dans un salon moderne, murs blancs, parquet bois clair, photo réaliste, ratio 16:9",
    readingTime: 6,
    content: `
<h2>Les différents types de climatisation</h2>
<p>Avant de choisir votre climatisation, il est important de comprendre les options disponibles sur le marché. Chaque solution a ses avantages selon la configuration de votre logement.</p>

<h3>Le split mural</h3>
<p>C'est la solution la plus répandue pour les particuliers. Elle se compose d'une unité intérieure murale et d'une unité extérieure. Idéale pour climatiser une pièce (salon, chambre), elle offre un excellent rapport qualité/prix avec des prix d'installation à partir de 1 300 € pour une unité de 2,5 kW.</p>

<h3>Le multi-split</h3>
<p>Vous souhaitez climatiser plusieurs pièces avec une seule unité extérieure ? Le multi-split est la solution. Une unité extérieure peut alimenter 2 à 5 unités intérieures. Avantage : un seul conduit à passer, une installation plus discrète et des économies sur l'unité extérieure.</p>

<h3>La climatisation gainable</h3>
<p>Invisible, elle distribue l'air conditionné via des gaines intégrées dans les faux-plafonds. Réservée aux maisons individuelles ou aux rénovations avec faux-plafond, elle offre un confort optimal et une discrétion totale. Comptez 5 000 € à 10 000 € selon la surface.</p>

<h2>Quelle puissance choisir ?</h2>
<p>La puissance se calcule en fonction de la surface à climatiser et de l'isolation du logement. En règle générale :</p>
<ul>
  <li><strong>Jusqu'à 25 m²</strong> : 2,0 à 2,5 kW</li>
  <li><strong>25 à 40 m²</strong> : 2,5 à 3,5 kW</li>
  <li><strong>40 à 60 m²</strong> : 3,5 à 5,0 kW</li>
  <li><strong>60 à 80 m²</strong> : 5,0 à 7,0 kW</li>
</ul>
<p>Un logement mal isolé ou exposé plein sud nécessitera une puissance supérieure d'environ 20 %.</p>

<h2>Les marques recommandées</h2>
<p>MEA Clim Énergie installe les meilleures marques du marché : <strong>Daikin</strong>, <strong>Mitsubishi Electric</strong>, <strong>Atlantic</strong>, <strong>Toshiba</strong>, <strong>Panasonic</strong>, <strong>Hitachi</strong>, <strong>Samsung</strong> et <strong>LG</strong>. Ces marques offrent des garanties de 2 à 5 ans et des COP élevés (jusqu'à A+++) qui limitent votre facture électrique.</p>

<h2>Climatisation réversible : chaleur en hiver aussi</h2>
<p>La plupart des climatisations modernes sont <strong>réversibles</strong> : elles peuvent chauffer en hiver et rafraîchir en été. C'est en fait une pompe à chaleur air-air. En hiver, pour 1 kWh électrique consommé, elles produisent 3 à 4 kWh de chaleur (COP 3 à 4). C'est 3 fois plus économique qu'un radiateur électrique classique.</p>

<h2>Ce que comprend notre installation</h2>
<p>Chez MEA Clim Énergie, notre prestation complète comprend :</p>
<ul>
  <li>Visite préalable et conseil personnalisé</li>
  <li>Fourniture et pose de l'unité intérieure et extérieure</li>
  <li>Raccordement électrique et frigorifique</li>
  <li>Passage des gaines et liaisons</li>
  <li>Mise en service et paramétrage</li>
  <li>Formation à l'utilisation</li>
  <li>Garantie installation</li>
</ul>

<h2>Conclusion</h2>
<p>Le choix de votre climatisation dépend de votre logement, de vos besoins et de votre budget. N'hésitez pas à nous contacter pour un devis gratuit et personnalisé. Michel Bernard vous conseillera sur la solution la plus adaptée à votre situation.</p>
    `.trim(),
  },
  {
    slug: "aides-pompe-chaleur-2026",
    title: "Pompe à chaleur : quelles aides financières en 2026 ?",
    excerpt: "MaPrimeRénov', CEE, éco-PTZ, TVA réduite… Le gouvernement a maintenu des aides importantes pour l'installation de pompes à chaleur en 2026. Voici le guide complet pour optimiser votre financement.",
    date: "2026-01-28",
    category: "Pompe à chaleur",
    imagePrompt: "Unite exterieure pompe a chaleur moderne blanche et argent installee dans jardin bien entretenu maison française, fond ciel bleu, photo realiste professionnelle, ratio 16:9",
    readingTime: 7,
    content: `
<h2>Les aides disponibles en 2026</h2>
<p>L'installation d'une pompe à chaleur (PAC) est l'une des rénovations énergétiques les plus aidées en France. En 2026, plusieurs dispositifs se cumulent pour réduire significativement votre investissement.</p>

<h2>MaPrimeRénov' : jusqu'à 4 000 €</h2>
<p>MaPrimeRénov' est une aide versée par l'Agence Nationale de l'Habitat (ANAH). Son montant dépend de vos revenus :</p>
<ul>
  <li><strong>Ménages très modestes (bleu)</strong> : jusqu'à 4 000 € pour une PAC air-eau</li>
  <li><strong>Ménages modestes (jaune)</strong> : jusqu'à 3 000 €</li>
  <li><strong>Ménages intermédiaires (violet)</strong> : jusqu'à 2 000 €</li>
  <li><strong>Ménages aisés (rose)</strong> : 500 €</li>
</ul>
<p><strong>Condition importante</strong> : votre installateur doit être certifié <strong>RGE QualiPAC</strong>. MEA Clim Énergie possède cette certification, vous permettant d'accéder à l'ensemble des aides.</p>

<h2>Les CEE (Certificats d'Économies d'Énergie)</h2>
<p>Les CEE sont des primes versées par les fournisseurs d'énergie (EDF, Total Énergie, etc.) en échange de vos travaux d'économies d'énergie. Pour une PAC air-eau, la prime peut atteindre <strong>2 500 €</strong> selon votre zone climatique et la puissance de l'équipement.</p>

<h2>L'éco-prêt à taux zéro (éco-PTZ)</h2>
<p>L'éco-PTZ vous permet d'emprunter jusqu'à <strong>30 000 €</strong> sans intérêts pour financer votre PAC et d'autres travaux de rénovation énergétique. Sa durée peut aller jusqu'à 15 ans. Il est accessible sans condition de ressources.</p>

<h2>La TVA réduite à 5,5 %</h2>
<p>Au lieu des 20 % habituels, les travaux d'installation de PAC dans votre résidence principale sont soumis à une <strong>TVA réduite de 5,5 %</strong>. Cette réduction s'applique à la fois sur la fourniture et la pose. Elle représente une économie d'environ 15 % sur le prix TTC total.</p>

<h2>Comment cumuler les aides ?</h2>
<p>La bonne nouvelle, c'est que ces aides sont <strong>cumulables</strong> :</p>
<ul>
  <li>MaPrimeRénov' + CEE + éco-PTZ</li>
  <li>TVA réduite applicable dans tous les cas</li>
</ul>
<p>Exemple concret : pour une PAC air-eau à 12 000 € TTC :</p>
<ul>
  <li>TVA réduite (déjà incluse) : économie de ~1 800 €</li>
  <li>MaPrimeRénov' (ménage modeste) : – 3 000 €</li>
  <li>Prime CEE : – 2 000 €</li>
  <li><strong>Reste à charge : environ 5 200 €</strong></li>
</ul>

<h2>Notre accompagnement</h2>
<p>Chez MEA Clim Énergie, nous vous accompagnons dans toutes vos démarches administratives. De la demande de MaPrimeRénov' à la récupération des primes CEE, Michel Bernard vous guide pas à pas pour maximiser vos aides.</p>
<p>Contactez-nous pour un devis gratuit qui intègre l'ensemble des aides auxquelles vous avez droit.</p>
    `.trim(),
  },
  {
    slug: "ballon-thermodynamique-rentable",
    title: "Ballon thermodynamique : vraiment rentable ? Étude de cas 2026",
    excerpt: "Un ballon thermodynamique coûte 2 000 à 3 500 € à l'installation. Est-ce vraiment rentable par rapport à un chauffe-eau électrique classique ? On fait les comptes précisément.",
    date: "2026-02-05",
    category: "Thermodynamique",
    imagePrompt: "Ballon thermodynamique blanc Atlantic ou Thermor installe dans buanderie propre, tuyauterie cuivre neuve, etiquette energie classe A, photo réaliste professionnelle, ratio 16:9",
    readingTime: 5,
    content: `
<h2>Le principe du ballon thermodynamique</h2>
<p>Un ballon thermodynamique fonctionne comme un réfrigérateur inversé : il capte les calories présentes dans l'air ambiant (air extérieur, air de la pièce) pour chauffer l'eau. Pour 1 kWh électrique consommé, il produit en moyenne 3 kWh d'eau chaude. C'est ce qu'on appelle le <strong>COP (Coefficient de Performance)</strong>, qui est de 3 en moyenne.</p>

<h2>Consommations comparées</h2>
<p>Pour une famille de 4 personnes avec une consommation annuelle d'eau chaude de 1 500 kWh :</p>
<ul>
  <li><strong>Chauffe-eau électrique classique</strong> : consomme 1 500 kWh → coût ~330 €/an</li>
  <li><strong>Ballon thermodynamique (COP 3)</strong> : consomme 500 kWh → coût ~110 €/an</li>
  <li><strong>Économies annuelles</strong> : ~220 €/an</li>
</ul>

<h2>Calcul du retour sur investissement</h2>
<p>Prix d'installation d'un ballon thermodynamique 200L : environ 2 500 € TTC (avec aides CEE déduites).</p>
<p>Économies annuelles : 220 €</p>
<p><strong>Retour sur investissement : 2 500 / 220 = 11 ans</strong></p>

<p>Mais avec les aides !</p>
<ul>
  <li>Prime CEE : – 400 à 700 €</li>
  <li>MaPrimeRénov' si éligible : – 300 à 1 200 €</li>
</ul>
<p>Reste à charge réel : 1 200 à 1 800 €</p>
<p><strong>Retour sur investissement avec aides : 5 à 8 ans</strong></p>

<h2>Durée de vie et fiabilité</h2>
<p>Un ballon thermodynamique a une durée de vie de <strong>15 à 20 ans</strong>. Sur cette période, les économies cumulées s'élèvent à 3 300 à 4 400 €, soit un bénéfice net de 1 500 à 3 200 € par rapport au chauffe-eau électrique, même sans aides.</p>

<h2>Les conditions pour être rentable</h2>
<p>Le ballon thermodynamique est particulièrement rentable dans ces configurations :</p>
<ul>
  <li>Installation dans un espace avec de l'air disponible (garage, buanderie, cave) de minimum 20 m²</li>
  <li>Température de la pièce comprise entre 5°C et 35°C</li>
  <li>Consommation d'eau chaude importante (famille ≥ 3 personnes)</li>
  <li>Remplacement d'un chauffe-eau électrique sur accumulateur</li>
</ul>

<h2>Les marques installées par MEA Clim Énergie</h2>
<p>Michel Bernard installe les meilleures marques : <strong>Atlantic</strong>, <strong>Thermor</strong>, <strong>Ariston</strong> et <strong>Daikin</strong>. Ces équipements sont tous de classe A+ ou A++ en efficacité énergétique et bénéficient de garanties constructeur de 2 à 5 ans.</p>

<h2>Verdict</h2>
<p>Oui, le ballon thermodynamique est rentable, surtout avec les aides disponibles. L'investissement est amorti en 5 à 8 ans et vous économisez ensuite entre 200 et 250 € par an sur votre facture d'électricité pendant encore 10 à 15 ans.</p>
    `.trim(),
  },
  {
    slug: "entretien-climatisation-conseils",
    title: "Entretien climatisation : fréquence, coût et conseils pratiques",
    excerpt: "Un entretien régulier de votre climatisation vous garantit de bonnes performances, une qualité d'air optimale et prolonge la durée de vie de votre équipement. Voici tout ce qu'il faut savoir.",
    date: "2026-02-12",
    category: "Climatisation",
    imagePrompt: "Technicien en uniforme bleu nettoyant les filtres d'une unite interieure de climatisation murale dans un salon lumineux, gants, chiffon, photo realiste, ratio 16:9",
    readingTime: 5,
    content: `
<h2>Pourquoi entretenir sa climatisation ?</h2>
<p>Une climatisation non entretenue peut perdre jusqu'à <strong>25 % de son efficacité</strong> en deux ans. Des filtres encrassés réduisent le débit d'air, font travailler le compresseur plus dur et augmentent votre consommation électrique. Pire, une clim sale peut devenir un foyer bactérien et dégrader la qualité de l'air de votre logement.</p>

<h2>Ce que vous pouvez faire vous-même</h2>
<h3>Nettoyage des filtres (tous les 1 à 3 mois)</h3>
<p>C'est l'opération la plus importante et la plus simple :</p>
<ol>
  <li>Éteignez l'unité intérieure</li>
  <li>Ouvrez le capot frontal en tirant vers vous</li>
  <li>Retirez les filtres (grilles plastiques alvéolées)</li>
  <li>Aspirez la poussière ou lavez à l'eau tiède</li>
  <li>Laissez sécher complètement avant de remettre en place</li>
</ol>

<h3>Nettoyage de l'unité extérieure (1 fois par an)</h3>
<p>Vérifiez que l'unité extérieure n'est pas obstruée par des feuilles, poussières ou herbes. Vous pouvez rincer délicatement les ailettes avec un jet d'eau (basse pression) si elles sont encrassées.</p>

<h2>Ce que doit faire un professionnel</h2>
<h3>Vérification du circuit frigorifique</h3>
<p>Un technicien habilité vérifie le niveau de fluide frigorigène, l'étanchéité du circuit et les pressions de service. Une fuite de fluide frigorigène est à la fois inefficace et mauvaise pour l'environnement (obligation légale de vérification tous les ans pour les équipements contenant plus de 5 tonnes CO₂ équivalent).</p>

<h3>Nettoyage de l'évaporateur et du condenseur</h3>
<p>Les échangeurs thermiques doivent être nettoyés périodiquement pour maintenir les performances. Cette opération nécessite un produit désinfectant professionnel et une manipulation soigneuse des ailettes.</p>

<h2>Fréquence et coût de l'entretien professionnel</h2>
<ul>
  <li><strong>Entretien annuel conseillé</strong> : avant la saison estivale (avril-mai)</li>
  <li><strong>Tarif MEA Clim Énergie</strong> : à partir de 80 € TTC par unité intérieure</li>
  <li><strong>Contrat d'entretien annuel</strong> : disponible sur devis pour plusieurs unités</li>
</ul>

<h2>Signes que votre clim a besoin d'un entretien urgent</h2>
<ul>
  <li>Mauvaises odeurs à la mise en marche</li>
  <li>Bruits inhabituels (claquements, sifflements)</li>
  <li>Baisse de performances (l'air soufflé est moins frais)</li>
  <li>Eau qui coule à l'intérieur (bac de condensat plein)</li>
  <li>Unité extérieure qui tourne en permanence sans refroidir</li>
</ul>

<h2>Durée de vie avec un bon entretien</h2>
<p>Une climatisation bien entretenue dure <strong>15 à 20 ans</strong>. Sans entretien, la durée de vie tombe à 8-10 ans. Le coût d'un entretien annuel de 80 € est donc largement rentabilisé par la prolongation de vie de l'équipement.</p>
    `.trim(),
  },
  {
    slug: "chauffage-electrique-vs-pompe-chaleur",
    title: "Chauffage électrique vs pompe à chaleur : quel est le meilleur choix ?",
    excerpt: "Vos radiateurs électriques vous coûtent cher ? La pompe à chaleur est-elle vraiment la solution ? Comparatif complet entre chauffage électrique classique et pompe à chaleur air-air ou air-eau.",
    date: "2026-02-18",
    category: "Chauffage",
    imagePrompt: "Split mural climatisation réversible pompe a chaleur dans salon moderne avec radiateur électrique basse consommation côté, comparaison technologie, photo réaliste, ratio 16:9",
    readingTime: 6,
    content: `
<h2>Le constat : le chauffage électrique, c'est cher</h2>
<p>En France, 35 % des logements sont chauffés à l'électricité. Le chauffage représente en moyenne 60 à 70 % de la consommation énergétique d'un foyer. Avec un prix de l'électricité qui a fortement augmenté ces dernières années, les factures de chauffage électrique peuvent atteindre <strong>1 500 à 3 000 € par an</strong> pour une maison de 100 m².</p>

<h2>Comment fonctionne le chauffage électrique classique ?</h2>
<p>Un radiateur électrique (convecteur, inertie, rayonnant) a un rendement de <strong>100 %</strong> : pour 1 kWh électrique consommé, il produit 1 kWh de chaleur. C'est la limite physique qu'on ne peut pas dépasser. Même les meilleurs radiateurs à inertie ne font pas mieux.</p>

<h2>Comment fonctionne la pompe à chaleur ?</h2>
<p>Une pompe à chaleur (PAC) capte les calories présentes dans l'air extérieur et les transfère à l'intérieur. Pour 1 kWh électrique consommé, elle produit 3 à 4 kWh de chaleur. C'est le principe de thermodynamique qui lui permet de "créer" de l'énergie à partir de l'air gratuit.</p>

<h2>Comparatif chiffré</h2>
<p>Pour une maison de 100 m², avec un besoin de chauffage de 10 000 kWh/an :</p>
<ul>
  <li><strong>Radiateurs électriques</strong> : consomment 10 000 kWh → coût ~2 200 €/an</li>
  <li><strong>PAC air-air (COP 3,5)</strong> : consomment 2 857 kWh → coût ~628 €/an</li>
  <li><strong>PAC air-eau (COP 3,2)</strong> : consomment 3 125 kWh → coût ~688 €/an</li>
</ul>
<p><strong>Économies avec une PAC : 1 500 à 1 600 €/an</strong></p>

<h2>Quel type de PAC choisir ?</h2>
<h3>PAC air-air</h3>
<p>Elle remplace les radiateurs électriques pièce par pièce avec des splits muraux. Installation plus simple et moins chère (à partir de 3 000 € pour 2 pièces). Elle chauffe en hiver et rafraîchit en été. Idéale pour les maisons sans réseau de chauffage central.</p>

<h3>PAC air-eau</h3>
<p>Elle alimente votre réseau de radiateurs ou plancher chauffant existant. Plus coûteuse à installer (8 000 à 15 000 €) mais éligible à de plus grandes aides (MaPrimeRénov' jusqu'à 4 000 €). Idéale en remplacement d'une chaudière fioul ou gaz ancienne.</p>

<h2>Le retour sur investissement</h2>
<ul>
  <li><strong>PAC air-air (3 000 €, après aides ~1 500 €)</strong> : ROI en 1 an !</li>
  <li><strong>PAC air-eau (12 000 €, après aides ~6 000 €)</strong> : ROI en 4 ans</li>
</ul>

<h2>Conclusion</h2>
<p>Si vous chauffez à l'électricité, le passage à une pompe à chaleur est l'investissement le plus rentable que vous puissiez faire. MEA Clim Énergie réalise gratuitement une étude personnalisée pour calculer vos économies potentielles et le financement optimal pour votre situation.</p>
    `.trim(),
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
