import type { Metadata } from "next";
import Link from "next/link";
import { Phone, AlertTriangle, Droplets, ShowerHead, Flame } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import { SectionContainer } from "@/components/sections/SectionContainer";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { faqDepannage } from "@/config/faq";
import { heroImages } from "@/config/images";

export const metadata: Metadata = generatePageMetadata({
  title: `Dépannage frigorifique & climatisation | MEA Clim Énergie`,
  description: `Dépannage climatisation et systèmes frigorifiques par MEA Clim Énergie — Michel Bernard. Fuite frigorigène, panne compresseur, rechargement fluide. Appelez le ${siteConfig.phone}.`,
  path: "/depannage-plomberie",
});

const urgences = [
  { icon: AlertTriangle, title: "Panne climatisation", desc: "Climatiseur qui ne refroidit plus, erreur affichée, unité extérieure qui ne démarre pas. Diagnostic et réparation rapide." },
  { icon: Droplets, title: "Fuite de fluide frigorigène", desc: "Détection de fuite par contrôle électronique, réparation et rechargement du circuit frigorifique aux normes F-Gas." },
  { icon: ShowerHead, title: "Panne compresseur / détendeur", desc: "Remplacement de compresseur défaillant, détendeur bouché ou valve en panne. Intervention soignée toutes marques." },
  { icon: Flame, title: "Dysfonctionnement PAC", desc: "Pompe à chaleur qui ne chauffe plus, dégivrage en boucle, pertes de pression. Diagnostic précis et remise en service." },
];

const etapes = [
  { num: "1", title: "Vous appelez", desc: "Décrivez votre problème. Nous évaluons l'urgence et vous proposons un rendez-vous rapide." },
  { num: "2", title: "On intervient", desc: "Un technicien qualifié se déplace avec son matériel : manomètres, détecteur de fuite, fluide frigorigène." },
  { num: "3", title: "Problème résolu", desc: "Réparation sur place dans la majorité des cas. Devis clair avant intervention, pas de mauvaise surprise." },
];

export default function DepannagePage() {
  return (
    <ServicePageLayout
      hero={{
        title: "Dépannage frigorifique & climatisation — Intervention rapide",
        subtitle: "Panne clim, fuite frigorigène, PAC défaillante ? Appelez Michel Bernard — MEA Clim Énergie.",
        imagePlaceholder: {
          prompt: "Technicien frigoriste professionnel avec manometre couleur numerique controlant la pression d'un systeme de climatisation, unites exterieures alignees en arriere plan, photo realiste, ratio 16:9",
          aspectRatio: "16/9",
          src: heroImages["depannage-plomberie"] || undefined,
        },
        badges: ["Habilitation fluides frigorigènes", "Toutes marques", "Devis avant intervention"],
      }}
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Dépannage frigorifique" },
      ]}
      faqs={faqDepannage}
      ctaVariant="urgent"
    >
      {/* Urgences prises en charge */}
      <SectionContainer>
        <SectionHeading
          title="Pannes et interventions prises en charge"
          subtitle="MEA Clim Énergie diagnostique et répare tous types de pannes sur climatiseurs, PAC et systèmes frigorifiques."
        />
        <div className="grid sm:grid-cols-2 gap-6">
          {urgences.map((u) => (
            <Card key={u.title} className="border-accent-500/20">
              <CardContent className="p-6 flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent-500/10 flex items-center justify-center shrink-0">
                  <u.icon className="w-6 h-6 text-accent-500" />
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900 mb-1">{u.title}</h3>
                  <p className="text-sm text-muted-foreground">{u.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionContainer>

      {/* Comment ça marche */}
      <SectionContainer variant="gray">
        <SectionHeading
          title="Comment ça marche ?"
          subtitle="3 étapes simples pour un dépannage sans stress."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {etapes.map((e) => (
            <div key={e.num} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">{e.num}</span>
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">{e.title}</h3>
              <p className="text-sm text-muted-foreground">{e.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href={siteConfig.phoneHref}
            className="px-8 py-4 bg-accent-500 text-white font-semibold rounded-lg hover:bg-accent-600 shadow-lg transition-all inline-flex items-center gap-2"
          >
            <Phone className="w-5 h-5" />
            Appelez maintenant — {siteConfig.phone}
          </a>
        </div>
      </SectionContainer>

      {/* Tarifs indicatifs */}
      <SectionContainer variant="white">
        <SectionHeading
          title="Tarifs indicatifs"
          subtitle="Transparence totale sur nos prix. Le tarif exact vous est confirmé avant intervention."
        />
        <div className="max-w-2xl mx-auto">
          <div className="rounded-xl border overflow-hidden">
            {[
              { service: "Débouchage WC / évier", prix: "À partir de 89 EUR" },
              { service: "Réparation fuite", prix: "À partir de 120 EUR" },
              { service: "Remplacement robinet", prix: "À partir de 95 EUR" },
              { service: "Dégât des eaux (intervention)", prix: "À partir de 150 EUR" },
              { service: "Déplacement + diagnostic", prix: "À partir de 49 EUR" },
            ].map((t, i) => (
              <div key={t.service} className={`flex items-center justify-between px-6 py-4 ${i % 2 === 0 ? "bg-muted/50" : ""}`}>
                <span className="text-sm font-medium">{t.service}</span>
                <span className="text-sm font-semibold text-accent-500">{t.prix}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground text-center">
            * Tarifs TTC indicatifs hors pièces. Supplément possible en soirée, week-end et jours fériés.
          </p>
        </div>
      </SectionContainer>

      {/* Services liés */}
      <SectionContainer variant="gray">
        <SectionHeading title="Services liés" />
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/climatisation-installation" className="px-8 py-4 border border-neutral-200 text-neutral-700 font-semibold rounded-lg hover:bg-neutral-50 transition-all">Installation climatisation</Link>
          <Link href="/chauffage-pompe-chaleur" className="px-8 py-4 border border-neutral-200 text-neutral-700 font-semibold rounded-lg hover:bg-neutral-50 transition-all">Pompe à chaleur</Link>
          <Link href="/thermodynamique" className="px-8 py-4 border border-neutral-200 text-neutral-700 font-semibold rounded-lg hover:bg-neutral-50 transition-all">Thermodynamique</Link>
        </div>
      </SectionContainer>
    </ServicePageLayout>
  );
}
