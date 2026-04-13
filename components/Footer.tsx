"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-surface/40 mt-32">
      <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} {siteConfig.name}.{" "}
          <span className="text-muted/60">
            Built with Next.js · Auto-synced with GitHub.
          </span>
        </p>
        <div className="flex items-center gap-4">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted hover:text-secondary transition-colors"
          >
            <Github size={16} />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted hover:text-secondary transition-colors"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={siteConfig.email}
            aria-label="Email"
            className="text-muted hover:text-secondary transition-colors"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
