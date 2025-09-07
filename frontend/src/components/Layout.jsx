import { useState } from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar onMenuClick={() => setSidebarOpen(true)} />
      <SideBar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main className="pt-20 px-6">{children}</main>
    </div>
  );
}
