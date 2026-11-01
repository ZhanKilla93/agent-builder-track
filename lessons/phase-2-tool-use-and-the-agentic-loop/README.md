# Phase 2: Tool use and the agentic loop

**Week 3.** Describe step by step what happens when an agent calls a tool, and design tools Claude picks correctly.

Tools turn a chatbot into an agent. This phase covers the round trip, the loop that repeats it, and the design choices that decide whether Claude uses your tools well. It maps to CCAR-F Domain 1 (27%) and Domain 2 (18%).

## Lessons

- 2.1 [Defining a tool](2-1-defining-a-tool.md)
- 2.2 [The tool-use round trip](2-2-the-tool-use-round-trip.md)
- 2.3 [The agentic loop](2-3-the-agentic-loop.md)
- 2.4 [Tool interface design](2-4-tool-interface-design.md)
- 2.5 [Structured error responses](2-5-structured-error-responses.md)
- 2.6 [Tool distribution and tool_choice](2-6-tool-distribution-and-tool-choice.md)
- 2.7 [Built-in tools](2-7-built-in-tools.md)

## Build: multi-tool agent loop

1. With Claude Code, build an agent with two tools: a calculator and a mock web search that returns a fixed price.
2. Loop on stop_reason: continue on tool_use, stop on end_turn. Add a safety cap of 20 iterations.
3. Test with: "Search the price of Bitcoin and work out what 3.5 coins cost." Confirm at least two tool calls happen.
4. Explain every block of the code to the tutor before calling it done.

## Go deeper

- [Tool use with Claude](https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview) (Anthropic docs)
- [Building with the Claude API (tool use module)](https://anthropic.skilljar.com/claude-with-the-anthropic-api) (Claude Academy)
