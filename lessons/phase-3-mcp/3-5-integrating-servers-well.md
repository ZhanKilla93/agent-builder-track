# 3.5 Integrating servers well

Phase 3: MCP · about 11 min · CCAR-F 2.4

Connecting a server is easy. Making it work well takes care in five areas.

1. **Discoverability.** Claude picks MCP tools by description, like any tool. If your custom code-search tool has a thin description, Claude may fall back to the built-in Grep. Improve the description so it explains what your tool does better.
2. **Tool count.** Every connected server adds tools. Ten servers can mean a hundred tools and worse selection. Connect what the work needs.
3. **Security.** A server's tool descriptions and results go straight into Claude's context. A malicious or compromised server can plant instructions there (prompt injection) or try to leak data. Install only servers you trust, give tokens the least access needed, and require approval for destructive actions.
4. **Errors.** Return `isError` results with a category and a usable message (lesson 2.5).
5. **Scope.** Experiment in user or local scope; promote to the project `.mcp.json` once the team should use it.

## Key points

- MCP tools compete on description quality with built-in tools.
- Too many connected servers degrade tool selection.
- Server descriptions and results are untrusted input to the model.
- Experiment personally, then share via project scope.

## Example: Making your tool win over Grep

```
// Before: Claude ignores it and uses Grep
"description": "Searches code."

// After
"description": "Semantic search across the whole monorepo, including generated
 and vendored code that Grep skips. Returns the 10 most relevant functions with
 file path and line. Use for 'where is X handled' questions. For an exact string,
 Grep is faster."
```

## Exam traps

- Trusting third-party server output as if it came from you.
- Connecting every server you find to every project.

## Quick check

1. Claude keeps using Grep instead of your custom code-search MCP tool. Likely fix?
   A. Remove Grep
   B. Write a description that explains what your tool does better and when to use it
   C. Rename it grep2
   D. Raise temperature

2. A security risk specific to third-party MCP servers?
   A. They're slow
   B. Their tool descriptions and results can carry injected instructions
   C. They need JSON
   D. They use stdio

3. You're testing an experimental server alone. Which scope?
   A. Project .mcp.json
   B. User or local scope
   C. The CI pipeline
   D. A resource

<details><summary>Answers</summary>

1. **B.** Selection follows descriptions.
2. **B.** Anything a server returns enters Claude's context.
3. **B.** Keep experiments personal until the team should share them.

</details>
