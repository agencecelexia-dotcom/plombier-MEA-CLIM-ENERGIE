import type { Metadata } from "next";
import Link from "next/link";
import { Droplets, Zap, Leaf, Wrench } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import { SectionContainer } from "@/components/sections/SectionContainer";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { faqChauffeEau } from "@/config/faq";
import { heroImages } from "@/config/images";

export const metadata: Metadata = generatePageMetadata({
  title: `Ballon thermodynamique & chauffe-eau | Installation MEA Clim Énergie`,
  description: `Installation de ballon thermodynamique et chauffe-eau par MEA Clim Énergie. Économies jusqu'à 70% sur l'eau chaude. Éligible CEE. Devis gratuit — ${siteConfig.phone}.`,
  path: "/chauffe-eau",
});

const servicesChauffeEau = [
  { icon: Zap, title: "Chauffe-eau électrique", desc: "Remplacement et installation de cumulus électrique, toutes capacités (75L à 300L). Intervention rapide en cas de panne." },
  { icon: Leaf, title: "Ballon thermodynamique", desc: "Jusqu'à 3x moins d'électricité. Éligible aux aides de l'État. Amortissement en 3 à 5 ans." },
  { icon: Wrench, title: "Détartrage et entretien", desc: "Prolongez la durée de vie de votre chauffe-eau. Le détartrage permet de maintenir les performances optimales." },
  { icon: Droplets, title: "Dépannage", desc: "Plus d'eau chaude ? Fuite sur le groupe de sécurité ? Nous intervenons rapidement pour vous dépanner." },
];

const comparatif = [
  { critere: "Consommation", electrique: "Élevée", thermo: "3x moins" },
  { critere: "Prix installation", electrique: "500 - 1 200 EUR", thermo: "2 000 - 3 500 EUR" },
  { critere: "Aides financières", electrique: "Aucune", thermo: "MaPrimeRénov', CEE" },
  { critere: "Durée de vie", electrique: "10 - 15 ans", thermo: "15 - 20 ans" },
  { critere: "Amortissement", electrique: "-", thermo: "3 à 5 ans" },
  { critere: "Classe énergie", electrique: "C / D", thermo: "A / A+" },
];

export default function ChauffeEauPage() {
  return (
    <ServicePageLayout
      hero={{
        title: "Ballon thermodynamique & chauffe-eau — Installation & remplacement",
        subtitle: "MEA Clim Énergie installe votre chauffe-eau électrique ou thermodynamique. Jusqu'à 70% d'économies sur l'eau chaude sanitaire.",
        imagePlaceholder: {
          prompt: "Technicien installant un ballon thermodynamique blanc dans une buanderie moderne, branchements electriques et hydrauliques visibles, photo realiste, ratio 16:9",
          aspectRatio: "16/9",
          src: heroImages["chauffe-eau"] || undefined,
        },
      }}
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Chauffe-eau" },
      ]}
      faqs={faqChauffeEau}
    >
      {/* Services */}
      <SectionContainer>
        <SectionHeading
          title="Nos services chauffe-eau"
          subtitle="Installation, remplacement, entretien et dépannage de tous types de chauffe-eau."
        />
        <div className="grid sm:grid-cols-2 gap-6">
          {servicesChauffeEau.map((s) => (
            <Card key={s.title}>
              <CardContent className="p-6 flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900 mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionContainer>

      {/* Comparatif */}
      <SectionContainer variant="gray">
        <SectionHeading
          title="Électrique vs Thermodynamique"
          subtitle="Comparez les deux technologies pour faire le bon choix."
        />
        <div className="max-w-3xl mx-auto">
          <div className="rounded-xl border overflow-hidden bg-white">
            <div className="grid grid-cols-3 bg-primary text-primary-foreground text-sm font-bold">
              <div className="p-4">Critère</div>
              <div className="p-4 text-center">Électrique</div>
              <div className="p-4 text-center">Thermodynamique</div>
            </div>
            {comparatif.map((row, i) => (
              <div key={row.critere} className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? "bg-muted/30" : ""}`}>
                <div className="p-4 font-medium">{row.critere}</div>
                <div className="p-4 text-center text-muted-foreground">{row.electrique}</div>
                <div className="p-4 text-center font-medium text-accent-500">{row.thermo}</div>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* Services liés */}
      <SectionContainer variant="white">
        <SectionHeading title="Services liés" />
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/thermodynamique" className="px-8 py-4 border border-neutral-200 text-neutral-700 font-semibold rounded-lg hover:bg-neutral-50 transition-all">Installation thermodynamique</Link>
          <Link href="/chauffage-pompe-chaleur" className="px-8 py-4 border border-neutral-200 text-neutral-700 font-semibold rounded-lg hover:bg-neutral-50 transition-all">Pompe à chaleur</Link>
          <Link href="/depannage-plomberie" className="px-8 py-4 border border-neutral-200 text-neutral-700 font-semibold rounded-lg hover:bg-neutral-50 transition-all">Dépannage frigorifique</Link>
        </div>
      </SectionContainer>
    </ServicePageLayout>
  );
}
