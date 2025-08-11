import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm border-b border-blue-100">
      <div className="max-w-6xl mx-auto px-4 py-4 relative flex items-center justify-center">
        {/* Left: logo */}
        <Link to="/" className="text-xl font-semibold absolute left-4 md:left-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">TCS RFP</span>
        </Link>
        {/* Center: menu (transparent links to sections) */}
        <nav className="flex items-center gap-6 text-sm">
          <a href="#team" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">Team</a>
          <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">Offer Intro</a>
          <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">Application Lots</a>
          <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">Infrastructure Lots</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">Transformation Approach</a>
        </nav>
        {/* Right: transparent CTA */}
        <div className="absolute right-4 md:right-6">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300">
            <Link to="/new" className="text-white">Create RFP</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}


