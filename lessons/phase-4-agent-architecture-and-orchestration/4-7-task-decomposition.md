# 4.7 Task decomposition

Phase 4: Agent architecture and orchestration · about 10 min · CCAR-F 1.6

Two strategies for breaking work down.

**Fixed sequential** (prompt chaining): the steps are known and stable. Predictable and easy to debug. Example: review each changed file, then run an integration pass.

**Dynamic adaptive:** map the territory first, then generate subtasks from what you found, and re-plan as you learn. Example: "add tests to a legacy codebase" means mapping its structure, finding the high-impact modules, making a plan, and adapting when you discover hidden dependencies.

**Splitting large reviews.** One pass over 14 files gives uneven depth: some files get careful attention, others a skim, and judgements contradict each other. Instead, run a focused pass per file for local issues, then a separate integration pass for problems that cross files, like data flow and API contracts.

Wherever pieces are independent, decompose so they can run in parallel.

## Key points

- Fixed pipelines for known, stable steps.
- Adaptive decomposition for open-ended work: map, plan, adjust.
- Large reviews: per-file passes plus an integration pass.
- Independent units can run in parallel.

## Example: Reviewing a 14-file pull request

```
pass 1..14   one focused review per file   -> local bugs, style, tests
pass 15      integration review            -> data flow, API contracts,
                                              changed function signatures
merge        coordinator deduplicates and ranks findings
```

## Exam traps

- One giant pass over many files and expecting even quality.
- A rigid plan for a task where you don't yet know the territory.

## Quick check

1. A PR touches 14 files; a single review misses issues and contradicts itself. Fix?
   A. Bigger model
   B. Per-file passes plus a cross-file integration pass
   C. Review only the first 5 files
   D. Raise max_tokens

2. "Investigate flaky tests in an unfamiliar repo." Strategy?
   A. Fixed pipeline
   B. Dynamic adaptive decomposition
   C. Single prompt
   D. Batch processing

3. When is a fixed pipeline the right choice?
   A. When steps are known and stable
   B. Never
   C. For research
   D. When you're unsure

<details><summary>Answers</summary>

1. **B.** Focused passes avoid diluted attention.
2. **B.** You don't know the steps until you've explored.
3. **A.** Predictable work suits a predictable structure.

</details>
