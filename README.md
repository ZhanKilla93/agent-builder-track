# Agent Builder Track

A self-study app for learning to build AI agents with Claude, from your first API call to designing multi-agent systems. The topics follow the Claude Certified Architect (Foundations) exam, CCAR-F.

### Have a Claude account? [Open the app in Claude](https://claude.ai/artifact/RvJ7Cpjej8MtTAq3z2ZjSf)

That's the full app with the tutor chatting right inside it, on your own Claude account (a free one works). When it opens, tap **Duplicate** so your progress saves to your account.

No Claude account? Use the website: [zhankilla93.github.io/agent-builder-track](https://zhankilla93.github.io/agent-builder-track/)

Free, no account needed. It's one HTML file: no install, no build step.

Built by Mostafa Khan ([@ZhanKilla93](https://github.com/ZhanKilla93)).

## What's inside

- 9 phases, 51 lessons, 153 quiz questions
- Each lesson has an explanation, key points, a real request or config example, common exam traps, and a 3-question quiz with explanations
- A concept check for every lesson and every phase, plus a final mixed check
- Hands-on practice tasks for each phase, and a capstone project
- Progress tracking that's saved in your browser

| Phase | Topic | Weeks |
| --- | --- | --- |
| 0 | Technical foundations: APIs, HTTP, JSON, keys, terminal | 1 |
| 1 | How the Claude API works | 2 |
| 2 | Tool use and the agentic loop | 3 |
| 3 | MCP (Model Context Protocol) | 4 to 5 |
| 4 | Agent architecture and orchestration | 6 to 7 |
| 5 | Claude Code, skills and subagents | 8 to 9 |
| 6 | Prompts and structured output | 10 |
| 7 | Context and reliability | 11 |
| 8 | Capstone project and exam readiness | 12 to 13 |

Pace: about an hour a day.

## Three ways to use it

### 1. In your browser (simplest)

Open [the website](https://zhankilla93.github.io/agent-builder-track/), or download this repo and double-click `index.html`.

Tap **Start concept check** on any lesson, then **Open in the Claude app**. Claude opens with your check already typed in: press send and answer its questions. It runs on your own Claude account, and a free one works. No app installed? Use the browser link under the button.

Have a paid Claude plan and a computer? Option 2 is smoother: the tutor starts by itself.

### 2. With Claude Code: one command and the tutor starts talking

[Claude Code](https://claude.com/product/claude-code) is Anthropic's app for working with Claude in a folder on your computer. It runs on your own Claude plan. **It needs a paid plan (Pro or higher); the free plan doesn't include it.**

**One-time setup**

1. Install Claude Code. On macOS or Linux, in a terminal:
   ```
   curl -fsSL https://claude.ai/install.sh | bash
   ```
   On Windows, in PowerShell:
   ```
   irm https://claude.ai/install.ps1 | iex
   ```
   Then open a new terminal window.
2. Get this repo:
   ```
   git clone https://github.com/ZhanKilla93/agent-builder-track
   cd agent-builder-track
   ```

**Every day after that**

Open a terminal in the `agent-builder-track` folder and run `./study` (on Windows: `study` in CMD, `.\study` in PowerShell). Claude Code opens and the tutor starts straight away. The first time, it asks you to sign in and to trust the folder.

| Type | What happens |
| --- | --- |
| `./study` | Tells you what to study next |
| `./study 2.3` | Concept check on lesson 2.3 starts immediately |
| `./study phase 2` | Checkpoint across a whole phase |
| `./study final` | Mixed check across everything |
| `./study ask 3.4 why does stdio serve one client?` | Ask about a lesson |
| `./study app` | Opens the study app in your browser |
| `./study update` | Gets the latest lessons |

After each check, Claude saves a short "solid / revise" note to `my-progress.md` in your copy, so `./study` knows what to suggest next. Inside Claude Code you can also type `/check 2.3`, `/ask` and `/next` directly.

Once you've run `./study` once, the **Open in Claude Code** button in the study app works too: it opens your copy with the check ready to go.

### 3. Host your own copy as a website

Fork this repo, then in your fork go to Settings, then Pages. Under "Build and deployment", choose "Deploy from a branch", pick `main` and `/ (root)`, and save. After a minute it's live at `https://<your-username>.github.io/agent-builder-track/`.

Whichever way you use it, pass a lesson's concept check without needing corrections before you mark it done.

## Your progress

Progress (lessons done, quiz scores, checklist ticks) is saved in your browser's local storage. That means:

- It stays on the device and browser you use. Your phone and laptop keep separate progress.
- Clearing your browser's site data resets it.

## Sources

The lessons are written for this track. They cover the same topics as these free resources, which each phase links to if you want to go deeper:

- [Claude Academy](https://anthropic.skilljar.com) (Anthropic's free courses)
- [Anthropic's developer docs](https://platform.claude.com/docs)
- [Model Context Protocol docs](https://modelcontextprotocol.io)
- [Building effective agents](https://www.anthropic.com/research/building-effective-agents) (Anthropic)
- [AI Cert Guides, CCAR-F track](https://claudecertificationguide.com/learn)

Not affiliated with Anthropic or AI Cert Guides. Model names and exam details are as of November 2026; check the official pages for changes. The certification exam itself is only open to staff of Claude Partner Network organisations.

## License

© 2026 Mostafa Khan. Licensed under [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/): you can share and adapt it with credit and a link back to this repo, but you can't sell it or use it commercially. See [LICENSE](LICENSE).
