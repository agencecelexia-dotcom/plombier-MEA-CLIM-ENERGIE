/**
 * Mapping des images du site — MEA Clim Énergie.
 *
 * Photos spécifiques clim/chauffage : prises dans MEA (chauffage.jpeg, chauffe-eau.jpeg, pac, etc.)
 * Photos génériques, plomberie, réalisations : viennent du repo Aqualeo (coherentes)
 */

// ============================================================
// Images partagées (1 fichier → plusieurs emplacements)
// ============================================================

/** 21:9 — heroes blog, avis-clients, contact, a-propos, realisations + section cta-bandeau */
const HERO_GENERIQUE = "/images/heroes/hero-generique.jpeg";

/** 16:9 — hero plomberie + section tuyauterie */
const IMG_PLOMBERIE_HERO = "/images/heroes/hero-plomberie.png";

/** 16:9 — hero renovation-sdb + page renovation-complete + realisation sdb-oullins-after */
const IMG_RENOVATION_SDB = "/images/heroes/hero-installation-sanitaire.png";

/** 4:3 — page douche-italienne + realisation douche-lyon7-after */
const IMG_DOUCHE_ITALIENNE = "/images/pages/page-douche-italienne.png";

/** 3:2 — page PMR + realisation sdb-pmr-lyon6-after */
const IMG_SDB_PMR = "/images/pages/page-wc-suspendu.jpeg";

/** 3:2 — page chaudiere-gaz + realisation chaudiere-tassin-after (MEA spécifique) */
const IMG_CHAUDIERE_GAZ = "/images/pages/chauffage-chaudiere-gaz.jpeg";

/** 3:2 — page plancher-chauffant + realisation plancher-ecully-after (MEA spécifique) */
const IMG_PLANCHER_CHAUFFANT = "/images/pages/chauffage-plancher-chauffant.jpeg";

/** 4:3 — section urgence-card + realisation depannage-lyon2-before */
const IMG_FUITE_EAU = "/images/sections/section-urgence-fuite.jpeg";

// ============================================================
// Hero pages
// ============================================================
export const heroImages: Record<string, string> = {
  "accueil":             "/images/heroes/hero-accueil.jpeg",        // Aqualeo — générique pro
  "depannage-plomberie": "/images/heroes/hero-depannage.jpeg",       // Aqualeo — dépannage
  "plomberie":           IMG_PLOMBERIE_HERO,                         // Aqualeo — plomberie
  "renovation-sdb":      IMG_RENOVATION_SDB,                         // Aqualeo — installation sanitaire
  "chauffage":           "/images/heroes/chauffage.jpeg",            // MEA — clim/chauffage spécifique
  "chauffe-eau":         "/images/heroes/chauffe-eau.jpeg",          // MEA — ballon thermodynamique
  "blog":                HERO_GENERIQUE,
  "avis-clients":        HERO_GENERIQUE,
  "contact":             HERO_GENERIQUE,
  "a-propos":            HERO_GENERIQUE,
  "realisations":        HERO_GENERIQUE,
};

// ============================================================
// Sections
// ============================================================
export const sectionImages: Record<string, string> = {
  "cta-bandeau":  HERO_GENERIQUE,
  "urgence-card": IMG_FUITE_EAU,                               // Aqualeo — fuite urgence
  "projet-card":  "/images/sections/section-projet-sdb.jpeg",  // Aqualeo — projet salle de bain
};

// ============================================================
// Pages spécifiques
// ============================================================
export const pageImages: Record<string, string> = {
  // A propos
  "a-propos-fondateur":           "/images/pages/a-propos-fondateur.jpeg",       // MEA — Michel Bernard
  "a-propos-equipe":              "/images/pages/page-artisan-camionnette.jpeg",  // Aqualeo — artisan camionnette

  // Plomberie
  "plomberie-robinetterie":       "/images/pages/page-robinetterie.jpeg",         // Aqualeo
  "plomberie-tuyauterie":         IMG_PLOMBERIE_HERO,                             // Aqualeo
  "plomberie-recherche-fuite":    "/images/pages/page-recherche-fuite.jpeg",      // Aqualeo
  "plomberie-mise-aux-normes":    IMG_SDB_PMR,                                    // Aqualeo

  // Renovation salle de bain
  "renovation-douche-italienne":  IMG_DOUCHE_ITALIENNE,                           // Aqualeo
  "renovation-complete":          IMG_RENOVATION_SDB,                             // Aqualeo
  "renovation-pmr":               IMG_SDB_PMR,                                    // Aqualeo

  // Chauffage (MEA spécifiques — photos clim/PAC)
  "chauffage-chaudiere-gaz":      IMG_CHAUDIERE_GAZ,                              // MEA
  "chauffage-pac":                "/images/pages/chauffage-pac.jpeg",             // MEA
  "chauffage-plancher-chauffant": IMG_PLANCHER_CHAUFFANT,                         // MEA
};

// ============================================================
// Réalisations avant/après — photos générées MEA Clim Énergie
// ============================================================
export const realisationImages: Record<string, string> = {
  // Climatisation
  "clim-maison-individuelle-before":  "/images/realisations/real-clim-maison-before.jpeg",
  "clim-maison-individuelle-after":   "/images/realisations/real-clim-maison-after.jpeg",
  "clim-multi-split-before":          "/images/realisations/real-multi-split-before.jpeg",
  "clim-multi-split-after":           "/images/realisations/real-multi-split-after.jpeg",
  // Chauffage
  "pac-air-eau-maison-before":        "/images/realisations/real-pac-before.jpeg",
  "pac-air-eau-maison-after":         "/images/realisations/real-pac-after.jpeg",
  "chauffage-individuel-before":      "/images/realisations/real-chaudiere-before.jpeg",
  "chauffage-individuel-after":       "/images/realisations/real-chaudiere-after.jpeg",
  // Chauffe-eau
  "ballon-thermodynamique-before":    "/images/realisations/real-ballon-thermo-before.jpeg",
  "ballon-thermodynamique-after":     "/images/realisations/real-ballon-thermo-after.jpeg",
  "chauffe-eau-solaire-before":       "/images/realisations/real-chauffe-eau-solaire-before.jpeg",
  "chauffe-eau-solaire-after":        "/images/realisations/real-chauffe-eau-solaire-after.jpeg",
  // Salle de bain
  "renovation-salle-de-bain-before":  "/images/realisations/real-sdb-before.jpeg",
  "renovation-salle-de-bain-after":   "/images/realisations/real-sdb-after.jpeg",
  "douche-italienne-before":          "/images/realisations/real-douche-before.jpeg",
  "douche-italienne-after":           "/images/realisations/real-douche-after.jpeg",
  // Dépannage
  "depannage-clim-before":            "/images/realisations/real-depannage-before.jpeg",
  "depannage-clim-after":             "/images/realisations/real-depannage-after.jpeg",
};
