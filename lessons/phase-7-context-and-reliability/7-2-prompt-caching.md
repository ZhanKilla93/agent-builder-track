# 7.2 Prompt caching

Phase 7: Context and reliability · about 10 min

Agents resend the same large prefix (tools, system prompt, reference documents) on every loop. **Prompt caching** lets the API reuse that processed prefix, so repeated content is much cheaper and faster.

- Mark a **breakpoint** with `cache_control` on a content block. Everything before it can be cached. Order matters: tools, then system, then messages.
- A hit needs an **exact prefix match**. Change anything before the breakpoint, even a timestamp in the system prompt, and the cache misses.
- The default lifetime is about **5 minutes**, refreshed each time it's used. A 1-hour option costs more to write.
- Writing to the cache costs a little more than normal input; reading from it costs much less.
- Prefixes below a minimum length aren't cached.

Design rule: **stable content first, changing content last.** Put the date, user name or anything per-request after the cached part.

## Key points

- Caching reuses an identical prompt prefix.
- Any change before the breakpoint breaks the hit.
- Default lifetime is about 5 minutes, refreshed on use.
- Stable content first, variable content last.

## Example: Marking the cache breakpoint

```
"system": [
  { "type": "text",
    "text": "You are Cedar House's order assistant. <full menu and policies, 6,000 tokens>",
    "cache_control": { "type": "ephemeral" } }
],
"messages": [
  { "role": "user", "content": "Today is 2026-11-01. Do you have vegan options?" }
]
// The date lives in the message, after the cached prefix.
```

## Exam traps

- Putting the current time at the top of the system prompt, so nothing ever caches.
- Expecting a cache from an hour ago to still be warm on the default lifetime.

## Quick check

1. The cache never hits, and the system prompt starts with the current time. Why?
   A. Caching is off
   B. The prefix changes every call
   C. Too short
   D. Wrong model

2. What belongs before the cache breakpoint?
   A. Per-request details
   B. Stable content: tools, system prompt, reference docs
   C. The latest user message
   D. Nothing

3. Default cache lifetime?
   A. 24 hours
   B. About 5 minutes, refreshed on use
   C. Forever
   D. 1 second

<details><summary>Answers</summary>

1. **B.** Hits need an identical prefix.
2. **B.** Stable first, variable last.
3. **B.** A longer option exists at a higher write cost.

</details>
