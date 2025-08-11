import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { useRef, useState, useEffect } from 'react'
import { useInView } from '@/hooks/useInView'

type TeamMember = {
  name: string
  role: string
  imageUrl: string
  blurb: string
}

type OrgMember = {
  name: string
  designation: string
  flag: string
  level: number
  reportsTo?: string
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

const orgMembers: OrgMember[] = [
  {
    name: 'Sarah Johnson',
    designation: 'Program Director',
    flag: '🇺🇸',
    level: 1,
  },
  {
    name: 'Michael Chen',
    designation: 'Technical Lead',
    flag: '🇨🇦',
    level: 2,
    reportsTo: 'Sarah Johnson'
  },
  {
    name: 'Elena Rodriguez',
    designation: 'Business Analyst',
    flag: '🇪🇸',
    level: 2,
    reportsTo: 'Sarah Johnson'
  },
  {
    name: 'Raj Patel',
    designation: 'Senior Developer',
    flag: '🇮🇳',
    level: 3,
    reportsTo: 'Michael Chen'
  },
  {
    name: 'Anna Kowalski',
    designation: 'QA Engineer',
    flag: '🇵🇱',
    level: 3,
    reportsTo: 'Michael Chen'
  },
  {
    name: 'Carlos Silva',
    designation: 'Data Analyst',
    flag: '🇧🇷',
    level: 3,
    reportsTo: 'Elena Rodriguez'
  },
  {
    name: 'Yuki Tanaka',
    designation: 'UX Designer',
    flag: '🇯🇵',
    level: 3,
    reportsTo: 'Elena Rodriguez'
  },
]

export default function TeamHero() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { threshold: 0.2 })
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-toggle carousel every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 1 ? 0 : prev + 1))
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const getLevelStyle = (level: number) => {
    const baseStyles = "bg-white border border-blue-200 rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300"
    const levelStyles = {
      1: "bg-gradient-to-r from-blue-50 to-blue-100 border-blue-300",
      2: "bg-gradient-to-r from-blue-50 to-white border-blue-200", 
      3: "bg-white border-blue-100"
    }
    return `${baseStyles} ${levelStyles[level as keyof typeof levelStyles] || levelStyles[3]}`
  }

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4 pt-14 pb-10 md:pt-20 md:pb-16">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-3">Team With You</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Cross‑functional experts collaborate to craft precise, compliant, and compelling proposals.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Carousel Slides */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {/* Slide 1: Team Members */}
              <div className="w-full flex-shrink-0">
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

              {/* Slide 2: Organizational Chart */}
              <div className="w-full flex-shrink-0">
                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">Organizational Structure</h3>
                    <p className="text-gray-600">Our global team structure with diverse expertise</p>
                  </div>
                  
                  <div className="space-y-4">
                    {/* Level 1 - Program Director */}
                    <div className="flex justify-center">
                      <div className={getLevelStyle(1)}>
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{orgMembers[0].flag}</span>
                          <div>
                            <div className="font-semibold text-gray-900">{orgMembers[0].name}</div>
                            <div className="text-sm text-blue-600">{orgMembers[0].designation}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Connector Line */}
                    <div className="flex justify-center">
                      <div className="w-px h-6 bg-blue-300"></div>
                    </div>

                    {/* Level 2 - Technical Lead & Business Analyst */}
                    <div className="flex justify-center gap-12">
                      {orgMembers.slice(1, 3).map((member, idx) => (
                        <div key={member.name} className="flex flex-col items-center">
                          <div className={getLevelStyle(2)}>
                            <div className="flex items-center gap-3">
                              <span className="text-xl">{member.flag}</span>
                              <div>
                                <div className="font-semibold text-gray-900">{member.name}</div>
                                <div className="text-sm text-blue-600">{member.designation}</div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Connector Line */}
                          <div className="w-px h-4 bg-blue-300 mt-2"></div>
                          
                          {/* Level 3 - Team Members */}
                          <div className="flex gap-3 mt-2">
                            {orgMembers.slice(3).filter(m => m.reportsTo === member.name).map((subMember) => (
                              <div key={subMember.name} className={getLevelStyle(3)}>
                                <div className="flex items-center gap-2">
                                  <span className="text-lg">{subMember.flag}</span>
                                  <div>
                                    <div className="font-medium text-gray-900 text-sm">{subMember.name}</div>
                                    <div className="text-xs text-blue-600">{subMember.designation}</div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            <button
              onClick={() => setCurrentSlide(0)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === 0 ? 'bg-blue-600' : 'bg-blue-300'
              }`}
            />
            <button
              onClick={() => setCurrentSlide(1)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === 1 ? 'bg-blue-600' : 'bg-blue-300'
              }`}
            />
          </div>
        </div>
      </div>
    </section>
  )
}


