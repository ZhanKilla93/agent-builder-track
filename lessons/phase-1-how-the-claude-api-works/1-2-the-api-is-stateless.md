# 1.2 The API is stateless

Phase 1: How the Claude API works · about 9 min

This is the most important idea in the track. **Claude keeps no memory between API calls.** Each request must carry the entire conversation you want it to consider.

A "chat" is your code keeping a list. You send the user's message. Claude replies. You append that reply to the list, append the next user message, and send the whole list again. Every call replays the full history.

Three consequences shape every agent you'll design:

1. **If it isn't in the request, it doesn't exist.** That includes tool results. If your code forgets to append a result, Claude never saw it.
2. **Cost and latency grow every turn,** because history is resent each time. Prompt caching (Phase 7) softens this.
3. **You control memory.** You can trim old turns, summarise them, or inject key facts. That's also how you lose details if you summarise carelessly (Phase 7).

The Claude app and Claude Code feel like they remember because they resend history for you and store memory files. Your own agents only remember what your code sends.

## Key points

- Every call must include the whole conversation you want Claude to consider.
- A chat or agent is your code maintaining and resending a message list.
- Long sessions cost more per call because history grows.
- "Claude forgot" is usually a bug in what your code sent.

## Example: The second call resends everything

```
"messages": [
  { "role": "user", "content": "My restaurant is called Cedar House." },
  { "role": "assistant", "content": "Got it. What would you like to work on for Cedar House?" },
  { "role": "user", "content": "Write a tagline for it." }
]
// Drop the first two turns and Claude has no idea what "it" is.
```

## Exam traps

- Assuming a new API call knows what happened in the previous one.
- Forgetting to append the assistant turn or the tool result before the next call.

## Quick check

1. Your agent learns the user's name in call 1, then says it doesn't know it in call 2. Most likely cause?
   A. The model is too small
   B. Call 2 didn't include the earlier turns
   C. Temperature is too high
   D. The API is down

2. Why does each call in a long agent session cost more?
   A. Anthropic charges more for later calls
   B. The whole growing history is sent as input every time
   C. Tools get more expensive
   D. Output gets longer automatically

3. In an agent you build on the API, where does its memory live?
   A. Inside Claude between calls
   B. In your code and whatever storage it uses
   C. In the API key
   D. In the model name

<details><summary>Answers</summary>

1. **B.** The API is stateless. If the earlier turns weren't resent, Claude never saw them.
2. **B.** Input tokens include the full history on every call.
3. **B.** You decide what to keep, trim or summarise and send.

</details>
