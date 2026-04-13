import { fetchGitHubRepos } from "@/lib/github";
import { processRepos } from "@/lib/repos";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import FeaturedWork from "@/components/sections/FeaturedWork";
import ProjectArchive from "@/components/sections/ProjectArchive";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Stack from "@/components/sections/Stack";
import Contact from "@/components/sections/Contact";

// ISR: regenerate this page at most once per hour.
// Any new public repo you push to GitHub will appear within 60 minutes.
export const revalidate = 3600;

export default async function Home() {
  const rawRepos = await fetchGitHubRepos();
  const repos = processRepos(rawRepos);

  return (
    <main>
      <Navigation />
      <Hero />
      <FeaturedWork repos={repos} />
      <ProjectArchive repos={repos} />
      <About />
      <Experience />
      <Stack />
      <Contact />
      <Footer />
    </main>
  );
}
