# 2.1 Defining a tool

Phase 2: Tool use and the agentic loop · about 10 min

A tool is a description you send in the `tools` array. Claude only ever sees the description, never your code. Each tool has:

- `name`: short and specific, like `get_order_status`.
- `description`: what it does, what it returns, and when to use it. This is what Claude decides from (lesson 2.4).
- `input_schema`: a **JSON Schema** describing the arguments.

JSON Schema basics: the top level is `"type": "object"`. `properties` lists each argument with its own `type` and `description`. `required` lists arguments Claude must provide. `enum` restricts a value to fixed choices.

Add `"strict": true` to a tool definition to guarantee Claude's calls match your schema exactly. Without it, calls almost always match, but "almost" matters in production.

Tool definitions are input tokens on every call, so a long list of verbose tools has a cost even when none are used.

## Key points

- A tool is name, description and input_schema. Claude never sees your implementation.
- input_schema is JSON Schema: type, properties, required, enum.
- strict: true guarantees calls match the schema.
- Tool definitions are resent and billed on every call.

## Example: A tool definition

```
{
  "name": "get_order_status",
  "description": "Looks up one order by its order number and returns status, items and delivery time. Use when the customer gives an order number. Do not use to search by name; use find_customer for that.",
  "input_schema": {
    "type": "object",
    "properties": {
      "order_id": { "type": "string", "description": "Order number, e.g. OLV-10482" },
      "channel":  { "type": "string", "enum": ["pickup", "delivery"] }
    },
    "required": ["order_id"]
  }
}
```

## Exam traps

- Vague names like process or helper that tell Claude nothing.
- Leaving needed fields out of required, so Claude sometimes omits them.

## Quick check

1. What does Claude see of your tool?
   A. Your source code
   B. The name, description and input schema
   C. Only the name
   D. Nothing until it runs

2. How do you restrict a field to "email" or "sms" only?
   A. Mention it in the system prompt
   B. Use enum in the schema
   C. Use required
   D. Name the field email_or_sms

3. What does the required list do?
   A. Marks which tools must be called
   B. Lists arguments Claude must provide
   C. Makes the tool run first
   D. Validates the result

<details><summary>Answers</summary>

1. **B.** Claude chooses and fills tools purely from the definition.
2. **B.** enum lists the only allowed values.
3. **B.** Required arguments are the ones a call must include.

</details>
