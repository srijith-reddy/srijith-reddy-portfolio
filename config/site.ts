import type { ProjectCategory, ProcessedRepo } from "@/lib/types";

// ─── Site identity ────────────────────────────────────────────────────────────
export const siteConfig = {
  name: "Saisrijith Reddy",
  githubUsername: "srijith-reddy",
  title: "AI Engineer & Builder",
  tagline: "Full-stack AI engineer. I ship the model and the app it lives in.",
  description:
    "Voice agents, vision systems, iOS navigation, and calibrated ML — I build AI-native products end-to-end. On the side: graduate research in statistical learning at Baruch.",
  about: [
    "I'm a full-stack AI engineer — I work between AI systems and shipped product, taking models and primitives and building the whole app around them.",
    "I came up through industrial engineering, finance, statistics, and product, and each taught me something I use daily. That range is how I end up shipping multi-agent voice systems, calibrated ML for real markets, and iOS apps with on-device vision.",
    "Currently: graduate research in statistical learning at Baruch, hackathon weekends in NYC, and a long queue of product ideas I'm chipping through. Looking for problems where the modeling and the product both matter — and where owning both ends is the unlock.",
  ],
  github: "https://github.com/srijith-reddy",
  resume: "/srijith_resume.pdf",
  linkedin:
    "https://www.linkedin.com/in/saisrijith-reddy-maramreddy-399869166",
  email: "mailto:shrey.maramreddy@gmail.com",
  avatarUrl: "/profile_pic.png",
  siteUrl: "https://srijith-reddy-portfolio-main.vercel.app",
  ogImage: "https://srijith-reddy-portfolio-main.vercel.app/profile_pic.png",
};

// ─── Hackathon wins (surfaced in Experience section) ─────────────────────────
export interface Hackathon {
  name: string;
  placement: string;
  event: string;
  venue: string;
  date: string;
  summary: string;
  bullets: readonly string[];
  team: readonly string[];
  liveUrl?: string;
  repoUrl?: string;
}

export const HACKATHONS: readonly Hackathon[] = [
  {
    name: "FRTC",
    placement: "1st Place",
    event: "M-AGENTS · NYC Tech Week (a16z)",
    venue: "Fordham Lincoln Center, NYC",
    date: "2026",
    summary:
      "Autonomous fraud-ring investigator for community banks — hunting coordinated fraud that stays under every alert threshold and never trips a single-transaction rule.",
    bullets: [
      "Unsupervised engine surfaces the suspicious cluster, then 6 specialist agents + an adversarial Skeptic examine it concurrently",
      "Shared Cognee memory graph lets agents read and write each other's findings",
      "Live UI streams the verdict, lighting up the fraud graph in real time",
      "100% precision and recall — nothing hardcoded",
    ],
    team: [
      "Buddhsen Tripathi",
      "Olena Teslia",
      "Nolan Hu",
      "Joy van Oranje",
    ],
    repoUrl: "https://github.com/srijith-reddy/FRTC",
  },
  {
    name: "AI Blocks",
    placement: "1st Place",
    event: "VibeForward × Lovable",
    venue: "Fordham Gabelli, NYC",
    date: "2026",
    summary:
      "Recreated Scratch for AI engineering: a visual, node-based way to build AI systems instead of writing everything from scratch.",
    bullets: [
      "505 adaptive blocks wired into DAG-based system designs",
      "Two-stage decomposition: pick the stack, then retrieve only relevant blocks via embedding similarity",
      "Drop in any codebase — AI Blocks detects the stack, links files to blocks, and highlights gaps",
      "~80% fewer tokens vs. Opus 4.6 on equivalent tasks",
    ],
    team: ["Ryan Rana", "Nathanael Lara", "Makendy Midouin", "Buddhsen Tripathi"],
    liveUrl: "https://vercel-upload-psi.vercel.app/",
    repoUrl: "https://github.com/srijith-reddy/Scratch-for-AI-Dev",
  },
  {
    name: "Situational Intelligence",
    placement: "1st Place",
    event: "Grayscale Hackathon",
    venue: "NYC · Pioneering Minds AI",
    date: "2025",
    summary:
      "Real-time AI surveillance system that monitors live feeds, detects emergencies (falls, fights, fires), and understands context before triggering alerts.",
    bullets: [
      "Context-aware reasoning reduces false alarms and enables smarter dispatch",
      "Pulls city data to prioritize and route responder alerts",
      "Built end-to-end in 6 hours — shipped with live simulated fall demo",
    ],
    team: ["Ryan Rana", "Jaiden B", "Nathanael Lara"],
  },
];

