import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export default function FeatureCards() {
  const features = [
    {
      title: 'Template Library',
      description: 'Re-use approved answers and sections to respond consistently and quickly.',
    },
    {
      title: 'Collaboration',
      description: 'Assign sections, track progress, and collect inputs across teams.',
    },
    {
      title: 'Quality & Compliance',
      description: 'Ensure reviews and approvals before submission to meet compliance needs.',
    },
  ]

  return (
    <section id="features" className="py-14 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900">Offer Intro</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((f, idx) => (
            <Card
              key={f.title}
              className="border border-blue-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 [animation:fadeInUp_0.7s_ease-out_forwards] opacity-0"
              style={{ animationDelay: `${idx * 120}ms` }}
            >
              <CardHeader>
                <CardTitle className="text-blue-600 font-semibold">{f.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700 leading-relaxed">{f.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


