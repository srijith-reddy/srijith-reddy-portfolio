import type { GitHubRepo, ProcessedRepo, ProjectCategory } from "./types";
import {
  FEATURED_REPOS,
  HIDDEN_REPOS,
  REPO_OVERRIDES,
} from "@/config/site";

// ─── Category inference ───────────────────────────────────────────────────────
function inferCategory(repo: GitHubRepo): ProjectCategory {
  const name = repo.name.toLowerCase();
  const lang = repo.language || "";

  if (
    name.includes("mira") ||
    name.includes("agent") ||
    name.includes("llm") ||
    name.includes("voice") ||
    name.includes("ufc") ||
    name.includes("intel")
  )
    return "AI Systems";

  if (
    name.includes("stylist") ||
    name.includes("pulse") ||
    name.includes("corvas") ||
    name.includes("hackathon")
  )
    return "Applied AI Products";

  if (lang === "Swift" || name.includes("walkwith") || name.includes("ios"))
    return "iOS / Mobile";

  if (
    name.includes("seq2seq") ||
    name.includes("forecast") ||
    name.includes("neural") ||
    name.includes("sentiment") ||
    name.includes("classification")
  )
    return "Machine Learning";

  if (
    name.includes("sql") ||
    name.includes("elo") ||
    name.includes("valuation") ||
    name.includes("msft") ||
    name.includes("pinterest")
  )
    return "Data Science";

  if (
    lang === "R" ||
    name.includes("regression") ||
    name.includes("statistical") ||
    name.includes("multivariate")
  )
    return "Statistics & Analysis";

  if (name.includes("backend") || name.includes("api") || name.includes("server"))
    return "Backend";

  if (name.includes("neetcode") || name.includes("study") || name.includes("guide"))
    return "Foundations";

  return "Foundations";
}

// ─── Stack inference ──────────────────────────────────────────────────────────
function inferStack(repo: GitHubRepo): string[] {
  const name = repo.name.toLowerCase();
  const stack: string[] = [];

  if (repo.language) stack.push(repo.language);

  if (name.includes("mira") && !name.includes("stylist")) {
    return ["Python", "OpenAI", "Whisper"];
  }
  if (name.includes("walkwith")) return ["Swift", "SwiftUI", "ARKit"];
  if (name.includes("ufc")) return ["Python", "XGBoost", "Scikit-learn"];
  if (name.includes("cine") || name.includes("seq2seq"))
    return ["Python", "PyTorch", "LSTM/GRU"];
  if (name.includes("agent") || name.includes("llm"))
    return ["Python", "LangChain", "OpenAI"];
  if (repo.language === "R") return ["R", "Statistics"];
  if (repo.language === "TypeScript") return ["TypeScript", "Next.js", "React"];
  if (repo.language === "Swift") return ["Swift", "SwiftUI"];
  if (!stack.length) return ["Python"];

  return Array.from(new Set(stack)).slice(0, 4);
}

// ─── Scoring heuristic ─────────────────────────────────────────────────────────
function scoreRepo(repo: GitHubRepo): number {
  let score = 0;

  // Stars
  score += repo.stargazers_count * 5;

  // Recency signal
  const daysOld =
    (Date.now() - new Date(repo.updated_at).getTime()) / 86_400_000;
  if (daysOld < 30) score += 25;
  else if (daysOld < 90) score += 15;
  else if (daysOld < 180) score += 8;
  else if (daysOld < 365) score += 3;

  // Size signal (indicates non-trivial project)
  if (repo.size > 10000) score += 15;
  else if (repo.size > 1000) score += 10;
  else if (repo.size > 100) score += 5;

  // Language quality signal
  const premiumLangs = ["TypeScript", "Swift", "Python"];
  if (premiumLangs.includes(repo.language || "")) score += 8;

  // Boost manually featured repos significantly
  if (FEATURED_REPOS.includes(repo.name)) score += 100;

  return score;
}

// ─── Display name formatting ───────────────────────────────────────────────────
function formatDisplayName(name: string): string {
  return name
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .replace(/\bLlm\b/g, "LLM")
    .replace(/\bAi\b/g, "AI")
    .replace(/\bMl\b/g, "ML")
    .replace(/\bSql\b/g, "SQL")
    .replace(/\bIos\b/g, "iOS")
    .replace(/\bAnn\b/g, "ANN")
    .replace(/\bGru\b/g, "GRU");
}

// ─── Main pipeline ─────────────────────────────────────────────────────────────
export function processRepos(raw: GitHubRepo[]): ProcessedRepo[] {
  return raw
    .filter((r) => !r.fork && !HIDDEN_REPOS.includes(r.name))
    .map((repo): ProcessedRepo => {
      const override = REPO_OVERRIDES[repo.name] ?? {};
      const base: ProcessedRepo = {
        id: repo.id,
        name: repo.name,
        displayName: override.displayName ?? formatDisplayName(repo.name),
        description:
          override.description ??
          repo.description ??
          "A project by Saisrijith Reddy.",
        category: override.category ?? inferCategory(repo),
        stack: override.stack ?? inferStack(repo),
        githubUrl: repo.html_url,
        liveUrl: override.liveUrl ?? (repo.homepage || undefined),
        language: repo.language,
        stars: repo.stargazers_count,
        updatedAt: repo.updated_at,
        featured:
          override.featured !== undefined
            ? override.featured
            : FEATURED_REPOS.includes(repo.name),
        score: scoreRepo(repo),
        size: repo.size,
      };
      return { ...base, ...override };
    })
    .sort((a, b) => b.score - a.score);
}
