# Phase 0 — Project Skeleton & File Structure

### ✅ Completed Checklist

* [x] Created root project structure:

  ```
  Portfolio/
  ├── frontend/         # React + Vite + Tailwind app (Phase 1+)
  ├── backend/          # Cloudflare Workers, API routes, DB (Phase 3+)
  ├── docs/             # Project notes and phase logs
  ├── wrangler.toml     # Cloudflare base config
  ├── package.json      # Root npm scripts
  └── README.md         # Project overview
  ```

* [x] Initialized Git repository locally:

  ```bash
  git init
  git add .
  git commit -m "Phase 0: Project Skeleton"
  ```

* [x] Created GitHub remote repository (`portfolio`) under user `ohrileymccoy`.

* [x] Linked local repo to remote and pushed initial commit:

  ```bash
  git branch -M main
  git remote add origin https://github.com/ohrileymccoy/portfolio.git
  git push -u origin main
  ```

* [x] Scaffolded Wrangler config (baseline, will expand in Phase 3):

  ```toml
  name = "portfolio-backend"
  compatibility_date = "2024-09-01"

  [[d1_databases]]
  binding = "DB"
  database_name = "portfolio-db"
  database_id = "auto-generated-id"
  ```

* [x] Root `package.json` created with basic scripts for consistency:

  ```json
  {
    "name": "portfolio",
    "private": true,
    "scripts": {
      "dev": "npm --prefix frontend run dev",
      "build": "npm --prefix frontend run build",
      "deploy": "npm run build && wrangler deploy"
    }
  }
  ```

### 📌 Notes

* Using **plain npm** for simplicity (not Yarn/PNPM).
* Monorepo is clean, separated into `frontend/` and `backend/`.
* Repo live on GitHub → version control proof established.

### 🔜 Next: Phase 1 — Frontend Bootstrap

* Scaffold Vite React app in `frontend/`.
* Configure TailwindCSS.
* Add base components (`NavBar`, `SideBar`, `Carousel`, `ProjectCard`, `Layout`).
* Set up routing with `react-router-dom`.
