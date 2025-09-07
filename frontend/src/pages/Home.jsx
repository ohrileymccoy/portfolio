import Layout from "../components/Layout";
import Carousel from "../components/Carousel";
import ProjectCard from "../components/ProjectCard";

const projects = [
  { title: "Portfolio Showcase" },
  { title: "Delivery Tracker" },
  { title: "Local News Platform" },
  { title: "Factory Farm (Novel)" },
  { title: "Photojournalism Archive" },
];

export default function Home() {
  return (
    <Layout>
      <Carousel />
      <h2 className="text-xl font-bold mb-4">Featured Projects</h2>
      <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory">
        {projects.map((p, i) => (
          <div key={i} className="snap-start shrink-0">
            <ProjectCard title={p.title} />
          </div>
        ))}
      </div>
    </Layout>
  );
}
