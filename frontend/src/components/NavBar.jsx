import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function NavBar({ onMenuClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [pendingScroll, setPendingScroll] = useState(null); // 👈 track where to scroll after nav
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Theme init
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setDarkMode(saved === "dark");
  }, []);

  // Sync dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Scroll helper
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // After route changes, run pending scroll
  useEffect(() => {
    if (location.pathname === "/" && pendingScroll) {
      setTimeout(() => scrollToId(pendingScroll), 50);
      setPendingScroll(null);
    }
  }, [location, pendingScroll]);

  // Handle click
  const handleNavClick = (id, e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      scrollToId(id);
    } else {
      setPendingScroll(id); // remember where to scroll
      navigate("/");        // go home first
    }
  };

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300
        ${scrolled ? "bg-black/80 py-2 shadow-md" : "bg-black/40 py-3"}
        backdrop-blur text-white px-6 flex justify-between items-center
        hover:shadow-lg hover:shadow-indigo-400/50`}
    >
      {/* Title → Home */}
      <a
        href="/"
        onClick={(e) => handleNavClick("featured", e)}
        className="text-xl font-bold tracking-wide hover:text-gray-300 transition"
      >
        WVWeb3.dev
      </a>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-6 text-sm">
        <li>
          <a
            href="/"
            onClick={(e) => handleNavClick("featured", e)}
            className="hover:text-gray-300 transition rounded"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/"
            onClick={(e) => handleNavClick("projects", e)}
            className="hover:text-gray-300 transition rounded"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="hover:text-gray-300 transition rounded"
          >
            About
          </a>
        </li>
      </ul>

      {/* Right side buttons */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white transition hover:shadow-md hover:shadow-indigo-400/50"
          aria-label="Toggle Theme"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        <button
          onClick={onMenuClick}
          className="md:hidden flex flex-col gap-1.5"
          aria-label="Toggle Menu"
        >
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>
    </nav>
  );
}
