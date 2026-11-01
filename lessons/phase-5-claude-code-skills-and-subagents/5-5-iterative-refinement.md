# 5.5 Iterative refinement

Phase 5: Claude Code, skills and subagents · about 9 min · CCAR-F 3.5

When output isn't right, how you give feedback decides how fast it converges.

- **Concrete examples beat descriptions.** If Claude misreads your format spec twice, stop rewording it. Show two or three input and output pairs.
- **Test-driven iteration.** Have tests first, then iterate until they pass. Paste the failing test output, not "it doesn't work".
- **The interview pattern.** In an unfamiliar domain, ask Claude to ask you questions before it builds. It surfaces requirements you hadn't thought of.
- **Batch versus sequential feedback.** Issues that interact go in one message, so fixes don't conflict. Independent issues can be fixed one at a time.
- **Be specific.** "The date column must be ISO 8601; row 3 shows 03/04/2026" beats "dates are wrong".

## Key points

- Show input/output examples when descriptions fail.
- Iterate against tests and paste real failures.
- Let Claude interview you in unfamiliar domains.
- Interacting issues together; independent ones separately.

## Example: Examples instead of rewording

```
Convert menu lines like these:
  in:  "Chicken Shawarma Wrap - 12.99"
  out: { "name": "Chicken Shawarma Wrap", "price_cents": 1299 }
  in:  "Falafel Plate (V) - 14.50"
  out: { "name": "Falafel Plate", "price_cents": 1450, "vegetarian": true }
```

## Exam traps

- Rewording the same spec a third time instead of showing examples.
- Sending three interacting fixes in three separate messages.

## Quick check

1. Claude misreads your format spec twice. Next move?
   A. Reword it again
   B. Give 2 or 3 concrete input and output examples
   C. Switch models
   D. Give up

2. Three bugs that affect each other?
   A. Three separate messages
   B. Describe all three in one message
   C. Fix only the first
   D. Restart the session

3. Building something in a domain you don't know well?
   A. Write a long spec alone
   B. Use the interview pattern: have Claude ask you questions first
   C. Skip planning
   D. Use batch

<details><summary>Answers</summary>

1. **B.** Examples remove ambiguity that prose leaves.
2. **B.** Interacting fixes need to be considered together.
3. **B.** Questions surface hidden requirements.

</details>
