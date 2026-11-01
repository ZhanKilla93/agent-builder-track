# 0.5 API keys and secrets

Phase 0: Technical foundations · about 8 min

An API key both identifies you and bills you. Anyone who has your key can spend your money and act as you. Treat it like a bank card.

- Never paste it into a prompt, a chat, a screenshot, a shared doc or a code file you commit to git.
- Store it in an **environment variable** such as `ANTHROPIC_API_KEY`, or in a `.env` file that is listed in `.gitignore`. The SDKs read `ANTHROPIC_API_KEY` automatically.
- Use a separate key per project. If one leaks, the damage is limited and you can see which project is spending.
- If a key leaks, **revoke it and create a new one**. Deleting the commit isn't enough; it may already be copied.
- Set spend limits in the Claude Console.

Agents add one more risk. An agent with a file-reading tool can read your `.env` file, and an agent that can send messages could leak what it reads. Give agents only the access they need. You'll apply the same rule to MCP configs in Phase 3, where tokens are referenced from environment variables instead of written into the file.

## Key points

- A key is identity plus billing: whoever holds it acts and pays as you.
- Keep keys in environment variables or a git-ignored .env file.
- Leaked key: revoke and rotate immediately.
- Give agents the least access they need.

## Example: Keeping the key out of code

```
# .env  (listed in .gitignore, never committed)
ANTHROPIC_API_KEY=sk-ant-...

# .gitignore
.env

# in the terminal, for this session only
export ANTHROPIC_API_KEY=sk-ant-...
```

## Exam traps

- "It's a private repo, so it's fine." Private repos get shared, cloned and leaked.
- Logging full request headers, which writes the key into log files.

## Quick check

1. Best place for the key in a local script?
   A. Hard-coded at the top of the script
   B. In the system prompt
   C. An environment variable or a git-ignored .env file
   D. A comment in the code

2. You committed a key to GitHub, then deleted the commit. What now?
   A. Nothing, it's gone
   B. Revoke the key and create a new one
   C. Make the repo private
   D. Change the model

3. Why use a separate key for each project?
   A. Keys expire faster when shared
   B. It limits damage from a leak and shows which project is spending
   C. The API requires it
   D. It's faster

<details><summary>Answers</summary>

1. **C.** Environment variables keep the key out of code and out of git.
2. **B.** Assume it was copied the moment it was pushed. Revoke and rotate.
3. **B.** Separate keys contain a leak and make costs traceable.

</details>
