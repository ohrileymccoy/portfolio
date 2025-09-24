import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { fetchProjects } from "../services/api";
import previewProjects from "./Preview";

export default function ProjectsGrid() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const load = async () => {
      const data = await fetchProjects();
      // API returns { items: [] } on failure, so handle gracefully
      if (isMounted) {
        setProjects(data.items && data.items.length > 0 ? data.items : previewProjects);
      }
    };

    load();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard
            key={p.slug}
            title={p.title}
            description={p.description}
            slug={p.slug}
            image={p.image}
            githubUrl={p.github_url}
          />
        ))}
      </div>
    </section>
  );
}
