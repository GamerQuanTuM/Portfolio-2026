'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Github, ExternalLink } from 'lucide-react'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

export default function Projects({ projects }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const elements = containerRef.current.children
    gsap.fromTo(
      elements,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      }
    )
  }, [])

  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
        <div ref={containerRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-48 bg-gradient-to-br from-gray-800 to-black relative overflow-hidden">
                 {/* Placeholder for project image if available, otherwise gradient */}
                 {project.imageUrl && (
                    <div className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:scale-110 transition-transform duration-500" style={{ backgroundImage: `url(${project.imageUrl})` }} />
                 )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs rounded-full bg-white/10 text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.demoLink && (
                    <Link
                      href={project.demoLink}
                      target="_blank"
                      className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </Link>
                  )}
                  {project.repoLink && (
                    <Link
                      href={project.repoLink}
                      target="_blank"
                      className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                    >
                      <Github size={16} /> Code
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
