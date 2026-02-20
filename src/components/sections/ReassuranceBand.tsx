"use client";

import { ShieldCheck, Star, Wrench, Clock } from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";
import CountUp from "@/components/animations/CountUp";
import { siteConfig } from "@/config/site";

const stats = [
  { value: siteConfig.yearsExperience, suffix: "+", label: "Années d'expérience", icon: Clock },
  { value: siteConfig.interventionsCount, suffix: "+", label: "Interventions réalisées", icon: Wrench },
  { value: siteConfig.googleReviewCount, suffix: "", label: "Avis Google vérifiés", icon: Star },
  { value: 100, suffix: "%", label: "Clients satisfaits", icon: ShieldCheck },
];

export function ReassuranceBand() {
  return (
    <section
      className="relative bg-primary-900 py-14 overflow-hidden"
      aria-label="Nos chiffres clés"
    >
      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
          {stats.map((stat, i) => (
            <FadeUp key={stat.label} delay={i * 0.12}>
              <div className="flex flex-col items-center text-center px-4 py-2">
                <stat.icon className="w-5 h-5 text-accent-400 mb-3 opacity-90" aria-hidden="true" />
                <span className="font-heading text-4xl md:text-5xl font-bold text-white leading-none">
                  <CountUp to={stat.value} suffix={stat.suffix} />
                </span>
                <p className="mt-2 text-xs font-semibold text-neutral-400 tracking-widest uppercase">
                  {stat.label}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
