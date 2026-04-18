import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    // Clean up existing data
    await prisma.project.deleteMany()
    await prisma.experience.deleteMany()
    await prisma.skill.deleteMany()
    await prisma.testimonial.deleteMany()

    // Projects — from Shuvam's resume
    await prisma.project.createMany({
        data: [
            {
                title: 'GitHub Agent — Autonomous Bug-Fix AI',
                description:
                    'Designed a multi-agent autonomous system that reads a GitHub issue, navigates the codebase, identifies the root cause, and generates a context-aware code fix — end-to-end without human intervention. Architected with a sequential agent chain (Issue Reader → Repo Navigator → Code Fix → Summary), integrated GitHub MCP for safe repo access, and leveraged Gemini 2.5 Flash Lite for deep dependency reasoning.',
                techStack: ['Python', 'Google ADK', 'Gemini 2.5 Flash Lite', 'MCP', 'Multi-Agent Architecture'],
                repoLink: 'https://github.com/GamerQuanTuM/Github-Agent',
            },
            {
                title: 'Ezydrag AI SEO Suite',
                description:
                    'CLI-based multi-agent SEO audit system built with LangGraph. Four autonomous AI agents (Technical, On-Page, Off-Page, Content Writer) run in a fan-out/fan-in graph — crawling target websites, calling PageSpeed Insights & Search Console APIs, analyzing backlink profiles, generating ready-to-deploy content fixes, and synthesizing everything into an executive report with a health score and priority action plan.',
                techStack: ['Python', 'LangGraph', 'LangChain', 'Google Gemini', 'Multi-Agent Architecture'],
                repoLink: 'https://github.com/GamerQuanTuM/SEO-Agent',
            },
            {
                title: 'Amigo — Food Delivery Platform',
                description:
                    'Independently architected and built a complete food delivery ecosystem comprising a Customer App (OTP auth, real-time GPS, restaurant discovery, live order tracking), Partner App (SLA-based order flows, menu management, revenue dashboards), and Super Admin Panel (partner onboarding, KYC verification, B2B procurement module). Engineered a modular NestJS backend with normalized PostgreSQL schema.',
                techStack: ['React Native', 'Next.js', 'NestJS', 'PostgreSQL', 'Razorpay', 'Google Maps SDK', 'Firebase'],
                demoLink: null,
                repoLink: null,
            },
            {
                title: 'Pegman — Liquor Delivery Platform',
                description:
                    'Engineered the full backend serving three apps (Customer, Liquor Shop, Admin Panel) featuring a pass system (Silver, Gold, Crystal) that enables users to pre-purchase and redeem liquor shots from partner shops. Integrated Razorpay payments, AI-powered customer support using LangChain/LangGraph, real-time updates via WebSockets, and geo-location APIs for proximity-based discovery.',
                techStack: ['Hono.js', 'Next.js', 'PostgreSQL', 'LangChain', 'LangGraph', 'WebSockets', 'Razorpay'],
                demoLink: null,
                repoLink: null,
            },
            {
                title: 'COVID-19 Global Data Analysis',
                description:
                    'Performed end-to-end data cleaning and preprocessing on three global COVID-19 datasets. Conducted multi-dimensional exploratory data analysis including time-series visualization, peak daily surge identification, provincial death rate distribution, and country-level recovery ratio analysis with supporting visualizations.',
                techStack: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
                repoLink: 'https://github.com/GamerQuanTuM/Covid-19-Case-Study',
            },
            {
                title: 'Cypherchain Scanner — Blockchain Explorer',
                description:
                    'Built a blockchain scanner enabling wallet balance tracking, smart contract deployment, and DeFi operations including super representative appointment via balance freezing. Developed complex backend logic for smart contract deployment and balance-freezing operations, ensuring on-chain security and reliability.',
                techStack: ['React.js', 'Node.js', 'Solidity', 'JavaScript'],
                repoLink: null,
            },
        ],
    })

    // Experience — from Shuvam's resume
    await prisma.experience.createMany({
        data: [
            {
                role: 'Full Stack Developer',
                company: 'Amigo',
                startDate: new Date('2025-01-01'),
                endDate: null,
                description:
                    'Led full-stack development across Customer App, Partner App, and Super Admin Panel — owning both frontend (React Native, Next.js) and backend (NestJS, PostgreSQL). Collaborated with the CTO on architecture decisions and managed a small cross-functional developer team.',
                skills: ['React Native', 'Next.js', 'NestJS', 'PostgreSQL', 'Firebase', 'Razorpay'],
            },
            {
                role: 'Backend Developer',
                company: 'Pegman',
                startDate: new Date('2025-01-01'),
                endDate: null,
                description:
                    'Designed and maintained server-side systems and REST APIs using Hono.js. Participated in weekly sprint planning and supported the Flutter frontend developer with API integration guidance and debugging.',
                skills: ['Hono.js', 'PostgreSQL', 'REST APIs', 'WebSockets'],
            },
            {
                role: 'MERN Stack Developer',
                company: 'Whatcode',
                startDate: new Date('2023-08-01'),
                endDate: new Date('2024-03-31'),
                description:
                    'Worked across multiple client projects with ~60% backend and ~40% frontend split. Delivered features for a blockchain scanner and a Next.js e-commerce platform. Participated in Agile sprint planning, code reviews, and daily stand-ups.',
                skills: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Next.js', 'Solidity'],
            },
            {
                role: 'Junior React Native Developer (Intern)',
                company: 'Alsol Technology Solutions Pvt Ltd',
                startDate: new Date('2022-12-01'),
                endDate: new Date('2023-01-31'),
                description:
                    'Built cross-platform mobile application frontends using React Native. Gained expertise in Redux state management, component-driven development, and RESTful API integration.',
                skills: ['React Native', 'Redux', 'REST APIs'],
            },
            {
                role: 'Web Development Trainee',
                company: 'Colab — Coding Bootcamp',
                startDate: new Date('2023-05-01'),
                endDate: new Date('2023-06-30'),
                description:
                    'Collaborated with an Agile team to build and deliver an MVP using Next.js and Firebase within a structured bootcamp environment.',
                skills: ['Next.js', 'Firebase', 'Agile'],
            },
        ],
    })

    // Skills — from Shuvam's resume
    await prisma.skill.createMany({
        data: [
            // Frontend / Mobile
            { name: 'React.js', category: 'Frontend', level: 95 },
            { name: 'Next.js', category: 'Frontend', level: 90 },
            { name: 'React Native', category: 'Frontend', level: 90 },
            { name: 'TypeScript', category: 'Frontend', level: 85 },
            { name: 'Tailwind CSS', category: 'Frontend', level: 85 },
            { name: 'Framer Motion', category: 'Frontend', level: 75 },
            { name: 'Three.js', category: 'Frontend', level: 70 },
            // Backend
            { name: 'Node.js', category: 'Backend', level: 90 },
            { name: 'NestJS', category: 'Backend', level: 85 },
            { name: 'Hono.js', category: 'Backend', level: 80 },
            { name: 'PostgreSQL', category: 'Backend', level: 85 },
            { name: 'REST APIs', category: 'Backend', level: 90 },
            // AI / ML
            { name: 'Python', category: 'AI/ML', level: 80 },
            { name: 'Google Gemini API', category: 'AI/ML', level: 80 },
            { name: 'LangChain', category: 'AI/ML', level: 75 },
            { name: 'LangGraph', category: 'AI/ML', level: 70 },
            { name: 'Google ADK', category: 'AI/ML', level: 75 },
            { name: 'Prompt Engineering', category: 'AI/ML', level: 80 },
            // Tools & Integrations
            { name: 'Firebase', category: 'Tools', level: 80 },
            { name: 'Razorpay', category: 'Tools', level: 75 },
            { name: 'Git', category: 'Tools', level: 90 },
        ],
    })

    // Testimonials — from Testimonials.jsx
    await prisma.testimonial.createMany({
        data: [
            {
                name: 'Saswata Chowdhury',
                role: 'Chief Operating Officer',
                company: 'Appygo Services Pvt Ltd',
                content: 'Shuvam approaches every project like a new chapter in a book. His attention to detail and creative problem-solving turned our complex requirements into elegant solutions.',
                rating: 5,
                story: 'When technical excellence meets creative vision',
            },
            {

                name: 'Prabhat Kumar',
                role: 'Chief Technical Officer',
                company: 'Appygo Services Pvt Ltd',
                content: "Working with Shuvam was like having a storyteller translate our vision into code. He didn't just build features—he crafted experiences that our users fell in love with.",
                rating: 5,
                story: 'The collaboration that transformed our product',
            },
            {
                name: 'Anirban Dasgupta',
                role: 'Chief Executive Officer',
                company: 'Pegman India Pvt Ltd',
                content: 'Shuvam is a rare blend of creativity and technical expertise. He doesn\'t just write code—he builds stories. His ability to translate complex ideas into seamless user experiences is remarkable.',
                rating: 5,
                story: 'A rare blend of creativity and technical expertise',
            },
        ],
    })

    console.log('Seed data inserted successfully.')
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
