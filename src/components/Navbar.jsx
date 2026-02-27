import { useState } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-navy-100/50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg gradient-navy flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#ff6b3d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 20 L12 4 L18 20" />
              <circle cx="12" cy="7" r="1.5" fill="#ff6b3d" stroke="none" />
            </svg>
          </div>
          <div className="leading-tight">
            <span className="font-display font-bold text-navy-800 text-lg">ActivePath</span>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-navy-400 font-medium -mt-0.5">Physiotherapy</span>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-navy-600 hover:text-coral-500 transition-colors">{l.label}</a>
          ))}
          <a href="#booking" className="btn-primary text-sm !px-5 !py-2.5">Book Online</a>
        </div>

        {/* Mobile burger */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 -mr-2 text-navy-700" aria-label="Menu">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            {open ? <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" /> : <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-navy-100 px-5 pb-6 pt-4 space-y-4">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-base font-medium text-navy-700 hover:text-coral-500">{l.label}</a>
          ))}
          <a href="#booking" onClick={() => setOpen(false)} className="btn-primary w-full text-center mt-4">Book Online</a>
        </div>
      )}
    </nav>
  )
}
