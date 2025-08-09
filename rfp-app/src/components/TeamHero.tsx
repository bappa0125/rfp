import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { useRef } from 'react'
import { useInView } from '@/hooks/useInView'

type TeamMember = {
  name: string
  role: string
  imageUrl: string
  blurb: string
}

const teamMembers: TeamMember[] = [
  {
    name: 'Aisha Khan',
    role: 'RFP Lead',
    imageUrl: 'https://i.pravatar.cc/160?img=5',
    blurb: 'Owns end‑to‑end proposals and ensures on‑time delivery.',
  },
  {
    name: 'Marco Silva',
    role: 'Security SME',
    imageUrl: 'https://i.pravatar.cc/160?img=12',
    blurb: 'Answers security & compliance with audit‑ready rigor.',
  },
  {
    name: 'Priya Patel',
    role: 'Solutions Architect',
    imageUrl: 'https://i.pravatar.cc/160?img=32',
    blurb: 'Designs scalable solutions tailored to client needs.',
  },
  {
    name: 'Alex Chen',
    role: 'Pricing Analyst',
    imageUrl: 'https://i.pravatar.cc/160?img=24',
    blurb: 'Builds competitive pricing with transparent models.',
  },
  {
    name: 'Sara Lopez',
    role: 'Editor',
    imageUrl: 'https://i.pravatar.cc/160?img=47',
    blurb: 'Refines language and keeps responses on brand.',
  },
  {
    name: 'David Park',
    role: 'PM',
    imageUrl: 'https://i.pravatar.cc/160?img=14',
    blurb: 'Coordinates tasks, timelines, and stakeholder inputs.',
  },
  {
    name: 'Lena Fischer',
    role: 'Compliance Lead',
    imageUrl: 'https://i.pravatar.cc/160?img=36',
    blurb: 'Ensures regulatory alignment across responses.',
  },
  {
    name: 'Omar Haddad',
    role: 'Technical Writer',
    imageUrl: 'https://i.pravatar.cc/160?img=7',
    blurb: 'Distills complex topics into clear narratives.',
  },
]

export default function TeamHero() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { threshold: 0.2 })
  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#5F259F] via-[#D71A64] to-[#FF6A00]" />
      <div className="max-w-6xl mx-auto px-4 pt-44 pb-16 md:pt-60 md:pb-24 text-white">
        <Badge variant="outline" className="bg-white/10 text-white border-white/30">Our Team</Badge>
        <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">Team With You</h1>
        <p className="mt-3 max-w-2xl text-white/90">
          Cross‑functional experts collaborate to craft precise, compliant, and compelling proposals.
        </p>

        <div className="mt-10 grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {teamMembers.map((m, idx) => (
            <Card
              key={m.name}
              className={`overflow-hidden bg-white/95 text-[#1f1f1f] ${inView ? 'opacity-0 [animation:fadeIn_0.8s_ease-out_forwards]' : 'opacity-0'}`}
              style={inView ? { animationDelay: `${idx * 120}ms` } : undefined}
            >
              <img
                src={m.imageUrl}
                alt={m.name}
                className="h-28 sm:h-28 md:h-32 w-full object-cover"
                loading="lazy"
              />
              <CardContent className="p-3 text-center">
                <div className="text-sm font-semibold">{m.name}</div>
                <div className="text-xs text-gray-600 truncate">{m.role}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


