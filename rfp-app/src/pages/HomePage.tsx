import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TeamHero from '@/components/TeamHero'
import FeatureCards from '@/components/FeatureCards'
// Single page layout: sections below, footer removed

export default function HomePage() {
  return (
    <div className="min-h-dvh bg-white">
      <Header />
      <section id="team">
        <TeamHero />
      </section>
      <section id="features">
        <Hero />
        <FeatureCards />
      </section>
      <section id="pricing" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-6">Pricing</h2>
          <p className="text-gray-600 text-sm">Contact us for pricing.</p>
        </div>
      </section>
      <section id="about" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-3">About</h2>
          <p className="text-gray-600 max-w-3xl">We help teams deliver winning RFP responses with speed and quality.</p>
        </div>
      </section>
      <section id="contact" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-3">Contact</h2>
          <p className="text-gray-600">Email: contact@example.com</p>
        </div>
      </section>
    </div>
  )
}


