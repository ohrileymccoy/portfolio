# Phase 1 — Frontend Bootstrap

## 🎯 Goal

Set up the Netflix-style frontend skeleton using **React + Vite + Tailwind v3**, with routing, base components, and a functioning dev environment.

---

## ✅ Step-by-Step Implementation

### 1. Scaffold React app with Vite

From project root:

```bash
npm create vite@latest frontend -- --template react
cd frontend
```

### 2. Install dependencies

```bash
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
```

This created `tailwind.config.cjs` and `postcss.config.cjs`.

### 3. Configure Tailwind

**tailwind.config.cjs**

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

**postcss.config.cjs**

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

**src/index.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 4. Wire Tailwind into React

**src/main.jsx**

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

Tested with a Tailwind class (`bg-blue-500`) to confirm CSS compiled correctly.

### 5. Install React Router

```bash
npm install react-router-dom@6
```

**src/App.jsx**

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:slug" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
}
```

### 6. Create base components

**src/components/NavBar.jsx**

```jsx
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
```

**src/components/SideBar.jsx**

```jsx
export default function SideBar() {
  return (
    <aside className="w-64 bg-gray-900 text-white h-screen p-4 hidden">
      <ul>
        <li className="mb-2">Home</li>
        <li className="mb-2">Projects</li>
      </ul>
    </aside>
  );
}
```

**src/components/Carousel.jsx**

```jsx
export default function Carousel() {
  return (
    <div className="p-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl shadow-md mb-6">
      <h2 className="text-2xl font-bold mb-4">Welcome to My Portfolio</h2>
      <p className="text-sm">Swipe through highlights of my skills and goals.</p>
    </div>
  );
}
```

**src/components/ProjectCard.jsx**

```jsx
export default function ProjectCard({ title }) {
  return (
    <div className="w-56 h-72 bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transform transition">
      <div className="h-40 bg-gray-300 flex items-center justify-center">
        <span className="text-gray-600">Preview</span>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-500 text-sm">Short project description</p>
      </div>
    </div>
  );
}
```

**src/components/Layout.jsx**

```jsx
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
```

### 7. Create pages

**src/pages/Home.jsx**

```jsx
import Layout from "../components/Layout";
import Carousel from "../components/Carousel";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <Layout>
      <Carousel />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <ProjectCard title="Project One" />
        <ProjectCard title="Project Two" />
        <ProjectCard title="Project Three" />
      </div>
    </Layout>
  );
}
```

**src/pages/Project.jsx**

```jsx
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";

export default function Project() {
  const { slug } = useParams();
  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-2xl font-bold">Project: {slug}</h1>
        <p className="text-gray-600">This is where we’ll show details later.</p>
      </div>
    </Layout>
  );
}
```

### 8. Dependency alignment

* Removed accidental root `node_modules/` to avoid duplicate React installs.
* Confirmed aligned versions:

  ```
  react@18.3.1
  react-dom@18.3.1
  react-router-dom@6.22.3
  ```

---

## 📌 Outcome

* Netflix-style frontend skeleton complete.
* Tailwind CSS v3 integrated and confirmed working.
* Routing functional with Home and Project pages.
* Base UI components scaffolded (NavBar, SideBar, Carousel, ProjectCard, Layout).
* Dev server running cleanly without hook errors or duplicate React copies.

---

## 🔜 Next: Phase 2 — Netflix-like UI Layout

* Add polished NavBar (scroll effects, transparency).
* Implement collapsible SideBar with hamburger toggle.
* Make Carousel swipeable with arrows.
* Display projects in horizontal Netflix-style rows.
* Ensure responsive, fluid UI with sharp Tailwind classes.

Next: Phase 2 — Netflix-like UI Layout (Preview)

Style NavBar with scroll transparency and z-index priority.

Add a collapsible SideBar with hamburger toggle.

Make Carousel swipeable with arrows.

Display projects in horizontal Netflix-style rows.

Ensure sharp, responsive styling with Tailwind utilities.