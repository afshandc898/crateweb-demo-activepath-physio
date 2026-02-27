export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center gradient-navy overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-coral-500/10 blur-3xl" />
        <div className="absolute -bottom-60 -left-40 w-[500px] h-[500px] rounded-full bg-navy-400/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px'}} />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-24 pb-16 md:pt-32 md:pb-24 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-8 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-coral-400 animate-pulse" />
            <span className="text-sm text-white/80 font-medium">Now accepting new patients in Fitzroy</span>
          </div>

          <h1 className="font-display font-extrabold text-white text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
            Move better.<br />
            <span className="text-coral-400">Live better.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-navy-200 max-w-xl leading-relaxed">
            Expert physiotherapy in the heart of Fitzroy. From sports injuries to chronic pain, our hands-on approach gets you back to doing what you love — faster.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#booking" className="btn-primary text-base !px-8 !py-4">
              Book Your Assessment
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a href="#services" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-200 hover:-translate-y-0.5">
              Our Services
            </a>
          </div>

          {/* Trust signals */}
          <div className="mt-16 flex flex-wrap gap-x-8 gap-y-4 text-sm text-navy-300">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-coral-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              AHPRA Registered
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-coral-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              All Health Funds Accepted
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-coral-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              Same-Day Appointments
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full h-auto"><path d="M0 40C360 80 720 0 1080 40C1260 60 1380 60 1440 40V80H0V40Z" fill="white"/></svg>
      </div>
    </section>
  )
}
