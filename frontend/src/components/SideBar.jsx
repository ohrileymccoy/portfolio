import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function SideBar({ isOpen, onClose }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [pendingScroll, setPendingScroll] = useState(null);

  // Helper to scroll to element
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Run pending scroll after navigation back to home
  useEffect(() => {
    if (location.pathname === "/" && pendingScroll) {
      setTimeout(() => scrollToId(pendingScroll), 50);
      setPendingScroll(null);
    }
  }, [location, pendingScroll]);

  // Handle clicks
  const handleClick = (id, e) => {
    e.preventDefault();
    onClose(); // always close sidebar first
    if (location.pathname === "/") {
      scrollToId(id);
    } else {
      setPendingScroll(id);
      navigate("/");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Dimmed background overlay */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Sidebar itself */}
          <motion.aside
            className="fixed top-0 left-0 w-64 h-full bg-gray-900 text-white p-6 z-50 shadow-lg"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
          >
            <button
              onClick={onClose}
              className="mb-6 text-gray-400 hover:text-white"
            >
              ✕ Close
            </button>
            <ul className="space-y-4">
              <li>
                <a href="/" onClick={(e) => handleClick("featured", e)}>
                  Home
                </a>
              </li>
              <li>
                <a href="/" onClick={(e) => handleClick("projects", e)}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#about" onClick={onClose}>
                  About
                </a>
              </li>
            </ul>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
