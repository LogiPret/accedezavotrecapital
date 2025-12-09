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
