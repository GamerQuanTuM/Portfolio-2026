'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Database, Server, Layout, Code, Cpu, Workflow, Wrench, LucideIcon } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

interface Skill {
    name: string
    icon: LucideIcon
    category: string
    story: string
}

const skills: Skill[] = [
    { name: 'React', icon: Layout, category: 'Frontend', story: 'Where UI dreams come alive' },
    { name: 'React Native', icon: Code, category: 'Mobile', story: 'Bringing apps to every device' },
    { name: 'Node.js', icon: Server, category: 'Backend', story: 'The heartbeat of applications' },
    { name: 'SQL', icon: Database, category: 'Database', story: 'Where data finds its home' },
    { name: 'MongoDB', icon: Database, category: 'Database', story: 'Flexible data for flexible minds' },
    { name: 'n8n', icon: Workflow, category: 'Automation', story: 'Automating the mundane' },
    { name: 'LangChain', icon: Cpu, category: 'AI', story: 'Chaining intelligence together' },
    { name: 'Google Agent SDK', icon: Cpu, category: 'AI', story: 'Building agents of tomorrow' },
]

export default function TechStack() {
    const containerRef = useRef<HTMLDivElement>(null)
    const chapterRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)
    const introRef = useRef<HTMLParagraphElement>(null)

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 80%',
            }
        })

        tl.fromTo(
            chapterRef.current,
            { opacity: 0, x: -30 },
            { opacity: 1, x: 0, duration: 0.8 }
        ).fromTo(
            titleRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1 },
            '-=0.4'
        ).fromTo(
            introRef.current,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 1 },
            '-=0.6'
        )

        const skillCards = containerRef.current?.querySelectorAll('.skill-card')
        if (skillCards && skillCards.length > 0) {
            gsap.fromTo(
                skillCards,
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: containerRef.current?.querySelector('.skills-grid'),
                        start: 'top 70%',
                    },
                }
            )
        }
    }, [])

    return (
        <section id="tech-stack" className="py-24 px-6 bg-white/5 relative">
            <div ref={containerRef} className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <div ref={chapterRef} className="inline-block mb-4">
                        <span className="text-sm font-mono text-primary/80 tracking-widest uppercase">The Arsenal</span>
                        <div className="h-px w-16 bg-linear-to-r from-primary/50 to-transparent mx-auto mt-2" />
                    </div>
                    <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold mb-6">Tools of the Trade</h2>
                    <p ref={introRef} className="text-lg text-gray-400 max-w-2xl mx-auto italic">
                        "Every craftsman needs their tools. These are the technologies that have become extensions of my creativity, each with its own story in my journey."
                    </p>
                </div>

                <div className="skills-grid grid grid-cols-2 md:grid-cols-4 gap-6">
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="skill-card p-6 rounded-xl bg-black/40 border border-white/10 hover:border-primary/50 transition-all duration-300 group flex flex-col items-center justify-center gap-4 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
                        >
                            <div className="w-14 h-14 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                <skill.icon className="w-7 h-7 text-gray-400 group-hover:text-primary transition-colors" />
                            </div>
                            <div className="text-center">
                                <span className="font-medium text-lg block mb-1">{skill.name}</span>
                                <span className="text-xs text-gray-500 uppercase tracking-wider">{skill.category}</span>
                            </div>
                            <p className="text-xs text-gray-600 italic text-center leading-relaxed">
                                {skill.story}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <div className="inline-flex items-center gap-3 text-gray-500 text-sm">
                        <Wrench className="w-4 h-4 text-primary/50" />
                        <span>Continuously expanding the toolkit...</span>
                        <Wrench className="w-4 h-4 text-primary/50" />
                    </div>
                </div>
            </div>
        </section>
    )
}
