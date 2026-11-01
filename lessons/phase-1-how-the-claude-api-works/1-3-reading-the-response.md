# 1.3 Reading the response

Phase 1: How the Claude API works · about 10 min

A response is a JSON object. The fields that matter:

- `content`: a list of blocks. A block can be `text`, `tool_use` (Claude wants a tool run), or `thinking` (its reasoning, when extended thinking is on). One response can contain several blocks of different types.
- `stop_reason`: why Claude stopped writing. Your code's next step depends on it.
- `usage`: tokens in and out, plus cache figures. This is what you're billed for.

The `stop_reason` values:

- `end_turn`: finished naturally.
- `tool_use`: wants your code to run a tool and send back the result.
- `max_tokens`: hit your output cap, so the answer is cut off.
- `stop_sequence`: hit one of your stop strings.
- `pause_turn`: a long turn using Anthropic-run tools was paused. Send the response back to let it continue.
- `refusal`: declined for safety reasons.

Always read blocks by their `type`. Never assume `content[0]` is the text: Claude often writes a sentence and then a `tool_use` block in the same response.

## Key points

- content is a list of typed blocks; read each by type.
- stop_reason tells your code what to do next.
- tool_use means run the tool and send the result back.
- usage is your cost meter.

## Example: One response, two blocks

```
{
  "role": "assistant",
  "content": [
    { "type": "text", "text": "Let me check today's orders." },
    { "type": "tool_use", "id": "toolu_01A", "name": "get_orders",
      "input": { "date": "2026-11-01" } }
  ],
  "stop_reason": "tool_use",
  "usage": { "input_tokens": 512, "output_tokens": 48 }
}
```

## Exam traps

- Reading content[0].text and missing the tool_use block after it.
- Ignoring max_tokens and treating a cut-off answer as complete.

## Quick check

1. stop_reason is "tool_use". What should your code do?
   A. Show the text to the user and stop
   B. Run the requested tool and send its result back
   C. Retry the request
   D. Raise max_tokens

2. Why not just read content[0].text?
   A. It's slower
   B. The first block may not be text, and other blocks like tool_use can follow
   C. It's deprecated
   D. Text is always last

3. Where do you find how many tokens a call used?
   A. stop_reason
   B. content
   C. usage
   D. model

<details><summary>Answers</summary>

1. **B.** Claude is waiting on your code to execute the tool.
2. **B.** Responses can mix block types. Read by type.
3. **C.** usage holds input, output and cache token counts.

</details>
