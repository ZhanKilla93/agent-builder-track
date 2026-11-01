---
description: Suggest what to study next, based on my-progress.md
allowed-tools: Read, Glob
---

Read `my-progress.md` in the repo root (it may not exist yet) and `lessons/README.md`.

- If there's no progress file, tell them to start with lesson 0.1, give its file path, and explain the routine: read the lesson, answer its quick check, then run `/check 0.1`.
- Otherwise, look at what they've checked and what's marked "Revise". Recommend one thing to do next: either revising a weak lesson (with the `/check` command to run after) or the next lesson in order. Give the file path.

Keep it under 80 words. Never use em dashes. Don't edit any files.
