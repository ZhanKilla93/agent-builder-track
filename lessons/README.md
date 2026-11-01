# Lessons

Generated from index.html by `node tools/export-lessons.js`. Edit index.html, not these files.

## [Phase 0: Technical foundations](phase-0-technical-foundations/README.md)

- 0.1 [What an API is](phase-0-technical-foundations/0-1-what-an-api-is.md)
- 0.2 [Anatomy of an HTTP request](phase-0-technical-foundations/0-2-anatomy-of-an-http-request.md)
- 0.3 [Status codes and errors](phase-0-technical-foundations/0-3-status-codes-and-errors.md)
- 0.4 [Reading JSON](phase-0-technical-foundations/0-4-reading-json.md)
- 0.5 [API keys and secrets](phase-0-technical-foundations/0-5-api-keys-and-secrets.md)
- 0.6 [Terminal, paths and config files](phase-0-technical-foundations/0-6-terminal-paths-and-config-files.md)

## [Phase 1: How the Claude API works](phase-1-how-the-claude-api-works/README.md)

- 1.1 [Anatomy of a Messages request](phase-1-how-the-claude-api-works/1-1-anatomy-of-a-messages-request.md)
- 1.2 [The API is stateless](phase-1-how-the-claude-api-works/1-2-the-api-is-stateless.md)
- 1.3 [Reading the response](phase-1-how-the-claude-api-works/1-3-reading-the-response.md)
- 1.4 [Tokens and the context window](phase-1-how-the-claude-api-works/1-4-tokens-and-the-context-window.md)
- 1.5 [Choosing a model](phase-1-how-the-claude-api-works/1-5-choosing-a-model.md)

## [Phase 2: Tool use and the agentic loop](phase-2-tool-use-and-the-agentic-loop/README.md)

- 2.1 [Defining a tool](phase-2-tool-use-and-the-agentic-loop/2-1-defining-a-tool.md)
- 2.2 [The tool-use round trip](phase-2-tool-use-and-the-agentic-loop/2-2-the-tool-use-round-trip.md)
- 2.3 [The agentic loop](phase-2-tool-use-and-the-agentic-loop/2-3-the-agentic-loop.md)
- 2.4 [Tool interface design](phase-2-tool-use-and-the-agentic-loop/2-4-tool-interface-design.md)
- 2.5 [Structured error responses](phase-2-tool-use-and-the-agentic-loop/2-5-structured-error-responses.md)
- 2.6 [Tool distribution and tool_choice](phase-2-tool-use-and-the-agentic-loop/2-6-tool-distribution-and-tool-choice.md)
- 2.7 [Built-in tools](phase-2-tool-use-and-the-agentic-loop/2-7-built-in-tools.md)

## [Phase 3: MCP](phase-3-mcp/README.md)

- 3.1 [Why MCP exists](phase-3-mcp/3-1-why-mcp-exists.md)
- 3.2 [Host, client and server](phase-3-mcp/3-2-host-client-and-server.md)
- 3.3 [Tools, resources and prompts](phase-3-mcp/3-3-tools-resources-and-prompts.md)
- 3.4 [Transports and configuration](phase-3-mcp/3-4-transports-and-configuration.md)
- 3.5 [Integrating servers well](phase-3-mcp/3-5-integrating-servers-well.md)

## [Phase 4: Agent architecture and orchestration](phase-4-agent-architecture-and-orchestration/README.md)

- 4.1 [Workflows versus agents](phase-4-agent-architecture-and-orchestration/4-1-workflows-versus-agents.md)
- 4.2 [Workflow patterns](phase-4-agent-architecture-and-orchestration/4-2-workflow-patterns.md)
- 4.3 [Multi-agent orchestration](phase-4-agent-architecture-and-orchestration/4-3-multi-agent-orchestration.md)
- 4.4 [Subagent context passing](phase-4-agent-architecture-and-orchestration/4-4-subagent-context-passing.md)
- 4.5 [Enforcement and handoff](phase-4-agent-architecture-and-orchestration/4-5-enforcement-and-handoff.md)
- 4.6 [Hooks](phase-4-agent-architecture-and-orchestration/4-6-hooks.md)
- 4.7 [Task decomposition](phase-4-agent-architecture-and-orchestration/4-7-task-decomposition.md)
- 4.8 [Session state and resumption](phase-4-agent-architecture-and-orchestration/4-8-session-state-and-resumption.md)

## [Phase 5: Claude Code, skills and subagents](phase-5-claude-code-skills-and-subagents/README.md)

- 5.1 [CLAUDE.md hierarchy](phase-5-claude-code-skills-and-subagents/5-1-claude-md-hierarchy.md)
- 5.2 [Slash commands and skills](phase-5-claude-code-skills-and-subagents/5-2-slash-commands-and-skills.md)
- 5.3 [Path-specific rules](phase-5-claude-code-skills-and-subagents/5-3-path-specific-rules.md)
- 5.4 [Plan mode versus direct execution](phase-5-claude-code-skills-and-subagents/5-4-plan-mode-versus-direct-execution.md)
- 5.5 [Iterative refinement](phase-5-claude-code-skills-and-subagents/5-5-iterative-refinement.md)
- 5.6 [CI/CD integration](phase-5-claude-code-skills-and-subagents/5-6-ci-cd-integration.md)
- 5.7 [Subagents in Claude Code](phase-5-claude-code-skills-and-subagents/5-7-subagents-in-claude-code.md)

## [Phase 6: Prompts and structured output](phase-6-prompts-and-structured-output/README.md)

- 6.1 [System prompts with explicit criteria](phase-6-prompts-and-structured-output/6-1-system-prompts-with-explicit-criteria.md)
- 6.2 [Few-shot prompting](phase-6-prompts-and-structured-output/6-2-few-shot-prompting.md)
- 6.3 [Structured output with tool use](phase-6-prompts-and-structured-output/6-3-structured-output-with-tool-use.md)
- 6.4 [Validation, retry and feedback](phase-6-prompts-and-structured-output/6-4-validation-retry-and-feedback.md)
- 6.5 [Batch processing](phase-6-prompts-and-structured-output/6-5-batch-processing.md)
- 6.6 [Multi-instance and multi-pass review](phase-6-prompts-and-structured-output/6-6-multi-instance-and-multi-pass-review.md)

## [Phase 7: Context and reliability](phase-7-context-and-reliability/README.md)

- 7.1 [Context window management](phase-7-context-and-reliability/7-1-context-window-management.md)
- 7.2 [Prompt caching](phase-7-context-and-reliability/7-2-prompt-caching.md)
- 7.3 [Escalation and ambiguity](phase-7-context-and-reliability/7-3-escalation-and-ambiguity.md)
- 7.4 [Error propagation in multi-agent systems](phase-7-context-and-reliability/7-4-error-propagation-in-multi-agent-systems.md)
- 7.5 [Context degradation in long sessions](phase-7-context-and-reliability/7-5-context-degradation-in-long-sessions.md)
- 7.6 [Human review and confidence calibration](phase-7-context-and-reliability/7-6-human-review-and-confidence-calibration.md)
- 7.7 [Information provenance](phase-7-context-and-reliability/7-7-information-provenance.md)

## [Phase 8: Capstone and exam readiness](phase-8-capstone-and-exam-readiness/README.md)

