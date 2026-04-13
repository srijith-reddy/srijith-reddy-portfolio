"use client";

import { motion } from "framer-motion";
import { Trophy, Sparkles, GraduationCap, Briefcase, ArrowUpRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { HACKATHONS, EXPERIENCE, EDUCATION } from "@/config/site";
import { cn } from "@/lib/utils";

function AwardCard({
  hack,
  index,
}: {
  hack: (typeof HACKATHONS)[number];
  index: number;
}) {
  return (
    <AnimatedSection delay={index * 0.1}>
      <motion.div
        whileHover={{ y: -3 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className={cn(
          "relative flex flex-col gap-5 h-full rounded-2xl overflow-hidden p-7",
          "border border-amber-200/[0.1] bg-surface shimmer-border",
          "hover:border-amber-200/[0.2] transition-colors duration-300"
        )}
      >
        {/* Warm gold gradient wash */}
        <div
          className="absolute inset-x-0 top-0 h-[160px] pointer-events-none opacity-60"
          style={{
            background:
              "radial-gradient(ellipse 70% 100% at 50% 0%, rgba(251,191,36,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="relative flex flex-col gap-5 h-full">
          {/* Placement ribbon */}
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-amber-300/20 bg-amber-400/[0.06]">
              <Trophy size={11} className="text-amber-300" />
              <span className="text-[0.65rem] font-semibold tracking-[0.14em] uppercase text-amber-200">
                {hack.placement}
              </span>
            </div>
            <span className="text-[0.65rem] text-muted font-medium tracking-wide uppercase">
              {hack.date}
            </span>
          </div>

          {/* Project name */}
          <div className="flex flex-col gap-1.5">
            <h3 className="text-display-md font-medium text-primary leading-tight tracking-tight">
              {hack.name}
            </h3>
            <p className="text-xs text-muted tracking-wide">
              {hack.event} · {hack.venue}
            </p>
          </div>

          {/* Summary */}
          <p className="text-sm text-secondary leading-relaxed">
            {hack.summary}
          </p>

          {/* Bullets */}
          <ul className="flex flex-col gap-2 pt-1">
            {hack.bullets.map((b) => (
              <li
                key={b}
                className="flex items-start gap-2 text-xs text-secondary/90 leading-relaxed"
              >
                <Sparkles
                  size={11}
                  className="mt-[3px] shrink-0 text-amber-200/70"
                />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          {/* Team */}
          <div className="mt-auto pt-4 border-t border-white/[0.06]">
            <p className="text-[0.65rem] text-muted tracking-[0.14em] uppercase mb-2">
              Team
            </p>
            <p className="text-xs text-secondary leading-relaxed">
              {hack.team.join(" · ")}
            </p>
          </div>

          {/* Optional links */}
          {(hack.liveUrl || hack.repoUrl) && (
            <div className="flex items-center gap-4 -mt-1">
              {hack.liveUrl && (
                <a
                  href={hack.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-1.5 text-xs text-secondary hover:text-primary transition-colors"
                >
                  <span>Try it</span>
                  <ArrowUpRight
                    size={11}
                    className="opacity-60 group-hover/link:opacity-100 transition-opacity"
                  />
                </a>
              )}
              {hack.repoUrl && (
                <a
                  href={hack.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-1.5 text-xs text-secondary hover:text-primary transition-colors"
                >
                  <span>Open source</span>
                  <ArrowUpRight
                    size={11}
                    className="opacity-60 group-hover/link:opacity-100 transition-opacity"
                  />
                </a>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </AnimatedSection>
  );
}

function TimelineEntry({
  icon: Icon,
  title,
  subtitle,
  period,
  body,
  delay,
}: {
  icon: typeof Briefcase;
  title: string;
  subtitle: string;
  period: string;
  body?: React.ReactNode;
  delay: number;
}) {
  return (
    <AnimatedSection delay={delay}>
      <div className="relative grid grid-cols-[auto_1fr] gap-5">
        {/* Icon rail */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center justify-center w-9 h-9 rounded-lg border border-white/[0.08] bg-surface">
            <Icon size={14} className="text-secondary" />
          </div>
          <div className="flex-1 w-px bg-gradient-to-b from-white/[0.08] to-transparent" />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-2 pb-10">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h4 className="text-base font-medium text-primary tracking-tight">
              {title}
            </h4>
            <span className="text-[0.7rem] text-muted font-medium tracking-wide uppercase">
              {period}
            </span>
          </div>
          <p className="text-sm text-secondary">{subtitle}</p>
          {body && <div className="pt-1">{body}</div>}
        </div>
      </div>
    </AnimatedSection>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

      {/* Ambient gold glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 0%, rgba(251,191,36,0.025) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <AnimatedSection>
          <div className="flex flex-col gap-3 mb-16">
            <span className="section-label">Experience & Awards</span>
            <h2 className="text-display-lg font-light text-primary tracking-tight">
              Wins, research,
              <br />
              and where I&apos;ve trained
            </h2>
          </div>
        </AnimatedSection>

        {/* Awards row */}
        <div className="mb-24">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-8">
              <Trophy size={14} className="text-amber-300" />
              <span className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-200/90">
                Hackathon Wins
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-amber-200/10 via-white/[0.04] to-transparent" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {HACKATHONS.map((hack, i) => (
              <AwardCard key={hack.name} hack={hack} index={i} />
            ))}
          </div>
        </div>

        {/* Research / Experience + Education in two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8">
          {/* Experience column */}
          <div>
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-8">
                <Briefcase size={14} className="text-secondary" />
                <span className="text-xs font-semibold tracking-[0.15em] uppercase text-muted">
                  Research & Experience
                </span>
                <div className="flex-1 h-px bg-white/[0.05]" />
              </div>
            </AnimatedSection>

            <div className="flex flex-col">
              {EXPERIENCE.map((exp, i) => (
                <TimelineEntry
                  key={exp.role}
                  icon={Briefcase}
                  title={exp.role}
                  subtitle={`${exp.org} · ${exp.location}`}
                  period={exp.period}
                  delay={i * 0.1}
                  body={
                    <ul className="flex flex-col gap-1.5">
                      {exp.bullets.map((b) => (
                        <li
                          key={b}
                          className="text-xs text-secondary/80 leading-relaxed pl-3 relative before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-1 before:h-1 before:rounded-full before:bg-white/[0.2]"
                        >
                          {b}
                        </li>
                      ))}
                    </ul>
                  }
                />
              ))}
            </div>
          </div>

          {/* Education column */}
          <div>
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap size={14} className="text-secondary" />
                <span className="text-xs font-semibold tracking-[0.15em] uppercase text-muted">
                  Education
                </span>
                <div className="flex-1 h-px bg-white/[0.05]" />
              </div>
            </AnimatedSection>

            <div className="flex flex-col">
              {EDUCATION.map((edu, i) => (
                <TimelineEntry
                  key={edu.school}
                  icon={GraduationCap}
                  title={edu.school}
                  subtitle={edu.degree}
                  period={edu.period}
                  delay={i * 0.1}
                  body={
                    <p className="text-xs text-secondary/80 leading-relaxed">
                      {edu.detail}
                    </p>
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
