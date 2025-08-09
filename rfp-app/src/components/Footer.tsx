import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8 grid gap-6 md:grid-cols-4 text-sm">
        <div>
          <div className="font-semibold">TCS RFP</div>
          <p className="mt-2 text-gray-600">Streamline your RFP responses.</p>
        </div>
        <div>
          <div className="font-semibold mb-2">Product</div>
          <ul className="space-y-1 text-gray-600">
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Company</div>
          <ul className="space-y-1 text-gray-600">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Legal</div>
          <ul className="space-y-1 text-gray-600">
            <li><Link to="/terms">Terms</Link></li>
            <li><Link to="/privacy">Privacy</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-gray-500">© {new Date().getFullYear()} TCS RFP</div>
    </footer>
  )
}


