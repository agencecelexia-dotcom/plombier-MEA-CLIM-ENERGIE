import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Tag } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { HeroSection } from "@/components/sections/HeroSection";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionContainer } from "@/components/sections/SectionContainer";
import { CTASection } from "@/components/sections/CTASection";
import { blogPosts, getBlogPost, formatDate } from "@/config/blog";
import { siteConfig } from "@/config/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return generatePageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <>
      <HeroSection
        variant="page"
        title={post.title}
        subtitle={post.excerpt}
        imagePlaceholder={{
          prompt: post.imagePrompt,
          aspectRatio: "21/9",
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <Breadcrumbs
          items={[
            { label: "Accueil", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: post.category, href: "/blog" },
            { label: post.title },
          ]}
        />
      </div>

      <SectionContainer>
        <div className="max-w-3xl mx-auto">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Tag className="w-4 h-4" />
              {post.category}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readingTime} min de lecture
            </span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>par <strong>{siteConfig.founder}</strong></span>
          </div>

          {/* Content */}
          <div
            className="prose prose-neutral max-w-none prose-headings:font-heading prose-headings:text-neutral-900 prose-h2:text-2xl prose-h3:text-xl prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-neutral-900"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA inline */}
          <div className="mt-12 p-6 bg-primary/5 rounded-xl border border-primary/10">
            <p className="font-bold text-neutral-900 mb-2">Besoin d&apos;un devis gratuit ?</p>
            <p className="text-sm text-muted-foreground mb-4">
              MEA Clim Énergie intervient rapidement. Appelez le <strong>{siteConfig.phone}</strong> ou demandez un devis en ligne.
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Demander un devis gratuit
            </Link>
          </div>

          {/* Back */}
          <div className="mt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-neutral-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour au blog
            </Link>
          </div>
        </div>
      </SectionContainer>

      <CTASection />
    </>
  );
}
