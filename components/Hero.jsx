'use client'

import { useEffect, useRef, Suspense } from 'react'
import gsap from 'gsap'
import dynamic from 'next/dynamic'

const HeroModel = dynamic(() => import('./HeroModel'), { ssr: false })

export default function Hero() {
  const containerRef = useRef(null)
  const chapterRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const storyRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.fromTo(
      chapterRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8 }
    ).fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      '-=0.4'
    ).fromTo(
      subtitleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      '-=0.5'
    ).fromTo(
      storyRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1 },
      '-=0.6'
    )
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-0">
      <div ref={containerRef} className="container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center h-full">
        <div className="text-left z-10 order-2 md:order-1">
          <div ref={chapterRef} className="inline-block mb-4">
            <span className="text-sm font-mono text-primary/80 tracking-widest uppercase">Chapter One</span>
            <div className="h-px w-16 bg-linear-to-r from-primary/50 to-transparent mt-2" />
          </div>
          <h1
            ref={titleRef}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-linear-to-b from-white to-white/50"
          >
            The Journey Begins
          </h1>
          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl text-gray-400 max-w-xl leading-relaxed mb-6"
          >
            Every great story starts with a single line of code.
          </p>
          <p
            ref={storyRef}
            className="text-lg text-gray-500 max-w-xl leading-relaxed italic border-l-2 border-primary/30 pl-4"
          >
            "In the vast digital landscape, where ideas transform into reality, I found my calling as a Full Stack Developer. This is my story of passion, persistence, and the pursuit of creating meaningful digital experiences."
          </p>
          <div className="mt-10 flex gap-4">
            <button className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-colors">
              Continue Reading
            </button>
            <button className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 transition-colors font-semibold">
              Skip to Projects
            </button>
          </div>
        </div>
        
        <div className="order-1 md:order-2 h-[400px] md:h-full flex items-center justify-center relative">
          <Suspense fallback={<div className="text-white/20">Loading 3D Experience...</div>}>
            <HeroModel />
          </Suspense>
          
          {/* Subtle glow behind the model */}
          <div className="absolute inset-0 bg-cyan-500/10 blur-[120px] rounded-full -z-10" />
        </div>
      </div>
    </div>
  )
}
