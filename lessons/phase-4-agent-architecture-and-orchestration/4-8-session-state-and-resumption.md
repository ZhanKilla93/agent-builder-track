# 4.8 Session state and resumption

Phase 4: Agent architecture and orchestration · about 10 min · CCAR-F 1.7

Long tasks span sessions. Three options:

- **Resume** a previous session (Claude Code's `--resume`, or a session id in the Agent SDK) to continue with the full history.
- **Fork** a session to explore two approaches from the same starting point without them interfering.
- **Start fresh** with a written summary of what's known.

Resuming works when the earlier context is still true. If files changed since (you or a teammate edited code), the old tool results in the history are **stale**, and the agent will reason from outdated information. Either tell it exactly what changed and ask it to re-read those files, or start fresh with a summary.

Keep important state **outside the conversation**: a notes file of findings and decisions, a structured record of what's done and what's pending. Then a crash, a new session or another agent can pick up where things stopped. Coordinators can keep a manifest so a restarted coordinator can reload where each subagent got to.

## Key points

- Resume to continue, fork to compare approaches, fresh start with a summary when context is stale.
- Resumed sessions can carry stale tool results.
- Tell the agent what changed, or start fresh.
- Persist state in files so work survives crashes.

## Example: Resuming safely

```
claude --resume
> Since last session, a teammate refactored booking.ts, payments.ts and
> routes/menu.ts. Re-read those three files before continuing. Your earlier
> notes about them may be out of date.
```

## Exam traps

- Resuming after big changes without saying what changed.
- Keeping all progress only in the chat history.

## Quick check

1. You resumed after a teammate refactored 3 files, and the agent gives wrong answers about them. Why?
   A. The model got worse
   B. Its history holds stale results from before the refactor
   C. Resume is broken
   D. Too many tokens

2. Compare two refactoring approaches from the same analysis without them interfering?
   A. Resume twice
   B. Fork the session
   C. Start fresh twice
   D. Use batch

3. Make a long job survive a crash?
   A. Hope
   B. Persist state and findings to a file or manifest
   C. Use a bigger context
   D. Lower temperature

<details><summary>Answers</summary>

1. **B.** Old tool results describe old files.
2. **B.** Forking gives each approach the same baseline.
3. **B.** State outside the conversation can be reloaded.

</details>
