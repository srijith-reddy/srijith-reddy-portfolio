"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import AnimatedSection from "@/components/AnimatedSection";

const LINKS = [
  {
    label: "GitHub",
    sublabel: "See the work",
    href: siteConfig.github,
    icon: Github,
    external: true,
  },
  {
    label: "LinkedIn",
    sublabel: "Connect professionally",
    href: siteConfig.linkedin,
    icon: Linkedin,
    external: true,
  },
  {
    label: "Email",
    sublabel: "Say hello",
    href: siteConfig.email,
    icon: Mail,
    external: false,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(99,102,241,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Label */}
          <AnimatedSection>
            <span className="section-label block mb-6">Contact</span>
          </AnimatedSection>

          {/* Heading */}
          <AnimatedSection delay={0.1}>
            <h2 className="text-display-xl font-light text-primary tracking-tight mb-6">
              Let&apos;s work
              <br />
              together
            </h2>
          </AnimatedSection>

          {/* Subtext */}
          <AnimatedSection delay={0.2}>
            <p className="text-secondary text-base leading-relaxed mb-12 max-w-md mx-auto">
              Open to collaborations, interesting problems, and conversations
              about AI engineering and products.
            </p>
          </AnimatedSection>

          {/* Link cards */}
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              {LINKS.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="group flex items-center gap-3 px-5 py-3.5 rounded-xl border border-white/[0.07] bg-surface hover:border-white/[0.14] hover:bg-elevated transition-all duration-200"
                >
                  <div className="p-1.5 rounded-lg bg-white/[0.05] group-hover:bg-white/[0.08] transition-colors">
                    <link.icon size={16} className="text-secondary group-hover:text-primary transition-colors" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium text-primary">{link.label}</p>
                    <p className="text-xs text-muted">{link.sublabel}</p>
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="ml-auto text-muted opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </motion.a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
