# 6.5 Batch processing

Phase 6: Prompts and structured output · about 9 min · CCAR-F 4.5

The **Message Batches API** runs many requests asynchronously at about half the normal cost. Results come back within 24 hours, often much sooner, but there's no latency guarantee. Each request carries a `custom_id` so you can match results to inputs.

Good fits: overnight reports, bulk classification, backfills, running evaluations.

Bad fits:

- anything a person or pipeline is **waiting on**, like a pre-merge check
- work needing **tool use mid-request**. Each batch item is a single call; your code can't run tools and continue inside it.

Handle partial failures by resubmitting only the failed `custom_id`s, after fixing the cause (for example, splitting documents that were too long). And test your prompt on a small sample before submitting ten thousand.

## Key points

- About 50% cheaper, results within 24 hours, no latency guarantee.
- custom_id matches results to inputs.
- Not for blocking work or multi-turn tool use.
- Resubmit only failures; test on a sample first.

## Example: Choosing sync or batch

```
Tag 10,000 menu items with dietary labels overnight    -> batch
Pre-merge code check developers wait on                 -> synchronous
Monthly sentiment report across all reviews             -> batch
Live chat replies                                       -> synchronous
```

## Exam traps

- Batching a workflow someone is blocked on.
- Resubmitting the entire batch because 2% failed.

## Quick check

1. A pre-merge PR check developers wait on.
   A. Batch API
   B. Synchronous API
   C. Either
   D. Neither

2. Tag 10,000 product descriptions overnight.
   A. Synchronous one by one
   B. Batch API
   C. Claude Code
   D. A hook

3. 200 of 10,000 requests failed on context length. Action?
   A. Resubmit everything
   B. Fix those 200 (chunk them) and resubmit by custom_id
   C. Ignore them
   D. Switch to synchronous for all

<details><summary>Answers</summary>

1. **B.** Batch has no latency guarantee.
2. **B.** Large, non-urgent and cheaper in batch.
3. **B.** Only redo what failed, after fixing why.

</details>
