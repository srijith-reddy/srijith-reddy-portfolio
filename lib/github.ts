import type { GitHubRepo } from "./types";

const GITHUB_USERNAME = "srijith-reddy";
const GITHUB_API = "https://api.github.com";

export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github.v3+json",
  };

  if (process.env.GITHUB_TOKEN) {
    headers["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const res = await fetch(
    `${GITHUB_API}/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated&type=public`,
    {
      headers,
      // ISR: revalidate every hour — new repos appear within 60 minutes
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    console.error(`GitHub API error: ${res.status} ${res.statusText}`);
    return [];
  }

  const repos: GitHubRepo[] = await res.json();
  return repos;
}
