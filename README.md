# TODO App — Coding Challenge

Welcome! This is a TODO application scaffolded with React and Express. The server has seed data and a health endpoint already wired up — everything else is yours to shape.

Work through the tasks in order. Each one builds on the previous. We're curious to see how you approach it.

## Getting Started

Both servers auto-start in CodeSandbox. If you're running locally instead:

```bash
git clone https://github.com/alexmachina/codesandbox-react-and-api.git
cd codesandbox-react-and-api
npm install
npm run dev          # starts both servers
```

The API runs on **:3001** and the React dev server on **:5173**. Open [http://localhost:5173](http://localhost:5173) to get started.

> Requires **Node 18+**. If you'd rather start the servers separately:
> `npm run dev --workspace=server` and `npm run dev --workspace=client`.

## Project Structure

- `client/` — React + Vite + TypeScript (your work goes here)
- `server/` — Express + TypeScript (endpoints are yours to implement)
- Vite proxies `/api/*` to Express — no CORS setup needed

## What's Available

- **Tailwind CSS v4** — add utility classes directly in your JSX
- **`clsx`** — conditional class names, e.g. `clsx("todo-item", { completed: todo.completed })`
- **Plain CSS** — `client/src/App.css` has base reset styles; add your own classes as needed

Use whichever styling approach you prefer — or mix them.

## The Challenge

You have **30 minutes** and five tasks. They're ordered but not gated — move between them however feels natural. If you hit a tradeoff, a quick comment is always appreciated.

## API Reference

The server (`server/src/index.ts`) has seed data and a health check already in place. Here are the endpoint contracts so you don't have to guess:

### `GET /api/todos` — return all todos

```
→ 200
[
  { "id": 1, "title": "Buy groceries", "completed": false },
  { "id": 2, "title": "Walk the dog", "completed": true },
  ...
]
```

### `POST /api/todos` — create a todo (intentionally broken)

```
← { "title": "New todo" }
→ 503  { "error": "Service Unavailable" }
```

This endpoint must **always** return 503 — see Task 3.

### `PATCH /api/todos/:id` — update a todo

```
← { "completed": true }
→ 200  { "id": 1, "title": "Buy groceries", "completed": true }
```

```
← PATCH /api/todos/999
→ 404  { "error": "Todo not found" }
```

Accepts optional fields: `completed` (boolean) and `title` (string).

### `GET /api/health` — health check (already implemented)

```
→ 200  { "status": "ok" }
```

---

## Tasks

### 1. Display existing TODOs

- Implement `GET /api/todos` in the server
- Fetch todos from that endpoint in the client and render them
- Display each todo's **title** and a **checkbox** for its `completed` flag
- Show a **loading indicator** while the API call is in progress

### 2. Toggle TODO completion

- Implement `PATCH /api/todos/:id` in the server
- Clicking a checkbox toggles the todo's `completed` flag
- Call `PATCH /api/todos/:id` with `{ "completed": true/false }`
- Update local state with the response from the API
- Completed items must show **strikethrough text** with a **dimmed color**

### 3. Display error when failing to add a TODO

- Implement `POST /api/todos` in the server — it must always return 503
- Add an **input field** and an **"Add" button** at the top of the page
- When submitting, call `POST /api/todos` (it will return 503)
- Display the message: **"Service Unavailable. Try again later."**
- The error message must **disappear after 5 seconds**
- The user should be able to try again

### 4. Search TODOs by title

- Add a **search input** that filters the list as the user types
- Filter items whose title **contains** the search text (case-insensitive)
- Above the list, display a label: **"Showing X of Y"** (filtered count vs total count)

### 5. Focus Mode

- Add a keyboard shortcut: **Alt + F** to toggle Focus Mode on and off
- In Focus Mode:
  - Only the **TODO list** is displayed (hide everything else)
  - **Font size is increased**
  - **Completed items are hidden** (instead of strikethrough)
- Pressing **Alt + F** again toggles Focus Mode off
