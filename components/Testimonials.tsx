'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Quote, Star, User } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

interface Testimonial {
    id: string
    name: string
    role: string
    company: string
    content: string
    rating: number
    story?: string | null
}

export default function Testimonials() {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([])
    const [loading, setLoading] = useState(true)
    const containerRef = useRef<HTMLDivElement>(null)
    const chapterRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)
    const introRef = useRef<HTMLParagraphElement>(null)

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await fetch('/api/testimonials')
                const data = await response.json()
                setTestimonials(data)
            } catch (error) {
                console.error('Error fetching testimonials:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchTestimonials()
    }, [])

    useEffect(() => {
        if (!containerRef.current || testimonials.length === 0) return

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
        if (testimonialCards.length > 0) {
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
        }
    }, [testimonials])

    if (loading) {
        return (
            <section id="testimonials" className="py-24 px-6 bg-white/5 relative">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center">
                        <div className="inline-block mb-4">
                            <span className="text-sm font-mono text-primary/80 tracking-widest uppercase">Voices from the Journey</span>
                            <div className="h-px w-16 bg-linear-to-r from-primary/50 to-transparent mx-auto mt-2" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Stories from Collaborators</h2>
                        <p className="text-lg text-gray-400">Loading testimonials...</p>
                    </div>
                </div>
            </section>
        )
    }

    if (testimonials.length === 0) {
        return (
            <section id="testimonials" className="py-24 px-6 bg-white/5 relative">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center">
                        <div className="inline-block mb-4">
                            <span className="text-sm font-mono text-primary/80 tracking-widest uppercase">Voices from the Journey</span>
                            <div className="h-px w-16 bg-linear-to-r from-primary/50 to-transparent mx-auto mt-2" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Stories from Collaborators</h2>
                        <p className="text-lg text-gray-400">No testimonials yet.</p>
                    </div>
                </div>
            </section>
        )
    }

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
                            key={testimonial.id}
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
