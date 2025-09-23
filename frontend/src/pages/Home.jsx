import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import FeaturedStrip from "../components/FeaturedStrip";
import GitHubDashboard from "../components/GitHubDashboard";
import AboutCard from "../components/AboutCard";
import ProjectsGrid from "../components/ProjectsGrid";
import { fetchProjects } from "../services/api";
import SkeletonCard from "../components/SkeletonCard";

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data = await fetchProjects();
        setProjects(data.items || []);
      } catch {
        setError("Failed to load projects");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const featured = projects.slice(0, 6);

  const stats = {
    repos: new Set(projects.map((p) => p.github_url)).size || projects.length,
    pulls: Math.max(3, Math.round(projects.length * 1.2)),
    branches: Math.max(6, Math.round(projects.length * 2.1)),
    files: Math.max(80, projects.length * 40),
  };

  return (
    <Layout>
      {/* Featured Projects Strip – no banner */}
      {loading ? (
        <div className="flex gap-4 overflow-x-auto pb-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      ) : error ? (
        <div className="text-center text-red-500 my-6">
          <p>{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Retry
          </button>
        </div>
      ) : (
        <FeaturedStrip projects={featured} />
      )}

      {/* Dashboard + About */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GitHubDashboard stats={stats} />
        <AboutCard>
          <p>Full-stack builder focused on Cloudflare, React, and shippable MVPs.</p>
          <p>
            Journalism tools, data visualizations, delivery tracking, and AI-assisted workflows
            — projects that actually help small businesses and local communities.
          </p>
          <p>
            I love clean DX, resilient UIs, and making complex things easy to use. This portfolio
            embeds live apps so you can try everything without leaving.
          </p>
        </AboutCard>
      </div>

      {/* All Projects */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      ) : (
        <ProjectsGrid projects={projects} />
      )}
    </Layout>
  );
}
