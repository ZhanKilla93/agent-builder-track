# 7.3 Escalation and ambiguity

Phase 7: Context and reliability · about 10 min · CCAR-F 5.2

Escalate to a person when:

- the customer **explicitly asks** for a human. Do it; don't argue or keep trying.
- policy is **silent or ambiguous** on this case
- the agent **can't make progress**
- the action is **beyond its authority**

Don't escalate on **sentiment alone**. A frustrated customer with a solvable problem should get the problem solved, with acknowledgement. And don't route on the model's **self-reported confidence**; it's poorly calibrated unless checked against data.

**Ambiguity.** When a lookup returns several matches (three customers named Ahmed Hassan), ask for an identifying detail such as the phone number or an order number. Never pick one by a heuristic like "most recent". Acting on the wrong person's account is far worse than one extra question.

Write escalation criteria into the system prompt explicitly, with examples of what does and doesn't qualify.

## Key points

- Escalate on explicit request, policy gaps, no progress, or limits of authority.
- Not on sentiment alone, and not on self-reported confidence.
- Multiple matches: ask for an identifier, never guess.
- Make escalation criteria explicit with examples.

## Example: Escalation criteria in the system prompt

```
<escalation>
Escalate with escalate_to_human when:
  - the customer asks for a person, in any wording
  - the request isn't covered by the refund policy
  - you've tried twice and can't resolve it
Do NOT escalate only because the customer is upset. Acknowledge and solve.
If a lookup returns more than one customer, ask for their phone number.
</escalation>
```

## Exam traps

- Trying to talk a customer out of seeing a human.
- Picking the most recent of several matching accounts.

## Quick check

1. The customer says "let me talk to a person", though the agent could solve it.
   A. Keep trying
   B. Escalate
   C. Ask why
   D. End the chat

2. A lookup returns 3 matching customers.
   A. Pick the newest
   B. Ask for an identifying detail
   C. Pick randomly
   D. Escalate immediately

3. "Escalate when model confidence is below 0.6." Sound?
   A. Yes
   B. Not unless confidence is calibrated against labelled data
   C. Only on weekends
   D. Yes, at 0.9

<details><summary>Answers</summary>

1. **B.** An explicit request is honoured.
2. **B.** Ambiguity is resolved by asking, not guessing.
3. **B.** Self-reported confidence is unreliable on its own.

</details>
