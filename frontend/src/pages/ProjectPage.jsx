import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "../components/Layout";
import previewProjects from "../components/Preview"; // fallback static data
import { fetchProject } from "../services/api";       // backend (optional)

export default function ProjectPage() {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        setLoading(true);
        let data = null;
        try {
          data = await fetchProject(slug); // try backend
        } catch {/* ignore */}
        if (!data) data = previewProjects.find(p => p.slug === slug) || null;
        if (!data) throw new Error("Not found");
        if (!cancelled) setProject(data);
      } catch (e) {
        if (!cancelled) setError("Failed to load project");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [slug]);

  return (
    <Layout>
      <div className="px-3 sm:px-6 max-w-full sm:max-w-5xl mx-auto">
        {loading && <div className="text-gray-500">Loading…</div>}
        {error && <div className="text-red-500">{error}</div>}
        {!loading && !error && project && (
          <>
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <h1 className="text-3xl font-bold">{project.title}</h1>
              <Link
                to="/"
                className="text-sm text-gray-500 dark:text-gray-400 hover:underline"
              >
                ← Back
              </Link>
            </div>

            {/* Description */}
            <p className="text-gray-800 dark:text-gray-300 mb-6">
              {project.long_description || project.description}
            </p>

            {/* Dashboard-style iframe */}
            <div className="rounded-xl overflow-hidden shadow-2xl bg-gray-900/90 backdrop-blur-md w-full h-auto sm:h-[70vh] mb-6">
              {/* fake dashboard top bar */}
              <div className="flex items-center gap-2 px-3 py-2 bg-gray-800/80 border-b border-gray-700">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                <h3 className="ml-3 text-sm font-medium text-gray-300">
                  {project.title} Demo
                </h3>
              </div>

              {/* responsive iframe */}
              <div className="relative w-full aspect-[4/3] sm:aspect-video">
                <iframe
                  src={project.demo_url}
                  title={project.title}
                  className="absolute inset-0 w-full h-full border-0 rounded-b-xl"
                  allow="fullscreen"
                />
              </div>
            </div>

            {/* Code snippet */}
            {project.code_snippet && (
              <div className="mb-6">
                <h2 className="font-semibold mb-2">Sample Code</h2>
                <pre className="bg-black/90 text-green-400 text-sm rounded-lg p-4 overflow-x-auto shadow-inner">
                  <code>{project.code_snippet}</code>
                </pre>
              </div>
            )}

            {/* GitHub CTA */}
            {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                rel="noreferrer"
                className="inline-block px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md shadow"
              >
                View on GitHub →
              </a>
            )}
          </>
        )}
      </div>
    </Layout>
  );
}
