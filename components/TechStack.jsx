'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Database, Server, Layout, Code, Cpu, Workflow } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const skills = [
  { name: 'React', icon: Layout, category: 'Frontend' },
  { name: 'React Native', icon: Code, category: 'Mobile' },
  { name: 'Node.js', icon: Server, category: 'Backend' },
  { name: 'SQL', icon: Database, category: 'Database' },
  { name: 'MongoDB', icon: Database, category: 'Database' },
  { name: 'n8n', icon: Workflow, category: 'Automation' },
  { name: 'LangChain', icon: Cpu, category: 'AI' },
  { name: 'Google Agent SDK', icon: Cpu, category: 'AI' },
]

export default function TechStack() {
  const containerRef = useRef(null)

  useEffect(() => {
    const elements = containerRef.current.children
    gsap.fromTo(
      elements,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      }
    )
  }, [])

  return (
    <section id="tech-stack" className="py-24 px-6 bg-white/5">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center">Tech Stack & Tools</h2>
        <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="p-6 rounded-xl bg-black/40 border border-white/10 hover:border-primary/50 transition-colors group flex flex-col items-center justify-center gap-4"
            >
              <skill.icon className="w-10 h-10 text-gray-400 group-hover:text-primary transition-colors" />
              <span className="font-medium text-lg">{skill.name}</span>
              <span className="text-xs text-gray-500 uppercase tracking-wider">{skill.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
