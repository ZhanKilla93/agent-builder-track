# 6.3 Structured output with tool use

Phase 6: Prompts and structured output · about 12 min · CCAR-F 4.3

To get reliable JSON, define a tool whose `input_schema` is the structure you want, and force it with `tool_choice: {"type": "tool", "name": "..."}`. Claude's tool call *is* your structured data; you may never run any function. Add `"strict": true` to guarantee the call matches the schema exactly.

**A schema guarantees shape, not truth.** The JSON will parse, but values can still be wrong: line items that don't add up to the total, a date in the wrong field. You still need checks in code (lesson 6.4).

Schema design choices that reduce made-up values:

- Mark fields **required** only if they're always present in the source.
- Make fields that might be missing **nullable or optional**. A required `due_date` pushes Claude to invent one when the invoice has none.
- Use **enums** for categories, plus an `"other"` value with a free-text detail field.
- Offer an `"unclear"` option where the source can be ambiguous.

If documents come in several types, offer several extraction tools with `tool_choice: any`, so Claude must extract but chooses which schema fits.

## Key points

- Forced tool plus schema gives guaranteed structure; strict: true makes it exact.
- Structure isn't correctness; validate values in code.
- Nullable fields prevent invented values.
- Enums with other and unclear handle messy reality.

## Example: An extraction tool

```
{
  "name": "record_invoice",
  "strict": true,
  "input_schema": {
    "type": "object",
    "properties": {
      "vendor":     { "type": "string" },
      "total":      { "type": "number" },
      "due_date":   { "type": ["string", "null"], "description": "ISO date, or null if absent" },
      "category":   { "type": "string", "enum": ["produce", "meat", "packaging", "other"] },
      "category_detail": { "type": ["string", "null"] }
    },
    "required": ["vendor", "total", "due_date", "category", "category_detail"]
  }
}
// tool_choice: { "type": "tool", "name": "record_invoice" }
```

## Exam traps

- Believing a schema-valid result is a correct result.
- Making every field required and non-null, which forces fabrication.

## Quick check

1. Some invoices have no due date, and the model invents one. Fix?
   A. Remove the field
   B. Make due_date nullable so 'not present' is a valid answer
   C. Lower temperature
   D. Add 'don't invent' in caps

2. How do you guarantee the JSON shape?
   A. Ask nicely
   B. A forced tool with the schema, ideally strict
   C. Parse with regex
   D. Use stop sequences

3. Output is schema-valid but line items don't sum to the total. What catches this?
   A. The schema
   B. Semantic validation in your code
   C. Nothing can
   D. A bigger model

<details><summary>Answers</summary>

1. **B.** Give the model an honest way to say it's missing.
2. **B.** The tool schema constrains the output.
3. **B.** Schemas check shape; your code checks meaning.

</details>
