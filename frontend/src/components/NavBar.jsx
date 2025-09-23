import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function NavBar({ onMenuClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true); // default = dark

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Load saved theme or system preference
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      setDarkMode(saved === "dark");
    } else {
      setDarkMode(true); // default dark
    }
  }, []);

  // Sync dark mode with <html> tag
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300
        ${scrolled ? "bg-black/80 py-2 shadow-md" : "bg-black/40 py-3"}
        backdrop-blur text-white px-6 flex justify-between items-center`}
    >
      {/* Title → Home */}
      <Link
        to="/"
        className="text-xl font-bold tracking-wide hover:text-gray-300"
      >
        WVWeb3.dev
      </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-6 text-sm">
        <li>
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
        </li>
        <li>
          <Link to="/project/demo" className="hover:text-gray-300">
            Projects
          </Link>
        </li>
        <li>
          <a href="#about" className="hover:text-gray-300">
            About
          </a>
        </li>
      </ul>

      {/* Right side buttons */}
      <div className="flex items-center gap-4">
        {/* Light/Dark toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white transition"
          aria-label="Toggle Theme"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        {/* Hamburger */}
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
