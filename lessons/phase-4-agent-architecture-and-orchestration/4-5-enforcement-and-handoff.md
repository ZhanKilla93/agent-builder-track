# 4.5 Enforcement and handoff

Phase 4: Agent architecture and orchestration · about 11 min · CCAR-F 1.4

Prompt instructions are **probabilistic**. "Always verify the customer before issuing a refund" will be followed most of the time. Not every time.

When a rule must hold every single time (money, identity, legal, safety), **enforce it in code**:

- a prerequisite gate: `process_refund` is blocked unless `verify_customer` succeeded earlier in the session
- a hook that intercepts and blocks the call (lesson 4.6)
- validation in the tool itself before the action runs

Prompts remain fine for tone, style and preferences, where an occasional miss is cheap.

**Handoffs to people.** When an agent escalates, the human usually won't read the transcript. Give them a structured summary: customer id, the issue, what was verified, what was tried, the likely cause, and the recommended action. They should be able to act in one read.

**Multi-part requests.** "I want a refund for order 1 and to change the address on order 2" is two issues. Split them, handle each (in parallel where independent), then give one combined answer.

## Key points

- Prompts guide; code guarantees.
- Business-critical rules need gates, hooks or tool-level checks.
- Escalations carry a structured summary a human can act on immediately.
- Split multi-concern requests, resolve each, answer once.

## Example: A prerequisite gate in the tool

```
function processRefund(input, session) {
  if (!session.verifiedCustomerId) {
    return { is_error: true, category: "precondition",
      message: "Customer not verified. Call verify_customer first." };
  }
  if (input.customerId !== session.verifiedCustomerId) {
    return { is_error: true, category: "permission",
      message: "Order belongs to a different customer." };
  }
  // ...issue refund
}
```

## Exam traps

- Strengthening a prompt ("ALWAYS!!") for a rule that must never fail.
- Escalating with "see transcript" instead of a summary.

## Quick check

1. 3% of refunds were issued without identity checks despite clear instructions. Fix?
   A. Make the prompt shout
   B. Add a programmatic gate so refunds can't run before verification
   C. Use a bigger model
   D. Lower temperature

2. What should an escalation to a human contain?
   A. The full transcript
   B. A structured summary: who, issue, verified facts, what was tried, recommendation
   C. Just the customer's name
   D. Nothing, they'll ask

3. Which rule is fine to leave as a prompt instruction?
   A. Never refund unverified customers
   B. Use a friendly, concise tone
   C. Never delete production data
   D. Never share another customer's data

<details><summary>Answers</summary>

1. **B.** A rule that must always hold belongs in code.
2. **B.** The human should be able to act in one read.
3. **B.** Style rules tolerate occasional misses; critical rules don't.

</details>
