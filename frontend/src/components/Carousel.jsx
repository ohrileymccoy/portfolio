import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  { id: 1, title: "About Me", text: "Full-stack developer, creative builder." },
  { id: 2, title: "Skills", text: "React, Node.js, Cloudflare, Tailwind." },
  { id: 3, title: "Goals", text: "Build apps that empower communities." },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % slides.length);
  const prev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const handlers = useSwipeable({
    onSwipedLeft: () => next(),
    onSwipedRight: () => prev(),
    trackMouse: true, // allows dragging with mouse too
  });

  return (
    <div
      {...handlers}
      className="relative w-full max-w-4xl mx-auto mt-20 overflow-hidden"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].id}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.4 }}
          className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl shadow-lg p-10 text-center"
        >
          <h2 className="text-3xl font-bold mb-3">{slides[index].title}</h2>
          <p className="text-sm">{slides[index].text}</p>
        </motion.div>
      </AnimatePresence>

      {/* Left arrow */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl text-white hover:text-gray-300"
      >
        ‹
      </button>

      {/* Right arrow */}
      <button
        onClick={next}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-2xl text-white hover:text-gray-300"
      >
        ›
      </button>

      {/* Dots indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
