import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function SideBar({ isOpen, onClose }) {
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
                <Link to="/" onClick={onClose}>Home</Link>
              </li>
              <li>
                <Link to="/project/demo" onClick={onClose}>Projects</Link>
              </li>
              <li>
                <a href="#about" onClick={onClose}>About</a>
              </li>
            </ul>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
