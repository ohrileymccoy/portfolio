import ProjectCard from "./ProjectCard";

export default function ProjectsGrid({ projects = [] }) {
  return (
    <section className="mt-12">
      <h2 className="text-xl font-semibold mb-4">All Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
