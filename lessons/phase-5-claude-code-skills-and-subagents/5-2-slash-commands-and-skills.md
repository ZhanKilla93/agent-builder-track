# 5.2 Slash commands and skills

Phase 5: Claude Code, skills and subagents · about 12 min · CCAR-F 3.2

**Custom slash commands** are Markdown prompt files you trigger by name. `.claude/commands/review.md` becomes `/review`. In the project folder they're shared through git; in `~/.claude/commands/` they're personal. Use them for prompts you run on demand.

**Skills** are folders with a `SKILL.md` file: frontmatter with a `name` and `description`, then instructions, plus optional scripts and reference files. They live in `.claude/skills/` (project) or `~/.claude/skills/` (personal). Claude loads a skill **when its description matches the task**, or when you invoke it. Until then, only the short description costs context.

Useful frontmatter:

- `allowed-tools`: limit which tools the skill may use.
- `context: fork`: run the skill in an isolated subagent, so its exploration doesn't fill your main conversation.
- `argument-hint`: tell the user what arguments it expects.

The split that matters: **CLAUDE.md is always-on facts and rules. A skill is an on-demand procedure.** A 400-line procedure you need twice a week belongs in a skill, not CLAUDE.md. And because the description decides when a skill triggers, write it as carefully as a tool description.

## Key points

- Slash commands are named prompt files; project ones are shared via git.
- Skills are folders with SKILL.md, loaded on demand by description.
- allowed-tools restricts; context: fork isolates.
- CLAUDE.md is always on; skills load when relevant.

## Example: .claude/skills/brand-voice/SKILL.md

```
---
name: brand-voice
description: Checks and rewrites social captions to match a client's brand
  rules. Use when drafting or reviewing captions for Olive Ember, Cedar House or
  Harbour Kitchen.
allowed-tools: Read
---
1. Read the client's rules in brands/<client>.md.
2. Check the caption against each rule and list violations.
3. Rewrite it to pass, keeping the meaning.
```

## Exam traps

- Stuffing long, occasional procedures into CLAUDE.md.
- A vague skill description, so it never triggers or triggers everywhere.

## Quick check

1. A /review command the whole team should have?
   A. ~/.claude/commands/review.md
   B. .claude/commands/review.md in the repo
   C. CLAUDE.md
   D. A hook

2. A 400-line procedure needed only sometimes?
   A. CLAUDE.md
   B. A skill
   C. A system prompt
   D. A resource

3. A skill does heavy exploration and clutters your conversation. Option?
   A. Delete it
   B. context: fork in its frontmatter
   C. Raise max_tokens
   D. Move it to CLAUDE.md

<details><summary>Answers</summary>

1. **B.** Project commands are committed and shared.
2. **B.** Skills load on demand; CLAUDE.md loads every time.
3. **B.** Forking runs it in an isolated context.

</details>
