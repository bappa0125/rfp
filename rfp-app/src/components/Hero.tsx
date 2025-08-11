import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Building2, 
  Shield, 
  Brain, 
  Leaf, 
  Target, 
  Users,
  Database,
  Zap,
  Globe,
  Lock,
  TrendingUp,
  Cpu,
  Cloud,
  BarChart3,
  Settings,
  Lightbulb,
  Network,
  Monitor,
  Code,
  Rocket,
  CheckCircle,
  ArrowRight,
  Star,
  Server,
  ShieldCheck,
  Activity,
  Palette,
  Target as TargetIcon,
  Users as UsersIcon,
  Briefcase,
  GitBranch,
  Zap as ZapIcon,
  Globe as GlobeIcon,
  Leaf as LeafIcon,
  CheckCircle as CheckCircleIcon,
  Target as TargetIcon2,
  Star as StarIcon,
  TrendingUp as TrendingUpIcon,
  BarChart3 as BarChart3Icon,
  Lightbulb as LightbulbIcon,
  Users as UsersIcon2,
  ArrowRight as ArrowRightIcon,
  Code as CodeIcon,
  Layers,
  Cpu as CpuIcon,
  Database as DatabaseIcon,
  Network as NetworkIcon,
  BarChart3 as BarChart3Icon2,
  Settings as SettingsIcon,
  Zap as ZapIcon2,
  CheckCircle as CheckCircleIcon2,
  Monitor as MonitorIcon,
  Lock as LockIcon,
  Brain as BrainIcon,
  TrendingUp as TrendingUpIcon2,
  Rocket as RocketIcon,
  Cloud as CloudIcon,
  Code as CodeIcon2,
  Globe as GlobeIcon2,
  Leaf as LeafIcon2,
  CheckCircle as CheckCircleIcon3,
  Target as TargetIcon3,
  Star as StarIcon2,
  BarChart3 as BarChart3Icon3,
  Briefcase as BriefcaseIcon,
  Target as TargetIcon4,
  Lightbulb as LightbulbIcon2,
  Users as UsersIcon3,
  ArrowRight as ArrowRightIcon2,
  GitBranch as GitBranchIcon,
  Users as UsersIcon4,
  Info,
  X
} from 'lucide-react'
import { useRef, useState } from 'react'
import { useInView } from '@/hooks/useInView'

