"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import AnimatedSection from "@/components/AnimatedSection";

const STATS = [
  { label: "Hackathon Wins", value: "2×" },
  { label: "GPA (MS Stats)", value: "3.95" },
  { label: "Shipped Projects", value: "15+" },
];

export default function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text */}
          <div className="flex flex-col gap-8">
            <AnimatedSection>
              <div className="flex flex-col gap-3">
                <span className="section-label">About</span>
                <h2 className="text-display-lg font-light text-primary tracking-tight">
                  The builder
                  <br />
                  behind the work
                </h2>
              </div>
            </AnimatedSection>

            <div className="flex flex-col gap-5">
              {siteConfig.about.map((paragraph, i) => (
                <AnimatedSection key={i} delay={i * 0.1 + 0.1}>
                  <p className="text-secondary leading-relaxed text-base">
                    {paragraph}
                  </p>
                </AnimatedSection>
              ))}
            </div>

            {/* Stats */}
            <AnimatedSection delay={0.4}>
              <div className="grid grid-cols-3 gap-4 pt-4">
                {STATS.map((stat) => (
                  <div key={stat.label} className="flex flex-col gap-0.5">
                    <span className="text-display-md font-light text-primary">
                      {stat.value}
                    </span>
                    <span className="text-[0.65rem] text-muted uppercase tracking-widest">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Photo treatment */}
          <AnimatedSection delay={0.2} direction="fade">
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* Background shape */}
                <div
                  className="absolute -inset-8 rounded-3xl opacity-30"
                  style={{
                    background:
                      "radial-gradient(ellipse at 50% 50%, rgba(99,102,241,0.12) 0%, transparent 70%)",
                  }}
                />

                {/* Main photo frame */}
                <div className="relative w-72 h-80 lg:w-80 lg:h-96 rounded-2xl overflow-hidden border border-white/[0.07]">
                  <Image
                    src={siteConfig.avatarUrl}
                    alt={siteConfig.name}
                    fill
                    className="object-cover object-top grayscale-[10%] contrast-[1.02]"
                    sizes="(max-width: 1024px) 288px, 320px"
                  />
                  {/* Overlay gradient at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-surface/80 to-transparent" />
                </div>

                {/* Floating tag */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -left-4 bg-elevated border border-white/[0.08] rounded-xl px-4 py-3 shadow-2xl"
                >
                  <p className="text-xs text-secondary">Currently building</p>
                  <p className="text-sm font-medium text-primary mt-0.5">
                    AI-native products
                  </p>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
