-- backend/migrations/001_init.sql
CREATE TABLE projects (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  demo_url TEXT,
  github_url TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
