export default function ProjectCard({ title }) {
  return (
    <div className="w-56 h-72 bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition">
      <div className="h-40 bg-gray-300 flex items-center justify-center">
        <span className="text-gray-600">Preview</span>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-500 text-sm">Short project description</p>
      </div>
    </div>
  );
}
