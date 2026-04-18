'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      }
    )
  }, [])

  return (
    <section id="about" className="py-24 px-6">
      <div ref={containerRef} className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I am a results-driven Full Stack Developer with a passion for building robust, scalable, and user-centric web applications. With deep expertise in the React ecosystem and Node.js, I solve complex technical challenges by delivering clean, maintainable code.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            My approach combines technical precision with creative problem-solving. Whether optimizing database queries or crafting smooth UI transitions, I focus on creating high-performance digital solutions that drive business value. I am constantly expanding my toolkit with emerging technologies like AI agents and automation workflows.
          </p>
        </div>
      </div>
    </section>
  )
}
