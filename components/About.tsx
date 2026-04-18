'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Code2, Zap, Rocket, Heart } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const chapterRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const storyRef = useRef<HTMLDivElement>(null)
  const milestonesRef = useRef<HTMLDivElement>(null)

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
      storyRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      '-=0.6'
    ).fromTo(
      milestonesRef.current?.children || [],
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.2 },
      '-=0.5'
    )
  }, [])

  return (
    <section id="about" className="py-24 px-6 relative">
      <div ref={containerRef} className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <div ref={chapterRef} className="inline-block mb-4">
            <span className="text-sm font-mono text-primary/80 tracking-widest uppercase">Chapter Two</span>
            <div className="h-px w-16 bg-linear-to-r from-primary/50 to-transparent mx-auto mt-2" />
          </div>
          <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold mb-6">The Origin Story</h2>
        </div>
        
        <div ref={storyRef} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10 mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              <span className="text-3xl text-primary font-serif">"</span>
              It all began with curiosity—a simple question: <em className="text-white">"How does this work?"</em> What started as tinkering with HTML and CSS in a small room transformed into an obsession with understanding the very fabric of the web.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Late nights became my companion. Each bug was a puzzle to solve, each feature a story to tell. I discovered that code wasn't just instructions—it was a language of creation, a way to bring imagination to life.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Today, I stand at the intersection of creativity and technology. As a Full Stack Developer, I don't just write code—I craft experiences. Every project is a new chapter, every challenge an opportunity to grow.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              <span className="text-3xl text-primary font-serif">"</span>
            </p>
          </div>
        </div>

        <div ref={milestonesRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-primary/30 transition-all group">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <Code2 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-2">The Beginning</h3>
            <p className="text-sm text-gray-400">First "Hello World" sparked a lifelong passion for programming</p>
          </div>
          
          <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-primary/30 transition-all group">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-2">The Spark</h3>
            <p className="text-sm text-gray-400">Discovered the magic of React and fell in love with component-driven architecture</p>
          </div>
          
          <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-primary/30 transition-all group">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <Rocket className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-2">The Launch</h3>
            <p className="text-sm text-gray-400">Built first production application and watched real users interact with my creation</p>
          </div>
          
          <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-primary/30 transition-all group">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <Heart className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-2">The Passion</h3>
            <p className="text-sm text-gray-400">Now dedicated to building meaningful digital experiences that matter</p>
          </div>
        </div>
      </div>
    </section>
  )
}
