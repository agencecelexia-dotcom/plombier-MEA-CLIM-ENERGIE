"use client";

import Link from "next/link";
import { Phone, ArrowRight, Shield, Clock, Star } from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { siteConfig } from "@/config/site";
import { sectionImages } from "@/config/images";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  variant?: "urgent" | "devis" | "contact";
}

export function CTASection({
  title = "Un projet ? Une urgence ? Contactez-nous maintenant.",
  subtitle,
  variant = "devis",
}: CTASectionProps) {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <ImagePlaceholder
          prompt="Technicien frigoriste professionnel en uniforme bleu, ambiance professionnelle chaleureuse"
          src={sectionImages["cta-bandeau"] || undefined}
          aspectRatio="21/9"
          alt=""
          overlay
          className="w-full h-full rounded-none"
        />
      </div>

      {/* Deep gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950/95 via-primary-900/90 to-primary-800/85 z-10" />

      {/* Warm accent glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-accent-500/10 blur-[120px] rounded-full z-10 pointer-events-none" />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-10"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <FadeUp>
          {/* Label chip */}
          <div className="inline-flex items-center gap-2 bg-accent-500/15 border border-accent-500/30 text-accent-400 text-xs font-semibold tracking-widest uppercase rounded-full px-4 py-1.5 mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-pulse" />
            Réponse sous 2h garantie
          </div>

          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
            {title}
          </h2>

          <p className="text-lg text-neutral-300 max-w-xl mx-auto mb-10">
            {subtitle ||
              "Michel Bernard intervient rapidement sur Lyon et ses alentours. Devis gratuit, sans engagement."}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            {(variant === "urgent" || variant === "devis") && (
              <a
                href={siteConfig.phoneHref}
                data-track="cta-appel-bandeau"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-accent-500 to-accent-400 px-8 py-4 text-base font-bold text-primary-900 shadow-[0_0_0_3px_rgba(245,176,64,0.15)] hover:shadow-[0_0_0_6px_rgba(245,176,64,0.25)] transition-all duration-300"
              >
                <Phone className="h-5 w-5 shrink-0" />
                {siteConfig.phone}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            )}
            {(variant === "devis" || variant === "contact") && (
              <Link
                href="/contact"
                data-track="cta-devis-bandeau"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm px-8 py-4 text-base font-semibold text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300"
              >
                Demander un devis gratuit
              </Link>
            )}
          </div>

          {/* Trust strip */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-neutral-400">
            <span className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-accent-400" />
              Certifié RGE QualiPAC
            </span>
            <span className="w-px h-4 bg-white/10 hidden sm:block" />
            <span className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-accent-400 fill-accent-400" />
              {siteConfig.googleRating}/5 &mdash; {siteConfig.googleReviewCount} avis Google
            </span>
            <span className="w-px h-4 bg-white/10 hidden sm:block" />
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-accent-400" />
              Devis gratuit sous 48h
            </span>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
