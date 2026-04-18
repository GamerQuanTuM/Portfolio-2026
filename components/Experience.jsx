'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Experience({ experience }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const elements = containerRef.current.children
    gsap.fromTo(
      elements,
      { x: -50, opacity: 0 },
      {
        x: 0,
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
    <section id="experience" className="py-24 px-6 bg-white/5">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
        <div ref={containerRef} className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-white/20 before:to-transparent">
          {experience.map((job) => (
            <div key={job.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-black shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <div className="w-3 h-3 bg-primary rounded-full" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl bg-black/40 border border-white/10 hover:border-primary/30 transition-colors">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                  <h3 className="font-bold text-lg">{job.role}</h3>
                  <span className="text-xs font-mono text-gray-500">
                    {new Date(job.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' })} -{' '}
                    {job.endDate ? new Date(job.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' }) : 'Present'}
                  </span>
                </div>
                <div className="text-primary text-sm mb-4">{job.company}</div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <span key={skill} className="px-2 py-0.5 text-[10px] rounded-full bg-white/5 text-gray-400 border border-white/5">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
