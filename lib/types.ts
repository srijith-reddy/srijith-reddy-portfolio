export type ProjectCategory =
  | "AI Systems"
  | "Applied AI Products"
  | "Machine Learning"
  | "Data Science"
  | "iOS / Mobile"
  | "Backend"
  | "Statistics & Analysis"
  | "Foundations";

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  size: number;
  fork: boolean;
  updated_at: string;
  created_at: string;
  pushed_at: string;
  default_branch: string;
}

export interface ProcessedRepo {
  id: number;
  name: string;
  displayName: string;
  description: string;
  category: ProjectCategory;
  stack: string[];
  githubUrl: string;
  liveUrl?: string;
  liveLabel?: string;
  language: string | null;
  stars: number;
  updatedAt: string;
  featured: boolean;
  score: number;
  size: number;
}
