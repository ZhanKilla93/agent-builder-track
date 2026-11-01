# 0.6 Terminal, paths and config files

Phase 0: Technical foundations · about 10 min

Claude Code, MCP servers and CI pipelines all live in the terminal and in config files. You need to read them, not master them.

**Commands.** A command is a program name followed by arguments and flags. In `claude -p "summarise this repo" --output-format json`, `claude` is the program, the quoted text is an argument, and `-p` and `--output-format json` are flags. Everyday commands: `pwd` (where am I), `ls` (list files; `dir` on Windows), `cd` (change folder).

**Paths.** An absolute path starts from the root, like `/Users/mostafa/projects/agent`. A relative path starts from where you are, like `./src`. `~` means your home folder. Files and folders starting with a dot, like `.claude` or `.env`, are hidden; `ls -a` shows them.

**Config files.** You'll meet two kinds. JSON files such as `settings.json` and `.mcp.json`. And Markdown files, sometimes with **YAML frontmatter**: a block between two `---` lines at the top holding `key: value` settings. Skills, subagents and path rules all use frontmatter.

**Environment variables** are named values the terminal passes to programs. That's how keys reach your code without being written into it.

## Key points

- A command is program, then arguments, then flags.
- ~ is your home folder; dot-files and dot-folders are hidden.
- Config is either JSON or Markdown with YAML frontmatter between --- lines.
- Environment variables pass settings and secrets to programs.

## Example: A project's Claude Code folder

```
my-project/
  CLAUDE.md                  <- project instructions, shared via git
  .mcp.json                  <- MCP servers for the team
  .claude/
    settings.json            <- permissions, hooks
    commands/review.md       <- /review slash command
    skills/brand-voice/SKILL.md
    agents/reviewer.md

# top of SKILL.md
---
name: brand-voice
description: Checks captions against the restaurant's brand rules
---
```

## Exam traps

- Looking for .claude in a normal file listing and thinking it doesn't exist. It's hidden.
- Confusing ~/.claude (your personal settings) with ./.claude (this project's settings).

## Quick check

1. What does ~/.claude/ refer to?
   A. A .claude folder inside the current project
   B. The .claude folder in your home directory
   C. A temporary folder
   D. A website

2. In claude -p "fix tests" --output-format json, what is --output-format json?
   A. The prompt
   B. A flag with a value
   C. The program
   D. A file path

3. What is the --- block at the top of a SKILL.md file?
   A. A comment
   B. YAML frontmatter holding settings like name and description
   C. A divider for readability
   D. Markdown for a horizontal line, nothing more

<details><summary>Answers</summary>

1. **B.** ~ is your home folder, so this is your personal, user-level Claude folder.
2. **B.** Flags start with dashes; this one takes the value json.
3. **B.** Frontmatter carries the file's settings. For a skill, the description controls when it triggers.

</details>
