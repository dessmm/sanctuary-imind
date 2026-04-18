<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:stitch-skills-rules -->
# Stitch Agent Skills — Installed & Active

This project has the following [Stitch Agent Skills](https://github.com/google-labs-code/stitch-skills) installed in `.agents/skills/`. These skills are active for Antigravity and all compatible coding agents.

## Installed Skills

### `stitch-design`
**Purpose:** Unified entry point for all Stitch design work.
**When to activate:** When the user says "design a page", "generate a screen", "update the design of X", or "create a new section".
**Workflow:** Enhance prompt → Synthesize design system from `.stitch/DESIGN.md` → Call `StitchMCP` tools → Download assets to `.stitch/designs/`.
**Skill file:** `.agents/skills/stitch-design/SKILL.md`

### `design-md`
**Purpose:** Analyze Stitch projects and generate/update `.stitch/DESIGN.md`.
**When to activate:** When the user says "update the design system", "generate a DESIGN.md", or "analyze this Stitch project".
**Sources:** Uses `get_screen`, `get_project`, and `list_screens` from StitchMCP, then writes to `.stitch/DESIGN.md`.
**Skill file:** `.agents/skills/design-md/SKILL.md`

### `enhance-prompt`
**Purpose:** Transform vague UI ideas into polished, Stitch-optimized prompts.
**When to activate:** When the user has a rough idea and wants to polish it before generating — "refine this prompt", "make this better for Stitch", "help me describe this page".
**Output:** Structured prompt with DESIGN SYSTEM block ready to paste into Stitch.
**Skill file:** `.agents/skills/enhance-prompt/SKILL.md`

### `stitch-loop`
**Purpose:** Autonomous multi-page website builder using a baton-passing pattern.
**When to activate:** When the user says "continue building the site", "generate the next page", or "run the stitch loop".
**Baton file:** `.stitch/next-prompt.md` — edit this to change the next page to be generated.
**Site roadmap:** `.stitch/SITE.md` — tracks completed and pending pages.
**Skill file:** `.agents/skills/stitch-loop/SKILL.md`

### `react:components` (react-components)
**Purpose:** Convert Stitch-generated HTML designs into modular Next.js/React components with TypeScript interfaces, data decoupling, and hook-based logic isolation.
**When to activate:** After downloading a Stitch design, to convert `.stitch/designs/{page}.html` into production-ready React components.
**Validation:** Runs AST validation and checks against `resources/architecture-checklist.md`.
**Skill file:** `.agents/skills/react-components/SKILL.md`

## Project Stitch Directory

```
.stitch/
├── metadata.json     # Stitch project & screen IDs (persist this!)
├── DESIGN.md         # Visual design system — source of truth for all prompt generation
├── SITE.md           # Site vision, sitemap, roadmap
├── next-prompt.md    # The baton — current task for stitch-loop
└── designs/          # Staging area for downloaded Stitch HTML/PNG output
```

## Key Rules for AI Agents

1. **Always read `.stitch/DESIGN.md`** before generating any new screens — include Section 6 verbatim in every Stitch prompt.
2. **Never recreate pages** that are marked `[x]` in `.stitch/SITE.md`.
3. **Always update `.stitch/next-prompt.md`** with the next task before finishing a stitch-loop iteration.
4. **Components go in `components/`**, not inline in page files.
5. **Data goes in a separate file** (e.g., `data/mockData.ts`), not hardcoded in components.
6. **This project uses Tailwind v4** — design tokens are in `app/globals.css` under `@theme {}`, not in `tailwind.config.ts`.
<!-- END:stitch-skills-rules -->
