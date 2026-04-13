"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Github, ExternalLink, X } from "lucide-react";
import type { ProcessedRepo, ProjectCategory } from "@/lib/types";
import { CATEGORY_META } from "@/config/site";
import { cn, formatDate } from "@/lib/utils";
import AnimatedSection from "@/components/AnimatedSection";

interface ProjectArchiveProps {
  repos: ProcessedRepo[];
}

const ALL_CATEGORY = "All" as const;
type FilterCategory = typeof ALL_CATEGORY | ProjectCategory;

function ArchiveCard({ repo }: { repo: ProcessedRepo }) {
  const meta = CATEGORY_META[repo.category];

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      whileHover={{ y: -2 }}
      className={cn(
        "group relative flex flex-col gap-3 p-5 rounded-xl",
        "border border-white/[0.06] bg-surface/60 backdrop-blur-sm",
        "hover:border-white/[0.11] hover:bg-surface transition-all duration-200"
      )}
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-sm font-medium text-primary leading-snug group-hover:text-primary transition-colors">
          {repo.displayName}
        </h3>
        <span
          className={cn(
            "shrink-0 text-[0.6rem] font-semibold tracking-[0.12em] uppercase mt-0.5",
            meta.color
          )}
        >
          {meta.label}
        </span>
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
        <span className="text-[0.6rem] text-muted/60">{formatDate(repo.updatedAt)}</span>
        <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <a
            href={repo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted hover:text-secondary transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <Github size={13} />
          </a>
          {repo.liveUrl && (
            <a
              href={repo.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live"
              className="text-muted hover:text-secondary transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={13} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectArchive({ repos }: ProjectArchiveProps) {
  const [search, setSearch] = useState("");

  // Only show non-featured repos in the archive (featured have their own section)
  const archiveRepos = useMemo(
    () => repos.filter((r) => !r.featured),
    [repos]
  );


  const filtered = useMemo(() => {
    const query = search.toLowerCase();
    return archiveRepos.filter((repo) => {
      return (
        !query ||
        repo.displayName.toLowerCase().includes(query) ||
        repo.description.toLowerCase().includes(query) ||
        repo.stack.some((s) => s.toLowerCase().includes(query)) ||
        repo.category.toLowerCase().includes(query)
      );
    });
  }, [archiveRepos, search]);

  return (
    <section className="relative py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <AnimatedSection>
          <div className="flex flex-col gap-3 mb-12">
            <span className="section-label">All Projects</span>
            <h2 className="text-display-lg font-light text-primary tracking-tight">
              More work
            </h2>
            <p className="text-secondary text-base max-w-lg mt-1">
              Experiments, research, data science, and foundations — the full
              body of work.
            </p>
          </div>
        </AnimatedSection>

        {/* Search */}
        <AnimatedSection delay={0.1}>
          <div className="relative flex-1 max-w-sm mb-8">
            <Search
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted pointer-events-none"
            />
            <input
              type="text"
              placeholder="Search projects…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={cn(
                "w-full pl-9 pr-8 py-2.5 rounded-lg text-sm",
                "bg-surface border border-white/[0.08]",
                "text-primary placeholder:text-muted",
                "focus:outline-none focus:border-white/[0.16] focus:bg-elevated",
                "transition-all duration-200"
              )}
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted hover:text-secondary transition-colors"
              >
                <X size={13} />
              </button>
            )}
          </div>
        </AnimatedSection>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((repo) => (
              <ArchiveCard key={repo.id} repo={repo} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-secondary text-sm">No projects match that search.</p>
            <button
              onClick={() => setSearch("")}
              className="mt-3 text-xs text-muted hover:text-secondary underline transition-colors"
            >
              Clear search
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
