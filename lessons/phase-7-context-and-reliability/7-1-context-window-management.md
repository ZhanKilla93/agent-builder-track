# 7.1 Context window management

Phase 7: Context and reliability · about 11 min · CCAR-F 5.1

Three ways information gets lost in long contexts:

1. **Progressive summarisation** drops specifics. "$342.50 refund for order OLV-10482 promised by Friday" becomes "a refund for a recent order".
2. **Lost in the middle.** Models attend best to the beginning and end of long inputs; details in the middle get missed.
3. **Bloated tool results.** A lookup returns 40 fields when 5 matter, and all 40 are resent every turn.

Fixes:

- Keep a persistent **case facts block**: structured key facts (ids, amounts, dates, commitments) carried into every prompt and never summarised.
- Put a **summary of key findings at the top** of long inputs, with clear section headers.
- **Trim tool results** to the needed fields, in the tool itself or in a PostToolUse hook.
- Have subagents return **structured findings with metadata**, not raw dumps.

## Key points

- Summaries lose exact numbers, dates and ids.
- Key information belongs at the start or end, not buried mid-context.
- A case facts block preserves critical details.
- Trim tool output at the source.

## Example: A case facts block

```
<case_facts>
customer_id: C-88213 (verified)
order: OLV-10482, placed 2026-10-28, total $342.50
issue: wrong items delivered
promised: full refund to original card by 2026-11-06
escalation: none yet
</case_facts>
```

## Exam traps

- Relying on rolling summaries for amounts and dates.
- Passing whole API responses back to the model.

## Quick check

1. After 30 turns the agent quotes the wrong refund amount. Fix?
   A. Bigger context window
   B. A persistent case facts block carried every turn
   C. More summarisation
   D. Lower temperature

2. Key information buried mid-document keeps getting missed.
   A. Repeat the document
   B. Put a key-findings summary at the top and use headers
   C. Shorten the system prompt
   D. Use batch

3. An order lookup returns 40 fields; the agent needs 5.
   A. Leave it
   B. Trim to the needed fields
   C. Ask the agent to ignore extras
   D. Add more tools

<details><summary>Answers</summary>

1. **B.** Critical facts shouldn't depend on summaries.
2. **B.** Position and structure aid attention.
3. **B.** Smaller results save tokens and attention every turn.

</details>
