export default function BookingCTA() {
  return (
    <section id="booking" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="gradient-navy rounded-3xl px-6 sm:px-12 lg:px-20 py-16 md:py-20 text-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-coral-500/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-navy-300/20 blur-3xl" />

          <div className="relative">
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
              Ready to start your <span className="text-coral-400">recovery?</span>
            </h2>
            <p className="mt-4 text-lg text-navy-200 max-w-xl mx-auto">
              Book your initial assessment online in under 60 seconds. No referral required. Same-day appointments often available.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href="https://www.hotdoc.com.au" target="_blank" rel="noopener noreferrer" className="btn-primary text-base !px-8 !py-4">
                Book via HotDoc
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
              <a href="tel:0390417200" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-200">
                <svg className="mr-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                (03) 9041 7200
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
