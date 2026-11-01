# Phase 3: MCP

**Weeks 4 to 5.** Explain how MCP connects tools to any AI app, and set up and inspect a server yourself.

The Model Context Protocol is the standard plug between AI apps and outside systems. From Claude's point of view an MCP tool is just a tool; MCP standardises how the app finds and calls it. Maps to CCAR-F Domain 2.

## Lessons

- 3.1 [Why MCP exists](3-1-why-mcp-exists.md)
- 3.2 [Host, client and server](3-2-host-client-and-server.md)
- 3.3 [Tools, resources and prompts](3-3-tools-resources-and-prompts.md)
- 3.4 [Transports and configuration](3-4-transports-and-configuration.md)
- 3.5 [Integrating servers well](3-5-integrating-servers-well.md)

## Build: your first MCP server

1. Connect one existing MCP server (filesystem or GitHub) to Claude Desktop or Claude Code. Open its config and explain every line.
2. Open the same server in the MCP Inspector and list its tools, resources and prompts.
3. With Claude Code, wrap your Phase 2 calculator as a local stdio MCP server, connect it, and use it from Claude.

## Go deeper

- [MCP architecture overview](https://modelcontextprotocol.io/docs/learn/architecture) (MCP docs)
- [Introduction to Model Context Protocol](https://anthropic.skilljar.com/introduction-to-model-context-protocol) (Claude Academy)
- [Model Context Protocol: Advanced Topics](https://anthropic.skilljar.com/model-context-protocol-advanced-topics) (Claude Academy)
- [MCP Inspector](https://github.com/modelcontextprotocol/inspector) (GitHub)
