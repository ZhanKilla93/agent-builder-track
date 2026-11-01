# 3.1 Why MCP exists

Phase 3: MCP · about 8 min

Before MCP, every AI app needed its own custom code for every integration. Five apps and ten services meant fifty integrations, each built and maintained separately.

MCP is an open standard. You build **one server** for a service, say your restaurant's ordering system, and **any MCP-compatible host** can use it: Claude Desktop, Claude Code, claude.ai connectors, and other vendors' apps. Think of it like USB-C for AI integrations.

What MCP does not do: it doesn't replace tool use, and it doesn't decide how the model uses what it's given. When Claude Code connects to an MCP server, it fetches the server's tool list and hands those tools to Claude as ordinary tool definitions. Claude emits a normal `tool_use` block. The host routes it to the server. So everything from Phase 2 still applies: descriptions drive selection, errors need structure, fewer tools beat more.

## Key points

- MCP turns M apps times N services into one server per service.
- Any MCP host can use any MCP server.
- To Claude, an MCP tool is a normal tool definition.
- MCP standardises discovery and calling, not how the model reasons.

## Example: Without and with MCP

```
Without MCP:  Claude Desktop -> custom Slack code
              Claude Code    -> different custom Slack code
              Your agent     -> yet another Slack integration

With MCP:     Claude Desktop \
              Claude Code     >--  one Slack MCP server
              Your agent     /
```

## Exam traps

- Thinking MCP tools behave differently from regular tools in Claude's eyes.
- Building a custom server when a well-maintained one already exists for that service.

## Quick check

1. What problem does MCP mainly solve?
   A. Model speed
   B. Rebuilding the same integration separately for every app
   C. Token costs
   D. Prompt quality

2. From Claude's perspective, an MCP tool is...
   A. A special protocol message it must parse
   B. A normal tool definition
   C. A system prompt
   D. A resource

3. Your CRM has an MCP server. Which apps can use it?
   A. Only the app it was built for
   B. Any MCP-compatible host
   C. Only Claude Desktop
   D. Only claude.ai

<details><summary>Answers</summary>

1. **B.** One server per service works across every MCP host.
2. **B.** The host converts server tools into regular tool definitions.
3. **B.** That interoperability is the point of the standard.

</details>
