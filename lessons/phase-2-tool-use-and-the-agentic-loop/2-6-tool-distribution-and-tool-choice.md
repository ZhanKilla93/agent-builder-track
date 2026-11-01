# 2.6 Tool distribution and tool_choice

Phase 2: Tool use and the agentic loop · about 11 min · CCAR-F 2.3

**More tools isn't better.** Each tool adds tokens and another option to choose from. A focused agent with a handful of relevant tools (around four or five) picks more reliably than one with twenty.

In multi-agent systems, give each agent only the tools its role needs. A research subagent gets search and fetch; the writing subagent doesn't. If a writer keeps going off to search instead of writing, the fix is usually to remove the search tools from it. If several roles occasionally need the same narrow ability, give them a small, specific helper like `verify_fact` rather than the whole toolset.

`tool_choice` controls whether Claude must use a tool:

- `{"type": "auto"}` (default): Claude decides whether to call a tool or answer.
- `{"type": "any"}`: must call some tool.
- `{"type": "tool", "name": "..."}`: must call that specific tool.
- `{"type": "none"}`: no tools this turn.

Use forcing for a specific step: guaranteed structured extraction (Phase 6), or making sure a first step happens, like `extract_metadata` before anything else. Then return to `auto` for later turns. Never leave `any` on for the whole loop.

## Key points

- Fewer, role-relevant tools per agent select more reliably.
- Scope toolsets per subagent; give narrow helpers for shared needs.
- tool_choice: auto, any, tool (specific), none.
- Force a tool for one step, then go back to auto.

## Example: Forcing the first step only

```
// Turn 1: guarantee metadata extraction happens
"tool_choice": { "type": "tool", "name": "extract_metadata" }

// Later turns: let Claude decide
"tool_choice": { "type": "auto" }
```

## Exam traps

- Giving every agent every tool "just in case".
- Leaving tool_choice forced across the whole loop.

## Quick check

1. Your synthesis agent keeps running web searches instead of writing. Best fix?
   A. Tell it harder in the prompt
   B. Remove the search tools from its toolset
   C. Add more search tools
   D. Lower temperature

2. You need Claude to call extract_invoice exactly once, guaranteed. Setting?
   A. tool_choice auto
   B. tool_choice any
   C. tool_choice {type: tool, name: extract_invoice}
   D. tool_choice none

3. What is the default tool_choice?
   A. any
   B. none
   C. auto
   D. tool

<details><summary>Answers</summary>

1. **B.** Scope tools to the role; it can't misuse a tool it doesn't have.
2. **C.** The specific-tool form forces that exact tool.
3. **C.** With auto, Claude decides whether to call a tool or answer.

</details>
