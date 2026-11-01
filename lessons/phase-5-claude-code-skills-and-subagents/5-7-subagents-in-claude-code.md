# 5.7 Subagents in Claude Code

Phase 5: Claude Code, skills and subagents · about 9 min

Subagents are specialised assistants, each with its **own system prompt, own tools and own context window**. You define them as Markdown files with frontmatter in `.claude/agents/` (project) or `~/.claude/agents/` (personal): `name`, `description`, `tools`, optionally `model`.

Claude delegates to one when a task matches its description, or when you ask. The subagent works in its own context and returns a summary.

Use them to:

- **keep the main context clean**: log analysis, wide exploration
- **specialise**: a code reviewer with a focused prompt
- **restrict**: a reviewer with read-only tools can't change files
- **parallelise** independent work

Choosing between the three: a **slash command** is a prompt you trigger. A **skill** is a reusable procedure, loaded when relevant (optionally forked). A **subagent** is a separate worker with its own context and toolset.

## Key points

- Subagents have their own prompt, tools and context window.
- Defined in .claude/agents/ with name, description and tools.
- Restrict tools by role.
- They return summaries, keeping your main context clean.

## Example: .claude/agents/reviewer.md

```
---
name: reviewer
description: Reviews code changes for bugs and security issues. Use after
  any change to payments or booking code.
tools: Read, Grep, Glob
---
Review the changed files. Report only bugs that produce wrong behaviour,
security issues and missing tests, each with file and line.
```

## Exam traps

- Giving a reviewer Write access it never needs.
- Dumping huge log files into the main conversation instead of delegating.

## Quick check

1. A read-only security reviewer?
   A. A skill with Write
   B. A subagent with tools limited to Read, Grep and Glob
   C. A slash command
   D. A hook

2. Your main session keeps filling with log dumps.
   A. Use a bigger model
   B. Delegate log analysis to a subagent
   C. Turn off logs
   D. Add to CLAUDE.md

3. Key difference between a skill and a subagent?
   A. Skills are shared, subagents aren't
   B. A subagent has its own context window and toolset
   C. Subagents can't use tools
   D. None

<details><summary>Answers</summary>

1. **B.** Restrict tools to the role.
2. **B.** The subagent absorbs the noise and returns a summary.
3. **B.** Separate context is what makes a subagent a separate worker.

</details>
