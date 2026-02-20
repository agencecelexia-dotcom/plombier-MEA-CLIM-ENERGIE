import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Tag } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { HeroSection } from "@/components/sections/HeroSection";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionContainer } from "@/components/sections/SectionContainer";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { siteConfig } from "@/config/site";
import { heroImages } from "@/config/images";
import { blogPosts, formatDate } from "@/config/blog";

export const metadata: Metadata = generatePageMetadata({
  title: `Blog climatisation & chauffage | Conseils et guides — ${siteConfig.name}`,
  description: `Conseils climatisation, guides pompe à chaleur, économies d'énergie. Le blog de ${siteConfig.name} — Michel Bernard.`,
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <HeroSection
        variant="page"
        title="Blog — Conseils climatisation, chauffage & économies d'énergie"
        subtitle="Articles et guides pratiques rédigés par Michel Bernard, technicien spécialiste climatisation et chauffage."
        imagePlaceholder={{
          prompt: "Technicien frigoriste en uniforme bleu devant tableau de bord digital montrant des courbes de consommation energetique, lumiere naturelle, photo réaliste, ratio 21:9",
          aspectRatio: "21/9",
          src: heroImages["blog"] || undefined,
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <Breadcrumbs
          items={[
            { label: "Accueil", href: "/" },
            { label: "Blog" },
          ]}
        />
      </div>

      <SectionContainer>
        <SectionHeading
          title="Nos articles"
          subtitle="Retrouvez nos conseils d'expert pour bien choisir, entretenir et optimiser vos équipements."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.slug} className="flex flex-col rounded-xl border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Tag className="w-3 h-3" />
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readingTime} min
                  </span>
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </div>
                <h2 className="text-lg font-bold text-neutral-900 mb-3 leading-snug">
                  {post.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm font-semibold text-primary hover:underline"
                >
                  Lire l&apos;article →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </SectionContainer>
    </>
  );
}
