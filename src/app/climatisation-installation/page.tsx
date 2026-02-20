import type { Metadata } from "next";
import Link from "next/link";
import { Wind, Thermometer, Volume2, ShieldCheck, CheckCircle, Zap } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import { SectionContainer } from "@/components/sections/SectionContainer";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { faqClimatisation } from "@/config/faq";
import { heroImages, pageImages } from "@/config/images";

export const metadata: Metadata = generatePageMetadata({
  title: `Installation climatisation | Split, multi-split, gainable — MEA Clim Énergie`,
  description: `Installation de climatisation réversible par MEA Clim Énergie — Michel Bernard. Split mural, multi-split, gainable. Marques Daikin, Mitsubishi, Atlantic. Devis gratuit — ${siteConfig.phone}.`,
  path: "/climatisation-installation",
});

const typesClim = [
  {
    icon: Wind,
    title: "Split mural réversible",
    desc: "La solution la plus répandue : une unité intérieure murale et une unité extérieure. Idéal pour une pièce jusqu'à 35 m². Froid en été, chaud en hiver. Installation propre en une journée.",
    image: "Unite interieure climatisation murale blanche Daikin installee proprement dans salon moderne, eclairage naturel, photo realiste, ratio 3:2",
    imageKey: "chauffage-pac",
  },
  {
    icon: Zap,
    title: "Multi-split",
    desc: "Une seule unité extérieure pour 2 à 5 unités intérieures dans différentes pièces. Économique et discret. Idéal pour les maisons et appartements multi-pièces.",
    image: "Installation multi-split avec plusieurs unites interieures climatisation dans appartement moderne, photo realiste, ratio 3:2",
    imageKey: "chauffage-chaudiere-gaz",
  },
  {
    icon: Volume2,
    title: "Gainable / cassette",
    desc: "Système discret intégré dans les faux-plafonds, invisible dans la pièce. Idéal pour les maisons avec grand volume ou les locaux professionnels.",
    image: "Grille de climatisation gainable encastree dans faux plafond blanc bureau moderne, discret et elegant, photo realiste, ratio 3:2",
    imageKey: "chauffage-plancher-chauffant",
  },
];

const marquesInstallees = [
  "Daikin",
  "Mitsubishi Electric",
  "Atlantic",
  "Toshiba",
  "Hitachi",
  "Samsung",
  "Panasonic",
  "LG",
];

const avantages = [
  "Devis gratuit et sans engagement sous 48h",
  "Pose propre, câbles et liaisons dissimulés",
  "Mise en service et paramétrage inclus",
  "Passage de gaines soigné, sans dégâts",
  "Habilitation manipulation des fluides frigorigènes",
  "Garantie pièces et main d'œuvre",
];

export default function ClimatisationInstallationPage() {
  return (
    <ServicePageLayout
      hero={{
        title: "Installation climatisation — Split, multi-split, gainable",
        subtitle: "MEA Clim Énergie installe votre système de climatisation réversible avec soin. Froid l'été, chaud l'hiver. Devis gratuit.",
        imagePlaceholder: {
          prompt: "Technicien professionnel installant une unite exterieure de climatisation Daikin sur facade maison individuelle, outillage propre, pose soignee, photo realiste, ratio 16:9",
          aspectRatio: "16/9",
          src: heroImages["chauffage"] || undefined,
        },
        badges: ["Daikin, Mitsubishi, Atlantic", "Pose soignée", "Devis gratuit"],
      }}
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Installation climatisation" },
      ]}
      faqs={faqClimatisation}
    >
      {/* Types de climatisation */}
      <SectionContainer>
        <SectionHeading
          title="Nos solutions de climatisation"
          subtitle="Michel Bernard vous conseille et installe le système adapté à votre logement et à votre budget."
        />
        <div className="space-y-12">
          {typesClim.map((s, i) => (
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

      {/* Marques */}
      <SectionContainer variant="gray">
        <SectionHeading
          title="Marques installées"
          subtitle="Nous travaillons avec les meilleures marques du marché pour vous garantir fiabilité et performance."
        />
        <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
          {marquesInstallees.map((marque) => (
            <span key={marque} className="px-6 py-3 bg-white border border-neutral-200 rounded-lg font-semibold text-neutral-700 shadow-sm">
              {marque}
            </span>
          ))}
        </div>
      </SectionContainer>

      {/* Avantages */}
      <SectionContainer variant="white">
        <SectionHeading
          title="Pourquoi choisir MEA Clim Énergie ?"
          subtitle="Un artisan qualifié, du conseil à la mise en service."
        />
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <div className="grid sm:grid-cols-2 gap-4">
                {avantages.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </SectionContainer>

      {/* Tarifs indicatifs */}
      <SectionContainer variant="gray">
        <SectionHeading
          title="Tarifs indicatifs"
          subtitle="Transparence sur nos prix. Le devis exact est gratuit et personnalisé selon votre projet."
        />
        <div className="max-w-2xl mx-auto">
          <div className="rounded-xl border overflow-hidden">
            {[
              { service: "Split mural 2.5 kW (25 m²) — fourniture + pose", prix: "À partir de 1 300 EUR TTC" },
              { service: "Split mural 3.5 kW (35 m²) — fourniture + pose", prix: "À partir de 1 600 EUR TTC" },
              { service: "Multi-split 2 pièces — fourniture + pose", prix: "À partir de 2 200 EUR TTC" },
              { service: "Multi-split 3 pièces — fourniture + pose", prix: "À partir de 3 000 EUR TTC" },
              { service: "Entretien annuel climatisation", prix: "À partir de 79 EUR TTC" },
            ].map((t, i) => (
              <div key={t.service} className={`flex items-center justify-between px-6 py-4 ${i % 2 === 0 ? "bg-muted/50" : ""}`}>
                <span className="text-sm font-medium">{t.service}</span>
                <span className="text-sm font-semibold text-accent-500 whitespace-nowrap ml-4">{t.prix}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground text-center">
            * Tarifs TTC indicatifs fourniture + pose standard. Peut varier selon accès et configuration.
          </p>
        </div>
      </SectionContainer>

      {/* RGE */}
      <SectionContainer variant="white">
        <div className="max-w-3xl mx-auto text-center">
          <ShieldCheck className="w-16 h-16 text-accent-500 mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mb-4">
            Habilitation manipulation des fluides frigorigènes
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Michel Bernard est habilité à manipuler les fluides frigorigènes (Attestation de Capacité), conformément au règlement européen F-Gas. Tous nos travaux sont réalisés dans le respect des normes en vigueur.
          </p>
          <p className="text-sm text-muted-foreground">
            {siteConfig.rge}
          </p>
        </div>
      </SectionContainer>

      {/* Services liés */}
      <SectionContainer variant="gray">
        <SectionHeading title="Services liés" />
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/chauffage-pompe-chaleur" className="px-8 py-4 border border-neutral-200 text-neutral-700 font-semibold rounded-lg hover:bg-neutral-50 transition-all">Pompe à chaleur</Link>
          <Link href="/depannage-plomberie" className="px-8 py-4 border border-neutral-200 text-neutral-700 font-semibold rounded-lg hover:bg-neutral-50 transition-all">Dépannage frigorifique</Link>
          <Link href="/thermodynamique" className="px-8 py-4 border border-neutral-200 text-neutral-700 font-semibold rounded-lg hover:bg-neutral-50 transition-all">Thermodynamique</Link>
        </div>
      </SectionContainer>
    </ServicePageLayout>
  );
}
