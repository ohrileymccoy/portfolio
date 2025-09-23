import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

export default function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

 useEffect(() => {
  if (!document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.add("dark");
  }
}, []);

  return (
    <div
      className={[
        "min-h-screen transition-colors duration-300",
        "dark:bg-[radial-gradient(80%_80%_at_0%_0%,#1f2937_0%,#000_65%)]",
        "bg-gray-100",
      ].join(" ")}
    >
      <NavBar onMenuClick={() => setIsSidebarOpen(true)} />
      <SideBar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <main className="pt-16 p-6 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        {children}
      </main>
    </div>
  );
}
