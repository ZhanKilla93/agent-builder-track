# Phase 4: Agent architecture and orchestration

**Weeks 6 to 7.** Choose between a workflow and an agent, and design a multi-agent system that stays reliable.

The heaviest exam domain at 27%. Most of the skill is knowing when not to build an agent, and putting the right things in code instead of prompts.

## Lessons

- 4.1 [Workflows versus agents](4-1-workflows-versus-agents.md)
- 4.2 [Workflow patterns](4-2-workflow-patterns.md)
- 4.3 [Multi-agent orchestration](4-3-multi-agent-orchestration.md)
- 4.4 [Subagent context passing](4-4-subagent-context-passing.md)
- 4.5 [Enforcement and handoff](4-5-enforcement-and-handoff.md)
- 4.6 [Hooks](4-6-hooks.md)
- 4.7 [Task decomposition](4-7-task-decomposition.md)
- 4.8 [Session state and resumption](4-8-session-state-and-resumption.md)

## Build: orchestrator with two subagents

1. With Claude Code, build an orchestrator that sends a research task to one subagent and a writing task to another, then combines the results.
2. Pass sources from the researcher to the writer as structured data, not prose.
3. Enforce one rule in code: for example, a word limit checked before the final answer is accepted.
4. Explain to the tutor what each subagent receives and returns, and why.

## Go deeper

- [Building effective agents](https://www.anthropic.com/research/building-effective-agents) (Anthropic)
- [Building with the Claude API (agents and workflows module)](https://anthropic.skilljar.com/claude-with-the-anthropic-api) (Claude Academy)