export default function Hero() {
  const cardsRef = useRef<HTMLDivElement>(null)
  const inView = useInView(cardsRef, { threshold: 0.1 })
  const [flippedCards, setFlippedCards] = useState<{ [key: string]: boolean }>({})
  const [modalOpen, setModalOpen] = useState<{ [key: string]: boolean }>({})

  const toggleCard = (cardId: string) => {
    setFlippedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }))
  }

  const openModal = (cardId: string) => {
    setModalOpen(prev => ({
      ...prev,
      [cardId]: true
    }))
  }

  const closeModal = (cardId: string) => {
    setModalOpen(prev => ({
      ...prev,
      [cardId]: false
    }))
  }

  const cards = [
    {
      id: 'consolidation',
      title: 'Consolidation',
      icon: Building2,
      frontContent: {
        subtitle: 'Infrastructure Management',
        points: [
          { text: 'Unified Infrastructure Management', icon: Database },
          { text: 'Centralized System Integration', icon: Network },
          { text: 'Optimized Resource Allocation', icon: BarChart3 }
        ]
      },
      backContent: {
        subtitle: 'Operational Excellence',
        points: [
          { text: 'Streamlined Operations', icon: Settings },
          { text: 'Server Consolidation', icon: Server },
          { text: 'Network Optimization', icon: Activity }
        ]
      },
      details: {
        title: 'Consolidation Strategy',
        description: 'Comprehensive infrastructure consolidation approach focusing on unified management and operational excellence.',
        benefits: [
          'Reduced infrastructure complexity by 40%',
          'Improved resource utilization by 60%',
          'Enhanced system reliability and performance',
          'Streamlined operational processes',
          'Cost optimization through consolidation',
          'Standardized technology stack'
        ]
      }
    },
    {
      id: 'resilience',
      title: 'Resilience',
      icon: Shield,
      frontContent: {
        subtitle: 'Disaster Recovery',
        points: [
          { text: 'Disaster Recovery Solutions', icon: Zap },
          { text: 'Business Continuity Planning', icon: CheckCircle },
          { text: 'High Availability Systems', icon: Monitor }
        ]
      },
      backContent: {
        subtitle: 'Security & Monitoring',
        points: [
          { text: 'Robust Security Framework', icon: Lock },
          { text: 'Security Monitoring', icon: ShieldCheck },
          { text: 'Backup & Recovery', icon: CheckCircleIcon }
        ]
      },
      details: {
        title: 'Resilience Framework',
        description: 'Comprehensive resilience strategy ensuring business continuity and robust security measures.',
        benefits: [
          '99.9% uptime guarantee',
          'Automated disaster recovery',
          'Real-time security monitoring',
          'Comprehensive backup strategies',
          'Business continuity assurance',
          'Proactive threat detection'
        ]
      }
    },
    {
      id: 'ai-scaling',
      title: 'AI Scaling',
      icon: Brain,
      frontContent: {
        subtitle: 'Machine Learning',
        points: [
          { text: 'Machine Learning Integration', icon: Cpu },
          { text: 'Predictive Analytics', icon: TrendingUp },
          { text: 'Intelligent Automation', icon: Rocket }
        ]
      },
      backContent: {
        subtitle: 'Advanced AI',
        points: [
          { text: 'Advanced Data Processing', icon: Cloud },
          { text: 'AI Model Deployment', icon: Code },
          { text: 'Neural Network Optimization', icon: Brain }
        ]
      },
      details: {
        title: 'AI Scaling Strategy',
        description: 'Advanced AI and machine learning implementation for intelligent automation and predictive analytics.',
        benefits: [
          'Intelligent process automation',
          'Predictive maintenance capabilities',
          'Advanced data analytics',
          'AI-powered decision support',
          'Scalable ML infrastructure',
          'Real-time insights generation'
        ]
      }
    },
    {
      id: 'sustainable-it',
      title: 'Sustainable IT',
      icon: Leaf,
      frontContent: {
        subtitle: 'Green Technology',
        points: [
          { text: 'Green Technology Solutions', icon: Globe },
          { text: 'Energy-Efficient Systems', icon: ZapIcon },
          { text: 'Carbon Footprint Reduction', icon: LeafIcon }
        ]
      },
      backContent: {
        subtitle: 'Environmental Impact',
        points: [
          { text: 'Eco-Friendly Practices', icon: CheckCircleIcon },
          { text: 'Renewable Energy Integration', icon: GlobeIcon },
          { text: 'Sustainable Development', icon: Leaf }
        ]
      },
      details: {
        title: 'Sustainable IT Strategy',
        description: 'Environmentally conscious IT solutions focusing on green technology and sustainable practices.',
        benefits: [
          '40% reduction in energy consumption',
          'Carbon-neutral operations',
          'Green technology adoption',
          'Sustainable development practices',
          'Renewable energy integration',
          'Environmental compliance'
        ]
      }
    },
    {
      id: 'business-centricity',
      title: 'Business Centricity',
      icon: Target,
      frontContent: {
        subtitle: 'Strategic Alignment',
        points: [
          { text: 'Strategic Alignment', icon: TargetIcon },
          { text: 'Value-Driven Solutions', icon: StarIcon },
          { text: 'Performance Optimization', icon: TrendingUpIcon }
        ]
      },
      backContent: {
        subtitle: 'Business Value',
        points: [
          { text: 'ROI-Focused Delivery', icon: BarChart3Icon },
          { text: 'Business Process Optimization', icon: Briefcase },
          { text: 'Strategic Planning', icon: TargetIcon2 }
        ]
      },
      details: {
        title: 'Business Centricity Approach',
        description: 'Business-focused strategy ensuring alignment with organizational goals and value-driven delivery.',
        benefits: [
          'Strategic goal alignment',
          'Value-driven solution delivery',
          'Performance optimization',
          'ROI-focused outcomes',
          'Business process improvement',
          'Strategic planning support'
        ]
      }
    },
    {
      id: 'capability-lead',
      title: 'Capability Lead Operating Model',
      icon: Users,
      frontContent: {
        subtitle: 'Framework Design',
        points: [
          { text: 'Innovative Framework Design', icon: LightbulbIcon },
          { text: 'Enhanced Team Capabilities', icon: UsersIcon },
          { text: 'Agile Methodology Integration', icon: ArrowRightIcon }
        ]
      },
      backContent: {
        subtitle: 'Team Development',
        points: [
          { text: 'Continuous Improvement', icon: CodeIcon },
          { text: 'Team Collaboration Tools', icon: GitBranch },
          { text: 'Skill Development Programs', icon: UsersIcon2 }
        ]
      },
      details: {
        title: 'Capability Lead Operating Model',
        description: 'Comprehensive operating model focusing on team capabilities, collaboration, and continuous improvement.',
        benefits: [
          'Enhanced team capabilities',
          'Improved collaboration',
          'Continuous skill development',
          'Agile methodology adoption',
          'Innovation framework',
          'Operational excellence'
        ]
      }
    }
  ]

  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4 py-20 md:py-28">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            TCS Plan for NESTE
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
            Comprehensive digital transformation strategy delivering innovation, efficiency, and sustainable growth.
          </p>
        </div>

        {/* Cards Section */}
        <div ref={cardsRef} className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <div
                key={card.id}
                className={`relative h-72 cursor-pointer perspective-1000 ${
                  inView ? 'opacity-0 [animation:fadeInUp_0.8s_ease-out_forwards]' : 'opacity-0'
                }`}
                style={inView ? { animationDelay: `${index * 150}ms` } : undefined}
                onClick={() => toggleCard(card.id)}
              >
                <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                  flippedCards[card.id] ? 'rotate-y-180' : ''
                }`}>
                  {/* Front Side */}
                  <Card className="absolute w-full h-full backface-hidden border border-blue-200 hover:border-blue-300 bg-white flex flex-col">
                    <CardHeader className="text-center pb-2 bg-gradient-to-br from-blue-50 to-white border-b border-blue-100 flex-shrink-0">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center mx-auto mb-2 shadow-md">
                        <card.icon className="w-4 h-4 text-white" />
                      </div>
                      <CardTitle className="text-base font-semibold text-gray-900">{card.title}</CardTitle>
                      <p className="text-xs text-blue-600 font-medium">{card.frontContent.subtitle}</p>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col pt-3 pb-2 px-4">
                      <div className="flex-1 space-y-2">
                        {card.frontContent.points.map((point, pointIndex) => (
                          <div
                            key={pointIndex}
                            className="flex items-start gap-2 p-2 rounded-md bg-blue-50/50 hover:bg-blue-100/50 transition-all duration-300"
                          >
                            <div className="w-4 h-4 rounded-sm bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <point.icon className="w-2 h-2 text-blue-600" />
                            </div>
                            <p className="text-xs text-gray-700 leading-relaxed font-medium">{point.text}</p>
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-center mt-3 flex-shrink-0">
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-xs px-3 py-1 h-7 border-blue-300 text-blue-700 hover:bg-blue-50"
                          onClick={(e) => {
                            e.stopPropagation();
                            openModal(card.id);
                          }}
                        >
                          <Info className="w-3 h-3 mr-1" />
                          Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Back Side */}
                  <Card className="absolute w-full h-full backface-hidden rotate-y-180 border border-blue-200 hover:border-blue-300 bg-white flex flex-col">
                    <CardHeader className="text-center pb-2 bg-gradient-to-br from-blue-50 to-white border-b border-blue-100 flex-shrink-0">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center mx-auto mb-2 shadow-md">
                        <card.icon className="w-4 h-4 text-white" />
                      </div>
                      <CardTitle className="text-base font-semibold text-gray-900">{card.title}</CardTitle>
                      <p className="text-xs text-blue-600 font-medium">{card.backContent.subtitle}</p>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col pt-3 pb-2 px-4">
                      <div className="flex-1 space-y-2">
                        {card.backContent.points.map((point, pointIndex) => (
                          <div
                            key={pointIndex}
                            className="flex items-start gap-2 p-2 rounded-md bg-blue-50/50 hover:bg-blue-100/50 transition-all duration-300"
                          >
                            <div className="w-4 h-4 rounded-sm bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <point.icon className="w-2 h-2 text-blue-600" />
                            </div>
                            <p className="text-xs text-gray-700 leading-relaxed font-medium">{point.text}</p>
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-center mt-3 flex-shrink-0">
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-xs px-3 py-1 h-7 border-blue-300 text-blue-700 hover:bg-blue-50"
                          onClick={(e) => {
                            e.stopPropagation();
                            openModal(card.id);
                          }}
                        >
                          <Info className="w-3 h-3 mr-1" />
                          Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {cards.map((card) => (
        modalOpen[card.id] && (
          <div key={card.id} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center">
                    <card.icon className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">{card.details.title}</h2>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => closeModal(card.id)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-6 leading-relaxed">{card.details.description}</p>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Benefits:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {card.details.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-blue-50">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700 font-medium">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-end p-6 border-t border-gray-200">
                <Button
                  onClick={() => closeModal(card.id)}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        )
      ))}
    </section>
  )
}


