'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Mail, Linkedin, Github, Twitter } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
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
    <section id="contact" className="py-24 px-6">
      <div ref={containerRef} className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
        <p className="text-gray-400 mb-12 max-w-xl mx-auto">
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="text-left space-y-6">
            <h3 className="text-2xl font-bold mb-6">Connect</h3>
            <div className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors cursor-pointer">
              <Mail className="w-6 h-6" />
              <span>shuvamsantra10@gmail.com</span>
            </div>
            <div className="flex gap-6 mt-8">
              <a href="https://github.com/GamerQuanTuM" target='_blank' rel='noopener noreferrer' className="p-3 rounded-full bg-white/5 hover:bg-white/10 hover:text-primary transition-all">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/shuvam-santra10" target="_blank" rel='noopener noreferrer' className="p-3 rounded-full bg-white/5 hover:bg-white/10 hover:text-primary transition-all">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://x.com/ShuvamSantra1" target="_blank" className="p-3 rounded-full bg-white/5 hover:bg-white/10 hover:text-primary transition-all">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          <form className="space-y-4 text-left">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 rounded-lg bg-primary text-black font-bold hover:bg-primary/90 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
