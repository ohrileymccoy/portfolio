import Layout from "../components/Layout";
import { useParams } from "react-router-dom";

export default function Project() {
  const { slug } = useParams();
  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-2xl font-bold">Project: {slug}</h1>
        <p className="text-gray-600">This is where we’ll show details later.</p>
      </div>
    </Layout>
  );
}
