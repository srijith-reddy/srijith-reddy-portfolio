"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Github, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";

const stagger = {
  container: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  },
  item: {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
  },
};

export default function Hero() {
  const blobRef1 = useRef<HTMLDivElement>(null);
  const blobRef2 = useRef<HTMLDivElement>(null);

  // Subtle mouse parallax on blobs only
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (clientX - cx) / cx;
      const dy = (clientY - cy) / cy;
      if (blobRef1.current) {
        blobRef1.current.style.transform = `translate(${dx * 18}px, ${dy * 12}px)`;
      }
      if (blobRef2.current) {
        blobRef2.current.style.transform = `translate(${-dx * 14}px, ${-dy * 10}px)`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToWork = () => {
    document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* ── Ambient background ───────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Blob 1 — upper left */}
        <div
          ref={blobRef1}
          className="absolute -top-32 -left-32 w-[700px] h-[700px] rounded-full animate-blob-1 transition-transform duration-500 ease-out"
          style={{
            background:
              "radial-gradient(circle at 40% 40%, rgba(99,102,241,0.07) 0%, transparent 65%)",
          }}
        />
        {/* Blob 2 — lower right */}
        <div
          ref={blobRef2}
          className="absolute -bottom-40 -right-32 w-[600px] h-[600px] rounded-full animate-blob-2 transition-transform duration-500 ease-out"
          style={{
            background:
              "radial-gradient(circle at 60% 60%, rgba(168,85,247,0.05) 0%, transparent 65%)",
          }}
        />
        {/* Very subtle center radial */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(255,255,255,0.015) 0%, transparent 70%)",
          }}
        />
        {/* Horizontal scan line */}
        <div
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.03) 30%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.03) 70%, transparent 100%)",
          }}
        />
      </div>

      {/* ── Main content ─────────────────────────────────────────────────── */}
      <div className="relative mx-auto max-w-7xl w-full px-6 pt-32 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <motion.div
            variants={stagger.container}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6 max-w-3xl"
          >
            {/* Label */}
            <motion.div variants={stagger.item}>
              <span className="section-label tracking-[0.2em]">
                AI Engineer · Builder
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={stagger.item}
              className="text-display-2xl font-light text-primary leading-none tracking-tight"
            >
              Saisrijith
              <br />
              <span className="text-secondary font-extralight">Reddy</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={stagger.item}
              className="text-display-md font-light text-secondary max-w-lg leading-snug"
            >
              {siteConfig.tagline}
            </motion.p>

            {/* Supporting copy */}
            <motion.p
              variants={stagger.item}
              className="text-base text-muted leading-relaxed max-w-lg"
            >
              {siteConfig.description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={stagger.item}
              className="flex flex-wrap gap-3 pt-2"
            >
              <button
                onClick={scrollToWork}
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-background text-sm font-medium hover:bg-primary/90 transition-all duration-200 hover:gap-3"
              >
                View Work
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-0.5 transition-transform duration-200"
                />
              </button>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/[0.1] text-secondary text-sm font-medium hover:text-primary hover:border-white/[0.2] hover:bg-white/[0.04] transition-all duration-200"
              >
                <Github size={15} />
                GitHub
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/[0.07] text-muted text-sm font-medium hover:text-secondary hover:border-white/[0.12] transition-all duration-200"
              >
                <Mail size={15} />
                Connect
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/[0.06] to-transparent blur-2xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              {/* Subtle ring */}
              <div className="absolute -inset-[3px] rounded-full bg-gradient-to-br from-white/[0.1] via-transparent to-white/[0.05]" />
              {/* Photo */}
              <div className="relative w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden ring-1 ring-white/[0.08]">
                <Image
                  src={siteConfig.avatarUrl}
                  alt={siteConfig.name}
                  fill
                  className="object-cover grayscale-[15%] contrast-[1.02]"
                  priority
                  sizes="(max-width: 1024px) 192px, 256px"
                />
              </div>
              {/* Small status dot */}
              <div className="absolute bottom-3 right-3 lg:bottom-4 lg:right-4">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-40" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 ring-2 ring-background" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Scroll indicator ───────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="section-label text-[0.6rem]">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
