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
    <section id="features" className="py-14 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6">Why TCS RFP?</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {features.map((f, idx) => (
            <Card
              key={f.title}
              className="[animation:fadeInUp_0.7s_ease-out_forwards] opacity-0"
              style={{ animationDelay: `${idx * 120}ms` }}
            >
              <CardHeader>
                <CardTitle className="text-[#0077C8]">{f.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{f.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


