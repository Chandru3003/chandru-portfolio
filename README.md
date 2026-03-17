# chandru-portfolio

Personal portfolio website for Chandrasekar Vasan — Full Stack Developer, Site Reliability Engineer, and System Administrator.

Live at: https://chandrasekar-vasan-portfolio.vercel.app/

## Tech Stack

- [Next.js 14](https://nextjs.org) — React framework
- [Tailwind CSS](https://tailwindcss.com) — styling
- [TypeScript](https://www.typescriptlang.org) — type safety
- Vanilla JS — canvas animations, IntersectionObserver, typewriter effect

## Features

- Animated PCB-trace canvas background
- Typewriter hero with live terminal simulation
- Scroll-triggered section reveals
- Animated skill bars
- Fully responsive — mobile + desktop

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view locally.

## Project Structure

```
app/
  page.tsx          # main page
  layout.tsx        # root layout
  globals.css       # global styles + animations
components/
  Hero.tsx
  Terminal.tsx
  InfraGrid.tsx
  Projects.tsx
  Experience.tsx
  Footer.tsx
public/
  resume.pdf        # resume download
```

## Deployment

Deployed on [Vercel](https://vercel.com). Every push to `main` triggers an automatic redeploy.

## Contact

- Email: chandrasekarvasan2002@gmail.com
- GitHub: [@Chandru3003](https://github.com/Chandru3003)
- LinkedIn: [chandrasekarvasan](https://www.linkedin.com/in/chandrasekarvasan/)
