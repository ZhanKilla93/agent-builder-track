# 7.4 Error propagation in multi-agent systems

Phase 7: Context and reliability · about 10 min · CCAR-F 5.3

In multi-agent systems, a failure has to travel up with enough context for the coordinator to decide what to do. A subagent's error should say:

- what failed
- what was attempted
- any partial results gathered
- whether retrying might help
- suggested alternatives

Three anti-patterns:

1. **Silent failure:** a search times out and the subagent returns an empty list as if successful. The coordinator concludes "no research exists" and writes that.
2. **Total failure:** one subagent of five fails and the whole pipeline stops, discarding good work.
3. **Generic errors:** "search unavailable", with no detail to act on.

Handle locally what can be handled (brief retries inside the subagent). Propagate the rest. In the final output, **state coverage gaps**: "Sources for 2024 couldn't be retrieved." Don't present partial work as complete.

## Key points

- Errors carry what failed, what was tried, partial results and options.
- Empty results must never disguise a failure.
- One failed subagent shouldn't kill the job; the coordinator decides.
- Final outputs name their gaps.

## Example: A subagent's structured failure

```
{
  "status": "partial",
  "error": { "type": "timeout", "source": "news_search", "retryable": true },
  "attempted": ["news_search x2", "web_fetch on 3 known sources"],
  "partial_results": [ { "claim": "...", "source": "https://..." } ],
  "suggestion": "Retry news_search later, or proceed and note 2025 coverage is thin."
}
```

## Exam traps

- Returning [] on timeout.
- Aborting everything because one branch failed.

## Quick check

1. The search subagent times out and returns []; the report says no research exists. Fix?
   A. More subagents
   B. Return a structured error so the coordinator knows it failed
   C. Longer timeout only
   D. Hide the section

2. One of five subagents fails.
   A. Stop everything
   B. Continue; let the coordinator decide, and note the gap
   C. Ignore it silently
   D. Restart all five

3. What should the final report do about missing coverage?
   A. Hide it
   B. State the gap clearly
   C. Fill it with general knowledge
   D. Delete the report

<details><summary>Answers</summary>

1. **B.** Failure must be visible as failure.
2. **B.** Preserve good work and be transparent.
3. **B.** Readers need to know what's missing.

</details>
