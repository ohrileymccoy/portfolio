import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar({ onMenuClick }) {
  const [scrolled, setScrolled] = useState(false);

  // Add scroll listener for background change
  if (typeof window !== "undefined") {
    window.onscroll = () => setScrolled(window.scrollY > 20);
  }

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur" : "bg-black/40"
      } text-white px-6 py-3 flex justify-between items-center`}
    >
      <h1 className="text-xl font-bold tracking-wide">My Portfolio</h1>
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
      {/* Hamburger button for mobile */}
      <button
        onClick={onMenuClick}
        className="md:hidden flex flex-col gap-1.5"
        aria-label="Toggle Menu"
      >
        <span className="block w-6 h-0.5 bg-white"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
      </button>
    </nav>
  );
}
