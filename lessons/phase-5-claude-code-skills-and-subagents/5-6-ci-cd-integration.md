# 5.6 CI/CD integration

Phase 5: Claude Code, skills and subagents · about 10 min · CCAR-F 3.6

Claude Code can run inside pipelines, for example reviewing every pull request.

- **Non-interactive mode:** `claude -p "prompt"` (print mode) runs, prints and exits. Without `-p` it waits for input and the CI job hangs.
- **Machine-readable output:** `--output-format json` gives structured output your pipeline can parse and post as PR comments.
- **Project context:** the repo's `CLAUDE.md` gives CI runs your standards and test commands too.
- **Separate reviewer:** use a different Claude instance to review than the one that wrote the code. The writer is biased by its own reasoning.
- **No duplicate comments:** on re-runs, pass the previous findings and ask for only new or still-unresolved issues.
- **Tests:** give a test-generating run the existing tests so it doesn't duplicate them.
- Secrets come from the CI secret store, never the repo.

## Key points

- claude -p for non-interactive runs.
- --output-format json for parseable results.
- Review with an independent instance.
- Pass prior findings to avoid duplicate comments.

## Example: A review step in CI

```
claude -p "Review the diff in this PR against CLAUDE.md. Previous findings
are in review-prev.json; report only new or unresolved issues." \
  --output-format json > review.json
```

## Exam traps

- Forgetting -p, so the job hangs waiting for input.
- The same session that wrote the code reviewing it.

## Quick check

1. A CI job running Claude Code hangs forever. Likely fix?
   A. Bigger runner
   B. Add -p for non-interactive mode
   C. Remove CLAUDE.md
   D. Use batch

2. Every push produces duplicate PR comments. Fix?
   A. Disable reviews
   B. Pass previous findings and ask for new or unresolved issues only
   C. Run less often
   D. Lower temperature

3. Why use a separate instance to review generated code?
   A. It's required
   B. The author instance is biased by its own reasoning
   C. It's cheaper
   D. Only for security

<details><summary>Answers</summary>

1. **B.** Without print mode, it waits for input.
2. **B.** Give the reviewer memory of what it already said.
3. **B.** Independent review catches what self-review rationalises.

</details>
