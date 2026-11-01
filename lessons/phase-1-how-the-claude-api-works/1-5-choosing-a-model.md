# 1.5 Choosing a model

Phase 1: How the Claude API works · about 8 min

Models trade capability against speed and cost. The lineup as of November 2026:

- **Haiku 5.5:** fastest and cheapest. Classification, routing, simple extraction, high volumes.
- **Sonnet 5.5:** the balanced default for most agents and coding work.
- **Opus 5.5:** for hard reasoning, complex multi-step agents and long tasks.
- **Fable 5.1:** the most capable tier available publicly.

Names change, so check the models page for current ids such as `claude-sonnet-5-5`.

A sound way to choose: build with a capable model first to prove the task can be done. Then run the **same set of test cases** on a cheaper model and compare. Decide with results, not impressions.

You can also mix models in one system. A cheap model routes or classifies, and a stronger one handles the hard cases. Or a strong orchestrator delegates routine subtasks to cheaper subagents.

## Key points

- Haiku for volume and speed, Sonnet as the default, Opus and Fable for the hardest work.
- Prove the task with a capable model, then test cheaper ones on the same cases.
- Systems can mix models by role.
- Model ids change; check the docs.

## Example: Mixing models by role

```
incoming message
  -> Haiku: classify as "booking" | "complaint" | "menu question"
       booking        -> Sonnet agent with calendar tools
       complaint      -> Opus agent with refund tools + human escalation
       menu question  -> Haiku with the menu as context
```

## Exam traps

- Picking the biggest model for everything, then being surprised by cost and latency.
- Switching to a cheaper model without testing it on real cases.

## Quick check

1. You need to sort 50,000 support emails into 6 categories. Best starting choice?
   A. The largest model available
   B. A Haiku-class model, checked against a sample
   C. No model, a regex
   D. Fable for accuracy

2. How should you decide if a cheaper model is good enough?
   A. Ask the cheaper model
   B. Run the same test cases and compare results
   C. Check its price
   D. Use it for a week and see

3. Which is a sensible way to mix models?
   A. Alternate models on every turn randomly
   B. A cheap model routes requests; a stronger one handles hard cases
   C. Use all models on every request
   D. Never mix models

<details><summary>Answers</summary>

1. **B.** High-volume classification is the cheap fast tier's job. Verify it on samples.
2. **B.** The same evaluation set on both models gives a fair comparison.
3. **B.** Matching model to role saves cost without losing quality where it matters.

</details>
