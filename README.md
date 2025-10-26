# Ts-Note

A simple, fast, and elegant note-taking web app built with SvelteKit.

## Short description
ts-note is a minimal, self-hostable note app for personal and shared notes. It
includes user authentication, group-based sharing, and timed/planned notes
(e.g., recurring list items that reappear automatically). The app runs entirely
inside a single Docker/Podman container and depends only on SvelteKit,
DrizzleORM, Tailwind CSS, and SQLite.

## Features ✨
- Full Markdown support with live preview
- Minimal & performant — focused on speed and clarity
- Fully self‑hostable using SQLite — no external services required
- Modern UI built with Tailwind CSS
- Type-safe DB access with DrizzleORM + SQLite
- User authentication with group-based sharing
- Personal notes and shared group notes
- Timed / planned (recurring) notes — smart recurring list items and tasks
- Single-container deployment (Docker/Podman) for easy hosting

## Installation (quick)
1. Clone the repo:
   ```bash
   git clone <repo-url>
   cd ts-note
   ```
2. Adjust local configuration (e.g. .env, DATABASE_URL) as needed.

## Development — quick start
Install dependencies and run the dev server (npm/node):
```bash
# Development
npm install
npm run dev
```

Generate and push Drizzle ORM schema/migrations (use the npm scripts defined in package.json):
```bash
# Drizzle ORM
npm run db:generate
npm run db:push
```

Note: Configure your SQLite path and env vars (DATABASE_URL) before running migrations.

Tip: This project targets modern Node.js. Use Node 18+ or a compatible LTS for best compatibility.

## Build & run in Podman / Docker
Build an image and run the container (exposes port 3000):
```bash
# Podman build and run
podman build -t ts-note .
podman run -p 3000:3000 ts-note
```
Docker equivalents also work: `docker build` / `docker run`.

Tips:
- Persist the SQLite database with a host volume: `-v ./data:/app/data`
- Pass env vars to the container via `-e` or an .env mechanism

## Configuration
- DATABASE_URL (SQLite path) — configure via env
- Auth & groups — managed via DB and app settings
- Default server port: 3000