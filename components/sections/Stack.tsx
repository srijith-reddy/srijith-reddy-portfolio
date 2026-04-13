"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { cn } from "@/lib/utils";

const STACK_GROUPS = [
  {
    label: "Languages & Tools",
    items: ["Python", "TypeScript", "Swift", "R", "SQL", "SAS", "Git", "Jupyter"],
  },
  {
    label: "AI, LLMs & Agents",
    items: [
      "OpenAI API",
      "Claude Vision",
      "LangChain",
      "LangGraph",
      "Hugging Face",
      "Whisper",
      "Cartesia",
      "Embeddings / RAG",
    ],
  },
  {
    label: "ML & Statistical Learning",
    items: [
      "PyTorch",
      "Scikit-learn",
      "XGBoost",
      "LightGBM",
      "Ridge / Lasso",
      "SVM",
      "LDA",
      "Graphical Lasso",
      "Seq2Seq LSTM/GRU",
      "Attention",
    ],
  },
  {
    label: "Product & Infra",
    items: [
      "Next.js",
      "React",
      "FastAPI",
      "Streamlit",
      "SwiftUI",
      "ARKit",
      "CoreML",
      "Vercel",
      "PostgreSQL",
    ],
  },
  {
    label: "Analysis & Visualization",
    items: ["Matplotlib", "Seaborn", "ggplot2", "Quarto", "LaTeX", "Excel"],
  },
];

function Pill({ label, accent }: { label: string; accent?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center text-xs font-medium px-3 py-1.5 rounded-lg border",
        "transition-all duration-200 cursor-default",
        accent
          ? "border-white/[0.12] bg-white/[0.06] text-primary hover:bg-white/[0.09]"
          : "border-white/[0.06] bg-white/[0.03] text-secondary hover:border-white/[0.1] hover:text-primary"
      )}
    >
      {label}
    </span>
  );
}

export default function Stack() {
  return (
    <section id="stack" className="relative py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <AnimatedSection>
          <div className="flex flex-col gap-3 mb-16">
            <span className="section-label">Capabilities</span>
            <h2 className="text-display-lg font-light text-primary tracking-tight">
              Skills & stack
            </h2>
            <p className="text-secondary text-base max-w-lg mt-1">
              Tools and technologies I use across AI engineering, product, data,
              and mobile work.
            </p>
          </div>
        </AnimatedSection>

        {/* Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {STACK_GROUPS.map((group, gi) => (
            <AnimatedSection key={group.label} delay={gi * 0.08}>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold tracking-[0.15em] uppercase text-muted">
                    {group.label}
                  </span>
                  <div className="flex-1 h-px bg-white/[0.05]" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item, i) => (
                    <Pill key={item} label={item} accent={i < 3} />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
