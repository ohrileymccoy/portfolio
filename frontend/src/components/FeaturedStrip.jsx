import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function FeaturedStrip({ projects = [] }) {
  const [preview, setPreview] = useState(null);

  return (
    <section className="relative">
      {/* horizontal scroll/drag container */}
      <motion.div
        className="flex gap-6 overflow-x-auto pb-4 cursor-grab snap-x snap-mandatory"
        drag="x"
        dragConstraints={{ left: -200, right: 0 }}
        whileTap={{ cursor: "grabbing" }}
      >
        {projects.map((p) => (
          <div key={p.slug} className="snap-start shrink-0">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setPreview(p)}
              className={[
                "relative w-56 h-[28rem] rounded-2xl overflow-hidden",
                "transition-colors",
                // dark theme: neon glow
                "dark:bg-black/40 dark:shadow-[0_0_20px_rgba(34,211,238,0.35)]",
                // light theme: carbon gray card
                "bg-gray-200 shadow-md",
                "border border-white/10 dark:border-white/20",
                "cursor-pointer",
              ].join(" ")}
            >
              {/* Image + title link */}
              <Link to={`/project/${p.slug}`} onClick={(e) => e.stopPropagation()}>
                <div className="h-64 bg-black/20">
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-64 w-full object-cover"
                    />
                  ) : (
                    <div className="h-64 flex items-center justify-center text-sm text-white/70">
                      No preview
                    </div>
                  )}
                </div>
              </Link>

              <div className="p-4 space-y-2">
                <Link
                  to={`/project/${p.slug}`}
                  onClick={(e) => e.stopPropagation()}
                  className="line-clamp-1"
                >
                  <h3 className="font-semibold text-lg hover:underline">
                    {p.title}
                  </h3>
                </Link>
                <p className="text-sm text-gray-700 dark:text-white/70 line-clamp-3">
                  {p.description}
                </p>
              </div>

              {/* GitHub footer */}
              {p.github_url && (
                <a
                  href={p.github_url}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs rounded-md 
                             bg-white/10 hover:bg-white/20 dark:border-white/20 border text-center"
                >
                  GitHub ↗
                </a>
              )}
            </motion.div>
          </div>
        ))}
      </motion.div>

      {/* Enlarged preview modal */}
      <AnimatePresence>
        {preview && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-[90%] max-w-3xl rounded-2xl overflow-hidden 
                         bg-gray-200 dark:bg-black/90 p-6 shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              {/* close button */}
              <button
                onClick={() => setPreview(null)}
                className="absolute top-4 right-4 text-xl text-white/80 hover:text-white"
              >
                ✕
              </button>

              <h2 className="text-2xl font-bold mb-3">{preview.title}</h2>
              <p className="text-gray-800 dark:text-white/70 mb-4">
                {preview.description}
              </p>

              {preview.image && (
                <img
                  src={preview.image}
                  alt={preview.title}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
              )}

              {/* footer links */}
              <div className="flex justify-end gap-3">
                {preview.github_url && (
                  <a
                    href={preview.github_url}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 border border-white/20"
                  >
                    View GitHub
                  </a>
                )}
                <Link
                  to={`/project/${preview.slug}`}
                  onClick={() => setPreview(null)}
                  className="px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white"
                >
                  Open Project →
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
