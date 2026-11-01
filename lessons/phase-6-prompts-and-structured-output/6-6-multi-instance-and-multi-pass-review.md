# 6.6 Multi-instance and multi-pass review

Phase 6: Prompts and structured output · about 9 min · CCAR-F 4.6

A model reviewing its own output **in the same conversation** tends to agree with itself. It still holds the reasoning that produced the output, so it rationalises rather than questions.

Use an **independent instance**: a fresh context that gets the output and the criteria, but not the author's reasoning. It reviews like a colleague who wasn't in the room.

For large reviews, split the work (lesson 4.7): per-file passes for local issues, then an integration pass for cross-file problems.

Two more tools:

- **Repeated runs:** review the same thing several times and compare. Findings that appear only sometimes are worth a human look.
- **Confidence routing:** a self-reported confidence score can send findings to human review, but only after you've checked it against labelled examples (lesson 7.6).

## Key points

- Same-session self-review is biased by retained reasoning.
- Independent reviewer: fresh context, output plus criteria.
- Split big reviews into local and integration passes.
- Disagreement across runs flags uncertain findings.

## Example: Independent reviewer setup

```
Instance A (writer):   drafts the client proposal
Instance B (reviewer): new conversation, receives
  <criteria>brand rules, pricing rules, required sections</criteria>
  <draft>...A's output only, no reasoning...</draft>
```

## Exam traps

- Asking "now check your work" in the same session and trusting the result.
- Giving the reviewer the author's reasoning, which re-creates the bias.

## Quick check

1. Why is same-session self-review weak?
   A. It's slower
   B. The model keeps its own reasoning and tends to confirm it
   C. It costs more
   D. It can't read the output

2. Reviewing a large PR well?
   A. One big pass
   B. Per-file passes plus an integration pass
   C. Only the integration pass
   D. Skip review

3. What should an independent reviewer receive?
   A. The author's full reasoning
   B. The output and the criteria
   C. Nothing
   D. Only the file names

<details><summary>Answers</summary>

1. **B.** Fresh eyes need a fresh context.
2. **B.** Each pass gets focused attention.
3. **B.** Not the reasoning, which brings the bias with it.

</details>
