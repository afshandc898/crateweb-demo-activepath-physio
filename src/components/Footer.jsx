export default function Footer() {
  return (
    <footer id="contact" className="gradient-navy text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#ff6b3d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 20 L12 4 L18 20" /><circle cx="12" cy="7" r="1.5" fill="#ff6b3d" stroke="none" />
                </svg>
              </div>
              <div className="leading-tight">
                <span className="font-display font-bold text-lg">ActivePath</span>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-navy-300 -mt-0.5">Physiotherapy</span>
              </div>
            </div>
            <p className="text-navy-300 text-sm leading-relaxed">Evidence-based physiotherapy in the heart of Fitzroy. Getting Melbourne moving since 2019.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-navy-300 mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {['About','Services','How It Works','Testimonials'].map(l => (
                <li key={l}><a href={`#${l.toLowerCase().replace(/ /g, '-')}`} className="text-navy-200 hover:text-coral-400 transition-colors text-sm">{l}</a></li>
              ))}
              <li><a href="#booking" className="text-coral-400 hover:text-coral-300 font-medium text-sm">Book Online →</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-navy-300 mb-4">Contact</h4>
            <ul className="space-y-2.5 text-sm text-navy-200">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-coral-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                Shop 4, 287 Brunswick St<br />Fitzroy VIC 3065
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-coral-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <a href="tel:0390417200" className="hover:text-coral-400 transition-colors">(03) 9041 7200</a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-coral-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <a href="mailto:hello@activepathphysio.com.au" className="hover:text-coral-400 transition-colors">hello@activepathphysio.com.au</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-navy-300 mb-4">Opening Hours</h4>
            <ul className="space-y-2 text-sm text-navy-200">
              <li className="flex justify-between"><span>Monday – Friday</span><span className="text-white font-medium">7am – 7pm</span></li>
              <li className="flex justify-between"><span>Saturday</span><span className="text-white font-medium">8am – 1pm</span></li>
              <li className="flex justify-between"><span>Sunday</span><span className="text-navy-400">Closed</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-navy-400">
          <p>&copy; {new Date().getFullYear()} ActivePath Physiotherapy. All rights reserved.</p>
          <p>Website by <a href="https://crateweb.com.au" target="_blank" rel="noopener noreferrer" className="text-coral-400 hover:text-coral-300 font-medium transition-colors">CrateWeb</a></p>
        </div>
      </div>
    </footer>
  )
}