// ─── Research & professional experience ──────────────────────────────────────
export const EXPERIENCE = [
  {
    role: "Founder",
    org: "ATTYR",
    location: "LvlUp Ventures portfolio · attyr.app",
    period: "Mar 2026 – Present",
    bullets: [
      "Built and shipped a solo AI stylist that styles the clothes you already own into daily outfits — live on TestFlight",
      "Photoreal virtual try-on lets users wear full looks before buying; a per-brand sizing engine tells them what's actually worth adding",
      "Backed by LvlUp Ventures pre-launch; featured in their portfolio lineup",
    ],
  },
  {
    role: "Research Assistant — Prof. Zeda Li",
    org: "Research Foundation of CUNY",
    location: "New York, NY",
    period: "Nov 2025 – Present",
    bullets: [
      "Designing simulation frameworks for brain connectivity networks",
      "Implementing network inference methods including Graphical Lasso and Bayesian models",
    ],
  },
  {
    role: "Data Analyst Intern",
    org: "BCITS Pvt Ltd",
    location: "Remote",
    period: "Sept 2022 – July 2023",
    bullets: [
      "Large-scale data cleansing across billing and IoT datasets",
      "Drove 15% improvement in billing accuracy and 20% lift in customer satisfaction",
    ],
  },
] as const;

// ─── Education ────────────────────────────────────────────────────────────────
export const EDUCATION = [
  {
    school: "Baruch College — Zicklin School of Business",
    degree: "MS, Statistics",
    period: "Expected May 2026",
    detail: "GPA 3.96 · Regression, Statistical Inference, Multivariate Methods, ML, Data Mining",
  },
  {
    school: "Imperial College Business School",
    degree: "MSc, Investment & Wealth Management",
    period: "Sept 2021 – Sept 2022",
    detail: "Merit classification · London, UK",
  },
  {
    school: "Pennsylvania State University",
    degree: "BS, Industrial Engineering",
    period: "Aug 2016 – May 2020",
    detail: "GPA 3.83 · Dean's List, all semesters",
  },
] as const;

// ─── Pinned / featured repos (shown in "Selected Work") ───────────────────────
// Change this list to control which projects appear as featured cards
export const FEATURED_REPOS: string[] = [
  "attyr",
  "FRTC",
  "Scratch-for-AI-Dev",
  "situational-intelligence",
  "M.I.R.A",
  "mira-stylist",
  "Pulse_hackathon",
  "ufc_app",
  "walkwithme-frontend",
  "trace",
  "Annota",
  "Statistical-Learning-for-Data-Mining-Projects",
  "Elo-Based-Time-Series-Forecasting",
  "cine-multivariate-seq2seq-forecasting",
  "codestudio",
];

// ─── Manual projects (not backed by a public GitHub repo) ─────────────────────
// Injected into the project list alongside the auto-fetched repos. Use for
// closed-source / solo builds that still deserve a featured card.
import type { ProcessedRepo as _ProcessedRepo } from "@/lib/types";

