'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Quote, Star, User } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Product Manager at TechCorp',
    content: 'Working with Shuvam was like having a storyteller translate our vision into code. He didn\'t just build features—he crafted experiences that our users fell in love with.',
    rating: 5,
    story: 'The collaboration that transformed our product'
  },
  {
    name: 'Michael Rodriguez',
    role: 'CTO at StartupXYZ',
    content: 'Shuvam approaches every project like a new chapter in a book. His attention to detail and creative problem-solving turned our complex requirements into elegant solutions.',
    rating: 5,
    story: 'When technical excellence meets creative vision'
  },
  {
    name: 'Emily Watson',
    role: 'Design Lead at CreativeAgency',
    content: 'Rarely do you find a developer who understands both the technical and narrative aspects of a project. Shuvam brought our designs to life with animations that tell a story.',
    rating: 5,
    story: 'Where design dreams become digital reality'
  }
]

export default function Testimonials() {
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

    const testimonialCards = containerRef.current.querySelectorAll('.testimonial-card')
    gsap.fromTo(
      testimonialCards,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current.querySelector('.testimonials-grid'),
          start: 'top 70%',
        },
      }
    )
  }, [])

  return (
    <section id="testimonials" className="py-24 px-6 bg-white/5 relative">
      <div ref={containerRef} className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div ref={chapterRef} className="inline-block mb-4">
            <span className="text-sm font-mono text-primary/80 tracking-widest uppercase">Voices from the Journey</span>
            <div className="h-px w-16 bg-linear-to-r from-primary/50 to-transparent mx-auto mt-2" />
          </div>
          <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold mb-6">Stories from Collaborators</h2>
          <p ref={introRef} className="text-lg text-gray-400 max-w-2xl mx-auto italic">
            "The best stories are those we write together. Here are some chapters from the incredible people I've had the privilege to work with."
          </p>
        </div>

        <div className="testimonials-grid grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card relative bg-black/40 rounded-2xl p-8 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary" />
              </div>
              
              <div className="mb-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </div>

              <div className="pt-6 border-t border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-linear-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-xs text-primary/60 italic">
                  {testimonial.story}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 text-gray-500 text-sm">
            <Quote className="w-4 h-4 text-primary/50" />
            <span>Every collaboration adds a new verse to the story</span>
            <Quote className="w-4 h-4 text-primary/50 rotate-180" />
          </div>
        </div>
      </div>
    </section>
  )
}
