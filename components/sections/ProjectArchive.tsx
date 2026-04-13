"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { ProcessedRepo } from "@/lib/types";
import { cn, formatDate } from "@/lib/utils";
import AnimatedSection from "@/components/AnimatedSection";

interface ProjectArchiveProps {
  repos: ProcessedRepo[];
}

function ArchiveCard({ repo }: { repo: ProcessedRepo }) {
  return (
    <motion.a
      href={repo.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={cn(
        "group relative flex flex-col gap-3 p-5 rounded-xl",
        "border border-white/[0.06] bg-surface/60 backdrop-blur-sm",
        "hover:border-white/[0.14] hover:bg-surface transition-all duration-200",
        "cursor-pointer"
      )}
    >
      {/* Hover arrow accent */}
      <ArrowUpRight
        size={13}
        className="absolute top-4 right-4 text-muted/40 opacity-0 group-hover:opacity-100 group-hover:text-secondary transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />

      {/* Title + language accent */}
      <div className="flex items-start justify-between gap-3 pr-5">
        <h3 className="text-sm font-medium text-primary leading-snug tracking-tight group-hover:text-primary">
          {repo.displayName}
        </h3>
        {repo.language && (
          <span className="shrink-0 text-[0.6rem] text-muted/70 font-medium tracking-[0.12em] uppercase mt-0.5 group-hover:opacity-0 transition-opacity duration-200">
            {repo.language}
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-xs text-secondary leading-relaxed line-clamp-2">
        {repo.description}
      </p>

      {/* Stack */}
      <div className="flex flex-wrap gap-1">
        {repo.stack.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="text-[0.6rem] font-medium px-1.5 py-0.5 rounded-md bg-white/[0.04] text-muted border border-white/[0.05] tracking-wide"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-auto pt-1">
        <span className="text-[0.6rem] text-muted/60">
          {formatDate(repo.updatedAt)}
        </span>
        {repo.liveUrl && (
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              window.open(repo.liveUrl, "_blank", "noopener,noreferrer");
            }}
            aria-label="Live site"
            className="flex items-center gap-1 text-[0.6rem] text-muted hover:text-secondary transition-colors"
          >
            <ExternalLink size={11} />
            <span>Live</span>
          </button>
        )}
      </div>
    </motion.a>
  );
}

export default function ProjectArchive({ repos }: ProjectArchiveProps) {
  const archiveRepos = repos.filter((r) => !r.featured);

  if (archiveRepos.length === 0) return null;

  return (
    <section className="relative py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <AnimatedSection>
          <div className="flex flex-col gap-3 mb-12">
            <span className="section-label">Archive</span>
            <h2 className="text-display-lg font-light text-primary tracking-tight">
              Everything else
            </h2>
            <p className="text-secondary text-base max-w-lg mt-1">
              Comprehensive coursework, experiments, and research across ML,
              statistics, forecasting, and applied analysis.
            </p>
          </div>
        </AnimatedSection>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {archiveRepos.map((repo) => (
            <ArchiveCard key={repo.id} repo={repo} />
          ))}
        </div>
      </div>
    </section>
  );
}
