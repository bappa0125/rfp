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
    <section ref={sectionRef} className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4 pt-14 pb-10 md:pt-20 md:pb-16">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-3">Team With You</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Cross‑functional experts collaborate to craft precise, compliant, and compelling proposals.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {teamMembers.map((m, idx) => (
            <Card
              key={m.name}
              className={`overflow-hidden bg-white text-gray-900 border border-blue-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 ${inView ? 'opacity-0 [animation:fadeIn_0.8s_ease-out_forwards]' : 'opacity-0'}`}
              style={inView ? { animationDelay: `${idx * 120}ms` } : undefined}
            >
              <img
                src={m.imageUrl}
                alt={m.name}
                className="h-20 sm:h-20 md:h-24 w-full object-cover"
                loading="lazy"
              />
              <CardContent className="p-3 text-center">
                <div className="text-sm font-semibold text-gray-900">{m.name}</div>
                <div className="text-xs text-blue-600 font-medium">{m.role}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


