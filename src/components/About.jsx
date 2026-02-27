const team = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Principal Physiotherapist',
    quals: 'BPhysio (Hons), MACP',
    bio: 'With 12 years in sports and musculoskeletal physio, Sarah founded ActivePath to bring evidence-based care to Fitzroy. She has a special interest in running injuries and ACL rehabilitation.',
    color: 'bg-coral-100 text-coral-600',
    initials: 'SC',
  },
  {
    name: 'James Okonkwo',
    role: 'Senior Physiotherapist',
    quals: 'BPhysio, Cert Dry Needling',
    bio: 'James brings 8 years of experience in spinal rehabilitation and chronic pain management. He believes in empowering patients through movement and education.',
    color: 'bg-navy-100 text-navy-600',
    initials: 'JO',
  },
  {
    name: 'Priya Sharma',
    role: 'Physiotherapist',
    quals: "BPhysio, Women's Health Cert",
    bio: "Priya specialises in women's health physiotherapy and post-surgical recovery. She combines manual therapy with tailored exercise programs for lasting results.",
    color: 'bg-amber-100 text-amber-600',
    initials: 'PS',
  },
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Intro */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="text-coral-500 font-semibold text-sm uppercase tracking-widest">About Us</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-navy-900 mt-3 leading-tight">
            Your recovery is personal.<br className="hidden sm:block" />
            <span className="text-coral-500">So is our approach.</span>
          </h2>
          <p className="mt-5 text-lg text-navy-600 leading-relaxed">
            ActivePath Physiotherapy is a boutique clinic in the heart of Fitzroy, built on the belief that great physio starts with listening. We take the time to understand your body, your goals, and your life — then create a plan that actually works.
          </p>
        </div>

        {/* Team cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {team.map((t) => (
            <div key={t.name} className="group bg-navy-50/50 rounded-2xl p-6 lg:p-8 hover:bg-white hover:shadow-xl hover:shadow-navy-200/40 transition-all duration-300 border border-transparent hover:border-navy-100">
              <div className={`w-16 h-16 rounded-2xl ${t.color} flex items-center justify-center text-xl font-display font-bold mb-5`}>
                {t.initials}
              </div>
              <h3 className="font-display font-bold text-xl text-navy-900">{t.name}</h3>
              <p className="text-coral-500 font-medium text-sm mt-1">{t.role}</p>
              <p className="text-navy-400 text-xs mt-0.5">{t.quals}</p>
              <p className="mt-4 text-navy-600 text-sm leading-relaxed">{t.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
