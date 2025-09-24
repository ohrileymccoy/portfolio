import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import previewProjects from "./Preview";
import PreviewCard from "./PreviewCard";

export default function FeaturedStrip({ projects = [] }) {
  const [index, setIndex] = useState(0);
  const [active, setActive] = useState(null); // takeover preview
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const displayProjects = projects.length > 0 ? projects : previewProjects;
  const total = displayProjects.length;

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  const getProject = (offset) =>
    displayProjects[(index + offset + total) % total];

  // esc to close
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // update isMobile on resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative py-12 overflow-hidden">
  



<div className="absolute inset-y-0 right-0 z-20 flex items-center justify-end">
  <img
    src="/assets/wv3.png"
    alt="WV background"
    className="w-[90vw] max-w-[900px] opacity-40 pointer-events-none mix-blend-lighten translate-x-40 -translate-y-16"
  />
</div>

      {/* stacked cards */}
      <div
        className="relative z-30 flex items-center justify-center 
                   aspect-[16/9] sm:aspect-[21/9] 
                   max-w-full sm:max-w-7xl mx-auto px-2"
      >
        {[0, 1, 2].map((offset, i) => {
          const p = getProject(offset);

          // shrink dramatically on mobile
          const positions = [
            { x: isMobile ? -80 : -220, scale: isMobile ? 0.7 : 1.25, zIndex: 30 },
            { x: 0, scale: isMobile ? 0.6 : 1.0, zIndex: 20 },
            { x: isMobile ? 80 : 220, scale: isMobile ? 0.5 : 0.8, zIndex: 10 },
          ];

          const isHero = i === 0;
          let hoverTimeout;

          return (
            <motion.div
              key={p.slug}
              layout
              className="absolute cursor-pointer"
              animate={positions[i]}
              transition={{ type: "spring", stiffness: 200, damping: 30 }}
              whileHover={!isHero ? { scale: positions[i].scale + 0.1 } : {}}
              onHoverStart={() => {
                if (!isHero) {
                  hoverTimeout = setTimeout(() => {
                    setIndex((current) => (index + offset) % total);
                  }, 300);
                }
              }}
              onHoverEnd={() => {
                if (hoverTimeout) clearTimeout(hoverTimeout);
              }}
            >
              <div
                className={[
                  "relative rounded-2xl overflow-hidden",
                  isHero
                    ? "ring-2 ring-cyan-400 shadow-[0_0_45px_rgba(34,211,238,0.9)]"
                    : "ring-1 ring-cyan-400/20",
                ].join(" ")}
              >
                <Card project={p} onOpen={() => setActive(p)} />
              </div>
            </motion.div>
          );
        })}

        {/* faint glowing arrows */}
        <button
          onClick={prev}
          className="absolute left-6 top-1/2 -translate-y-1/2 text-4xl text-cyan-400/40 hover:text-cyan-300/70 transition"
          aria-label="Previous"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="absolute right-6 top-1/2 -translate-y-1/2 text-4xl text-cyan-400/40 hover:text-cyan-300/70 transition"
          aria-label="Next"
        >
          ›
        </button>
      </div>

      {/* takeover preview */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="absolute inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative"
              onClick={(e) => e.stopPropagation()}
            >
              <PreviewCard project={active} onClose={() => setActive(null)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// small homepage card
function Card({ project, onOpen }) {
  return (
    <div
      className={[
        "relative rounded-2xl overflow-hidden",
        "w-40 h-[20rem] sm:w-56 sm:h-[26rem]", // smaller on mobile, full on desktop
        "dark:bg-black/40 dark:shadow-[0_0_25px_rgba(34,211,238,0.4)]",
        "bg-gray-200 shadow-md border border-white/10 dark:border-white/20",
        "cursor-pointer",
      ].join(" ")}
    >
      {/* click to open takeover */}
      <div onClick={onOpen}>
        <div className="h-52 bg-black/20">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="h-52 w-full object-cover"
            />
          ) : (
            <div className="h-52 flex items-center justify-center text-sm text-white/70">
              No preview
            </div>
          )}
        </div>
      </div>

      <div className="p-4 space-y-2">
        <h3
          onClick={onOpen}
          className="font-semibold text-lg hover:underline"
        >
          {project.title}
        </h3>
        <p className="text-sm text-gray-700 dark:text-white/70 line-clamp-3">
          {project.description}
        </p>
      </div>

      {/* GitHub button */}
      {project.github_url && (
        <a
          href={project.github_url}
          target="_blank"
          rel="noreferrer"
          className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs rounded-md 
                     bg-white/10 hover:bg-white/20 dark:border-white/20 border text-center"
        >
          GitHub ↗
        </a>
      )}
    </div>
  );
}
