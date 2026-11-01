# 2.5 Structured error responses

Phase 2: Tool use and the agentic loop · about 11 min · CCAR-F 2.2

When a tool fails, how you report it decides whether the agent recovers. "Operation failed" leaves Claude guessing. It may retry something that can never work, or give up on something that would work in a second.

A useful error result includes:

- `is_error: true` on the tool result
- a **category**: transient (timeout, service busy), validation (bad input), business rule (refund over the limit), or permission
- whether retrying makes sense
- a clear message, and what to do instead

**An error is not the same as an empty result.** "No orders found for this email" is a successful lookup that found nothing. "The order database timed out" is a failure. If a timeout comes back as `[]`, the agent concludes the data doesn't exist and tells the customer something false.

Handle transient failures close to the source. A tool can retry a timeout once or twice itself before reporting an error. For business rule violations, include an explanation the agent can pass on to the customer, so it can say "refunds over $500 need a manager" instead of "something went wrong".

MCP tool results use an equivalent `isError` flag.

## Key points

- Return a category, a retryable flag, a clear message and an alternative.
- Empty result and failure must look different.
- Retry transient errors inside the tool before surfacing them.
- Business rule errors should carry a customer-ready explanation.

## Example: A structured error result

```
{
  "type": "tool_result",
  "tool_use_id": "toolu_07R",
  "is_error": true,
  "content": "{\"category\": \"business_rule\", \"retryable\": false,
    \"message\": \"Refund of $640 exceeds the $500 automatic limit.\",
    \"customer_message\": \"Refunds over $500 need a manager's approval.\",
    \"next_step\": \"Escalate with escalate_to_human, including order id and amount.\"}"
}
```

## Exam traps

- Returning [] when a search times out.
- Generic errors that give no category, so the agent can't decide whether to retry.

## Quick check

1. A search tool times out and returns an empty list. What's the danger?
   A. None
   B. The agent treats a failure as 'no results exist'
   C. It uses more tokens
   D. The loop stops

2. The refund tool rejects $640 because of a $500 policy limit. What should its result include?
   A. Just 'Error'
   B. Category business rule, not retryable, an explanation and the next step (escalate)
   C. A retry instruction
   D. Nothing, hide it

3. Where should a brief retry for a timeout ideally happen?
   A. Never
   B. Inside the tool, before it reports an error
   C. In the user's next message
   D. By restarting the agent

<details><summary>Answers</summary>

1. **B.** Failures must be distinguishable from valid empty results.
2. **B.** That lets the agent explain it to the customer and route correctly.
3. **B.** Handling transient errors locally keeps noise out of the agent's reasoning.

</details>
