import { prisma } from '@/lib/prisma'
import Hero from '@/components/Hero'
import About from '@/components/About'
import TechStack from '@/components/TechStack'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Background3D from '@/components/Background3D'

async function getProjects() {
  return await prisma.project.findMany({
    orderBy: { createdAt: 'desc' },
  })
}

async function getExperience() {
  return await prisma.experience.findMany({
    orderBy: { startDate: 'desc' },
  })
}

export default async function Home() {
  const projects = await getProjects()
  const experience = await getExperience()

  return (
    <main className="min-h-screen relative">
      <Background3D />
      <Hero />
      <About />
      <TechStack />
      <Projects projects={projects} />
      <Experience experience={experience} />
      <Testimonials />
      <Contact />
    </main>
  )
}
