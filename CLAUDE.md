# Agent Builder Track

A self-study track for becoming an AI agent builder with Claude: 9 phases, 51 lessons, aligned to the CCAR-F exam. Built by Mostafa Khan (github.com/ZhanKilla93). Licensed CC BY-NC 4.0.

## If you're here to study

The learner works through the lessons in `lessons/` and uses these commands:

- `/next`: what to study next, based on `my-progress.md`
- `/check 2.3`, `/check phase 2`, `/check final`: a Socratic concept check
- `/ask 3.4 <question>`: ask about a lesson

Learners usually start sessions with the `./study` launcher (`study.cmd` on Windows), which opens Claude Code with one of these commands already sent.

If the learner seems unsure how to start, explain those three commands and suggest `/next`. When they ask about a topic, ground answers in the matching lesson file. Never use em dashes.

## If you're here to change the app

- `index.html` is the whole web app and the single source of truth for lesson content (the `PHASES` data near the top of its script).
- `lessons/` is generated from it. After editing lessons in `index.html`, run `node tools/export-lessons.js`. Never edit `lessons/` by hand.
- Keep the app a single self-contained HTML file that works when opened directly from disk and on GitHub Pages.
- Never put an API key or any secret in the page.
- Writing style: plain language, short sentences, no em dashes.