export const MANUAL_PROJECTS: _ProcessedRepo[] = [
  {
    id: -1,
    name: "attyr",
    displayName: "ATTYR",
    description:
      "A solo-built AI stylist that styles the clothes you already own into daily outfits — live on TestFlight, backed by LvlUp Ventures pre-launch. Photoreal virtual try-on lets you wear full looks before buying, and a per-brand sizing engine tells you what's actually worth adding. An AI stylist, not another shopping app.",
    category: "Applied AI Products",
    stack: ["React Native", "FastAPI", "OpenAI", "Computer Vision", "Postgres"],
    liveUrl: "https://attyr.app",
    liveLabel: "attyr.app",
    language: null,
    stars: 0,
    updatedAt: "2026-03-01T00:00:00Z",
    featured: true,
    score: 1000,
    size: 0,
  },
];

// ─── Hidden repos (never shown on the site) ───────────────────────────────────
export const HIDDEN_REPOS: string[] = [
  "srijith-reddy",          // profile README
  "vercel-upload",          // deploy scratch fork, not a project
  "resume",                 // Jekyll template fork, not a project
  "srijith-reddy-portfolio",  // old Quarto site
  "walkwithme-backend",     // bundled into walkwithme-frontend card
  "ai-agents-llm-projects",  // too basic
  "SQL-Mini-Projects",       // too basic
  "NEETCODE-150-SQL-50-Study-Guide",  // study guide, not a project
];

