'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Experience({ experience }) {
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

    const timelineItems = containerRef.current.querySelectorAll('.timeline-item')
    gsap.fromTo(
      timelineItems,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current.querySelector('.timeline-container'),
          start: 'top 70%',
        },
      }
    )
  }, [])

  return (
    <section id="experience" className="py-24 px-6 bg-white/5 relative">
      <div ref={containerRef} className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <div ref={chapterRef} className="inline-block mb-4">
            <span className="text-sm font-mono text-primary/80 tracking-widest uppercase">Chapter Three</span>
            <div className="h-px w-16 bg-linear-to-r from-primary/50 to-transparent mx-auto mt-2" />
          </div>
          <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold mb-6">The Adventures</h2>
          <p ref={introRef} className="text-lg text-gray-400 max-w-2xl mx-auto italic">
            "Every role, every project, every challenge has been a stepping stone in this incredible journey. Here are the chapters of my professional story."
          </p>
        </div>

        <div className="timeline-container space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-primary/30 before:to-transparent">
          {experience.map((job, index) => (
            <div key={job.id} className="timeline-item relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-primary/30 bg-black shadow-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <div className="w-[calc(100%-5rem)] md:w-[calc(50%-3rem)] p-6 rounded-xl bg-black/40 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-mono text-primary/60 bg-primary/10 px-2 py-1 rounded">
                    Chapter {index + 1}
                  </span>
                  <span className="text-xs font-mono text-gray-500 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(job.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' })} -{' '}
                    {job.endDate ? new Date(job.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' }) : 'Present'}
                  </span>
                </div>
                <h3 className="font-bold text-xl mb-1 text-white">{job.role}</h3>
                <div className="text-primary text-sm mb-4 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {job.company}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 text-xs rounded-full bg-white/5 text-gray-300 border border-white/10 hover:border-primary/30 transition-colors">
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
