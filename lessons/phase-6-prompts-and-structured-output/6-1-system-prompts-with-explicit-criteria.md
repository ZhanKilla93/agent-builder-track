# 6.1 System prompts with explicit criteria

Phase 6: Prompts and structured output · about 10 min · CCAR-F 4.1

Vague instructions like "be thorough", "only flag high-confidence issues" or "be conservative" don't change behaviour reliably. The model has to guess where your line is.

Replace them with **explicit criteria**: what counts, what doesn't, with definitions and examples. For a code reviewer: "Flag bugs that produce wrong output, security issues and data loss. Do not flag naming, style or formatting unless it breaks a rule in STYLE.md." Define each severity level with an example.

False positives destroy trust fast. Once people learn a reviewer cries wolf, they ignore it, including when it's right. If one category produces most of the noise, switch that category off while you fix its criteria, rather than turning down the whole reviewer.

Structure helps: role, context, task, criteria, output format. Use XML tags such as `<criteria>` and `<document>` to separate instructions from data, so Claude never confuses the two.

## Key points

- Replace vague adjectives with explicit include and exclude criteria.
- Define severity levels with examples.
- Fix or disable noisy categories instead of lowering everything.
- XML tags separate instructions from data.

## Example: Vague versus explicit

```
Vague:    "Only flag important issues. Be conservative."

Explicit: <criteria>
          Flag:
            - logic that produces a wrong price, total or date
            - customer data written to logs
            - missing auth checks on order endpoints
          Do not flag:
            - naming, formatting, comment style
            - performance unless a loop calls the database
          </criteria>
```

## Exam traps

- Trying to fix false positives with "only report high-confidence findings".
- Mixing data and instructions without delimiters.

## Quick check

1. A reviewer flags too much trivia. "Only report high-confidence findings" didn't help. Next?
   A. Add more adjectives
   B. Write explicit criteria for what qualifies and what doesn't
   C. Bigger model
   D. Higher temperature

2. One category produces 60% false positives. Action?
   A. Lower sensitivity everywhere
   B. Disable or rewrite that category's criteria
   C. Ignore it
   D. Add few-shot for other categories

3. Why wrap a pasted document in XML tags?
   A. Decoration
   B. To separate data from instructions
   C. Claude requires it
   D. To save tokens

<details><summary>Answers</summary>

1. **B.** The model needs your line, not your mood.
2. **B.** Fix the source of the noise directly.
3. **B.** Clear boundaries prevent the model treating data as instructions.

</details>
