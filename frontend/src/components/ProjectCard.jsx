import { Link } from "react-router-dom";

export default function ProjectCard({ title, description, slug, image, githubUrl }) {
  return (
    <div
      className={[
        "relative w-56 h-[26rem] rounded-2xl overflow-hidden",
        // neon cyan glow in dark, sharp/flat in light
        "dark:bg-black/40 bg-black text-white",
        "dark:shadow-[0_0_20px_0_rgba(34,211,238,0.35)] shadow-[0_6px_18px_rgba(0,0,0,0.2)]",
        "backdrop-blur-sm border border-white/10",
        "hover:scale-[1.02] transition-transform cursor-pointer",
      ].join(" ")}
    >
      {/* Image (click → project page) */}
      <Link to={`/project/${slug}`} className="block">
        <div className="h-64 bg-black/40">
          {image ? (
            <img src={image} alt={title} className="h-64 w-full object-cover" />
          ) : (
            <div className="h-64 w-full flex items-center justify-center text-sm text-white/70">Preview</div>
          )}
        </div>
      </Link>

      {/* Body */}
      <div className="p-4 space-y-2">
        <Link to={`/project/${slug}`} className="line-clamp-1">
          <h3 className="font-semibold text-lg hover:underline">{title}</h3>
        </Link>
        <p className="text-sm text-white/70 line-clamp-3">{description}</p>
      </div>

      {/* GitHub link button */}
      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="absolute top-3 right-3 px-2 py-1 text-xs rounded-md bg-white/10 hover:bg-white/20 border border-white/20"
          title="Open GitHub"
        >
          GitHub ↗
        </a>
      )}
    </div>
  );
}
