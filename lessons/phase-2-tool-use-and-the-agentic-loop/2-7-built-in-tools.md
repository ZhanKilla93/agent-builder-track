# 2.7 Built-in tools

Phase 2: Tool use and the agentic loop · about 10 min · CCAR-F 2.5

You'll meet two families of ready-made tools.

**Anthropic server tools** run on Anthropic's side: web search, web fetch and code execution. You enable them in the request and their results arrive in the same response, without your code running anything.

**Claude Code's built-in tools** act on files in your project:

- `Grep`: search file *contents* for a pattern. "Where is `refundOrder` called?"
- `Glob`: find files by *name* pattern, like `**/*.test.ts`.
- `Read`: read a file.
- `Edit`: replace an exact piece of text. The text must be unique in the file.
- `Write`: create or overwrite a whole file.
- `Bash`: run a terminal command.

If an `Edit` fails because the text appears several times, include more surrounding lines to make it unique, or fall back to Read then Write.

Exploring an unfamiliar codebase, start narrow: Grep for the function or Glob for the file type, then Read the specific files. Reading every file up front floods the context.

## Key points

- Server tools (web search, fetch, code execution) run on Anthropic's side.
- Grep searches contents; Glob matches file names.
- Edit needs a unique match; Write replaces whole files.
- Explore narrow first, then read specific files.

## Example: Picking the right tool

```
"Where is calculateTax called?"          -> Grep  "calculateTax("
"List every config file"                 -> Glob  "**/*.config.js"
"Change the timeout from 30 to 60"       -> Edit  (unique match)
"Create a new README"                    -> Write
"Run the test suite"                     -> Bash  "npm test"
```

## Exam traps

- Using Glob to search inside files, or Grep to find files by name.
- Reading the whole codebase before searching.

## Quick check

1. Find every file that calls refundOrder().
   A. Glob
   B. Grep
   C. Write
   D. Read every file

2. List all files named *.config.js across the project.
   A. Grep
   B. Glob
   C. Edit
   D. Bash only

3. An Edit fails because the target text appears 3 times. Fix?
   A. Give up
   B. Include more surrounding text so the match is unique, or read and rewrite the file
   C. Use Grep
   D. Delete two of them first by hand

<details><summary>Answers</summary>

1. **B.** Grep searches file contents.
2. **B.** Glob matches file names and paths.
3. **B.** Edit requires a unique match.

</details>
