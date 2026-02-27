const testimonials = [
  {
    quote: "After my ACL reconstruction, I was told I'd be out for 12 months. Sarah and the team had me back on the football field in 9. The rehab program was intense but incredibly well-structured — I felt stronger coming back than before the injury.",
    name: 'Marcus T.',
    detail: 'ACL Reconstruction Rehab',
    stars: 5,
  },
  {
    quote: "I'd been living with chronic lower back pain for years and just accepted it. James showed me exactly what was causing it and gave me exercises I could actually stick with. Three months later, I'm pain-free for the first time in a decade.",
    name: 'Rachel W.',
    detail: 'Chronic Back Pain',
    stars: 5,
  },
  {
    quote: "Priya was incredible through my pregnancy and postpartum recovery. She made me feel completely comfortable, explained everything clearly, and the pelvic floor program she designed made a world of difference. Can't recommend her enough.",
    name: 'Emma L.',
    detail: "Postnatal Women's Health",
    stars: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-navy-50/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
          <span className="text-coral-500 font-semibold text-sm uppercase tracking-widest">Testimonials</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-navy-900 mt-3 leading-tight">
            Real results from <span className="text-coral-500">real patients</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 lg:p-8 border border-navy-100/60 flex flex-col">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.stars)].map((_, j) => (
                  <svg key={j} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-navy-700 leading-relaxed flex-1">"{t.quote}"</blockquote>
              <div className="mt-6 pt-5 border-t border-navy-100">
                <p className="font-semibold text-navy-900">{t.name}</p>
                <p className="text-sm text-navy-400">{t.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
