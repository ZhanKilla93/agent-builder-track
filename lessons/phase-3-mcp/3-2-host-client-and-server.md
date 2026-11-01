# 3.2 Host, client and server

Phase 3: MCP · about 10 min

Three roles:

- **Host:** the AI application the user works in. Claude Desktop, Claude Code, an IDE.
- **Client:** a connector inside the host. The host creates **one client per server**, each with its own dedicated connection.
- **Server:** a program that exposes capabilities for one service.

The flow when you start Claude Code with two servers configured:

1. The host creates two clients. Each connects to its server and they exchange what they support.
2. Each client asks its server for its tools (`tools/list`).
3. The host gives all those tools to Claude, together.
4. Claude emits a `tool_use` block for one of them.
5. The right client sends `tools/call` to its server; the result comes back and becomes a `tool_result`.

The messages between client and server are **JSON-RPC 2.0**: small JSON objects with a `method`, `params` and an `id`.

## Key points

- Host is the app; client is one connection per server; server exposes capabilities.
- Clients discover tools with tools/list and call them with tools/call.
- Tools from all connected servers are available to Claude at once.
- The wire format is JSON-RPC 2.0.

## Example: A tools/call message

```
{
  "jsonrpc": "2.0",
  "id": 7,
  "method": "tools/call",
  "params": {
    "name": "create_issue",
    "arguments": { "repo": "yas/zaytuna-site", "title": "Menu page 404 on mobile" }
  }
}
```

## Exam traps

- Calling Claude Code the server. It's the host.
- Assuming one client handles every server.

## Quick check

1. Claude Code is connected to GitHub and Postgres servers. How many clients?
   A. One
   B. Two
   C. Three
   D. None

2. In that setup, what is the host?
   A. GitHub
   B. Postgres
   C. Claude Code
   D. The model

3. What message format do MCP clients and servers use?
   A. XML
   B. JSON-RPC 2.0
   C. CSV
   D. Plain text

<details><summary>Answers</summary>

1. **B.** One client per server.
2. **C.** The host is the application coordinating the clients.
3. **B.** Requests carry a method, params and an id.

</details>
