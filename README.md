# Accédez à Votre Capital

A Next.js website for reverse mortgage services in Quebec.

## Getting Started

First, install the dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Language (FR/EN)

This project uses a simple in-repo i18n setup (no external i18n library).

- **Where locale is decided:** `middleware.ts` inspects the request host (domain) and an optional `?lang=en|fr` query param, then sets `x-locale` on the request.
- **Where locale is consumed:** `app/layout.tsx` reads `x-locale` via `headers()` and passes it to `LocaleProvider` from `lib/locale-context.tsx`.
- **How components translate:** client components call `useLocale()` to get `{ locale, t }`, where `t` comes from `getTranslations(locale)` in `lib/i18n.ts`.

### How to switch language

- **Production (domain-based):** English is served on `accesshomeequity.ca`, French on `accedezavotrecapital.ca`.
- **Local/dev (easy):** add a query param:
	- `http://localhost:3000/?lang=en`
	- `http://localhost:3000/?lang=fr`

Note: there is no in-app “toggle” that changes language client-side; switching language happens by navigating to the other domain or using the `?lang=` parameter (which causes the server to render with a different locale).

## Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** Radix UI + Custom components
- **Forms:** React Hook Form + Zod
- **Analytics:** Vercel Analytics

## Project Structure

```
├── app/                  # Next.js app directory
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   ├── guide/           # Guide page
│   └── globals.css      # Global styles
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   └── ...             # Page-specific components
├── lib/                # Utility functions
├── hooks/              # Custom React hooks
└── public/             # Static assets

```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Environment Variables

No environment variables required for basic functionality.

## License

Private