// ─── Manual overrides per repo ────────────────────────────────────────────────
// Override any auto-inferred metadata for specific repos
export const REPO_OVERRIDES: Record<string, Partial<ProcessedRepo>> = {
  "FRTC": {
    displayName: "FRTC",
    description:
      "🥇 1st place at M-AGENTS (NYC Tech Week · a16z). Autonomous fraud-ring investigator for community banks — an unsupervised engine surfaces the suspicious cluster, then 6 specialist agents plus an adversarial Skeptic examine it concurrently over a shared Cognee memory graph. A live UI streams the verdict, lighting up the fraud graph in real time. 100% precision and recall, nothing hardcoded.",
    category: "AI Systems",
    stack: ["Python", "Multi-Agent", "Cognee", "Graph Memory"],
    featured: true,
  },
  "Scratch-for-AI-Dev": {
    displayName: "AI Blocks",
    description:
      "🥇 1st place at VibeForward × Lovable (NYC). Scratch for AI engineering — 505 adaptive blocks wired into DAG-based systems. Drop in any codebase and it auto-maps the stack, links files to blocks, and highlights gaps. ~80% fewer tokens vs. Opus 4.6.",
    category: "AI Systems",
    stack: ["TypeScript", "Next.js", "Embeddings", "DAG", "MCP"],
    featured: true,
  },
  "M.I.R.A": {
    displayName: "M.I.R.A",
    description:
      "A full multi-agent AI voice assistant with wake-word detection, real-time speech processing, and intelligent task routing across specialized sub-agents.",
    category: "AI Systems",
    stack: ["Python", "OpenAI", "Whisper", "Cartesia", "Playwright"],
    liveUrl: "https://medium.com/@shrey.maramreddy/building-mira-my-voice-activated-multimodal-ai-assistant-from-scratch-604448979a1a",
    liveLabel: "Article",
    featured: true,
  },
  "mira-stylist": {
    displayName: "MIRA Stylist",
    description:
      "A luxury AI fashion companion with conversational style onboarding, virtual try-on powered by computer vision, editorial commentary, and animated look generation.",
    category: "Applied AI Products",
    stack: ["Python", "OpenAI", "Computer Vision", "FastAPI"],
    liveUrl: undefined,
    featured: true,
  },
  "codestudio": {
    displayName: "CodeStudio",
    description:
      "A pattern-first studio for coding-interview prep. One guided session a day across Python and SQL — a short lesson, a drag-and-drop puzzle, and a reflection — with progressive hints, spaced reviews, and an evolving art gallery that paints a tile for every solve.",
    category: "Foundations",
    stack: ["TypeScript", "Next.js", "Tailwind", "Zustand"],
    liveUrl: "https://codestudio-bice.vercel.app/",
    featured: true,
  },
  "Pulse_hackathon": {
    displayName: "CorVas",
    description:
      "Senior-friendly cardiac recovery PWA. AI-powered medication tracking, 12-week rehab plans, symptom check-ins, and intelligent care coordination — live in production.",
    category: "Applied AI Products",
    stack: ["TypeScript", "Next.js", "React", "AI APIs"],
    liveUrl: "https://corvas-ai.vercel.app/",
    featured: true,
  },
  "ufc_app": {
    displayName: "Octagon Intel",
    description:
      "A calibrated UFC fight intelligence platform. Prefight-only ML predictions, live market odds comparison, Kelly criterion sizing, and coverage-honest bout filtering.",
    category: "AI Systems",
    stack: ["Next.js", "TypeScript", "FastAPI", "XGBoost", "Scikit-learn"],
    featured: true,
  },
  "walkwithme-frontend": {
    displayName: "WalkWithMe",
    description:
      "Pedestrian-first iOS navigation with AR guidance, a conversational Loop Assistant, on-device hazard detection, GPX support, and themed walk suggestions.",
    category: "iOS / Mobile",
    stack: ["SwiftUI", "CoreML", "ARKit", "Python", "FastAPI"],
    featured: true,
  },
  "cine-multivariate-seq2seq-forecasting": {
    displayName: "CineSeq",
    description:
      "Decay-aware multivariate Seq2Seq forecasting for movie box-office revenue. Combines exponential decay structure with attention-augmented LSTM–GRU and trailer emotion embeddings.",
    category: "Machine Learning",
    stack: ["Python", "PyTorch", "LSTM/GRU", "Attention", "Jupyter"],
    featured: true,
  },
  "situational-intelligence": {
    displayName: "Situational Intelligence",
    description:
      "🥇 1st place at the Grayscale Hackathon (NYC, Pioneering Minds AI). Real-time AI surveillance for emergency monitoring — live camera, motion analysis, Claude Vision threat assessment, speech-triggered dispatch, and responder mapping. Context-aware reasoning to cut false alarms.",
    category: "Applied AI Products",
    stack: ["JavaScript", "Claude Vision", "WebRTC", "Vite", "Leaflet"],
    featured: true,
  },
  "trace": {
    displayName: "Trace",
    description:
      "24/7 AI-powered supply chain manager and payment agent. Monitors inventory, surfaces disruptions, and orchestrates autonomous payment and fulfillment actions.",
    category: "AI Systems",
    stack: ["JavaScript", "AI Agents", "Payments API"],
    featured: true,
  },
  "Annota": {
    displayName: "ANNOTA",
    description:
      "PDF-to-code research pipeline for statistical methods. Dual-parser ingestion (PyMuPDF + Docling), GPT normalization, and ChromaDB retrieval yield 261 runnable NumPy estimators behind a unified interface. Paired with Monte Carlo infrastructure — 6,000 synthetic brain-connectivity graphs benchmarking 5 transfer-learning variants on F1, SHD, and Frobenius error.",
    category: "Statistics & Analysis",
    stack: ["Python", "NumPy", "ChromaDB", "Docling", "Monte Carlo"],
    featured: true,
  },
  "ai-agents-llm-projects": {
    displayName: "AI Agents & LLM Projects",
    description:
      "A collection of applied LLM experiments, agentic workflows, and prompt engineering systems built across OpenAI and open-source model ecosystems.",
    category: "AI Systems",
    stack: ["Python", "LangChain", "OpenAI"],
  },
  "Payment-Method-Classification-ML-ANN": {
    displayName: "Payment Method Classifier",
    description:
      "Artificial neural network pipeline for payment method classification, with feature engineering and model evaluation.",
    category: "Machine Learning",
    stack: ["Python", "TensorFlow", "Scikit-learn", "Jupyter"],
  },
  "Sentiment-Classification-with-Neural-Networks": {
    displayName: "Neural Sentiment Classifier",
    description:
      "Multi-class sentiment classification using recurrent and dense neural network architectures with comparative analysis.",
    category: "Machine Learning",
    stack: ["Python", "Keras", "NLP", "Jupyter"],
  },
  "Elo-Based-Time-Series-Forecasting": {
    displayName: "Elo-Based Forecasting",
    description:
      "Sports outcome forecasting using Elo ratings combined with time-series modeling for dynamic win-probability prediction.",
    category: "Machine Learning",
    stack: ["Python", "Time Series", "Elo Rating", "Jupyter"],
  },
  "Statistical-Learning-for-Data-Mining-Projects": {
    displayName: "Statistical Learning Projects",
    description:
      "Applied statistical learning methods across supervised, unsupervised, and regularized regression models with real-world datasets.",
    category: "Statistics & Analysis",
    stack: ["Python", "Scikit-learn", "Statsmodels", "Jupyter"],
  },
  "NEETCODE-150-SQL-50-Study-Guide": {
    displayName: "NeetCode / SQL Study Guide",
    description:
      "Structured solutions and notes for 150 algorithm problems and 50 SQL challenges, organized by pattern and difficulty.",
    category: "Foundations",
    stack: ["Python", "SQL", "LeetCode"],
  },
  "SQL-Mini-Projects": {
    displayName: "SQL Mini Projects",
    description:
      "Focused SQL analytical projects covering window functions, CTEs, aggregations, and real-world data modeling scenarios.",
    category: "Data Science",
    stack: ["SQL", "PostgreSQL"],
  },
  "msft-pinterest-valuation-analysis": {
    displayName: "MSFT / Pinterest Valuation",
    description:
      "DCF and comparable-company valuation analysis for Microsoft and Pinterest, with scenario modeling and sensitivity tables.",
    category: "Data Science",
    stack: ["Excel", "Finance", "Valuation"],
  },
  "Global-Safety-Regression-Model": {
    displayName: "Global Safety Regression",
    description:
      "Regression modeling of global safety indicators using multivariate statistical methods in R, with diagnostic and interpretation analysis.",
    category: "Statistics & Analysis",
    stack: ["R", "Regression", "Statistics"],
  },
  "Multivariate-Stat-Methods": {
    displayName: "Multivariate Statistical Methods",
    description:
      "Applied multivariate statistics: PCA, cluster analysis, MANOVA, and discriminant analysis across real-world datasets.",
    category: "Statistics & Analysis",
    stack: ["R", "PCA", "MANOVA", "Statistics"],
  },
};

