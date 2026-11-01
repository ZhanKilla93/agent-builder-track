// Regenerates lessons/ (Markdown, one file per lesson) from the lesson data in index.html.
// Run from the repo root:  node tools/export-lessons.js
// index.html is the source of truth. Edit lessons there, then re-run this script.

const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const start = html.indexOf("const PHASES = [];");
const end = html.indexOf("/* ---------- data helpers");
if (start < 0 || end < 0) throw new Error("Couldn't find the lesson data in index.html");
const PHASES = new Function(html.slice(start, end) + "\nreturn PHASES;")();

const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const num = id => id.replace("-", ".");
const entities = s => s.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, "&");
const inline = s => entities(s
  .replace(/<strong>(.*?)<\/strong>/g, "**$1**")
  .replace(/<em>(.*?)<\/em>/g, "*$1*")
  .replace(/<code>(.*?)<\/code>/g, "`$1`")
  .replace(/<a [^>]*href="([^"]+)"[^>]*>(.*?)<\/a>/g, "[$2]($1)")
  .replace(/<[^>]+>/g, "")
  .replace(/\s+/g, " ").trim());

function toMarkdown(body) {
  const out = [];
  const re = /<(p|ul|ol)>([\s\S]*?)<\/\1>/g;
  let m;
  while ((m = re.exec(body))) {
    if (m[1] === "p") { out.push(inline(m[2])); continue; }
    const items = [...m[2].matchAll(/<li>([\s\S]*?)<\/li>/g)].map(x => inline(x[1]));
    out.push(items.map((t, i) => (m[1] === "ol" ? `${i + 1}. ` : "- ") + t).join("\n"));
  }
  return out.join("\n\n");
}

const LETTERS = "ABCD";
const lessonsDir = path.join(root, "lessons");
fs.rmSync(lessonsDir, { recursive: true, force: true });
fs.mkdirSync(lessonsDir);

const index = ["# Lessons", "", "Generated from index.html by `node tools/export-lessons.js`. Edit index.html, not these files.", ""];

for (const p of PHASES) {
  const dir = path.join(lessonsDir, `phase-${p.n}-${slug(p.title)}`);
  fs.mkdirSync(dir);
  const ph = [`# Phase ${p.n}: ${p.title}`, "", `**${p.weeks}.** ${p.goal}`, "", p.intro, ""];
  if (p.lessons.length) {
    ph.push("## Lessons", "");
    for (const l of p.lessons) ph.push(`- ${num(l.id)} [${l.t}](${l.id}-${slug(l.t)}.md)`);
    ph.push("");
  }
  if (p.build) { ph.push(`## ${p.build.title}`, ""); p.build.steps.forEach((s, i) => ph.push(`${i + 1}. ${s}`)); ph.push(""); }
  if (p.caps) { ph.push("## Capstone checklist", ""); p.caps.forEach(c => ph.push(`- [ ] ${c[1]}`)); ph.push(""); }
  if (p.exam) { ph.push("## Exam readiness", ""); p.exam.forEach(c => ph.push(`- [ ] ${c[1]}`)); ph.push(""); }
  ph.push("## Go deeper", "");
  p.links.forEach(([t, u, s]) => ph.push(`- [${t}](${u}) (${s})`));
  fs.writeFileSync(path.join(dir, "README.md"), ph.join("\n") + "\n");

  index.push(`## [Phase ${p.n}: ${p.title}](${path.basename(dir)}/README.md)`, "");
  for (const l of p.lessons) {
    const file = `${l.id}-${slug(l.t)}.md`;
    index.push(`- ${num(l.id)} [${l.t}](${path.basename(dir)}/${file})`);
    const md = [
      `# ${num(l.id)} ${l.t}`, "",
      `Phase ${p.n}: ${p.title} · about ${l.min} min` + (l.cert ? ` · CCAR-F ${l.certLabel}` : ""), "",
      toMarkdown(l.body), "",
      "## Key points", "", ...l.keys.map(k => "- " + k), "",
      `## Example: ${l.ex.label}`, "", "```", l.ex.code, "```", "",
      "## Exam traps", "", ...l.traps.map(t => "- " + t), "",
      "## Quick check", "",
      ...l.q.flatMap(([q, opts, a], i) => [`${i + 1}. ${q}`, ...opts.map((o, j) => `   ${LETTERS[j]}. ${o}`), ""]),
      "<details><summary>Answers</summary>", "",
      ...l.q.map(([, opts, a, why], i) => `${i + 1}. **${LETTERS[a]}.** ${why}`),
      "", "</details>", ""
    ];
    fs.writeFileSync(path.join(dir, file), md.join("\n"));
  }
  index.push("");
}
fs.writeFileSync(path.join(lessonsDir, "README.md"), index.join("\n"));
console.log("Exported", PHASES.reduce((n, p) => n + p.lessons.length, 0), "lessons");
