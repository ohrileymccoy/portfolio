# Phase 2–4 Progress Log

This document summarizes work completed in Phases 2, 3, and 4 of the **Portfolio Showcase App** project.

---

## 🎨 Phase 2 — Netflix-like UI Layout

**Goal:** Nail the skeleton visual language.

### ✅ Completed

* **NavBar**

  * Semi-transparent, sticky, priority on scroll.
* **SideBar**

  * Collapsible with hamburger toggle.
  * Animated using Framer Motion.
* **Hero Carousel**

  * Swipeable with arrows + mobile touch support (`react-swipeable`).
* **Project Feed**

  * Grid / horizontal row sections, Netflix-style.
  * Cards link to individual project pages.

### 📌 Outcome

The app now feels like a Netflix-inspired portfolio with interactive navigation and scrolling hero content.

---

## ⚙️ Phase 3 — Backend Skeleton

**Goal:** Prep Cloudflare for dynamic content.

### ✅ Completed

* **API routes scaffolded:**

  * `backend/functions/api/v1/listProjects.ts`
  * `backend/functions/api/v1/getProject.ts`
* **Wrangler config:**

  ```toml
  [[d1_databases]]
  binding = "DB"
  database_name = "portfolio-db"
  database_id = "auto-generated-id"
  migrations_dir = "backend/migrations"
  ```
* **Database schema:**

  ```sql
  CREATE TABLE projects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT,
    demo_url TEXT,
    github_url TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
  ```

### 📌 Outcome

Cloudflare Worker endpoints are live with D1 database schema in place. Ready for frontend integration.

---

## 🔌 Phase 4 — API Integration

**Goal:** Wire frontend to backend.

### ✅ Completed

* **Service Layer:** `frontend/src/services/api.js`

  * `fetchProjects()` → calls `/api/v1/listProjects`
  * `fetchProject(slug)` → calls `/api/v1/getProject`
* **Home Page Integration:**

  * Uses `fetchProjects()` to load real project data.
  * Infinite scroll (`react-infinite-scroll-component`) for “All Projects.”
  * Static Featured Projects carousel with swipe + animation.
* **Project Page Integration:**

  * Uses `fetchProject(slug)` to load individual project details.
  * Displays title, description, embedded demo (`iframe`), and GitHub link.
* **UX Polish:**

  * Added **SkeletonCard.jsx** for loading placeholders.
  * Retry button on errors.
  * Smooth, modern feel while API calls are in progress.

### 📌 Outcome

Frontend is now fully powered by backend APIs:

* Home → shows real projects in infinite scroll.
* Project detail page → loads live data per slug.
* Loading + error states handled gracefully.

---

## ⚡ Next: Phase 5 — Responsiveness & UX Polish

**Goals:**

* Tailwind breakpoints for feed + cards.
* Swipe support for carousel (mobile).
* Smooth transitions everywhere with Framer Motion.
* Ensure horizontal nav always wins over sidebar (z-index priority).
