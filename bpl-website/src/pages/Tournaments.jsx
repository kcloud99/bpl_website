import FadeInSection from '../components/FadeInSection'

export default function Tournaments() {
  return (
    <>
      {/* Header */}
      <section className="relative bg-gradient-to-b from-cream to-gray-bg pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--color-sand)_0%,_transparent_60%)] opacity-60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-navy mb-4 tracking-tight">
            Tournaments &amp; Events
          </h1>
          <p className="text-lg sm:text-xl text-gray-text max-w-2xl mx-auto">
            Competitive events powered by national tournament networks, based in Central Oregon.
          </p>
        </div>
      </section>

      {/* Section 1 — Tournament Network */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-navy mb-6">Tournament Network</h2>
              <p className="text-lg text-gray-text leading-relaxed mb-8">
                BPL's founding team includes leadership in two national tournament organizations, giving BPL the ability to host and operate sanctioned tournaments across Oregon, Northern California, and Washington.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-gray-bg rounded-xl p-6">
                  <h3 className="text-lg font-heading font-bold text-navy mb-3">National Championship Sports (NCS)</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-steel mt-2 shrink-0" />
                      <span className="text-sm text-gray-text">Sean Jacox — State Director</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-steel mt-2 shrink-0" />
                      <span className="text-sm text-gray-text">Ian MacDougall — Tournament Director</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-bg rounded-xl p-6">
                  <h3 className="text-lg font-heading font-bold text-navy mb-3">National Adult Baseball Association (NABA)</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-steel mt-2 shrink-0" />
                      <span className="text-sm text-gray-text">Sean Jacox — League President &amp; Tournament Director</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Section 2 — Tournament Types */}
      <section className="bg-navy py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white text-center mb-14">
              Tournament Types
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  title: 'NCS Baseball',
                  ages: '9U–18U',
                  desc: 'Youth travel baseball tournaments, 3–4 per season.',
                },
                {
                  title: 'NCS Fastpitch',
                  ages: '10U, 12U, 14U, HS',
                  desc: 'Softball tournaments, 1–2 per season.',
                },
                {
                  title: 'NCS Slowpitch',
                  ages: '18+ divisions',
                  desc: 'Adult slowpitch events — Cinco de Mayo, Fathers Day, Labor Day.',
                },
                {
                  title: 'NABA Adult Baseball',
                  ages: '18+, 25+, 35+, 45+, 65+',
                  desc: 'Adult baseball tournaments, Spring and Fall.',
                },
              ].map((tournament) => (
                <div key={tournament.title} className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-heading font-bold text-white mb-1">{tournament.title}</h3>
                  <p className="text-sm text-steel-light font-medium mb-3">{tournament.ages}</p>
                  <p className="text-sm text-white/60 leading-relaxed">{tournament.desc}</p>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Section 3 — Economic Impact */}
      <section className="bg-gray-bg py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-heading font-bold text-navy mb-6">Economic Impact</h2>
              <p className="text-lg text-gray-text leading-relaxed mb-8">
                Tournaments bring teams, families, and spending from across the Pacific Northwest into Central Oregon. BPL will serve as a home base for tournament operations, with games hosted at local outdoor fields across the region.
              </p>
              <div className="bg-white rounded-xl p-8 shadow-sm inline-block">
                <div className="text-4xl font-heading font-black text-navy mb-1">$150K+</div>
                <div className="text-sm text-gray-text font-medium">Estimated tournament revenue potential within 3–4 years</div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Section 4 — Leagues */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-navy mb-6">In-Facility Leagues</h2>
              <p className="text-gray-text leading-relaxed mb-8">
                Competitive leagues hosted inside BPL with multiple age divisions from 10U through Adult. All leagues run 8 weeks.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                {[
                  { title: 'HitTrax League', desc: '8 weeks' },
                  { title: 'Whiffle League', desc: '8 weeks' },
                  { title: '2v2 League', desc: '8 weeks' },
                ].map((league) => (
                  <div key={league.title} className="bg-gray-bg rounded-xl p-5 text-center">
                    <h3 className="font-heading font-bold text-navy mb-1">{league.title}</h3>
                    <p className="text-sm text-gray-text">{league.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-text italic text-center">
                Full league details available on the <a href="/programs" className="text-steel hover:text-steel-light underline">Programs page</a>.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInSection>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-4">
              Interested in hosting an event or entering a tournament?
            </h2>
            <a
              href="mailto:info@bendperformancelab.com"
              className="inline-flex items-center px-8 py-4 bg-steel hover:bg-steel-light text-white font-semibold rounded-lg transition-colors text-base"
            >
              Contact Us
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </FadeInSection>
        </div>
      </section>
    </>
  )
}
