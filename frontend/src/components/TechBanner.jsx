import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaJava,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiCloudflare,
  SiOpenai,
  SiRuby,
  SiEthereum,
} from "react-icons/si";

export default function TechBanner() {
  const icons = [
    { icon: <SiOpenai className="text-emerald-300" />, label: "OpenAI / GPT" },
    { icon: <SiJavascript className="text-yellow-400" />, label: "JavaScript" },
    { icon: <FaReact className="text-cyan-400" />, label: "React" },
    { icon: <SiTailwindcss className="text-sky-400" />, label: "Tailwind" },
    { icon: <FaNodeJs className="text-green-500" />, label: "Node.js" },
    { icon: <FaPython className="text-blue-400" />, label: "Python" },
    { icon: <FaDatabase className="text-indigo-400" />, label: "SQL/DB" },
    { icon: <FaJava className="text-orange-300" />, label: "Java" },
    { icon: <SiRuby className="text-rose-400" />, label: "Ruby" },
    { icon: <SiCloudflare className="text-orange-400" />, label: "Cloudflare" },
    { icon: <SiEthereum className="text-purple-300" />, label: "ERC-20 (ETH)" },
  ];

  // Duplicate list for seamless loop
  const loop = [...icons, ...icons];

  return (
    <section className="mt-10 border-t border-b border-white/10 dark:border-gray-700 bg-black/10 dark:bg-black/40">
      {/* Ticker viewport */}
      <div className="relative overflow-hidden">
        {/* Track */}
        <div className="flex items-center gap-10 py-3 will-change-transform animate-tech-marquee">
          {loop.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-gray-300 min-w-[90px]"
            >
              <div className="text-3xl">{item.icon}</div>
              <span className="text-[10px] mt-1 opacity-80">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Local keyframes for marquee */}
      <style>{`
        @keyframes tech-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-tech-marquee {
          width: max-content;
          animation: tech-marquee 22s linear infinite;
        }
        /* Pause on hover (nice UX) */
        .animate-tech-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
