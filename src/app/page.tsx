import type { Metadata } from "next";
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { HeroSection } from "@/components/sections/HeroSection";
import { ReassuranceBand } from "@/components/sections/ReassuranceBand";
import { UrgencyProjectCards } from "@/components/sections/UrgencyProjectCards";
import { SectionContainer } from "@/components/sections/SectionContainer";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { RealisationCard } from "@/components/sections/RealisationCard";
import { TestimonialCard } from "@/components/sections/TestimonialCard";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { siteConfig } from "@/config/site";
import { services } from "@/config/services";
import { realisations } from "@/config/realisations";
import { testimonials } from "@/config/testimonials";
import { faqGeneral } from "@/config/faq";
import { heroImages } from "@/config/images";

export const metadata: Metadata = generatePageMetadata({
  title: "MEA Clim Énergie | Climatisation, Pompe à Chaleur, Chauffage — Devis Gratuit",
  description: "MEA Clim Énergie — Michel Bernard. Installation climatisation, pompe à chaleur, chauffage individuel, ballon thermodynamique, plomberie. Certifié RGE QualiPAC. Devis gratuit.",
  path: "/",
});

export default function HomePage() {
  const featuredRealisations = realisations.slice(0, 4);
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <HeroSection
        variant="home"
        title="MEA Clim Énergie — Climatisation, Pompe à Chaleur, Chauffage"
        subtitle="Installation, entretien et dépannage. Certifié RGE QualiPAC. Devis gratuit sous 48h."
        imagePlaceholder={{
          prompt:
            "Technicien professionnel français en uniforme bleu, installant une unité intérieure de climatisation Daikin blanche sur un mur blanc dans un salon moderne, éclairage naturel chaleureux, photo réaliste professionnelle, ratio 16:9",
          aspectRatio: "16/9",
          src: heroImages["accueil"] || undefined,
        }}
        ctaPrimary={{
          label: `Appelez maintenant — ${siteConfig.phone}`,
          href: siteConfig.phoneHref,
        }}
        ctaSecondary={{
          label: "Demander un devis gratuit",
          href: "/contact",
        }}
        badges={[
          "Certifié RGE QualiPAC",
          "Devis gratuit",
          "MaPrimeRénov' éligible",
          `${siteConfig.googleRating}/5 — ${siteConfig.googleReviewCount} avis Google`,
        ]}
      />

      {/* Réassurance */}
      <ReassuranceBand />

      {/* Urgence ou projet */}
      <UrgencyProjectCards />

      {/* Services */}
      <SectionContainer variant="white">
        <SectionHeading
          title="Nos prestations climatisation & énergie"
          subtitle="De l'installation climatisation à la pompe à chaleur, Michel Bernard intervient avec rigueur et professionnalisme."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </SectionContainer>

      {/* Réalisations */}
      <SectionContainer variant="gray">
        <SectionHeading
          title="Nos réalisations"
          subtitle="Découvrez nos derniers chantiers en images."
        />
        <div className="grid sm:grid-cols-2 gap-6">
          {featuredRealisations.map((real) => (
            <RealisationCard key={real.id} realisation={real} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/realisations"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-primary-900 text-white font-semibold rounded-xl hover:bg-primary-800 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Voir toutes nos réalisations
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </SectionContainer>

      {/* Avis */}
      <SectionContainer variant="white">
        <SectionHeading title="Ce que disent nos clients" />

        {/* Rating header card */}
        <div className="flex items-center justify-center mb-10">
          <div className="inline-flex items-center gap-6 bg-neutral-50 border border-neutral-100 rounded-2xl px-8 py-5 shadow-sm">
            {/* Google logo */}
            <svg className="w-8 h-8 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            <div className="w-px h-10 bg-neutral-200" />
            {/* Score */}
            <div className="text-center">
              <div className="flex items-baseline gap-1 justify-center">
                <span className="text-4xl font-bold text-neutral-900 leading-none">
                  {siteConfig.googleRating}
                </span>
                <span className="text-lg text-neutral-400">/5</span>
              </div>
              <div
                className="flex gap-0.5 mt-1 justify-center"
                role="img"
                aria-label={`Note Google : ${siteConfig.googleRating} sur 5`}
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    aria-hidden="true"
                    className={`w-4 h-4 ${
                      i < Math.round(siteConfig.googleRating)
                        ? "text-accent-500 fill-accent-500"
                        : "text-neutral-200 fill-neutral-200"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="w-px h-10 bg-neutral-200" />
            {/* Count */}
            <div className="text-center">
              <p className="text-2xl font-bold text-neutral-900 leading-none">
                {siteConfig.googleReviewCount}
              </p>
              <p className="text-xs text-neutral-500 mt-1">avis vérifiés</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featuredTestimonials.map((testimonial, i) => (
            <TestimonialCard key={i} testimonial={testimonial} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/avis-clients"
            className="group inline-flex items-center gap-2 px-8 py-4 border-2 border-neutral-200 text-neutral-700 font-semibold rounded-xl hover:border-primary-300 hover:text-primary-800 transition-all duration-300"
          >
            Voir tous les avis
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </SectionContainer>

      {/* FAQ */}
      <FAQSection faqs={faqGeneral} />

      {/* CTA Final */}
      <CTASection />
    </>
  );
}
