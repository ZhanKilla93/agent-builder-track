# 2.4 Tool interface design

Phase 2: Tool use and the agentic loop · about 12 min · CCAR-F 2.1

The description is the main thing Claude uses to choose a tool. Treat it like documentation for a new colleague who can't ask questions.

A good description says:

- what the tool does and what it returns
- when to use it, and when not to (naming the tool to use instead)
- the format of each input, with an example
- edge cases and limits

Misrouting usually comes from **overlapping tools with vague descriptions**. If `get_customer` and `lookup_order` both say "Retrieves information", Claude will mix them up. Fixes, in order of preference:

1. Sharpen both descriptions so their boundaries are explicit.
2. Rename them to be specific.
3. Split a do-everything tool into focused ones, or merge two tools that truly do the same job.

Fixing the description beats adding a system-prompt rule like "use lookup_order for orders". Also watch for system prompt wording that accidentally biases choices: a prompt that keeps saying "customer" can pull Claude toward `get_customer`.

Results matter too: return concise, relevant fields with meaningful values ("Delivered, 14:20") rather than internal codes ("st=4").

## Key points

- Descriptions are the primary input to tool selection.
- State when to use and when not to use, with the alternative named.
- Overlapping vague tools cause misrouting; fix the descriptions first.
- One tool with an action parameter doing many jobs is harder to use correctly than focused tools.

## Example: Weak versus strong

```
// Weak
"description": "Gets customer info."

// Strong
"description": "Finds a customer by email or phone and returns their id, name and
 last 3 order numbers. Use this to identify who you're talking to. It does not
 return order details: pass an order number to get_order_status for that.
 Phone must include country code, e.g. +14165550199."
```

## Exam traps

- Adding system prompt rules to patch tool choice instead of fixing the descriptions.
- A single manage_crm tool with a 12-value action parameter.

## Quick check

1. The agent calls get_customer when users ask about orders. Best first fix?
   A. Add more examples to the user message
   B. Rewrite both tool descriptions with clear boundaries and when-not-to-use guidance
   C. Remove get_customer
   D. Switch to a bigger model

2. What does Claude rely on most to choose between tools?
   A. Tool order in the array
   B. Tool descriptions
   C. Name length
   D. The model's training only

3. One tool, manage_crm, takes an action parameter with 12 possible values. The issue?
   A. None, fewer tools is always better
   B. It's harder to choose and fill correctly; focused tools work better
   C. It costs nothing extra
   D. Enums aren't allowed

<details><summary>Answers</summary>

1. **B.** Selection is driven by descriptions, so fix the overlap there first.
2. **B.** The description is the primary signal.
3. **B.** Focused tools with clear purposes are easier to select and use.

</details>
