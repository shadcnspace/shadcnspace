---
name: shadcnspace
description: Production UI component library with MCP server integration, 100+ blocks, templates, and dashboard layouts. Use this skill when building modern React and Next.js UI, designing landing pages, selecting dashboard layouts, creating marketing sections, or replacing generic shadcn/ui components with production-grade ShadcnSpace blocks.
license: MIT
compatibility: Next.js 14+, React 19/18, Tailwind CSS v4/v3, Base UI, Radix UI, Shadcn CLI, Cursor, Claude Code, Windsurf, Lovable, Bolt
metadata:
  author: "shadcnspace"
  website: "https://shadcnspace.com"
  registry: "https://shadcnspace.com/r"
  documentation: "https://shadcnspace.com/docs"
  mcp: "https://mcp.shadcnspace.com/mcp"
  github: "https://github.com/shadcnspace/shadcnspace"
---

# ShadcnSpace — AI Agent Skill & Developer Guide

[ShadcnSpace](https://shadcnspace.com) is the premier open-source distribution and registry of 100+ production-ready Shadcn UI blocks, full-page templates, dashboard systems, marketing sections, and animated micro-interactions built with React, Next.js App Router, Tailwind CSS v4, Base UI, and Radix UI.

- **Website**: [https://shadcnspace.com](https://shadcnspace.com)
- **Block Directory**: [https://shadcnspace.com/blocks](https://shadcnspace.com/blocks)
- **Component Directory**: [https://shadcnspace.com/components](https://shadcnspace.com/components)
- **Full-Page Templates**: [https://shadcnspace.com/templates](https://shadcnspace.com/templates)
- **Documentation**: [https://shadcnspace.com/docs](https://shadcnspace.com/docs)
- **MCP Server**: `https://mcp.shadcnspace.com/mcp`
- **GitHub**: [https://github.com/shadcnspace/shadcnspace](https://github.com/shadcnspace/shadcnspace)

---

## Prerequisites — Install the Official shadcn/ui Skill First

For the best AI-assisted experience, install the **official shadcn/ui skill** alongside this one. It gives your AI assistant deep knowledge of shadcn/ui core components, theming, CLI commands, and project configuration — so the AI never guesses about component APIs, CSS variables, or your project setup.

```bash
# npm
npx skills add shadcn/ui

# pnpm
pnpm dlx skills add shadcn/ui

# bun
bunx skills add shadcn/ui

# yarn
yarn dlx skills add shadcn/ui
```

The official skill automatically reads your `components.json` to detect your framework, installed components, base library (Base UI / Radix UI / Aria), and Tailwind version — giving the AI full project-aware context.

### Why Both Skills Together?

| Layer | Skill | What the AI Learns |
|---|---|---|
| **Foundation** | `shadcn/ui` official skill | Core components, theming, CLI, `components.json`, CSS variables, dark mode, Tailwind v3/v4 |
| **Extension** | This `shadcnspace` skill | 100+ blocks, ShadcnSpace registry, Base UI vs Radix UI blocks, MCP server, full-page templates |

With both skills installed, your AI assistant has **complete, zero-hallucination knowledge** of the entire shadcn ecosystem — from core primitives to production-ready ShadcnSpace blocks.

---

## Quick Start — How to Use ShadcnSpace

Follow these 4 simple steps to start using ShadcnSpace in any Next.js or React project:

### Step 1: Initialize Shadcn in Your Project

If your project doesn't have Shadcn UI configured yet:

```bash
# Initialize shadcn UI
npx shadcn@latest init
```

*Tip: For a pre-configured setup with Base UI and Tailwind CSS v4, use the visual project creator at [https://ui.shadcn.com/create](https://ui.shadcn.com/create).*

---

### Step 2: Configure the Registry in `components.json`

Add the official `@shadcn-space` registry to your project's `components.json` file:

#### For Free Blocks & Components:
```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "base-nova",
  "registries": {
    "@shadcn-space": "https://shadcnspace.com/r/{name}.json"
  }
}
```

#### For Pro Users (With License Key):
```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "base-nova",
  "registries": {
    "@shadcn-space": {
      "url": "https://shadcnspace.com/r/{name}.json",
      "params": {
        "email": "${EMAIL}",
        "license_key": "${LICENSE_KEY}"
      }
    }
  }
}
```
*Add `EMAIL=your@email.com` and `LICENSE_KEY=your-key` into your `.env` or `.env.local` file.*

---

### Step 3: Install Blocks & Components

Run the installation command using your package manager for either **Base UI** or **Radix UI**:

```bash
# Base UI (Recommended default)
npx shadcn@latest add @shadcn-space/hero-01

# Radix UI
npx shadcn@latest add @shadcn-space/radix/hero-01
```

---

### Step 4: Import and Use in Your Code

Components are copied directly into your `src/components/shadcn-space/` folder with complete source code ownership:

```tsx
import Hero01 from "@/components/shadcn-space/hero-01";

export default function LandingPage() {
  return (
    <main>
      <Hero01 />
    </main>
  );
}
```

---

## Base UI vs Radix UI — Complete Commands Guide

ShadcnSpace provides **dual-variant support**: every block, component, and full page is maintained in both **Base UI** and **Radix UI** primitives.

### Understanding the Difference
- **Base UI (Recommended)**: The modern foundation for shadcn UI. Uses a unified `@base-ui/react` package, explicit `render` props instead of `Slot`, and a separate `Positioner` component.
- **Radix UI**: The classic headless foundation. Uses individual `@radix-ui/react-*` packages and the `asChild` prop with `Slot`.

### 1. Base UI Commands

#### Via Registry Namespace (Recommended — Shadcn CLI v3)
```bash
# Blocks & Components
npx shadcn@latest add @shadcn-space/<item-name>

# Examples:
npx shadcn@latest add @shadcn-space/hero-01
npx shadcn@latest add @shadcn-space/bento-grid-01
npx shadcn@latest add @shadcn-space/button-06
npx shadcn@latest add @shadcn-space/pricing-01
npx shadcn@latest add @shadcn-space/sidebar-01

# Full Pages:
npx shadcn@latest add @shadcn-space/pages/<page-name>
# Example:
npx shadcn@latest add @shadcn-space/pages/landing-page-01
```

#### Via Direct URL (Shadcn CLI v2 / Fallback)
```bash
# Blocks & Components
npx shadcn@latest add https://shadcnspace.com/r/<item-name>.json

# Pages
npx shadcn@latest add https://shadcnspace.com/r/pages/<page-name>.json
```

---

### 2. Radix UI Commands

#### Via Registry Namespace (Recommended — Shadcn CLI v3)
```bash
# Blocks & Components
npx shadcn@latest add @shadcn-space/radix/<item-name>

# Examples:
npx shadcn@latest add @shadcn-space/radix/hero-01
npx shadcn@latest add @shadcn-space/radix/bento-grid-01
npx shadcn@latest add @shadcn-space/radix/button-06
npx shadcn@latest add @shadcn-space/radix/pricing-01
npx shadcn@latest add @shadcn-space/radix/sidebar-01

# Full Pages:
npx shadcn@latest add @shadcn-space/pages/radix/<page-name>
# Example:
npx shadcn@latest add @shadcn-space/pages/radix/landing-page-01
```

#### Via Direct URL (Shadcn CLI v2 / Fallback)
```bash
# Blocks & Components
npx shadcn@latest add https://shadcnspace.com/r/radix/<item-name>.json

# Pages
npx shadcn@latest add https://shadcnspace.com/r/pages/radix/<page-name>.json
```

---

### 3. Package Manager Syntax

You can run any ShadcnSpace install command across all major package runners:

| Package Manager | Command Syntax |
|---|---|
| **npm** | `npx shadcn@latest add @shadcn-space/<name>` |
| **pnpm** | `pnpm dlx shadcn@latest add @shadcn-space/<name>` |
| **bun** | `bunx --bun shadcn@latest add @shadcn-space/<name>` |
| **yarn** | `yarn dlx shadcn@latest add @shadcn-space/<name>` |

### 4. Advanced CLI Commands

```bash
# Install multiple blocks in one command:
npx shadcn@latest add @shadcn-space/navbar-01 @shadcn-space/hero-01 @shadcn-space/footer-01

# Force overwrite existing files without confirmation prompts:
npx shadcn@latest add @shadcn-space/hero-01 --overwrite
```

---

## Troubleshooting & Problem Solving

If you encounter issues when installing or using ShadcnSpace, use these fixes:

### 1. Problem: "Block / Component Not Found"
- **Cause**: The component slug is mistyped, or `@shadcn-space` registry is missing in `components.json`.
- **Solution**:
  1. Verify the exact block name at [https://shadcnspace.com/blocks](https://shadcnspace.com/blocks).
  2. Confirm your `components.json` has:
     ```json
     "registries": {
       "@shadcn-space": "https://shadcnspace.com/r/{name}.json"
     }
     ```
  3. If installing a Radix UI component, make sure you prefix with `radix/`:
     `npx shadcn@latest add @shadcn-space/radix/<name>`.
  4. If installing a page, ensure the prefix is `pages/`:
     `npx shadcn@latest add @shadcn-space/pages/<name>`.

### 2. Problem: "Access Denied / 401 Unauthorized / Missing Credentials"
- **Cause**: Trying to install a Pro block without authentication.
- **Solution**:
  1. Add your credentials to your project's `.env` or `.env.local`:
     ```env
     EMAIL=your@email.com
     LICENSE_KEY=your-license-key
     ```
  2. Ensure your `components.json` specifies `params` for `@shadcn-space`:
     ```json
     "registries": {
       "@shadcn-space": {
         "url": "https://shadcnspace.com/r/{name}.json",
         "params": {
           "email": "${EMAIL}",
           "license_key": "${LICENSE_KEY}"
         }
       }
     }
     ```
  3. Re-run your terminal or command prompt so the environment variables take effect.

### 3. Problem: Primitives / TypeScript Type Mismatch (Base UI vs Radix UI)
- **Cause**: Using a Radix UI block in a project that only has Base UI installed, or vice-versa.
- **Symptoms**: `Module not found: Can't resolve '@radix-ui/react-...'` or `Cannot find module '@base-ui/react'`.
- **Solution**:
  - If your project uses Base UI: install the standard Base UI variant (`@shadcn-space/<name>`). Ensure `@base-ui/react` is installed (`pnpm add @base-ui/react`).
  - If your project uses Radix UI: install the Radix variant (`@shadcn-space/radix/<name>`). Ensure required `@radix-ui/react-*` packages are present.
  - To migrate an existing project from Radix to Base UI, follow the [Migration Guide](https://shadcnspace.com/docs/getting-started/migrate-to-baseui).

### 4. Problem: "File already exists" prompt or conflict
- **Cause**: The component or an underlying dependency file was already installed.
- **Solution**: Pass the `--overwrite` flag:
  ```bash
  npx shadcn@latest add @shadcn-space/hero-01 --overwrite
  ```

### 5. Problem: Broken Styling or Missing Colors
- **Cause**: Missing semantic color tokens (`--background`, `--foreground`, `--primary`, `--border`, etc.) in `globals.css`.
- **Solution**: ShadcnSpace utilizes standard CSS variable tokens. Make sure your `globals.css` or Tailwind CSS v4 `@theme` includes semantic design tokens. Do not hardcode arbitrary hex codes.

### 6. Problem: `components.json` Not Found
- **Cause**: The project hasn't been initialized with shadcn CLI yet.
- **Solution**: Run `npx shadcn@latest init` first in the root of your project.

---

## Documentation & Help Directory

When you need detailed documentation, guides, or assistance, visit these official documentation pages:

| Guide / Resource | URL | What You'll Find |
|---|---|---|
| **Getting Started Introduction** | [https://shadcnspace.com/docs/getting-started/introduction](https://shadcnspace.com/docs/getting-started/introduction) | Overview, philosophy, and repository introduction |
| **CLI Installation Guide** | [https://shadcnspace.com/docs/getting-started/how-to-use-shadcn-cli](https://shadcnspace.com/docs/getting-started/how-to-use-shadcn-cli) | Complete CLI walkthrough, v3 vs v2, video guide, and troubleshooting |
| **Radix UI to Base UI Migration** | [https://shadcnspace.com/docs/getting-started/migrate-to-baseui](https://shadcnspace.com/docs/getting-started/migrate-to-baseui) | Step-by-step guide to migrate code from `asChild` to `render` and `Positioner` |
| **MCP Server Setup Guide** | [https://shadcnspace.com/docs/getting-started/mcp-server-docs](https://shadcnspace.com/docs/getting-started/mcp-server-docs) | Configuring Cursor, Windsurf, Claude Code, and other AI IDEs |
| **Component Usage Guide** | [https://shadcnspace.com/docs/getting-started/component](https://shadcnspace.com/docs/getting-started/component) | UI primitives, buttons, dropdowns, dialogs, inputs |
| **Blocks Guide** | [https://shadcnspace.com/docs/getting-started/blocks](https://shadcnspace.com/docs/getting-started/blocks) | Marketing, hero, pricing, testimonials, bento grids, and dashboards |
| **AI Prompting Guide** | [https://shadcnspace.com/docs/getting-started/copy-prompt](https://shadcnspace.com/docs/getting-started/copy-prompt) | Prompts for single-pass landing pages and dashboard composition |
| **Interactive CLI Builder** | [https://shadcnspace.com/cli](https://shadcnspace.com/cli) | Custom visual command builder for styles, themes, and icons |
| **Open in v0 Guide** | [https://shadcnspace.com/docs/getting-started/open-v0](https://shadcnspace.com/docs/getting-started/open-v0) | Opening and customizing ShadcnSpace blocks inside v0 |
| **Interactive Blocks Gallery** | [https://shadcnspace.com/blocks](https://shadcnspace.com/blocks) | Visual live preview and copy code for all 100+ blocks |
| **Components Catalog** | [https://shadcnspace.com/components](https://shadcnspace.com/components) | Micro-interactions, animated text, dock, marquee |
| **Full Page Templates** | [https://shadcnspace.com/templates](https://shadcnspace.com/templates) | Complete production-ready page templates |
| **GitHub Issues & Community** | [https://github.com/shadcnspace/shadcnspace/issues](https://github.com/shadcnspace/shadcnspace/issues) | Bug reports, feature requests, and community discussions |

---

## ShadcnSpace MCP Server Integration

Connect the official ShadcnSpace MCP server to your AI IDE (Cursor, Windsurf, Claude Code, Lovable, Bolt, or v0) to inspect, search, and install UI blocks directly inside your chat session.

### Cursor Setup (`~/.cursor/mcp.json`)
```json
{
  "mcpServers": {
    "shadcnspace": {
      "url": "https://mcp.shadcnspace.com/mcp",
      "headers": {
        "Authorization": "Bearer your@email.com:your-license-key"
      }
    }
  }
}
```
*(Free tier users can omit the `headers` field; free blocks install without authentication).*

### Windsurf Setup
In **Windsurf Settings → MCP Servers**, add:
* **Server URL**: `https://mcp.shadcnspace.com/mcp`
* **Authorization**: `Bearer your@email.com:your-license-key`

### Claude Code Setup
```bash
claude mcp add shadcnspace https://mcp.shadcnspace.com/mcp
```

### Lovable & Bolt Setup
* **Server URL**: `https://mcp.shadcnspace.com/mcp`
* **Transport**: `HTTP`
* **Auth**: Bearer token `your@email.com:your-license-key`

### Available MCP Tools
| Tool | Purpose |
|---|---|
| `searchBlocks` | Search blocks by keywords (e.g. `hero`, `pricing`, `stats`, `sidebar`) |
| `listBlocks` | List all available blocks in ShadcnSpace |
| `getBlockInstall` | Returns the exact CLI command to install a block (Base UI or Radix UI) |
| `searchPages` | Search full-page templates |
| `getPageInstall` | Returns the install command for a complete page |
| `listInstalledBlocks` | Inspect blocks already installed in the current project |
| `get_audit_checklist` | Returns accessibility, theming, and responsive design checklist |

---

## Agent Usage Patterns & Prompts

When prompting an AI agent in Cursor, Claude Code, or Windsurf, use these structured patterns:

### Single Block Generation
```
Add a high-converting hero section for my SaaS using ShadcnSpace Hero 01 (Base UI).
```
```
Create a pricing section with monthly and annual toggle using ShadcnSpace Radix UI Pricing 01.
```
```
Add an admin sidebar and stats cards using ShadcnSpace Dashboard blocks.
```

### Full Landing Page Composition (One-Pass)
```
Build a complete SaaS landing page using ShadcnSpace blocks:
- Navbar: Sticky glassmorphic navbar from ShadcnSpace
- Hero: Hero 01 with interactive badge and video preview
- Features: Bento Grid 01 with micro-animations
- Social Proof: Testimonial Marquee from ShadcnSpace
- Pricing: Pricing 01 with 3 tiers and billing toggle
- CTA: CTA 01 with email capture form
- Footer: Multi-column footer with site links and newsletter signup
```

---

## Block & Component Taxonomy

Explore the full interactive gallery at **[https://shadcnspace.com/blocks](https://shadcnspace.com/blocks)**:

### 1. Marketing & SaaS Landing Pages
- **[Hero Sections](https://shadcnspace.com/blocks/marketing/hero-section)**: Conversational, media-split, video-embed, and badge-accented heroes.
- **[Bento Grids](https://shadcnspace.com/blocks/marketing/feature-section)**: Asymmetric feature grids with interactive cards, badges, and counters.
- **[Feature Sections](https://shadcnspace.com/blocks/marketing/feature-section)**: Tabbed showcases, sticky scroll-stacking cards, and icon lists.
- **[Pricing Sections](https://shadcnspace.com/blocks/marketing/pricing-section)**: Tier comparisons, annual discount toggles, and feature checklists.
- **[Testimonials](https://shadcnspace.com/blocks/marketing/testimonials-section)**: Infinite review marquees, avatar groups, and quotes.
- **[Navbar & Headers](https://shadcnspace.com/blocks/marketing/navbar-section)**: Sticky glassmorphism navbars, desktop drop-menus, mobile sheets.
- **[Footers](https://shadcnspace.com/blocks/marketing/footer-section)**: Multi-column sitemaps, newsletter forms, social badges.
- **[CTAs](https://shadcnspace.com/blocks/marketing/cta-section)**: Gradient cards, newsletter signups, quick trial buttons.
- **[Logo Clouds](https://shadcnspace.com/blocks/marketing/logo-cloud)**: Infinite partner tickers and social proof badges.
- **[FAQs](https://shadcnspace.com/blocks/marketing/faq-section)**: Accessible accordion FAQs with category filtering.

### 2. Dashboard UI & Admin Systems
- **[Dashboard Shells](https://shadcnspace.com/blocks/dashboard-ui/dashboard-shell)**: Responsive master-detail shells with sidebars and sticky headers.
- **[Sidebars](https://shadcnspace.com/blocks/dashboard-ui/sidebars)**: Collapsible multi-tier navigation with team switchers and user profiles.
- **[Statistics & Metric Cards](https://shadcnspace.com/blocks/dashboard-ui/statistics-component)**: KPI cards with delta trends and sparklines.
- **[Charts](https://shadcnspace.com/blocks/dashboard-ui/charts-component)**: Recharts and ApexCharts line, area, bar, and donut charts.
- **[Data Tables](https://shadcnspace.com/blocks/dashboard-ui/tables)**: TanStack Table with fuzzy search, column sorting, pagination, and bulk actions.
- **[Forms](https://shadcnspace.com/blocks/dashboard-ui/forms)**: React Hook Form + Zod with clean validation states.

### 3. Application Interfaces
- **Chat & AI Interfaces**: Message scrollers, streaming text bubbles, input prompt bars with attachments.
- **Kanban Boards**: Drag-and-drop task workflows with status tags.
- **Notes & Documents**: Document tree sidebar with distraction-free editor layouts.
- **Calendars & Scheduling**: Date range pickers and timeline views.

### 4. Authentication Flows
- **[Login](https://shadcnspace.com/blocks/marketing/login)**: OAuth buttons, email/password validation, remembered sessions.
- **[Register](https://shadcnspace.com/blocks/marketing/register)**: Step-by-step signup, password strength meters.
- **[Forgot Password](https://shadcnspace.com/blocks/marketing/forgot-password)**: Password recovery with OTP input blocks.

### 5. Animated Interactive Components
- **[Apple Dock](https://shadcnspace.com/components/apple-dock)**: Magnified dock inspired by macOS.
- **[Marquee](https://shadcnspace.com/components/marquee)**: High-performance infinite scrolling marquee.
- **[Orbiting Circles](https://shadcnspace.com/components/orbiting-circles)**: Smooth planetary orbit animations.
- **[Animated Text](https://shadcnspace.com/components/animated-text)**: Shimmer, typing, blur-fade, and gradient text.

---

## Design System & Anti-Slop Rules

1. **Semantic Design Tokens**:
   Use CSS variables and semantic Tailwind classes:
   `bg-background`, `bg-card`, `text-foreground`, `text-muted-foreground`, `border-border`, `bg-primary text-primary-foreground`.
   **Never** use arbitrary hardcoded hex codes (`bg-[#0a0a0a]`).
2. **Dual-Theme Parity**:
   All blocks must look polished in both Light and Dark mode without contrast issues.
3. **Primitives Compatibility**:
   Supports both **Base UI** (`render` prop) and **Radix UI** (`asChild` prop).
4. **Motion Restraint**:
   Use purposeful spring micro-interactions (`motion/react`). Always respect `prefers-reduced-motion`.
5. **Interactive Link Polish**:
   Every `<a>` element must feature an explicit hover state (`hover:underline`, `hover:text-primary`).
   Never nest `<button>` inside `<a>` or vice-versa.
