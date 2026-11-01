# 3.4 Transports and configuration

Phase 3: MCP · about 11 min

Two transports:

- **stdio:** the host launches the server as a local process and talks to it through standard input and output. For local things: your filesystem, local scripts, a database on your machine. Usually one client.
- **Streamable HTTP:** the server runs remotely and is reached over HTTP. Serves many clients. Uses standard auth such as bearer tokens or OAuth.

Configuring servers in Claude Code has three scopes:

- **Project:** a `.mcp.json` file at the repo root, committed to git so the whole team gets the same servers.
- **User:** personal servers available in all your projects (`claude mcp add --scope user`).
- **Local:** just you, just this project.

**Never write a token into `.mcp.json`.** Reference an environment variable with `${GITHUB_TOKEN}`; each person sets their own. Claude Desktop uses a similar `claude_desktop_config.json` with an `mcpServers` block.

For standard services like GitHub, Slack or Postgres, use an existing, maintained server. Build your own for your own systems.

## Key points

- stdio for local processes; Streamable HTTP for remote servers.
- Project scope (.mcp.json in git) shares servers with the team.
- User scope is personal across projects.
- Reference secrets with ${VAR}; never hard-code them.

## Example: .mcp.json at the repo root

```
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": { "GITHUB_PERSONAL_ACCESS_TOKEN": "${GITHUB_TOKEN}" }
    },
    "orders": {
      "type": "http",
      "url": "https://mcp.example-restaurant.com/mcp"
    }
  }
}
```

## Exam traps

- Committing a real token inside .mcp.json.
- Putting a team-wide server in your user scope, so teammates don't get it.

## Quick check

1. The whole team should get the same Jira server config. Where?
   A. Your user scope
   B. .mcp.json in the repo (project scope)
   C. A Slack message
   D. CLAUDE.md

2. Where should the server's API token come from?
   A. Written into .mcp.json
   B. An environment variable referenced as ${VAR}
   C. The system prompt
   D. The tool description

3. A server that reads files on your own laptop most likely uses...
   A. Streamable HTTP
   B. stdio
   C. Email
   D. WebRTC

<details><summary>Answers</summary>

1. **B.** Project scope is committed and shared.
2. **B.** Each person supplies their own secret through the environment.
3. **B.** Local processes talk over stdio.

</details>
