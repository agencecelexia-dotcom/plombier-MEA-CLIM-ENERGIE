import type { Metadata } from "next";
import Link from "next/link";
import { Wrench, Search, Pipette, ShieldCheck, CheckCircle } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import { SectionContainer } from "@/components/sections/SectionContainer";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { siteConfig } from "@/config/site";
import { faqPlomberie } from "@/config/faq";
import { heroImages, pageImages } from "@/config/images";

export const metadata: Metadata = generatePageMetadata({
  title: `Plomberie & Sanitaire | Installation, réparation, mise aux normes — MEA Clim Énergie`,
  description: `Travaux de plomberie et sanitaire par MEA Clim Énergie — Michel Bernard. Installation, réparation, robinetterie, tuyauterie, WC, douche, recherche de fuite. Devis gratuit — ${siteConfig.phone}.`,
  path: "/plomberie",
});

const servicesPlomberie = [
  { icon: Pipette, title: "Robinetterie", desc: "Installation et remplacement de robinets, mitigeurs, douchettes. Toutes marques.", image: "Gros plan mains de plombier serrant un raccord cuivre avec une pince, travail de precision, photo realiste, ratio 3:2", imageKey: "plomberie-robinetterie" },
  { icon: Wrench, title: "Tuyauterie et raccordements", desc: "Installation, remplacement et réparation de canalisations en cuivre, PER ou multicouche.", image: "Plombier professionnel installant de la tuyauterie en cuivre dans une maison neuve, raccords visibles, travail soigne, photo realiste, ratio 3:2", imageKey: "plomberie-tuyauterie" },
  { icon: Search, title: "Recherche de fuite", desc: "Détection non destructive par caméra thermique, acoustique ou colorimétrique.", image: "Plombier utilisant une camera d'inspection de canalisation, ecran video visible, intervention technique, photo realiste, ratio 3:2", imageKey: "plomberie-recherche-fuite" },
  { icon: ShieldCheck, title: "Mise aux normes", desc: "Mise en conformité de vos installations selon les normes en vigueur (DTU, NF).", image: "Plombier installant un WC suspendu neuf dans une salle de bain en renovation, bati-support visible, photo realiste, ratio 3:2", imageKey: "plomberie-mise-aux-normes" },
];

const avantages = [
  `Plus de ${siteConfig.yearsExperience} ans d'expérience`,
  "Matériel professionnel dernière génération",
  "Chantier laissé propre après intervention",
  "Assurance décennale sur tous les travaux",
  "Devis détaillé gratuit sous 48h",
  "Conseil personnalisé et transparent",
];

export default function PlomberiePage() {
  return (
    <ServicePageLayout
      hero={{
        title: "Plomberie & Sanitaire — Installation, réparation et mise aux normes",
        subtitle: "Robinetterie, tuyauterie, WC, douche, recherche de fuite... MEA Clim Énergie intervient avec soin et réactivité.",
        imagePlaceholder: {
          prompt: "Plombier professionnel installant de la tuyauterie en cuivre dans une maison neuve, raccords visibles, travail soigne, lumiere naturelle, photo realiste, ratio 16:9",
          aspectRatio: "16/9",
          src: heroImages["plomberie"] || undefined,
        },
      }}
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Plomberie" },
      ]}
      faqs={faqPlomberie}
    >
      {/* Services détaillés */}
      <SectionContainer>
        <SectionHeading
          title="Nos services de plomberie"
          subtitle="De l'installation neuve à la réparation, nous intervenons sur tous vos équipements."
        />
        <div className="space-y-12">
          {servicesPlomberie.map((s, i) => (
            <div key={s.title} className={`grid lg:grid-cols-2 gap-8 items-center`}>
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <s.icon className="w-5 h-5 text-primary" />
                  </div>
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

      {/* Pourquoi nous choisir */}
      <SectionContainer variant="gray">
        <SectionHeading title="Pourquoi nous choisir ?" />
        <div className="max-w-2xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-4">
            {avantages.map((a) => (
              <div key={a} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent-500 shrink-0" />
                <span className="text-sm font-medium">{a}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* Services liés */}
      <SectionContainer variant="white">
        <SectionHeading title="Services liés" />
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/depannage-plomberie" className="px-8 py-4 border border-neutral-200 text-neutral-700 font-semibold rounded-lg hover:bg-neutral-50 transition-all">Dépannage frigorifique</Link>
          <Link href="/thermodynamique" className="px-8 py-4 border border-neutral-200 text-neutral-700 font-semibold rounded-lg hover:bg-neutral-50 transition-all">Thermodynamique</Link>
        </div>
      </SectionContainer>
    </ServicePageLayout>
  );
}
