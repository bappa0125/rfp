import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 py-3 relative flex items-center justify-center">
        {/* Left: logo */}
        <Link to="/" className="text-xl font-semibold absolute left-4 md:left-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#5F259F] via-[#D71A64] to-[#FF6A00]">TCS RFP</span>
        </Link>
        {/* Center: menu (transparent links to sections) */}
        <nav className="flex items-center gap-6 text-sm">
          <a href="#team" className="hover:underline">Team</a>
          <a href="#features" className="hover:underline">Features</a>
          <a href="#pricing" className="hover:underline">Pricing</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
        {/* Right: transparent CTA */}
        <div className="absolute right-4 md:right-6">
          <Button variant="ghost" asChild>
            <Link to="/new">Create RFP</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}


