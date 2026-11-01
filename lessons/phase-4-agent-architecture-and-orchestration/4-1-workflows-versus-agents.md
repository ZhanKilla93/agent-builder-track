# 4.1 Workflows versus agents

Phase 4: Agent architecture and orchestration · about 10 min

Two ways to build with LLMs:

- **Workflow:** you define the steps in code. The model handles specific steps, like drafting or classifying. Predictable and cheaper.
- **Agent:** the model decides the steps and which tools to use, in a loop, based on what it finds. Flexible, but costs more, takes longer, and fails in less predictable ways.

The building block of both is the **augmented LLM**: a model with tools, retrieval and memory.

Start with the simplest thing that works. Often a single well-prompted call with the right context is enough. Add a workflow when you can name the steps. Reach for an agent only when the steps can't be known in advance (open-ended research, debugging an unfamiliar system) and the value of the task justifies the cost.

The test question: **can I write the steps down before I start?** If yes, it's a workflow.

## Key points

- Workflow: your code sets the steps. Agent: the model sets the steps.
- Start simple; add complexity only when it measurably helps.
- Agents trade predictability and cost for flexibility.
- If you can list the steps up front, build a workflow.

## Example: Same business, different tasks

```
Weekly post pipeline for Harbour Kitchen:
  draft caption -> check brand rules -> translate -> schedule
  => WORKFLOW (steps known)

"Why did Olive Ember's weekday orders drop 18% since September?"
  => AGENT (where to look depends on what it finds)
```

## Exam traps

- Building an agent because it sounds more advanced.
- Forcing a rigid workflow onto genuinely open-ended investigation.

## Quick check

1. Draft caption, check brand rules, translate, schedule. Workflow or agent?
   A. Agent
   B. Workflow
   C. Neither
   D. Both at once

2. Investigate why sales dropped across messy, unfamiliar data. Workflow or agent?
   A. Workflow
   B. Agent
   C. Single prompt
   D. Batch job

3. Why not use agents for everything?
   A. They can't use tools
   B. Higher cost and latency, and less predictable behaviour
   C. They're deprecated
   D. They need MCP

<details><summary>Answers</summary>

1. **B.** The steps are fixed and known.
2. **B.** The path depends on what each step reveals.
3. **B.** Autonomy has a price; pay it only when the task needs it.

</details>
