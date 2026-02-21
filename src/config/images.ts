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
// Réalisations avant/après — toutes les photos Aqualeo (cohérentes)
// ============================================================
export const realisationImages: Record<string, string> = {
  "sdb-villeurbanne-before":          "/images/realisations/real-sdb-paris15-before.jpeg",
  "sdb-villeurbanne-after":           "/images/realisations/real-sdb-paris15-after.jpeg",
  "cuisine-lyon3-before":             "/images/realisations/real-cuisine-versailles-before.jpeg",
  "cuisine-lyon3-after":              "/images/realisations/real-cuisine-versailles-after.jpeg",
  "chauffe-eau-caluire-before":       "/images/realisations/real-fuite-boulogne-before.jpeg",
  "chauffe-eau-caluire-after":        "/images/realisations/real-fuite-boulogne-after.jpeg",
  "pac-bron-before":                  "/images/realisations/real-adduction-massy-before.jpeg",
  "pac-bron-after":                   "/images/realisations/real-adduction-massy-after.jpeg",
  "sdb-pmr-lyon6-before":             "/images/realisations/real-wc-levallois-before.jpeg",
  "sdb-pmr-lyon6-after":             IMG_SDB_PMR,
  "chaudiere-tassin-before":          "/images/realisations/real-tuyauterie-saintdenis-before.jpeg",
  "chaudiere-tassin-after":          IMG_CHAUDIERE_GAZ,
  "douche-lyon7-before":              "/images/realisations/real-robinetterie-creteil-before.jpeg",
  "douche-lyon7-after":               "/images/realisations/real-robinetterie-creteil-after.jpeg",
  "plancher-chauffant-ecully-before": "/images/realisations/real-debouchage-issy-before.jpeg",
  "plancher-chauffant-ecully-after":  "/images/realisations/real-debouchage-issy-after.jpeg",
  "depannage-lyon2-before":          IMG_FUITE_EAU,
  "depannage-lyon2-after":            "/images/realisations/real-fuite-vincennes-after.png",
  "sdb-complete-oullins-before":      "/images/realisations/real-appartneuf-nanterre-before.png",
  "sdb-complete-oullins-after":      IMG_RENOVATION_SDB,
};
