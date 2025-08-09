import Header from '@/components/Header'
import Footer from '@/components/Footer'

export function AboutPage() {
  return (
    <div className="min-h-dvh flex flex-col bg-white">
      <Header />
      <main className="flex-1 max-w-3xl mx-auto px-4 py-12 prose">
        <h1>About</h1>
        <p>We help teams deliver winning RFP responses with speed and quality.</p>
      </main>
      <Footer />
    </div>
  )
}

export function ContactPage() {
  return (
    <div className="min-h-dvh flex flex-col bg-white">
      <Header />
      <main className="flex-1 max-w-3xl mx-auto px-4 py-12 prose">
        <h1>Contact</h1>
        <p>Email: contact@example.com</p>
      </main>
      <Footer />
    </div>
  )
}

export function TermsPage() {
  return (
    <div className="min-h-dvh flex flex-col bg-white">
      <Header />
      <main className="flex-1 max-w-3xl mx-auto px-4 py-12 prose">
        <h1>Terms</h1>
        <p>Terms of service will be placed here.</p>
      </main>
      <Footer />
    </div>
  )
}

export function PrivacyPage() {
  return (
    <div className="min-h-dvh flex flex-col bg-white">
      <Header />
      <main className="flex-1 max-w-3xl mx-auto px-4 py-12 prose">
        <h1>Privacy</h1>
        <p>Privacy policy will be placed here.</p>
      </main>
      <Footer />
    </div>
  )
}


