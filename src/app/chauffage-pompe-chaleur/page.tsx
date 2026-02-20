import type { Metadata } from "next";
import Link from "next/link";
import { Wind, Zap, ThermometerSun, ShieldCheck, CheckCircle, TrendingDown } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import { SectionContainer } from "@/components/sections/SectionContainer";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { faqChauffage } from "@/config/faq";
import { heroImages, pageImages } from "@/config/images";

export const metadata: Metadata = generatePageMetadata({
  title: `Pompe à chaleur air-air, air-eau | Certifié RGE QualiPAC — MEA Clim Énergie`,
  description: `Installation pompe à chaleur par MEA Clim Énergie — Michel Bernard. PAC air-air, air-eau. Certifié RGE QualiPAC. Éligible MaPrimeRénov'. Devis gratuit — ${siteConfig.phone}.`,
  path: "/chauffage-pompe-chaleur",
});

const typesPAC = [
  {
    icon: Wind,
    title: "PAC air-air",
    desc: "Pompe à chaleur air-air : chauffe en hiver, rafraîchit en été. Système réversible utilisant les calories de l'air extérieur. Idéal pour les maisons et appartements. COP jusqu'à 4 : pour 1 kWh électrique consommé, 4 kWh de chaleur produits.",
    image: "Unite exterieure pompe a chaleur air-air Mitsubishi installée sur terrasse maison individuelle, propre et bien fixee, photo realiste, ratio 3:2",
    imageKey: "chauffage-pac",
  },
  {
    icon: ThermometerSun,
    title: "PAC air-eau",
    desc: "La pompe à chaleur air-eau alimente votre réseau de chauffage central (radiateurs basse température ou plancher chauffant) et votre production d'eau chaude sanitaire. Solution idéale en remplacement d'une chaudière fioul ou gaz ancienne.",
    image: "Pompe a chaleur air-eau blanche cote maison, tuyaux cuivre, intégration soignee dans jardin bien entretenu, photo realiste, ratio 3:2",
    imageKey: "chauffage-chaudiere-gaz",
  },
];

const aidesDisponibles = [
  { aide: "MaPrimeRénov'", montant: "Jusqu'à 4 000 EUR", condition: "Selon revenus et travaux" },
  { aide: "CEE (Certificats d'Économies d'Énergie)", montant: "Jusqu'à 2 500 EUR", condition: "Selon la PAC et la zone" },
  { aide: "Éco-prêt à taux zéro (éco-PTZ)", montant: "Jusqu'à 30 000 EUR", condition: "Sans condition de revenus" },
  { aide: "TVA réduite à 5,5%", montant: "Sur fourniture + pose", condition: "Résidence principale" },
];

const avantagesPAC = [
  "Certifié RGE QualiPAC — condition pour les aides",
  "Économies jusqu'à 60% sur la facture de chauffage",
  "Accompagnement complet dans les démarches MaPrimeRénov'",
  "Toutes marques : Atlantic, Daikin, Mitsubishi, Viessmann",
  "Devis détaillé et gratuit sous 48h",
  "Mise en service, paramétrage et formation inclus",
];

export default function ChauffagePompeAChaleurPage() {
  return (
    <ServicePageLayout
      hero={{
        title: "Pompe à chaleur — Installation & mise en service certifiée RGE",
        subtitle: "MEA Clim Énergie installe votre pompe à chaleur air-air ou air-eau. Certification RGE QualiPAC pour bénéficier de MaPrimeRénov'.",
        imagePlaceholder: {
          prompt: "Unite exterieure pompe a chaleur moderne blanche installee proprement sur terrasse dune maison individuelle francaise, jardin soigne, ciel bleu, photo realiste, ratio 16:9",
          aspectRatio: "16/9",
          src: heroImages["chauffage"] || undefined,
        },
        badges: ["Certifié RGE QualiPAC", "MaPrimeRénov' éligible", "Devis gratuit"],
      }}
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Pompe à chaleur" },
      ]}
      faqs={faqChauffage}
    >
      {/* Types de PAC */}
      <SectionContainer>
        <SectionHeading
          title="Nos solutions pompe à chaleur"
          subtitle="Michel Bernard vous conseille sur la PAC adaptée à votre logement, votre système de chauffage existant et vos objectifs d'économies."
        />
        <div className="space-y-12">
          {typesPAC.map((s, i) => (
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

      {/* Aides disponibles */}
      <SectionContainer variant="gray">
        <SectionHeading
          title="Les aides financières disponibles"
          subtitle="Certifié RGE QualiPAC, MEA Clim Énergie vous permet de bénéficier de l'ensemble des aides de l'État."
        />
        <div className="max-w-3xl mx-auto">
          <div className="rounded-xl border overflow-hidden">
            <div className="grid grid-cols-3 bg-neutral-800 text-white text-sm font-semibold px-6 py-3">
              <span>Aide</span>
              <span>Montant</span>
              <span>Condition</span>
            </div>
            {aidesDisponibles.map((a, i) => (
              <div key={a.aide} className={`grid grid-cols-3 px-6 py-4 text-sm gap-2 ${i % 2 === 0 ? "bg-muted/50" : ""}`}>
                <span className="font-medium">{a.aide}</span>
                <span className="text-accent-500 font-semibold">{a.montant}</span>
                <span className="text-muted-foreground">{a.condition}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground text-center">
            * Montants indicatifs 2026. Soumis aux conditions de ressources et au logement. Nous vous accompagnons dans votre dossier.
          </p>
        </div>
      </SectionContainer>

      {/* Avantages */}
      <SectionContainer variant="white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading title="Pourquoi choisir MEA Clim Énergie ?" centered={false} />
            <div className="space-y-3 mt-6">
              {avantagesPAC.map((item) => (
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
              <p className="text-4xl font-bold text-neutral-900 mb-2">-60%</p>
              <p className="text-muted-foreground">sur votre facture de chauffage par rapport à une chaudière électrique</p>
              <div className="mt-6 pt-6 border-t">
                <p className="text-2xl font-bold text-neutral-900 mb-2">COP &gt; 3,5</p>
                <p className="text-muted-foreground text-sm">coefficient de performance moyen d'une PAC moderne</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </SectionContainer>

      {/* RGE */}
      <SectionContainer variant="gray">
        <div className="max-w-3xl mx-auto text-center">
          <ShieldCheck className="w-16 h-16 text-accent-500 mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mb-4">
            Certification RGE QualiPAC
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            La certification RGE (Reconnu Garant de l&apos;Environnement) QualiPAC est obligatoire pour que vous puissiez bénéficier des aides de l&apos;État. MEA Clim Énergie est certifiée RGE, vous pouvez donc prétendre à MaPrimeRénov&apos;, les CEE et l&apos;éco-PTZ.
          </p>
          <p className="text-sm text-muted-foreground">{siteConfig.rge}</p>
        </div>
      </SectionContainer>

      {/* Services liés */}
      <SectionContainer variant="white">
        <SectionHeading title="Services liés" />
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/climatisation-installation" className="px-8 py-4 border border-neutral-200 text-neutral-700 font-semibold rounded-lg hover:bg-neutral-50 transition-all">Installation climatisation</Link>
          <Link href="/chauffage" className="px-8 py-4 border border-neutral-200 text-neutral-700 font-semibold rounded-lg hover:bg-neutral-50 transition-all">Chauffage individuel</Link>
          <Link href="/thermodynamique" className="px-8 py-4 border border-neutral-200 text-neutral-700 font-semibold rounded-lg hover:bg-neutral-50 transition-all">Ballon thermodynamique</Link>
        </div>
      </SectionContainer>
    </ServicePageLayout>
  );
}
