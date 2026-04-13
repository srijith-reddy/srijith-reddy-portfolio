import type { ProjectCategory, ProcessedRepo } from "@/lib/types";

// ─── Site identity ────────────────────────────────────────────────────────────
export const siteConfig = {
  name: "Saisrijith Reddy",
  githubUsername: "srijith-reddy",
  title: "AI Engineer & Builder",
  tagline: "I build AI systems that feel like products.",
  description:
    "From multimodal AI and intelligent voice agents to iOS navigation apps and forecasting systems — I turn ambitious ideas into polished, working software.",
  about: [
    "I'm an AI engineer with a product-first mindset. My work spans the full stack of applied intelligence — from building multi-agent voice systems and virtual try-on tools to shipping native iOS apps and deploying calibrated ML models into real products.",
    "Recent focus: multimodal AI, intelligent assistants, and building experiences that make AI feel native rather than bolted on.",
    "Background across machine learning, data science, statistics, and mobile development gives me range across the full technical spectrum.",
  ],
  github: "https://github.com/srijith-reddy",
  linkedin: "https://linkedin.com/in/saisrijith-reddy-maramreddy",
  email: "mailto:saisrijith@example.com", // update with real email
  avatarUrl: "/profile_pic.png",
  siteUrl: "https://srijith-reddy.vercel.app",
  ogImage: "https://srijith-reddy-portfolio-main.vercel.app/profile_pic.png",
};

// ─── Pinned / featured repos (shown in "Selected Work") ───────────────────────
// Change this list to control which projects appear as featured cards
export const FEATURED_REPOS: string[] = [
  "M.I.R.A",
  "mira-stylist",
  "Pulse_hackathon",
  "ufc_app",
  "walkwithme-frontend",
  "situational-intelligence",
  "trace",
  "cine-multivariate-seq2seq-forecasting",
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
  // Hide Data Science / ML / Stats coursework
  "Payment-Method-Classification-ML-ANN",
  "Sentiment-Classification-with-Neural-Networks",
  "Elo-Based-Time-Series-Forecasting",
  "msft-pinterest-valuation-analysis",
  "Statistical-Learning-for-Data-Mining-Projects",
  "Global-Safety-Regression-Model",
  "Multivariate-Stat-Methods",
];

// ─── Manual overrides per repo ────────────────────────────────────────────────
// Override any auto-inferred metadata for specific repos
export const REPO_OVERRIDES: Record<string, Partial<ProcessedRepo>> = {
  "M.I.R.A": {
    displayName: "M.I.R.A",
    description:
      "A full multi-agent AI voice assistant with wake-word detection, real-time speech processing, and intelligent task routing across specialized sub-agents.",
    category: "AI Systems",
    stack: ["Python", "OpenAI", "Whisper", "Cartesia", "Playwright"],
    featured: true,
  },
  "mira-stylist": {
    displayName: "MIRA Stylist",
    description:
      "A luxury AI fashion companion with conversational style onboarding, virtual try-on powered by computer vision, editorial commentary, and animated look generation.",
    category: "Applied AI Products",
    stack: ["Python", "OpenAI", "Computer Vision", "FastAPI"],
    featured: true,
  },
  "Pulse_hackathon": {
    displayName: "CorVas",
    description:
      "Senior-friendly cardiac recovery PWA. AI-powered medication tracking, 12-week rehab plans, symptom check-ins, and intelligent care coordination — live in production.",
    category: "Applied AI Products",
    stack: ["TypeScript", "Next.js", "React", "AI APIs"],
    liveUrl: "https://corvas-ai.vercel.app",
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
    displayName: "AEGIS",
    description:
      "Browser-based situational intelligence prototype for emergency monitoring. Live camera, motion analysis, Claude Vision threat assessment, speech-triggered dispatch workflows, and responder mapping.",
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
    category: "Data Science",
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
