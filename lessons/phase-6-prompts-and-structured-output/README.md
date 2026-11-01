# Phase 6: Prompts and structured output

**Week 10.** Write prompts that produce consistent, machine-readable output, and catch the cases where they don't. CCAR-F Domain 4 (20%).

Agents depend on output your code can trust. This phase is about explicit criteria, examples, schemas, and the validation loop around them.

## Lessons

- 6.1 [System prompts with explicit criteria](6-1-system-prompts-with-explicit-criteria.md)
- 6.2 [Few-shot prompting](6-2-few-shot-prompting.md)
- 6.3 [Structured output with tool use](6-3-structured-output-with-tool-use.md)
- 6.4 [Validation, retry and feedback](6-4-validation-retry-and-feedback.md)
- 6.5 [Batch processing](6-5-batch-processing.md)
- 6.6 [Multi-instance and multi-pass review](6-6-multi-instance-and-multi-pass-review.md)

## Practice

1. Take a prompt you already use at work. Rewrite it with explicit criteria and a forced JSON output tool.
2. Test it on 10 varied inputs, including 3 awkward ones (missing info, two items in one, unclear wording).
3. Add code validation and one retry with the specific error. Bring the before, after and failures to the tutor.

## Go deeper

- [Prompt engineering overview](https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview) (Anthropic docs)
- [Building with the Claude API (prompt evaluation module)](https://anthropic.skilljar.com/claude-with-the-anthropic-api) (Claude Academy)
