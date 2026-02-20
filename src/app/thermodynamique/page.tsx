import type { Metadata } from "next";
import Link from "next/link";
import { Droplets, Zap, TrendingDown, ShieldCheck, CheckCircle } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import { SectionContainer } from "@/components/sections/SectionContainer";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { faqThermodynamique } from "@/config/faq";
import { heroImages, pageImages } from "@/config/images";

export const metadata: Metadata = generatePageMetadata({
  title: `Installation thermodynamique | Ballon thermodynamique, PAC ECS — MEA Clim Énergie`,
  description: `Installation de ballons thermodynamiques et PAC eau chaude sanitaire par MEA Clim Énergie — Michel Bernard. Économies jusqu'à 70% sur l'eau chaude. Éligible CEE. Devis gratuit — ${siteConfig.phone}.`,
  path: "/thermodynamique",
});

const solutionsThermo = [
  {
    icon: Droplets,
    title: "Ballon thermodynamique",
    desc: "Le ballon thermodynamique fonctionne comme un réfrigérateur inversé : il capte les calories de l'air ambiant pour chauffer l'eau. COP moyen de 3 : pour 1 kWh électrique consommé, 3 kWh d'eau chaude produits. Économies de 60 à 70% par rapport à un chauffe-eau électrique classique.",
    image: "Ballon thermodynamique neuf blanc installe dans buanderie propre, tuyauterie cuivre neuve, etiquette energie A plus, photo realiste, ratio 3:2",
    imageKey: "chauffage-pac",
  },
  {
    icon: Zap,
    title: "PAC eau chaude sanitaire",
    desc: "Système plus puissant que le simple ballon thermodynamique, la PAC ECS peut être couplée à votre réseau de chauffage central pour produire à la fois l'eau chaude sanitaire et participer au chauffage. Solution idéale pour les grandes maisons et les logements collectifs.",
    image: "Systeme PAC eau chaude sanitaire installe dans local technique, tuyauterie bien rangee et étiquetée, photo realiste, ratio 3:2",
    imageKey: "chauffage-chaudiere-gaz",
  },
];

const comparaison = [
  { critere: "Consommation électrique annuelle", electrique: "1 500 kWh", thermodynamique: "500 kWh" },
  { critere: "Coût annuel (0,20 EUR/kWh)", electrique: "300 EUR/an", thermodynamique: "100 EUR/an" },
  { critere: "Économies annuelles", electrique: "—", thermodynamique: "+200 EUR/an" },
  { critere: "Retour sur investissement", electrique: "—", thermodynamique: "4-6 ans" },
  { critere: "Bilan carbone", electrique: "Élevé", thermodynamique: "Faible" },
];

const avantages = [
  "Remplacement simple du chauffe-eau existant",
  "Éligible aux Certificats d'Économies d'Énergie (CEE)",
  "Parfois éligible MaPrimeRénov'",
  "Durée de vie : 15-20 ans",
  "Entretien annuel simple",
  "Fonctionne jusqu'à -7°C extérieur",
  "Toutes marques : Atlantic, Thermor, Ariston, Daikin",
  "Devis gratuit sous 48h",
];

