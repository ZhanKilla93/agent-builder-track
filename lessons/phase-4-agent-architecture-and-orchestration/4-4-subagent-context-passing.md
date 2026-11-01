# 4.4 Subagent context passing

Phase 4: Agent architecture and orchestration · about 12 min · CCAR-F 1.3

**Subagents start with a fresh context.** They don't inherit the coordinator's conversation. Everything they need must be in the prompt you send them:

- the goal, and what "done" looks like
- constraints and quality criteria
- relevant earlier findings, **with their sources**
- the output format to return

Pass structured data, not vague summaries. If the researcher found five claims with URLs and dates, pass those five claims with their URLs and dates to the writer. Summarising them into a paragraph drops the attribution, and the writer will produce unsourced claims.

Ask subagents to return **concise, structured results**, not their full transcripts. A subagent that hands back 20,000 tokens of working notes bloats the coordinator's context.

For independent subtasks, the coordinator can launch several subagents **in the same turn** (several calls in one response), so they run in parallel.

In the Claude Agent SDK, each subagent is defined with a description, its own prompt and its allowed tools, and the coordinator needs permission to use the subagent-launching tool. Write subagent prompts that state goals and criteria rather than micromanaging steps, so they can adapt to what they find.

## Key points

- Subagents don't inherit context; pass everything explicitly.
- Pass findings as structured data with sources intact.
- Ask for concise structured returns, not transcripts.
- Independent subtasks can run in parallel from one coordinator turn.

## Example: A good handoff to the writer subagent

```
Goal: 300-word brief on AI in restaurant marketing for a client pitch.
Done when: every claim cites one of the sources below.
Findings:
  - claim: "..."  source: https://...  published: 2026-08-14
  - claim: "..."  source: https://...  published: 2026-05-02
Return JSON: { "brief": string, "citations": [{ "claim": string, "source": string }] }
```

## Exam traps

- Assuming the subagent can see what the coordinator saw.
- Passing prose summaries that strip out sources and dates.

## Quick check

1. The writer subagent produces claims without sources, though the search subagent found them. Cause?
   A. The writer is broken
   B. The coordinator didn't pass the source metadata along
   C. Search failed
   D. Sources were too long

2. A subagent returns a 20,000-token transcript. The problem?
   A. None
   B. It bloats the coordinator's context; ask for a structured summary
   C. It's too short
   D. It's always required

3. Three independent searches should finish faster. How?
   A. Run them one after another
   B. Launch three subagents in the same coordinator turn
   C. Use one subagent three times in a row
   D. Use batch processing

<details><summary>Answers</summary>

1. **B.** Subagents only know what you give them.
2. **B.** Return what the coordinator needs, not the working notes.
3. **B.** Multiple calls in one response run in parallel.

</details>
