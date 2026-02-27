const steps = [
  {
    num: '01',
    title: 'Book Your Assessment',
    desc: 'Choose a time that suits you online or give us a call. Your initial assessment takes 45 minutes — no referral needed.',
  },
  {
    num: '02',
    title: 'Get Your Treatment Plan',
    desc: "We’ll do a thorough assessment, explain exactly what’s going on, and build a personalised plan with clear goals and timeframes.",
  },
  {
    num: '03',
    title: 'Recover & Perform',
    desc: 'With hands-on treatment, tailored exercises, and ongoing support, you’ll get back to full strength — and stay there.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
          <span className="text-coral-500 font-semibold text-sm uppercase tracking-widest">How It Works</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-navy-900 mt-3 leading-tight">
            Three steps to <span className="text-coral-500">feeling your best</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((s, i) => (
            <div key={i} className="relative text-center md:text-left">
              <span className="font-display font-extrabold text-7xl lg:text-8xl text-navy-100">{s.num}</span>
              <h3 className="font-display font-bold text-xl text-navy-900 -mt-4 relative">{s.title}</h3>
              <p className="mt-3 text-navy-500 leading-relaxed">{s.desc}</p>
              {i < 2 && (
                <div className="hidden md:block absolute top-10 -right-6 lg:-right-8 text-navy-200">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" d="M9 5l7 7-7 7" /></svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
