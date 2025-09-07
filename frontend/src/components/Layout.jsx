import NavBar from "./NavBar";
import SideBar from "./SideBar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      <SideBar />
      <div className="flex-1">
        <NavBar />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
