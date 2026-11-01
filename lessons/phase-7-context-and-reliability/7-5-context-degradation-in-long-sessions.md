# 7.5 Context degradation in long sessions

Phase 7: Context and reliability · about 9 min · CCAR-F 5.4

In long explorations, like two hours inside a big codebase, quality slips quietly. Answers get vaguer. The model starts referring to "typical patterns" instead of the specific classes it read earlier. It contradicts its own findings.

The cause is a context full of old tool output, with the important findings scattered through it.

Countermeasures:

- Keep a **scratchpad file** of findings: file paths, decisions, open questions. Refer back to it.
- **Delegate verbose exploration to subagents** that return concise summaries.
- Use `/compact` in Claude Code to condense a conversation full of noise.
- **Work in phases**, and start a new session at phase boundaries with a summary of what's known.

## Key points

- Vague, generic answers late in a session signal degradation.
- Persist findings in a scratchpad file.
- Subagents absorb exploration noise.
- /compact or a fresh session with a summary resets clutter.

## Example: A findings scratchpad

```
# notes/booking-investigation.md
- Bookings are created in src/booking/create.ts (createBooking)
- Double-booking bug: no lock between availability check and insert (line 88)
- Payments are only charged in webhooks/stripe.ts, not at booking time
- OPEN: does the admin panel bypass createBooking? check src/admin/
```

## Exam traps

- Pushing on in a cluttered session instead of resetting.
- Keeping findings only in the conversation.

## Quick check

1. After two hours the agent says a file "probably uses a typical repository pattern", though it read that file earlier. What's happening?
   A. It's being cautious
   B. Context degradation
   C. The file changed
   D. A bug in Read

2. A durable fix?
   A. Keep going
   B. A scratchpad file of findings plus subagents for exploration
   C. Bigger model
   D. Higher temperature

3. The Claude Code command that condenses a noisy conversation?
   A. /clear
   B. /compact
   C. /memory
   D. /review

<details><summary>Answers</summary>

1. **B.** Specifics fade in cluttered long contexts.
2. **B.** Findings outside the context survive.
3. **B.** /compact summarises to free space while keeping the thread.

</details>
