import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const tiers = [
  { name: 'Starter', price: '$0', features: ['1 project', 'Basic templates'] },
  { name: 'Pro', price: '$29', features: ['Unlimited projects', 'Team collaboration'] },
  { name: 'Enterprise', price: 'Contact us', features: ['SSO/SAML', 'Compliance workflows'] },
]

export default function PricingPage() {
  return (
    <div className="min-h-dvh flex flex-col bg-white">
      <Header />
      <main className="flex-1 max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-semibold text-center mb-8">Pricing</h1>
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <Card key={t.name}>
              <CardHeader>
                <CardTitle>{t.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{t.price}</div>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  {t.features.map((f) => (
                    <li key={f}>• {f}</li>
                  ))}
                </ul>
                <Button className="mt-6 w-full">Choose</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}


