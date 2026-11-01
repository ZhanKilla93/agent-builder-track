# 2.3 The agentic loop

Phase 2: Tool use and the agentic loop · about 14 min · CCAR-F 1.1

An agent is the round trip in a loop. The model decides which tool to call next based on what the last results showed. You don't script the sequence.

The loop:

1. Send the conversation and tools.
2. Check `stop_reason`.
3. If it's `tool_use`: append Claude's response, run each requested tool, append a user message with all the results, go back to step 1.
4. If it's `end_turn`: return the final text. Done.

Also handle `max_tokens` (the response was cut off) and `pause_turn` (send it back to continue).

**`stop_reason` is the authoritative signal for when to stop.** A safety cap, such as 20 or 50 iterations, is fine as a backstop against runaway loops, but it should never be how the agent normally ends.

Four anti-patterns the exam loves:

1. **Parsing text for "I'm done"** or "Final answer". Natural language is ambiguous; `stop_reason` exists for exactly this.
2. **Using the iteration count as the main stop.** It either cuts off useful work or runs pointless extra turns.
3. **Stopping when a text block appears.** Claude often writes "Let me check that" right before a `tool_use` block.
4. **Forcing `tool_choice: "any"` on every turn.** Claude must call a tool every time, so it can never produce a final answer and the loop never ends naturally.

## Key points

- Loop while stop_reason is tool_use; stop at end_turn.
- Append Claude's response and the tool results each iteration, or Claude loses them.
- An iteration cap is a safety net, not the stopping rule.
- Text can appear alongside tool_use, so text doesn't mean done.

## Example: The loop (TypeScript, simplified)

```
const messages = [{ role: "user", content: userPrompt }];
for (let i = 0; i < 20; i++) {            // safety cap only
  const res = await client.messages.create({ model, max_tokens: 1024, tools, messages });

  if (res.stop_reason === "end_turn") {
    return res.content.filter(b => b.type === "text").map(b => b.text).join("");
  }

  // stop_reason is "tool_use": run every requested tool
  messages.push({ role: "assistant", content: res.content });
  const results = res.content
    .filter(b => b.type === "tool_use")
    .map(b => ({ type: "tool_result", tool_use_id: b.id, content: runTool(b.name, b.input) }));
  messages.push({ role: "user", content: results });
}
console.warn("Safety cap reached");
```

## Exam traps

- Checking response.content[0].type === "text" to decide the agent is finished.
- Raising the iteration cap to fix early stopping, when the real bug is the stop condition.
- Setting tool_choice to any for the whole loop, which loops forever.

## Quick check

1. A response has a text block ("Let me look that up") and a tool_use block. Should the loop stop?
   A. Yes, there's text
   B. No. stop_reason is tool_use, so run the tool and continue
   C. Only if the text is long
   D. Yes, and show the text

2. The agent sometimes stops before finishing. A teammate wants to raise the cap from 10 to 50. Is that the fix?
   A. Yes, always
   B. Probably not. First check the loop stops on stop_reason, not on text or count
   C. Yes, and add more tools
   D. No, lower it to 5

3. Why does tool_choice: "any" on every request make the loop run forever?
   A. It's slower
   B. Claude must call a tool each turn, so it can never reach end_turn
   C. It disables tools
   D. It removes the system prompt

<details><summary>Answers</summary>

1. **B.** Text can accompany a tool call. stop_reason decides.
2. **B.** A cap is a backstop. Premature stopping usually means the stop condition is wrong.
3. **B.** Forced tool use every turn leaves no way to give a final answer.

</details>
