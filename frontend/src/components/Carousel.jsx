import { useState } from "react";
import { useSwipeable } from "react-swipeable";

const slides = [
  { title: "About Me", text: "Full-stack developer, creative builder." },
  { title: "Skills", text: "React, Node.js, Cloudflare, Tailwind." },
  { title: "Goals", text: "Build apps that empower communities." },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => setIndex((index + 1) % slides.length),
    onSwipedRight: () => setIndex((index - 1 + slides.length) % slides.length),
    trackMouse: true,
  });

  return (
    <div
      {...handlers}
      className="relative bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl shadow-md mb-6 overflow-hidden"
    >
      <div className="p-8 text-center">
        <h2 className="text-3xl font-bold mb-2">{slides[index].title}</h2>
        <p>{slides[index].text}</p>
      </div>
      {/* Left arrow */}
      <button
        onClick={() => setIndex((index - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl"
      >
        ‹
      </button>
      {/* Right arrow */}
      <button
        onClick={() => setIndex((index + 1) % slides.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-2xl"
      >
        ›
      </button>
    </div>
  );
}
