# 6.2 Few-shot prompting

Phase 6: Prompts and structured output · about 9 min · CCAR-F 4.2

Examples are the strongest tool you have for consistency, in format and in judgement.

- Use **2 to 4 targeted examples**. Aim them at the ambiguous and edge cases, not the easy ones.
- Show the **reasoning** for why an output was chosen, so Claude learns the judgement, not only the surface.
- **Vary** the examples. If all three are about chicken shawarma, outputs drift toward chicken shawarma.
- Show what to do when information is **missing**: return null, don't invent. This is one of the best ways to reduce made-up values in extraction.
- Wrap them in `<example>` tags.

Good uses: consistent output format, borderline classification, extracting from documents that come in different layouts, and showing when a particular tool should or shouldn't be used.

## Key points

- 2 to 4 examples, focused on ambiguous cases.
- Show the reasoning behind each choice.
- Vary examples to avoid copying surface features.
- Include a missing-information example that returns null.

## Example: An example that teaches judgement

```
<example>
Review: "Food was great but delivery took 90 minutes and arrived cold."
Output: { "sentiment": "mixed", "topics": ["food_quality", "delivery_time"] }
Why: praise for food and a complaint about delivery; neither dominates.
</example>
<example>
Review: "ok"
Output: { "sentiment": "unclear", "topics": [] }
Why: too short to judge; don't guess.
</example>
```

## Exam traps

- Examples that only cover easy cases.
- All examples sharing one topic, so outputs copy it.

## Quick check

1. Output format varies between runs despite a detailed description. Fix?
   A. Longer description
   B. Add a few targeted examples
   C. Lower max_tokens
   D. Use batch

2. The model copies the topic of your examples into unrelated outputs. Fix?
   A. Remove examples
   B. Vary the examples
   C. Add more of the same
   D. Raise temperature

3. Which cases should examples focus on?
   A. The easiest
   B. Ambiguous and edge cases, with reasoning
   C. Random ones
   D. Only failures

<details><summary>Answers</summary>

1. **B.** Examples pin down format better than prose.
2. **B.** Diverse examples teach the pattern, not the content.
3. **B.** That's where the model needs your judgement.

</details>
