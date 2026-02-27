# AGENTS.md — Coding Agent Instructions

## Project Overview

Next.js 16 App Router site (React 19, TypeScript strict) for a Canadian reverse mortgage broker.
Bilingual (FR/EN) with custom i18n, styled with Tailwind CSS v4 + shadcn/ui (new-york style).
Deployed on Vercel. Package manager: **pnpm**.

---

## Build / Lint / Format Commands

| Command             | Description                              |
| ------------------- | ---------------------------------------- |
| `pnpm dev`          | Start dev server                         |
| `pnpm build`        | Production build (Next.js)               |
| `pnpm start`        | Serve production build                   |
| `pnpm lint`         | ESLint (flat config, v9) — whole project |
| `pnpm lint:fix`     | ESLint with auto-fix                     |
| `pnpm format`       | Prettier — write all files               |
| `pnpm format:check` | Prettier — check only (no write)         |

### Tests

There is **no test framework** configured. No jest, vitest, playwright, or cypress.
No test files exist in the repo. If you add tests, prefer **vitest** (aligns with the Vite-based tooling in Next.js).

### Git Hooks (Husky)

- **pre-commit:** `pnpm lint-staged` — runs `eslint --fix` + `prettier --write` on staged `.{js,jsx,ts,tsx}` files and `prettier --write` on `.{json,css,md,mdx}`.
- **pre-push:** `pnpm lint && pnpm format && pnpm build` — full check before pushing.

---

## Code Style Guidelines

### Formatting (Prettier)

- Double quotes (`"`) — never single quotes
- Semicolons always
- Trailing commas: `es5`
- 2-space indentation, no tabs
- 80-character print width

### TypeScript

- **Strict mode** is enabled (`strict: true` in tsconfig)
- Use `interface` for component props, `type` for unions and utility types
- Use `type` imports: `import type { Metadata } from "next"`
- Prefix unused variables with `_` (ESLint warns on unused vars except `^_` pattern)
- `@typescript-eslint/no-explicit-any` is set to **warn** — avoid `any`, use proper types
- `next.config.mjs` has `ignoreBuildErrors: true` — do NOT rely on this; keep code type-safe

### Path Aliases

- `@/*` maps to the project root — use it for all internal imports
- Example: `import { cn } from "@/lib/utils"`

### Import Order

1. External packages (react, next, third-party)
2. Internal modules (`@/lib/`, `@/hooks/`, `@/components/`)
3. Relative imports (rare — prefer `@/` alias)

### File Naming

- **kebab-case** for all files: `hero-section.tsx`, `use-mobile.ts`, `contact-form.tsx`
- Hook files: `use-<name>.ts` (e.g., `use-mobile.ts`, `use-toast.ts`)

### Component Conventions

- **Functional components only** — no class components
- **One component per file**, default export: `export default function ComponentName()`
- **PascalCase** for component names
- Props destructured in function signature
- Mark client components explicitly with `"use client"` at the top
- Server Components are the default (no directive needed)
- Use `React.ReactNode` for `children` typing
- Typed refs: `useRef<HTMLDivElement>(null)`

### Styling

- **Tailwind CSS v4** — configured via PostCSS plugin, theme defined in `app/globals.css`
- Use the `cn()` utility from `@/lib/utils` for conditional class merging (clsx + tailwind-merge)
- Responsive via Tailwind breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- No CSS modules, no styled-components, no inline style objects
- Colors use the oklch CSS variable system defined in `globals.css`

### UI Components

- **shadcn/ui** (new-york style) in `components/ui/` — 57+ components
- Import from `@/components/ui/<component>` (e.g., `@/components/ui/button`)
- Do NOT modify `components/ui/` files directly — add via `npx shadcn@latest add <component>`
- Custom/business components live in `components/` (outside `ui/`)

### State Management

- React hooks only: `useState`, `useEffect`, `useRef`, `useMemo`, `useCallback`
- No external state library (no Redux, Zustand, Jotai)
- Custom hooks in `hooks/` directory

### Forms & Validation

- **React Hook Form** with `@hookform/resolvers`
- **Zod** for schema validation
- Pattern: define Zod schema, use `zodResolver`, then `useForm()`

### i18n (Internationalization)

- Custom implementation — no external library
- `middleware.ts` detects locale from domain or `?lang=` query param, sets `x-locale` header
- `lib/i18n.ts` contains all translation strings as `{ fr: {...}, en: {...} }`
- Server-side: `layout.tsx` reads header via `headers()`, passes locale to `LocaleProvider`
- Client-side: `useLocale()` hook returns `{ locale, t }` — use `t.keyName` for strings
- Supported locales: `"fr" | "en"` (type: `Locale`)
- When adding UI text, always add both `fr` and `en` translations in `lib/i18n.ts`

### Analytics / Tracking

- Vercel Analytics via `@vercel/analytics`
- Custom event tracking helpers in `lib/tracking.ts`
- Section view tracking via `useSectionTracking` hook (IntersectionObserver)

### Error Handling

- No global error boundary currently exists
- `app/not-found.tsx` redirects to home
- Form errors handled via React Hook Form / Zod validation
- External API calls (e.g., webhook in `contact-form.tsx`) should use try/catch

---

## Project Structure

```
app/                    # Next.js App Router pages & layouts
  globals.css           # Tailwind v4 theme (oklch color variables)
  layout.tsx            # Root layout (server component, locale provider)
  page.tsx              # Home page
  landing/              # Ad landing page
  guide/                # Guide download landing
components/
  ui/                   # shadcn/ui primitives (DO NOT edit directly)
  *.tsx                 # Business/feature components
hooks/                  # Custom React hooks (use-*.ts)
lib/
  i18n.ts              # All translation strings (FR/EN)
  locale-context.tsx   # Locale context & useLocale hook
  tracking.ts          # Analytics event helpers
  utils.ts             # cn() utility
datamanip/             # Content/data reference files (not code)
middleware.ts          # Locale detection middleware
public/                # Static assets (images, logos)
```

---

## Key Files to Know

| File                     | Purpose                                      |
| ------------------------ | -------------------------------------------- |
| `lib/i18n.ts`            | All UI strings — edit when adding text       |
| `lib/locale-context.tsx` | Locale context provider & `useLocale()` hook |
| `lib/utils.ts`           | `cn()` class merging utility                 |
| `middleware.ts`          | Locale detection (domain / query param)      |
| `app/globals.css`        | Tailwind v4 theme, oklch color variables     |
| `components.json`        | shadcn/ui configuration                      |
| `eslint.config.mjs`      | ESLint v9 flat config                        |
| `.prettierrc`            | Prettier rules                               |

---

## Common Pitfalls

- Always add translations in **both** `fr` and `en` in `lib/i18n.ts` when adding UI text.
- Do not edit `components/ui/*` files — they are shadcn/ui managed.
- `next.config.mjs` ignores TS build errors — always fix type errors anyway.
- Images use `unoptimized: true` — no Next.js Image Optimization.
- There is a hardcoded webhook URL in `components/contact-form.tsx` — treat it as config, not a secret.
- No `.env.example` exists. No environment variables are required for basic dev.
