# Phase 1: How the Claude API works

**Week 2.** Explain what's inside a Claude API request, and why an agent forgets anything you don't send back.

The Claude API is one endpoint with a handful of fields. Once you understand that it remembers nothing between calls, most of agent design starts to make sense.

## Lessons

- 1.1 [Anatomy of a Messages request](1-1-anatomy-of-a-messages-request.md)
- 1.2 [The API is stateless](1-2-the-api-is-stateless.md)
- 1.3 [Reading the response](1-3-reading-the-response.md)
- 1.4 [Tokens and the context window](1-4-tokens-and-the-context-window.md)
- 1.5 [Choosing a model](1-5-choosing-a-model.md)

## Practice

1. Ask Claude Code to make one raw API call and save the full JSON response. Label every field.
2. Make a two-turn conversation. Then deliberately drop the first turn from the second call and see what Claude 'forgets'.
3. Compare usage numbers between a short and a long conversation.

## Go deeper

- [Claude Platform 101](https://anthropic.skilljar.com/claude-platform-101) (Claude Academy)
- [Building with the Claude API](https://anthropic.skilljar.com/claude-with-the-anthropic-api) (Claude Academy)
