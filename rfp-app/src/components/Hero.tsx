import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#5F259F] via-[#D71A64] to-[#FF6A00]" />
      <div className="max-w-6xl mx-auto px-4 py-20 md:py-28 text-white">
        <Badge variant="outline" className="bg-white/10 text-white border-white/30">
          Powered by shadcn/ui
        </Badge>
        <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
          Streamline Your RFP Responses
        </h1>
        <p className="mt-4 max-w-2xl text-white/90">
          Draft, collaborate, and submit winning RFP responses faster with a modern workflow and reusable templates.
        </p>
        <div className="mt-8 flex gap-3">
          <Button asChild>
            <Link to="/new">Start a New RFP</Link>
          </Button>
          <Button variant="outline" asChild>
            <a href="#features">Explore Features</a>
          </Button>
        </div>
      </div>
    </section>
  )
}


