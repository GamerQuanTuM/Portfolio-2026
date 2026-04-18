# DevPortfolio

A modern, interactive portfolio website built with Next.js, TypeScript, Three.js, and GSAP animations.

## Features

- **3D Background**: Animated starfield using Three.js and React Three Fiber
- **Interactive 3D Hero**: 3D model with orbit controls
- **Smooth Animations**: GSAP-powered scroll-triggered animations
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **TypeScript**: Full type safety across the application
- **Backend Integration**: PostgreSQL database with Prisma ORM
- **Dynamic Content**: Testimonials fetched from backend API

## Tech Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for R3F
- **GSAP** - High-performance animations
- **Lucide React** - Icon library

### Backend
- **PostgreSQL** - Relational database
- **Prisma** - Modern ORM for TypeScript
- **Next.js API Routes** - Serverless API endpoints

## Getting Started

### Prerequisites

- Node.js 18+ installed
- PostgreSQL database running
- pnpm package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Portfolio-2025
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
Create a `.env` file in the root directory:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/portfolio_db"
```

4. Run database migrations:
```bash
pnpm prisma migrate dev
```

5. Seed the database (optional):
```bash
pnpm prisma db seed
```

6. Run the development server:
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
Portfolio-2025/
├── app/                    # Next.js App Router
│   ├── api/              # API routes
│   │   └── testimonials/  # Testimonials endpoint
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/             # React components
│   ├── About.tsx
│   ├── Background3D.tsx
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── Hero.tsx
│   ├── HeroModel.tsx
│   ├── Navbar.tsx
│   ├── Projects.tsx
│   ├── TechStack.tsx
│   └── Testimonials.tsx
├── lib/                   # Utility libraries
│   └── prisma.ts         # Prisma client
├── prisma/                # Database schema and migrations
│   ├── schema.prisma
│   └── seed.ts
└── public/                 # Static assets
    └── models/           # 3D models
```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm prisma migrate dev` - Create and apply migrations
- `pnpm prisma db seed` - Seed database with sample data

## Sections

1. **Hero** - Introduction with 3D model and navigation buttons
2. **About** - Personal story and milestones
3. **Tech Stack** - Skills and technologies used
4. **Projects** - Featured projects with links
5. **Experience** - Work history timeline
6. **Testimonials** - Client testimonials (fetched from backend)
7. **Contact** - Contact form and social links

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

### Environment Variables for Production

Make sure to set the following environment variables in your deployment platform:

- `DATABASE_URL` - Your PostgreSQL connection string

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [Three.js Documentation](https://threejs.org/docs/)
- [GSAP Documentation](https://gsap.com/docs/)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

