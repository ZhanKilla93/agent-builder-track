# 4.6 Hooks

Phase 4: Agent architecture and orchestration · about 11 min · CCAR-F 1.5

A hook is your code running at a fixed point in the agent's lifecycle. Unlike a prompt, it runs **every time**.

**PreToolUse** runs before a tool call. It can allow the call, block it (with a reason that goes back to Claude), or change its input. Uses:

- block refunds over $500 and point Claude to the escalation tool
- block file writes outside the project folder
- block dangerous commands like `rm -rf`

**PostToolUse** runs after a tool returns and can transform the result before Claude sees it. Uses:

- normalise data: three systems return dates as a Unix timestamp, ISO text and "11/01/26"; convert all to one format so Claude compares correctly
- trim verbose output to the fields that matter
- redact personal data

There are other events too, such as when the user submits a prompt, when a session starts and when the agent stops. The Claude Agent SDK exposes hooks as callbacks in your code. Claude Code configures them in `settings.json` as shell commands; a PreToolUse hook that exits with code 2 blocks the call.

## Key points

- Hooks are deterministic; prompts are probabilistic.
- PreToolUse: allow, block or modify before a call.
- PostToolUse: normalise, trim or redact results.
- Agent SDK hooks are callbacks; Claude Code hooks live in settings.json.

## Example: A Claude Code hook in .claude/settings.json

```
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [{ "type": "command", "command": "./scripts/block-dangerous.sh" }]
      }
    ]
  }
}
// block-dangerous.sh exits with code 2 if the command contains "rm -rf",
// which blocks the call and returns its message to Claude.
```

## Exam traps

- Using a system prompt instruction where a hook would guarantee the rule.
- Mixing up the two: blocking belongs before the call, normalising results after.

## Quick check

1. Three backends return dates in three formats, and Claude compares them wrongly. Fix?
   A. Explain date formats in the prompt
   B. A PostToolUse hook that normalises dates
   C. A PreToolUse hook
   D. Fewer tools

2. Block every refund above $500, guaranteed.
   A. System prompt rule
   B. PreToolUse hook
   C. PostToolUse hook
   D. Few-shot examples

3. Why use a hook instead of an instruction?
   A. Hooks are cheaper
   B. Hooks run every time; instructions are followed most of the time
   C. Instructions are deprecated
   D. Hooks make the model smarter

<details><summary>Answers</summary>

1. **B.** Transform results after the tool returns, before Claude sees them.
2. **B.** Intercept before the call runs.
3. **B.** Deterministic enforcement is the point.

</details>
