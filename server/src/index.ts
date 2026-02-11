import express from "express";

const app = express();
const PORT = 3001;

app.use(express.json());

// --- In-memory TODO list (no persistence, resets on server restart) ---
// eslint-disable-next-line @typescript-eslint/no-unused-vars -- used by the endpoints you'll implement below
const todos = [
  { id: 1, title: "Buy groceries", completed: false },
  { id: 2, title: "Walk the dog", completed: true },
  { id: 3, title: "Read a book", completed: false },
  { id: 4, title: "Write tests", completed: true },
  { id: 5, title: "Clean the house", completed: false },
];

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

// Task 1 — GET /api/todos — return all todos
// TODO: implement this endpoint

// Task 2 — PATCH /api/todos/:id — update a todo
// Accepts JSON body with optional fields: { completed?: boolean, title?: string }
// Find the todo by id, apply updates, return the updated todo as JSON
// Return 404 with { error: "Todo not found" } if id doesn't match
// TODO: implement this endpoint

// Task 3 — POST /api/todos — always returns 503 (intentional)
// The client needs to handle this error gracefully — see Task 3 in the README
// TODO: implement this endpoint

// 0.0.0.0 required for CodeSandbox VM networking
app.listen(PORT, "0.0.0.0", () => {
  console.log(`API server running on port ${PORT}`);
});
