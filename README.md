# what2eat — Landing Page

Marketing landing page for [what2eat.com](https://what2eat.com) — a recipe discovery service that matches recipes to ingredients you already have.

## Stack

- **Next.js** (App Router) + **TypeScript**
- **Tailwind CSS v4** with OKLCH color variables
- **shadcn/ui** (New York style, `@base-ui/react`)
- Fonts: Nunito (headings) + Inter (body) via `next/font/google`
- i18n: English / Russian (custom context-based)
- Dark mode support

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Project Structure

```
app/           # Next.js App Router (layout, page, globals)
components/    # Page sections (nav, hero, features, pricing, footer, …)
lib/           # Utilities: cn, buttonVariants, i18n, theme context
public/        # Static assets (video files)
```

## CTAs

- Primary (Get Started): `https://what2eat.com/login`
- Secondary (Download): `https://what2eat.com/download`
