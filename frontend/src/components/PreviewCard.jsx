import { Link } from "react-router-dom";

export default function PreviewCard({ project, onClose }) {
  if (!project) return null;

  return (
    <div
 className={[
  // 📱 default mobile = ultra tiny
  "w-[40vw] max-h-[25vh]",

  // small tablets (≥640px)
  "sm:w-[65vw] sm:max-h-[45vh]",

  // desktops (≥768px)
  "md:w-[min(900px,90vw)] md:max-h-[80vh]",

  "rounded-2xl",
  "dark:bg-black/70 bg-white/95",
  "border border-white/10 shadow-2xl backdrop-blur-md",
  "p-1 sm:p-3 md:p-6 space-y-1 sm:space-y-3 md:space-y-6",
].join(" ")}

      onClick={(e) => e.stopPropagation()} // prevent backdrop close
    >
      {/* header */}
      <div className="flex items-start justify-between gap-4">
        <Link to={`/project/${project.slug}`} className="group">
          <h1 className="text-xl sm:text-2xl font-bold leading-tight group-hover:underline">
            {project.title}
          </h1>
        </Link>
        <button
          onClick={onClose}
          className="text-white/70 hover:text-white text-lg sm:text-xl leading-none"
          aria-label="Close preview"
        >
          ✕
        </button>
      </div>

      {/* description */}
      <p className="text-sm sm:text-base text-gray-800 dark:text-gray-200">
        {project.long_description || project.description}
      </p>

      {/* preview image (optional) */}
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="w-full max-h-[100px] sm:max-h-[180px] md:max-h-[320px] object-cover rounded-lg"
        />
      )}

      {/* code snippet (optional) */}
      {project.code_snippet && (
        <div>
          <h2 className="font-semibold mb-2 text-sm sm:text-base">Sample Code</h2>
          <pre className="bg-black/90 text-green-400 text-xs sm:text-sm rounded-lg p-3 sm:p-4 overflow-x-auto shadow-inner">
            <code>{project.code_snippet}</code>
          </pre>
        </div>
      )}

      {/* footer actions */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-3 justify-end">
        {project.github_url && (
          <a
            href={project.github_url}
            target="_blank"
            rel="noreferrer"
            className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-md border border-white/20 bg-white/10 hover:bg-white/20 text-sm sm:text-base"
          >
            GitHub ↗
          </a>
        )}
        <Link
          to={`/project/${project.slug}`}
          className="px-4 sm:px-5 py-1.5 sm:py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white text-sm sm:text-base"
        >
          Open Demo →
        </Link>
      </div>
    </div>
  );
}
