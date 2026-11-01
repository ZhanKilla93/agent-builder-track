# 6.4 Validation, retry and feedback

Phase 6: Prompts and structured output · about 10 min · CCAR-F 4.4

After extraction, check the result in code: types, required values, totals that add up, dates in sensible ranges.

When a check fails, **retry with feedback**. Send the original document, the previous output, and the specific error: "Line items sum to 940 but total is 1040. Re-check the line items." A bare "try again" rarely helps.

Know when retrying can't work. Retries fix format mistakes and misreads. They **don't** help when the information simply isn't in the source. If a field keeps failing because it's absent, stop and mark it missing. Always cap retries.

Two tricks that make problems visible:

- Have the model extract **both** the stated total and a calculated total. A mismatch flags an arithmetic or reading error.
- Add a field recording which rule or pattern triggered a decision, so you can analyse false positives later.

## Key points

- Validate meaning in code after every extraction.
- Retry with the document, the bad output and the specific error.
- Retries can't recover information that isn't there.
- Extract stated and calculated values to expose errors.

## Example: A retry message

```
<document>...original invoice...</document>
<previous_output>{ "total": 1040, "line_items": [ ... ] }</previous_output>
<error>line_items sum to 940.00 but total is 1040.00</error>
Re-read the line items and the total. If the document itself is inconsistent,
keep both values and set "inconsistent": true.
```

## Exam traps

- Retrying in a loop for a field the document doesn't contain.
- Retrying with no information about what was wrong.

## Quick check

1. Best practice for a retry message?
   A. Just 'try again'
   B. Include the source, the previous output and the specific error
   C. Shorter prompt
   D. Different model only

2. A field keeps failing because it isn't in the document. What to do?
   A. Retry until it works
   B. Stop retrying and mark it missing or null
   C. Invent a default
   D. Use a bigger model

3. A trick to surface arithmetic errors?
   A. Ask for confidence
   B. Extract both the stated and the calculated total
   C. Lower temperature
   D. Use batch

<details><summary>Answers</summary>

1. **B.** Specific feedback lets the model correct the specific mistake.
2. **B.** No retry can find what isn't there.
3. **B.** The mismatch is the signal.

</details>
