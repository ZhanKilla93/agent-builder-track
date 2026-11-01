# 3.3 Tools, resources and prompts

Phase 3: MCP · about 10 min

A server can offer three kinds of thing, distinguished by **who decides to use them**.

- **Tools (model-controlled):** actions Claude chooses to invoke. `create_issue`, `query_orders`, `send_message`. Anything with side effects is a tool.
- **Resources (application-controlled):** read-only data the app exposes, addressed by a URI. File contents, a database schema, a catalogue of documents. The app decides what to include.
- **Prompts (user-controlled):** reusable templates the user picks, often shown as slash commands. "Draft weekly client report".

Resources are underused. If an agent keeps making exploratory calls to find out what tables or documents exist, expose a catalogue as a resource. It gets the map up front instead of wandering.

A quick test: does it change something or need a live query? Tool. Is it reference context to read? Resource. Is it a workflow the user triggers by name? Prompt.

## Key points

- Tools are model-controlled actions.
- Resources are app-controlled, read-only context with URIs.
- Prompts are user-controlled templates, often slash commands.
- Exposing a catalogue as a resource saves exploratory tool calls.

## Example: One server, three kinds

```
Restaurant MCP server
  tools:      place_order, update_menu_item, get_order_status
  resources:  menu://current        (today's menu as JSON)
              schema://orders       (order table columns)
  prompts:    weekly-sales-summary  (user picks it from a menu)
```

## Exam traps

- Exposing read-only reference data as a tool the model has to remember to call.
- Making a side-effecting action a resource.

## Quick check

1. The agent should know your database schema up front. What fits best?
   A. A tool
   B. A resource
   C. A prompt
   D. A hook

2. A 'generate weekly report' template the user triggers by name?
   A. Tool
   B. Resource
   C. Prompt
   D. Client

3. send_email belongs as a...
   A. Resource
   B. Prompt
   C. Tool
   D. Transport

<details><summary>Answers</summary>

1. **B.** Read-only reference context is a resource.
2. **C.** User-controlled templates are prompts.
3. **C.** It has side effects and the model decides when to call it.

</details>
