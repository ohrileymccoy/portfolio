import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { fetchProject } from "../services/api";

export default function Project() {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const data = await fetchProject(slug);
        setProject(data);
      } catch (err) {
        setError("Failed to load project");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [slug]);

  return (
    <Layout>
      <div className="p-6 max-w-5xl mx-auto">
        {/* Loading skeleton */}
        {loading && (
          <div className="space-y-4 animate-pulse">
            <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-1/2" />
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4" />
            <div className="h-[60vh] bg-gray-300 dark:bg-gray-700 rounded-xl" />
          </div>
        )}

        {/* Error block */}
        {error && (
          <div className="text-center text-red-500 my-6">
            <p>{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Retry
            </button>
          </div>
        )}

        {/* Loaded project */}
        {!loading && !error && project && (
          <>
            <header className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold">{project.title}</h1>
                <p className="text-gray-700 dark:text-white/70 mt-1 max-w-3xl">
                  {project.description}
                </p>
              </div>

              {project.github_url && (
                <a
                  href={project.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-md bg-white/10 hover:bg-white/20 border border-white/20 text-sm font-medium"
                >
                  GitHub ↗
                </a>
              )}
            </header>

            {/* Live demo iframe */}
            {project.demo_url && (
              <div className="w-full h-[72vh] rounded-xl overflow-hidden border border-white/10 bg-black/20 shadow-lg">
                <iframe
                  src={project.demo_url}
                  title={`${project.title} demo`}
                  className="w-full h-full"
                  allow="clipboard-read; clipboard-write; fullscreen; geolocation; microphone; camera"
                />
              </div>
            )}
          </>
        )}
      </div>
    </Layout>
  );
}
