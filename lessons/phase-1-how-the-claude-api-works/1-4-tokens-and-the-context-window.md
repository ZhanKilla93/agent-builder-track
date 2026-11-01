# 1.4 Tokens and the context window

Phase 1: How the Claude API works · about 9 min

**Tokens** are the chunks models read and write. In English a token averages a few characters; code, numbers and Arabic split differently. You pay per input token and per output token, and output costs more.

The **context window** is the most a single request can hold, input plus output. Everything in the request counts toward it:

- the system prompt
- every tool definition (sent on every call)
- every message in the history
- every tool result
- images and documents

Tool results are the quiet budget killer. A tool that returns a 5,000-line JSON blob fills the window fast, and it gets resent on every later call.

There's also a quality limit well before the hard limit. As context gets long and cluttered, the model attends less well to any single detail. A lean context isn't only cheaper; it's more accurate. You'll learn the techniques for this in Phase 7.

## Key points

- System prompt, tools, history, tool results and files all count as input tokens.
- Output tokens cost more than input tokens.
- Quality drops in long, cluttered contexts before the hard limit.
- Trimming tool results is usually the biggest saving.

## Example: Where the tokens go in one agent call

```
system prompt            1,200 tokens
tool definitions (6)     1,800 tokens
conversation history     3,400 tokens
last tool result         9,600 tokens   <- returned 40 fields, agent needed 5
-----------------------------------------
input                   16,000 tokens
output                     350 tokens
```

## Exam traps

- Thinking only the latest user message costs anything.
- Assuming the agent is fine until it hits the context limit.

## Quick check

1. Which of these count toward input tokens?
   A. Only the latest user message
   B. Only the system prompt
   C. System prompt, tool definitions, history and tool results
   D. Only tool results

2. An agent gets noticeably worse after 40 tool calls, though it's nowhere near the limit. Likely cause?
   A. The API is slowing down
   B. Long, cluttered context degrades attention to details
   C. The key expired
   D. Temperature drifts upward

3. The biggest single lever for cutting tokens from tool use?
   A. Shorter tool names
   B. Return only the fields the agent needs
   C. Fewer user messages
   D. Higher max_tokens

<details><summary>Answers</summary>

1. **C.** Everything sent in the request counts.
2. **B.** Quality degrades with clutter, not only at the limit.
3. **B.** Tool results are resent on every later call, so trimming them pays off repeatedly.

</details>
