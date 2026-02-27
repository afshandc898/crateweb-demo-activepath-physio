const services = [
  {
    title: 'Sports Injury & Rehab',
    desc: 'From weekend warriors to elite athletes — we diagnose, treat, and get you back in the game with evidence-based sports rehabilitation.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-7 h-7">
        <circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
  },
  {
    title: 'Back & Neck Pain',
    desc: 'Chronic or acute — we find the root cause of your pain and build a recovery plan that provides lasting relief, not just a quick fix.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-7 h-7">
        <path d="M12 2v6m0 4v10M8 8h8M9 4h6" />
      </svg>
    ),
  },
  {
    title: 'Post-Surgery Recovery',
    desc: 'Structured post-operative rehabilitation programs for knee, hip, shoulder, and spinal surgeries. We work closely with your surgeon.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-7 h-7">
        <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" /><rect x="3" y="3" width="18" height="18" rx="4" />
      </svg>
    ),
  },
  {
    title: "Women's Health Physio",
    desc: "Specialised care for pelvic floor dysfunction, prenatal & postnatal recovery, and women's health conditions in a supportive environment.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-7 h-7">
        <circle cx="12" cy="8" r="5" /><path d="M12 13v8m-3-3h6" />
      </svg>
    ),
  },
  {
    title: 'Dry Needling',
    desc: 'Targeted trigger point dry needling to release muscle tension, reduce pain, and restore movement. Often combined with manual therapy.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-7 h-7">
        <path d="M12 2L12 22M8 6l4-4 4 4" />
      </svg>
    ),
  },
  {
    title: 'Exercise Therapy',
    desc: 'Individualised exercise programs designed to rehabilitate injury, build strength, and prevent recurrence. Gym-based and home programs available.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-7 h-7">
        <path d="M6.5 6.5l11 11M6.5 17.5l11-11M2 12h4m12 0h4M12 2v4m0 12v4" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="services" className="section-padding bg-navy-50/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
          <span className="text-coral-500 font-semibold text-sm uppercase tracking-widest">Our Services</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-navy-900 mt-3 leading-tight">
            Expert care for every <span className="text-coral-500">stage of recovery</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((s, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 lg:p-8 border border-navy-100/60 hover:border-coral-200 hover:shadow-lg hover:shadow-coral-100/30 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-xl bg-navy-800 text-coral-400 flex items-center justify-center mb-5 group-hover:bg-coral-500 group-hover:text-white transition-colors duration-300">
                {s.icon}
              </div>
              <h3 className="font-display font-bold text-lg text-navy-900">{s.title}</h3>
              <p className="mt-2 text-navy-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
