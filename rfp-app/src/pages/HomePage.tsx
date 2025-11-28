import Header from '@/components/Header'
import TeamHero from '@/components/TeamHero'
import FeatureCards from '@/components/FeatureCards'
import { ChevronDown, Users, FileText, DollarSign, MessageSquare } from 'lucide-react'
import { useRef } from 'react'
import { useInView } from '@/hooks/useInView'

// Single page layout: sections below, footer removed

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null)
  const inView = useInView(heroRef, { threshold: 0.1 })

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-dvh bg-white">
      <Header />
      
      {/* New Collaboration Hero Section */}
      <section ref={heroRef} className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25" 
             style={{
               backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')"
             }}>
        </div>
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-blue-800/10"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 py-14 md:py-20">
          {/* Main content and CTA buttons side by side on desktop */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">
            {/* Left side: Main content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="mb-8">
                <h1 className="text-3xl md:text-5xl font-light text-gray-800 mb-4 leading-tight">
                  NESTE Consolidated IT Services
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 font-semibold">TCS Proposal</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                  Partnering with global leaders to deliver winning RFP responses with precision and innovation.
                </p>
              </div>
            </div>

            {/* Right side: Animated CTA Buttons */}
            <div className="lg:w-80">
              <div className="flex flex-col gap-3">
                {[
                  {
                    id: 'team',
                    title: 'Our Team',
                    description: 'Meet our experts',
                    icon: Users,
                    delay: 0
                  },
                  {
                    id: 'features',
                    title: 'Offer Intro',
                    description: 'Explore capabilities',
                    icon: FileText,
                    delay: 150
                  },
                  {
                    id: 'pricing',
                    title: 'Application Lots',
                    description: 'View plans',
                    icon: DollarSign,
                    delay: 300
                  },
                  {
                    id: 'contact',
                    title: 'Transformation Approach',
                    description: 'Get in touch',
                    icon: MessageSquare,
                    delay: 450
                  }
                ].map((cta) => (
                  <div
                    key={cta.id}
                    className={`group cursor-pointer transform transition-all duration-700 ${
                      inView ? 'opacity-0 [animation:slideInFromRight_0.8s_ease-out_forwards]' : 'opacity-0'
                    }`}
                    style={inView ? { animationDelay: `${cta.delay}ms` } : undefined}
                    onClick={() => scrollToSection(cta.id)}
                  >
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:border-blue-200">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md flex-shrink-0">
                          <cta.icon className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base font-semibold text-gray-900 mb-1 truncate">{cta.title}</h3>
                          <p className="text-xs text-gray-600 mb-1">{cta.description}</p>
                          <div className="flex items-center text-blue-600 group-hover:text-blue-700 transition-colors">
                            <span className="text-xs font-medium">Learn more</span>
                            <ChevronDown className="w-3 h-3 ml-1 group-hover:translate-y-1 transition-transform duration-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 text-blue-600 animate-bounce">
              <span className="text-sm font-medium">Scroll to explore</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </div>
      </section>

      <section id="team">
        <TeamHero />
      </section>
      <section id="features">
        <FeatureCards />
      </section>
      <section id="pricing" className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">Application Lots</h2>
          <p className="text-gray-600 text-sm">Contact us for pricing.</p>
        </div>
      </section>
      <section id="about" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">Infrastructure Lots</h2>
          <p className="text-gray-600 max-w-3xl">We help teams deliver winning RFP responses with speed and quality.</p>
        </div>
      </section>
      <section id="contact" className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">Transformation Approach</h2>
          <p className="text-gray-600">Email: contact@example.com</p>
        </div>
      </section>
    </div>
  )
}


