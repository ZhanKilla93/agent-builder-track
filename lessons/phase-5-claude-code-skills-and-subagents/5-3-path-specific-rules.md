# 5.3 Path-specific rules

Phase 5: Claude Code, skills and subagents · about 9 min · CCAR-F 3.3

Rule files in `.claude/rules/` can carry YAML frontmatter with a `paths:` list of glob patterns. The rule loads **only when Claude is working with files that match**.

Why this matters: test files might live in thirty folders across the project. A subdirectory `CLAUDE.md` can only cover one folder. A path rule with `**/*.test.ts` applies wherever those files are.

The benefit is context discipline. Testing conventions don't load while Claude edits CSS. Fewer irrelevant tokens, and conventions applied consistently.

Rule of thumb: **folder-specific** guidance goes in that folder's `CLAUDE.md`. **File-type** guidance spread across the tree goes in a path rule.

## Key points

- .claude/rules/ files with paths: frontmatter load conditionally.
- Globs like **/*.test.ts match files anywhere in the tree.
- They keep irrelevant rules out of context.
- Folder guidance: subdirectory CLAUDE.md. File-type guidance: path rule.

## Example: .claude/rules/testing.md

```
---
paths:
  - "**/*.test.ts"
  - "**/*.spec.ts"
---
- Use Vitest, not Jest.
- One describe block per exported function.
- Never hit the real payments API; use the mock in test/mocks/stripe.ts.
```

## Exam traps

- Copying the same conventions into thirty subdirectory CLAUDE.md files.
- Putting every rule in the root file so all of it loads all the time.

## Quick check

1. Test files are spread across 30 folders and need the same conventions. Best approach?
   A. 30 subdirectory CLAUDE.md files
   B. A path rule with a **/*.test.* glob
   C. Root CLAUDE.md
   D. A slash command

2. What does the paths: frontmatter do?
   A. Sets output folders
   B. Loads the rule only when working on matching files
   C. Blocks edits to those files
   D. Lists files to delete

3. Why not put everything in the root CLAUDE.md?
   A. It's not allowed
   B. Everything loads every time, bloating context
   C. It can't hold rules
   D. Git ignores it

<details><summary>Answers</summary>

1. **B.** One rule, matched wherever the files are.
2. **B.** Conditional loading by file pattern.
3. **B.** Conditional rules keep context lean.

</details>
