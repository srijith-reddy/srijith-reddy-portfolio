"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import type { ProcessedRepo } from "@/lib/types";
import { CATEGORY_META, FEATURED_REPOS } from "@/config/site";
import { cn } from "@/lib/utils";
import AnimatedSection from "@/components/AnimatedSection";

interface FeaturedWorkProps {
  repos: ProcessedRepo[];
}

function FeaturedCard({ repo, index }: { repo: ProcessedRepo; index: number }) {
  const meta = CATEGORY_META[repo.category];

  return (
    <AnimatedSection delay={index * 0.08}>
      <motion.a
        href={repo.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className={cn(
          "group relative flex flex-col h-full rounded-2xl overflow-hidden",
          "border border-white/[0.07] bg-surface shimmer-border",
          "hover:border-white/[0.14] transition-colors duration-300",
          "cursor-pointer"
        )}
      >
        {/* Category gradient header band */}
        <div
          className={cn(
            "absolute inset-x-0 top-0 h-[140px] bg-gradient-to-b opacity-50 pointer-events-none",
            meta.glow
          )}
        />

        {/* Hover arrow accent */}
        <ArrowUpRight
          size={15}
          className="absolute top-5 right-5 text-muted/50 opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 pointer-events-none"
        />

        {/* Card content */}
        <div className="relative flex flex-col h-full p-6 gap-4">
          {/* Top row: category + language */}
          <div className="flex items-center justify-between pr-7">
            <span
              className={cn(
                "text-[0.65rem] font-semibold tracking-[0.14em] uppercase",
                meta.color
              )}
            >
              {meta.label}
            </span>
            {repo.language && (
              <span className="text-[0.65rem] text-muted font-medium tracking-wide uppercase group-hover:opacity-0 transition-opacity duration-200">
                {repo.language}
              </span>
            )}
          </div>

          {/* Project name */}
          <h3 className="text-display-md font-medium text-primary leading-tight tracking-tight">
            {repo.displayName}
          </h3>

          {/* Description */}
          <p className="text-sm text-secondary leading-relaxed flex-1">
            {repo.description}
          </p>

          {/* Stack tags */}
          <div className="flex flex-wrap gap-1.5">
            {repo.stack.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="text-[0.65rem] font-medium px-2 py-0.5 rounded-md bg-white/[0.05] text-muted border border-white/[0.06] tracking-wide"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-white/[0.06]" />

          {/* Footer actions */}
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-xs text-secondary">
              <Github size={13} />
              <span>Source</span>
            </span>
            {repo.liveUrl && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  window.open(repo.liveUrl, "_blank", "noopener,noreferrer");
                }}
                className="group/live inline-flex items-center gap-1.5 text-xs text-secondary hover:text-primary transition-colors duration-200 ml-auto"
              >
                <ExternalLink size={13} />
                <span>{repo.liveLabel ?? "Live"}</span>
                <ArrowUpRight
                  size={11}
                  className="opacity-0 group-hover/live:opacity-100 -ml-0.5 transition-opacity"
                />
              </button>
            )}
          </div>
        </div>
      </motion.a>
    </AnimatedSection>
  );
}

export default function FeaturedWork({ repos }: FeaturedWorkProps) {
  const featured = repos
    .filter((r) => r.featured)
    .sort((a, b) => FEATURED_REPOS.indexOf(a.name) - FEATURED_REPOS.indexOf(b.name));

  return (
    <section id="work" className="relative py-32">
      {/* Section separator */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <AnimatedSection>
          <div className="flex flex-col gap-3 mb-16">
            <span className="section-label">Selected Work</span>
            <h2 className="text-display-lg font-light text-primary tracking-tight">
              Things I&apos;ve built
            </h2>
            <p className="text-secondary text-base max-w-lg mt-1">
              A curated set of projects spanning AI systems, applied products,
              mobile apps, and ML research.
            </p>
          </div>
        </AnimatedSection>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {featured.map((repo, i) => (
            <FeaturedCard key={repo.id} repo={repo} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
