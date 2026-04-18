'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Mail, Linkedin, Github, Twitter, MessageCircle, PenTool } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const containerRef = useRef(null)
  const chapterRef = useRef(null)
  const titleRef = useRef(null)
  const storyRef = useRef(null)
  const contentRef = useRef(null)

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
      contentRef.current.children,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.2 },
      '-=0.5'
    )
  }, [])

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div ref={containerRef} className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <div ref={chapterRef} className="inline-block mb-4">
            <span className="text-sm font-mono text-primary/80 tracking-widest uppercase">Final Chapter</span>
            <div className="h-px w-16 bg-linear-to-r from-primary/50 to-transparent mx-auto mt-2" />
          </div>
          <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold mb-6">The Next Chapter Awaits</h2>
          <p ref={storyRef} className="text-lg text-gray-400 max-w-2xl mx-auto italic">
            "Every great story has a beginning, but the best stories are those that continue. This is where our paths might cross, and new adventures begin."
          </p>
        </div>

        <div ref={contentRef} className="grid md:grid-cols-2 gap-12">
          <div className="text-left space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <MessageCircle className="w-6 h-6 text-primary" />
                Let's Connect
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Whether you have a project in mind, want to collaborate, or simply want to share your own story—I'd love to hear from you. Every conversation is an opportunity for a new chapter.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors cursor-pointer group">
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Email</div>
                  <div className="font-medium">shuvamsantra10@gmail.com</div>
                </div>
              </div>
            </div>

            <div>
              <div className="text-sm text-gray-500 mb-4">Follow the Journey</div>
              <div className="flex gap-4">
                <a href="https://github.com/GamerQuanTuM" target='_blank' rel='noopener noreferrer' className="p-3 rounded-xl bg-white/5 hover:bg-white/10 hover:text-primary transition-all hover:-translate-y-1">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/shuvam-santra10" target="_blank" rel='noopener noreferrer' className="p-3 rounded-xl bg-white/5 hover:bg-white/10 hover:text-primary transition-all hover:-translate-y-1">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://x.com/ShuvamSantra1" target="_blank" className="p-3 rounded-xl bg-white/5 hover:bg-white/10 hover:text-primary transition-all hover:-translate-y-1">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <PenTool className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold">Write Your Message</h3>
            </div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                  placeholder="What should I call you?"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                  placeholder="How can I reach you?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Your Story</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
                  placeholder="Tell me about your project, idea, or just say hello..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-lg bg-primary text-black font-bold hover:bg-primary/90 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20"
              >
                Send Your Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block">
            <p className="text-gray-500 text-sm mb-2">And so the story continues...</p>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary/50 animate-pulse" />
              <div className="w-2 h-2 rounded-full bg-primary/70 animate-pulse delay-100" />
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse delay-200" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