// ─── Category display config ──────────────────────────────────────────────────
export const CATEGORY_META: Record<
  ProjectCategory,
  { label: string; color: string; glow: string }
> = {
  "AI Systems": {
    label: "AI Systems",
    color: "text-blue-300",
    glow: "from-blue-950/40 to-transparent",
  },
  "Applied AI Products": {
    label: "Applied AI",
    color: "text-violet-300",
    glow: "from-violet-950/40 to-transparent",
  },
  "Machine Learning": {
    label: "Machine Learning",
    color: "text-teal-300",
    glow: "from-teal-950/40 to-transparent",
  },
  "Data Science": {
    label: "Data Science",
    color: "text-amber-300",
    glow: "from-amber-950/30 to-transparent",
  },
  "iOS / Mobile": {
    label: "iOS / Mobile",
    color: "text-sky-300",
    glow: "from-sky-950/40 to-transparent",
  },
  Backend: {
    label: "Backend",
    color: "text-green-300",
    glow: "from-green-950/30 to-transparent",
  },
  "Statistics & Analysis": {
    label: "Statistics",
    color: "text-orange-300",
    glow: "from-orange-950/30 to-transparent",
  },
  Foundations: {
    label: "Foundations",
    color: "text-zinc-400",
    glow: "from-zinc-900/40 to-transparent",
  },
};
