# 0.4 Reading JSON

Phase 0: Technical foundations · about 10 min

JSON is the text format almost every API speaks, including Claude's. It has only a few building blocks.

- **Objects** in `{ }`: key and value pairs. Keys are always in double quotes.
- **Arrays** in `[ ]`: ordered lists. The first item is index `0`.
- **Values:** strings in double quotes, numbers, `true`/`false`, `null`, or another object or array.

To read a nested value you follow a path. `response.content[0].text` means: take the `content` key, then its first item, then that item's `text` key.

Common things that break JSON: single quotes, trailing commas, comments (JSON allows none) and unescaped double quotes inside a string.

One subtle point matters later for structured output: `null`, a missing key and an empty string `""` mean different things. `null` can say "I looked and this wasn't there", which is exactly what you want an extraction agent to say instead of inventing a value.

## Key points

- Objects use { } with double-quoted keys; arrays use [ ] and start at index 0.
- Follow a path key by key: content[0].text.
- Invalid JSON usually means single quotes, trailing commas or comments.
- null, a missing key and an empty string mean different things.

## Example: Follow the paths

```
{
  "stop_reason": "end_turn",
  "content": [
    { "type": "text", "text": "Fresh off the grill. Come hungry." }
  ],
  "usage": { "input_tokens": 41, "output_tokens": 12 }
}

content[0].type      -> "text"
content[0].text      -> "Fresh off the grill. Come hungry."
usage.output_tokens  -> 12
```

## Exam traps

- Assuming content[0] is always the text. In agents it may be a tool_use or thinking block.
- Treating null and an empty string as the same thing.

## Quick check

1. In the example above, what is usage.input_tokens?
   A. 12
   B. 41
   C. "end_turn"
   D. content[0]

2. Which of these is invalid JSON?
   A. {"name": "Mostafa"}
   B. {"tags": []}
   C. {'name': 'Mostafa'}
   D. {"due": null}

3. An extraction returns "due_date": null. What does that most usefully mean?
   A. The date is January 1st
   B. The field was looked for and not found
   C. The JSON is broken
   D. The model crashed

<details><summary>Answers</summary>

1. **B.** Follow the path: the usage object, then its input_tokens key.
2. **C.** JSON requires double quotes. Single quotes make it invalid.
3. **B.** null is how a well-designed extraction says 'not present' instead of inventing a value.

</details>
