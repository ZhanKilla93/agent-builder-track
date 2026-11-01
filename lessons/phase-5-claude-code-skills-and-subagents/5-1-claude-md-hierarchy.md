# 5.1 CLAUDE.md hierarchy

Phase 5: Claude Code, skills and subagents · about 11 min · CCAR-F 3.1

`CLAUDE.md` is a Markdown file of instructions that Claude Code loads into context automatically. There are levels:

- **User:** `~/.claude/CLAUDE.md`. Your personal preferences across every project. *Not shared* with teammates.
- **Project:** `./CLAUDE.md` (or `.claude/CLAUDE.md`) in the repo, committed to git. Build and test commands, conventions, architecture notes. The whole team gets it.
- **Subdirectory:** a `CLAUDE.md` inside a folder like `api/`, loaded when Claude works in that part of the tree.

Organisations can also set managed policy files that apply to everyone.

The files combine; they don't override each other mechanically. Avoid contradictions rather than relying on one to win.

Keep it modular. Use `@path/to/file` imports to pull in topic files (`@docs/testing.md`), or put topic rules in `.claude/rules/` (lesson 5.3). Keep it short, specific and current: it's loaded and billed every session. `/memory` shows what's loaded.

The classic exam scenario: a new teammate's Claude ignores conventions you rely on. Cause: they live in your user-level file, so only you have them.

## Key points

- User level is personal; project level is shared through git.
- Subdirectory files load when working in that folder.
- Use @imports and .claude/rules/ to keep it modular.
- Team conventions in a personal file never reach teammates.

## Example: A project CLAUDE.md

```
# Olive Ember site

## Commands
- Dev server: npm run dev
- Tests: npm test (run before every commit)

## Conventions
- TypeScript strict mode. No any.
- Prices are stored in cents; format with formatPrice() only.
- Never edit files in /vendor.

@docs/brand-rules.md
```

## Exam traps

- Putting team standards in ~/.claude/CLAUDE.md.
- One 2,000-line CLAUDE.md that costs tokens every session and is never updated.

## Quick check

1. Where do team coding standards belong?
   A. ~/.claude/CLAUDE.md
   B. The project CLAUDE.md in the repo
   C. A Slack pin
   D. Each developer's prompt

2. A teammate's Claude ignores conventions that work fine for you. Likely cause?
   A. Their model is different
   B. The conventions are in your user-level file
   C. They need a bigger context
   D. Git is broken

3. How do you keep a large CLAUDE.md maintainable?
   A. Write it in JSON
   B. Split into imported topic files or rules
   C. Delete it
   D. Put it in the system prompt

<details><summary>Answers</summary>

1. **B.** Project level is committed and shared.
2. **B.** User-level instructions only reach you.
3. **B.** @imports and .claude/rules/ keep it modular.

</details>
