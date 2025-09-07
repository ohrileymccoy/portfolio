export default function NavBar() {
  return (
    <nav className="w-full bg-black/60 backdrop-blur text-white px-6 py-3 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-xl font-bold">My Portfolio</h1>
      <ul className="flex gap-6 text-sm">
        <li className="hover:text-gray-300 cursor-pointer">Home</li>
        <li className="hover:text-gray-300 cursor-pointer">Projects</li>
        <li className="hover:text-gray-300 cursor-pointer">About</li>
      </ul>
    </nav>
  );
}
