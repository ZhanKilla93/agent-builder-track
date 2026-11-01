# 5.4 Plan mode versus direct execution

Phase 5: Claude Code, skills and subagents · about 8 min · CCAR-F 3.4

**Plan mode** has Claude explore and propose a plan without changing anything. You review it, adjust, then let it execute.

Use plan mode for:

- large or ambiguous changes
- multi-file refactors and migrations
- architectural decisions with several valid approaches
- unfamiliar code

Use **direct execution** for clear, small, well-scoped changes: fix a typo, add a null check that a stack trace pinpoints, rename a variable in one file.

They combine: plan first, approve, then execute. For heavy discovery, delegate to an exploration subagent so the main conversation stays clean and only gets the findings.

## Key points

- Plan mode explores and proposes without editing.
- Plan for big, ambiguous or architectural work.
- Direct execution for small, clear changes.
- Delegate heavy exploration to a subagent.

## Example: Choosing

```
"Move all 40 files from winston to pino logging" -> plan mode
"Add the missing null check in booking.ts:88"    -> direct
"Should we split payments into its own service?" -> plan mode
```

## Exam traps

- Direct execution on a sweeping change, then untangling half-finished edits.
- Plan mode for a one-line fix, which wastes time.

## Quick check

1. Migrate 40 files to a new logging library, with design decisions along the way.
   A. Direct execution
   B. Plan mode
   C. Batch API
   D. A hook

2. Fix a null check pinpointed by a clear stack trace.
   A. Plan mode
   B. Direct execution
   C. A new subagent
   D. A skill

3. Why delegate exploration to a subagent?
   A. It's cheaper per token
   B. It keeps the main context clean; you get the findings only
   C. Subagents are smarter
   D. Required by Claude Code

<details><summary>Answers</summary>

1. **B.** Large, multi-file, with choices: plan first.
2. **B.** Small and well-scoped.
3. **B.** The exploration noise stays in the subagent's context.

</details>
