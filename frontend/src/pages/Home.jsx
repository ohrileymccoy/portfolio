import Layout from "../components/Layout";
import Carousel from "../components/Carousel";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <Layout>
      <Carousel />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <ProjectCard title="Project One" />
        <ProjectCard title="Project Two" />
        <ProjectCard title="Project Three" />
      </div>
    </Layout>
  );
}
