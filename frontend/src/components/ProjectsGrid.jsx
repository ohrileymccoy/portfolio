import ProjectCard from "./ProjectCard";

export default function ProjectsGrid({ projects = [] }) {
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
