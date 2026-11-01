# Phase 7: Context and reliability

**Week 11.** Keep long-running and multi-agent systems accurate when context fills up, sources conflict or a step fails. CCAR-F Domain 5 (15%).

Production agents fail less from bad models than from bad information flow: lost details, silent errors, unsourced claims. This phase is about keeping information intact.

## Lessons

- 7.1 [Context window management](7-1-context-window-management.md)
- 7.2 [Prompt caching](7-2-prompt-caching.md)
- 7.3 [Escalation and ambiguity](7-3-escalation-and-ambiguity.md)
- 7.4 [Error propagation in multi-agent systems](7-4-error-propagation-in-multi-agent-systems.md)
- 7.5 [Context degradation in long sessions](7-5-context-degradation-in-long-sessions.md)
- 7.6 [Human review and confidence calibration](7-6-human-review-and-confidence-calibration.md)
- 7.7 [Information provenance](7-7-information-provenance.md)

## Practice

1. Add a case facts block to your Phase 4 orchestrator that's carried into every call.
2. Make a subagent fail on purpose. Return a structured error and have the coordinator note the gap instead of inventing an answer.
3. Add one escalation rule with explicit criteria.

## Go deeper

- [Building with the Claude API (caching and RAG modules)](https://anthropic.skilljar.com/claude-with-the-anthropic-api) (Claude Academy)
