# 1.1 Anatomy of a Messages request

Phase 1: How the Claude API works · about 10 min

Almost everything goes through one endpoint: `POST /v1/messages`. Three fields are required:

- `model`: which Claude model answers, such as `claude-sonnet-5-5`.
- `max_tokens`: the most Claude may write in its reply. It caps output only, not input.
- `messages`: the conversation, a list of turns. Each has a `role` (`user` or `assistant`) and `content`.

The optional fields you'll use most:

- `system`: standing instructions for the whole conversation. Role, rules, tone, output format.
- `temperature`: randomness. Lower gives more consistent output.
- `tools` and `tool_choice`: the tools Claude may ask for, and whether it must (Phase 2).
- `stop_sequences`: strings that make Claude stop writing. `stream`: send the reply as it's written.

`content` can be a plain string or a list of **content blocks**: text, images, documents, and in agents, `tool_use` and `tool_result` blocks. That block structure is how tools fit into a normal conversation.

The `system` prompt frames the whole conversation. The `user` turn is the specific ask. Put rules that should hold every turn in `system`.

## Key points

- Required: model, max_tokens, messages.
- system holds standing rules; user turns hold the specific requests.
- max_tokens limits the reply only. Hitting it cuts the answer off.
- content can be a list of typed blocks, which is how tools and files fit in.

## Example: A request with a system prompt

```
{
  "model": "claude-sonnet-5-5",
  "max_tokens": 400,
  "temperature": 0.3,
  "system": "You write Instagram captions for Olive Ember, a shawarma restaurant in Toronto. Max 2 sentences. No hashtags.",
  "messages": [
    { "role": "user", "content": "Caption for our new garlic sauce." }
  ]
}
```

## Exam traps

- Thinking max_tokens limits the whole request. It only limits Claude's reply.
- Putting standing rules in a user turn, where they compete with later turns, instead of in system.

## Quick check

1. Which field holds rules that should apply to the whole conversation?
   A. messages
   B. system
   C. max_tokens
   D. stop_sequences

2. A reply ends mid-sentence and stop_reason is "max_tokens". What fixes it?
   A. Lower the temperature
   B. Raise max_tokens or ask for a shorter answer
   C. Change the model
   D. Add a stop sequence

3. What can a message's content be?
   A. Only a string
   B. A string or a list of typed content blocks
   C. Only JSON objects
   D. Only images

<details><summary>Answers</summary>

1. **B.** system is the standing frame for every turn.
2. **B.** Claude hit the output cap you set.
3. **B.** Content blocks (text, image, document, tool_use, tool_result) are what make tools and files work.

</details>
