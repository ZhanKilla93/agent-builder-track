# 2.2 The tool-use round trip

Phase 2: Tool use and the agentic loop · about 12 min

Here's the fact most beginners get wrong: **Claude never runs your tools.** It asks for them. Your code runs them. The round trip has five steps.

1. You send a request with `tools` and the user's message.
2. Claude replies with `stop_reason: "tool_use"` and a `tool_use` block containing an `id`, the tool `name` and the `input` it chose.
3. Your code runs the matching function with that input.
4. You send a new request: the full history, plus Claude's response exactly as it came back, plus a new `user` message containing a `tool_result` block. Its `tool_use_id` must match the `id` from step 2.
5. Claude reads the result and either answers (`end_turn`) or asks for another tool.

Rules that cause most bugs:

- Every `tool_use` must get a `tool_result` with the matching id.
- If Claude asks for several tools in one response (parallel calls), return all the results in **one** user message.
- Tool result blocks come first in that user message.
- If the tool failed, still send a `tool_result`, with `"is_error": true` and a useful message.

The exception: **server tools** like web search and code execution run on Anthropic's side, and their results arrive in the same response.

## Key points

- Claude requests tools; your code executes them.
- tool_result.tool_use_id must match tool_use.id.
- Parallel calls: all results go back in one user message.
- Failures still get a tool_result, marked is_error.

## Example: Steps 2 and 4 on the wire

```
// Claude's response (step 2)
{ "role": "assistant", "content": [
  { "type": "tool_use", "id": "toolu_01W", "name": "get_weather",
    "input": { "city": "Cairo" } } ],
  "stop_reason": "tool_use" }

// What your code sends back (step 4), after the history and that response
{ "role": "user", "content": [
  { "type": "tool_result", "tool_use_id": "toolu_01W",
    "content": "{\"temp_c\": 27, \"condition\": \"clear\"}" } ] }
```

## Exam traps

- Believing Claude ran the tool. If nothing happened, check your code's dispatch.
- Sending results for parallel calls in separate messages.

## Quick check

1. Who executes get_weather when Claude asks for it?
   A. Claude
   B. Anthropic's servers
   C. Your code
   D. The weather API decides

2. What links a tool_result to the right request?
   A. The tool name
   B. tool_use_id matching the tool_use block's id
   C. The order of messages only
   D. The timestamp

3. Claude asks for two tools in one response. How do you reply?
   A. Two separate user messages
   B. One user message with two tool_result blocks
   C. Only answer the first
   D. Restart the conversation

<details><summary>Answers</summary>

1. **C.** For your own tools, your code runs them and returns the result.
2. **B.** The id ties each result to its call, which matters most for parallel calls.
3. **B.** All results for one response go back together in one user message.

</details>
