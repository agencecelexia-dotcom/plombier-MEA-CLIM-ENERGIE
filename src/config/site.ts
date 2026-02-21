export const siteConfig = {
  name: "MEA Clim Énergie",
  legalName: "MEA Clim Énergie",
  description:
    "Installateur climatisation, pompe à chaleur et chauffage. Installation, entretien, dépannage frigorifique. Devis gratuit.",
  url: "https://www.meaclimenergie.fr",
  phone: "07 50 26 49 98",
  phoneHref: "tel:+33750264998",
  email: "mea.clim@gmail.com",
  address: {
    street: "1286 Route du Bas Privas",
    city: "Charly",
    postalCode: "69390",
    region: "Auvergne-Rhône-Alpes",
    country: "France",
  },
  openingHours: {
    weekdays: "8h - 19h",
    saturday: "9h - 17h",
    sunday: "Fermé",
    emergency: "7j/7 sur rendez-vous",
  },
  social: {
    facebook: "https://facebook.com/meaclimenergie",
    instagram: "https://instagram.com/meaclimenergie",
    google: "https://g.page/mea-clim-energie",
  },
  siret: "",
  rge: "Certifié RGE QualiPAC",
  assuranceDecennale: "",
  yearsExperience: 10,
  interventionsCount: 500,
  googleRating: 4.9,
  googleReviewCount: 48,
  foundedYear: 2015,
  founder: "Michel Bernard",
} as const;

export type SiteConfig = typeof siteConfig;
