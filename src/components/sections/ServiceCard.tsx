"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Wind, Zap, Flame, Droplets, Wrench, Siren, Bath,
  ClipboardCheck, Snowflake, ArrowRight,
} from "lucide-react";
import type { Service } from "@/types";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Wind, Zap, Flame, Droplets, Wrench, Siren, Bath, ClipboardCheck, Snowflake,
};

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = iconMap[service.icon];

  return (
    <Link
      href={service.slug}
      className="group relative flex flex-col rounded-2xl overflow-hidden bg-white border border-neutral-100 shadow-[0_2px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.14)] transition-all duration-500 hover:-translate-y-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
    >
      {/* Photo */}
      <div className="relative overflow-hidden aspect-video">
        {service.image ? (
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary-100 to-accent-100" />
        )}
        {/* Dark gradient at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950/65 via-primary-900/15 to-transparent" />

        {/* Icon + title badge (bottom-left) */}
        <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg">
          {IconComponent && (
            <IconComponent className="w-4 h-4 text-primary-600 shrink-0" />
          )}
          <span className="text-xs font-bold text-primary-800 leading-none">
            {service.title}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <p className="text-sm text-neutral-600 leading-relaxed flex-1 mb-5">
          {service.shortDescription}
        </p>
        <div className="flex items-center gap-1.5 text-sm font-semibold text-accent-600">
          <span>En savoir plus</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
        </div>
      </div>

      {/* Bottom accent line — grows on hover */}
      <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-primary-500 via-primary-400 to-accent-500 group-hover:w-full transition-all duration-500 ease-out" />
    </Link>
  );
}
