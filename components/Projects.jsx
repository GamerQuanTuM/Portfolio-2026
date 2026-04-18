'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Github, ExternalLink, BookOpen, Sparkles } from 'lucide-react'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

export default function Projects({ projects }) {
  const containerRef = useRef(null)
  const chapterRef = useRef(null)
  const titleRef = useRef(null)
  const introRef = useRef(null)

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

    const projectCards = containerRef.current.querySelectorAll('.project-card')
    gsap.fromTo(
      projectCards,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: containerRef.current.querySelector('.projects-grid'),
          start: 'top 70%',
        },
      }
    )
  }, [])

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div ref={containerRef} className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div ref={chapterRef} className="inline-block mb-4">
            <span className="text-sm font-mono text-primary/80 tracking-widest uppercase">Chapter Four</span>
            <div className="h-px w-16 bg-linear-to-r from-primary/50 to-transparent mx-auto mt-2" />
          </div>
          <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold mb-6">The Masterpieces</h2>
          <p ref={introRef} className="text-lg text-gray-400 max-w-2xl mx-auto italic">
            "Each project is a story of its own—a challenge faced, a problem solved, and a vision brought to life. These are the tales of my creative journey."
          </p>
        </div>

        <div ref={containerRef} className="projects-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card group relative bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="h-48 bg-linear-to-br from-gray-800 to-black relative overflow-hidden">
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-xs font-mono text-primary/60 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full border border-primary/20">
                    Tale #{index + 1}
                  </span>
                </div>
                {project.imageUrl && (
                  <div className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:scale-110 transition-transform duration-700" style={{ backgroundImage: `url(${project.imageUrl})` }} />
                )}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">Featured Story</span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs rounded-full bg-white/5 text-gray-300 border border-white/10 hover:border-primary/30 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 pt-4 border-t border-white/10">
                  {project.demoLink && (
                    <Link
                      href={project.demoLink}
                      target="_blank"
                      className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors group/link"
                    >
                      <ExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform" />
                      <span>Experience It</span>
                    </Link>
                  )}
                  {project.repoLink && (
                    <Link
                      href={project.repoLink}
                      target="_blank"
                      className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors group/link"
                    >
                      <Github size={16} className="group-hover/link:translate-x-1 transition-transform" />
                      <span>Behind the Scenes</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-gray-500 text-sm">
            <Sparkles className="w-4 h-4 text-primary/50" />
            <span>More stories being written...</span>
            <Sparkles className="w-4 h-4 text-primary/50" />
          </div>
        </div>
      </div>
    </section>
  )
}
