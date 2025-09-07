import { Link } from "react-router-dom";

export default function SideBar({ open, onClose }) {
  return (
    <aside
      className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white p-6 transform transition-transform duration-300 z-40 ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-white"
      >
        ✕
      </button>
      <h2 className="text-lg font-bold mb-6">Menu</h2>
      <ul className="flex flex-col gap-4">
        <li>
          <Link to="/" onClick={onClose}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/project/demo" onClick={onClose}>
            Projects
          </Link>
        </li>
        <li>
          <a href="#about" onClick={onClose}>
            About
          </a>
        </li>
      </ul>
    </aside>
  );
}
