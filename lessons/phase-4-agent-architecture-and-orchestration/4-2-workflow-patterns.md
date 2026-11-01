# 4.2 Workflow patterns

Phase 4: Agent architecture and orchestration · about 12 min

Five patterns cover most systems.

- **Prompt chaining:** a fixed sequence where each step's output feeds the next. Add a *gate* between steps that checks the output in code before continuing.
- **Routing:** classify the input, then send it to a specialised handler. Refund versus technical question. Or easy versus hard, with a cheap model for easy ones.
- **Parallelisation:** *sectioning* splits independent subtasks and runs them at once; *voting* runs the same task several times and compares.
- **Orchestrator-workers:** a central model breaks the task down at runtime and delegates to workers, then combines. Subtasks aren't known in advance. This is the bridge to multi-agent systems.
- **Evaluator-optimiser:** one model generates, another critiques against clear criteria, and they loop until the output passes.

Patterns combine. A restaurant social agent could route by post type, chain draft then translate, and run an evaluator on brand voice.

## Key points

- Chaining: fixed sequence with gates.
- Routing: classify then hand off.
- Parallelisation: sectioning or voting.
- Orchestrator-workers: runtime decomposition. Evaluator-optimiser: generate, critique, repeat.

## Example: Patterns combined

```
request: "post about Friday's live music"
  route    -> event post (not menu or promo)
  chain    -> draft caption -> GATE: under 150 chars? -> Arabic version
  evaluate -> critic checks brand rules; fails "no exclamation marks" -> revise
  output   -> both captions, ready to schedule
```

## Exam traps

- Calling any multi-step system orchestrator-workers. If the steps are fixed, it's chaining.
- Evaluator loops without clear criteria, so the critic and generator never converge.

## Quick check

1. Classify a ticket, then send it to a billing prompt or a tech prompt.
   A. Chaining
   B. Routing
   C. Voting
   D. Evaluator-optimiser

2. Translate a text, have a second instance critique it against a glossary, and revise until it passes.
   A. Routing
   B. Sectioning
   C. Evaluator-optimiser
   D. Orchestrator-workers

3. Subtasks can't be known in advance and depend on each input.
   A. Prompt chaining
   B. Orchestrator-workers
   C. Routing
   D. Voting

<details><summary>Answers</summary>

1. **B.** Classification followed by specialised handling is routing.
2. **C.** Generate, critique, revise is evaluator-optimiser.
3. **B.** The orchestrator decides the breakdown at runtime.

</details>
