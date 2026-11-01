# 4.3 Multi-agent orchestration

Phase 4: Agent architecture and orchestration · about 12 min · CCAR-F 1.2

The standard shape is **hub and spoke**. A coordinator agent receives the task, breaks it down, delegates pieces to subagents, collects their results, checks them, and writes the final output. Subagents don't talk to each other; everything goes through the coordinator. That gives you one place to observe, handle errors and control what information flows where.

The coordinator's jobs:

1. **Decompose with full coverage.** The classic failure: asked about "AI in creative industries", the coordinator assigns only visual art topics. Each subagent does excellent work, and the report still misses music, writing and film. The subagents only cover what they were given.
2. **Pick the subagents each request needs.** Not every query needs every specialist.
3. **Evaluate results for gaps** and send follow-up work where coverage is thin.
4. **Synthesise** into one coherent answer.

When a final output has gaps, check the coordinator's decomposition first, before blaming the subagents.

## Key points

- Hub and spoke: all communication flows through the coordinator.
- Narrow decomposition is the most common cause of gaps.
- The coordinator chooses which subagents each request needs.
- Coordinators should check for gaps and re-delegate.

## Example: Decomposition, too narrow versus complete

```
Task: "Research AI in creative industries"

Too narrow:   1) AI image tools  2) AI in graphic design  3) AI illustration
Complete:     1) visual art and design   2) music and audio
              3) writing and publishing  4) film, video and games
              5) cross-cutting: copyright, jobs, adoption data
```

## Exam traps

- Blaming subagent quality when the coordinator never assigned the missing topic.
- Letting subagents call each other directly, losing observability.

## Quick check

1. The final report misses whole subtopics, though each subagent's work was excellent. Most likely root cause?
   A. Subagents are too weak
   B. The coordinator's decomposition was too narrow
   C. Not enough tokens
   D. Wrong temperature

2. Why route all communication through the coordinator?
   A. It's faster
   B. Observability, consistent error handling and control over information flow
   C. Subagents can't send messages
   D. To save tokens only

3. Should the coordinator always use every available subagent?
   A. Yes, for thoroughness
   B. No, it should choose based on the request
   C. Only on weekends
   D. Only for short tasks

<details><summary>Answers</summary>

1. **B.** Subagents only cover what they're assigned.
2. **B.** One hub is one place to see and control everything.
3. **B.** Invoking specialists that aren't needed wastes cost and time.

</details>