export default function ThermodynamiquePage() {
  return (
    <ServicePageLayout
      hero={{
        title: "Installation thermodynamique — Eau chaude économique et écologique",
        subtitle: "MEA Clim Énergie installe votre ballon thermodynamique. Jusqu'à 70% d'économies sur votre eau chaude sanitaire.",
        imagePlaceholder: {
          prompt: "Technicien installant un ballon thermodynamique blanc dans une buanderie moderne, outils professionnels, installation soignée, photo réaliste, ratio 16:9",
          aspectRatio: "16/9",
          src: heroImages["chauffe-eau"] || undefined,
        },
        badges: ["Économies 70%", "Éligible CEE", "Devis gratuit"],
      }}
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Installation thermodynamique" },
      ]}
      faqs={faqThermodynamique}
    >
      {/* Solutions */}
      <SectionContainer>
        <SectionHeading
          title="Nos solutions thermodynamiques"
          subtitle="Choisissez la solution adaptée à votre logement pour produire votre eau chaude de façon économique et écologique."
        />
        <div className="space-y-12">
          {solutionsThermo.map((s, i) => (
            <div key={s.title} className="grid lg:grid-cols-2 gap-8 items-center">
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <s.icon className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold text-neutral-900">{s.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <ImagePlaceholder prompt={s.image} src={pageImages[s.imageKey] || undefined} aspectRatio="3/2" alt={s.title} />
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Comparaison */}
      <SectionContainer variant="gray">
        <SectionHeading
          title="Chauffe-eau électrique vs thermodynamique"
          subtitle="Pourquoi passer au thermodynamique ? Les chiffres parlent d'eux-mêmes."
        />
        <div className="max-w-3xl mx-auto">
          <div className="rounded-xl border overflow-hidden">
            <div className="grid grid-cols-3 bg-neutral-800 text-white text-sm font-semibold px-6 py-3">
              <span>Critère</span>
              <span className="text-center">Électrique classique</span>
              <span className="text-center text-accent-300">Thermodynamique</span>
            </div>
            {comparaison.map((row, i) => (
              <div key={row.critere} className={`grid grid-cols-3 px-6 py-4 text-sm ${i % 2 === 0 ? "bg-muted/50" : ""}`}>
                <span className="font-medium">{row.critere}</span>
                <span className="text-center text-muted-foreground">{row.electrique}</span>
                <span className="text-center font-semibold text-accent-500">{row.thermodynamique}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* Avantages + stat */}
      <SectionContainer variant="white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading title="Avantages du ballon thermodynamique" centered={false} />
            <div className="space-y-3 mt-6">
              {avantages.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <Card>
            <CardContent className="p-8 text-center">
              <TrendingDown className="w-16 h-16 text-accent-500 mx-auto mb-4" />
              <p className="text-5xl font-bold text-neutral-900 mb-2">-70%</p>
              <p className="text-muted-foreground">de consommation électrique pour l&apos;eau chaude sanitaire</p>
              <div className="mt-6 pt-6 border-t space-y-3">
                <div>
                  <p className="text-2xl font-bold text-neutral-900">COP 3</p>
                  <p className="text-sm text-muted-foreground">coefficient de performance moyen</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-neutral-900">4-6 ans</p>
                  <p className="text-sm text-muted-foreground">retour sur investissement</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </SectionContainer>

      {/* Aides */}
      <SectionContainer variant="gray">
        <div className="max-w-3xl mx-auto text-center">
          <ShieldCheck className="w-16 h-16 text-accent-500 mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mb-4">
            Aides financières disponibles
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            L&apos;installation d&apos;un ballon thermodynamique est éligible aux Certificats d&apos;Économies d&apos;Énergie (CEE) et parfois à MaPrimeRénov&apos; selon votre situation. MEA Clim Énergie, certifié RGE, vous accompagne dans le montage de votre dossier d&apos;aide.
          </p>
          <p className="text-sm text-muted-foreground">{siteConfig.rge}</p>
        </div>
      </SectionContainer>

      {/* Services liés */}
      <SectionContainer variant="white">
        <SectionHeading title="Services liés" />
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/chauffage-pompe-chaleur" className="px-8 py-4 border border-neutral-200 text-neutral-700 font-semibold rounded-lg hover:bg-neutral-50 transition-all">Pompe à chaleur</Link>
          <Link href="/climatisation-installation" className="px-8 py-4 border border-neutral-200 text-neutral-700 font-semibold rounded-lg hover:bg-neutral-50 transition-all">Installation climatisation</Link>
          <Link href="/chauffage" className="px-8 py-4 border border-neutral-200 text-neutral-700 font-semibold rounded-lg hover:bg-neutral-50 transition-all">Chauffage individuel</Link>
        </div>
      </SectionContainer>
    </ServicePageLayout>
  );
}
