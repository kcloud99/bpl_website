import { Link } from 'react-router-dom'
import FadeInSection from '../components/FadeInSection'

export default function Programs() {
  return (
    <>
      {/* Header */}
      <section className="relative bg-gradient-to-b from-cream to-gray-bg pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--color-sand)_0%,_transparent_60%)] opacity-60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-navy mb-4 tracking-tight">
            Training Programs
          </h1>
          <p className="text-lg sm:text-xl text-gray-text max-w-2xl mx-auto mb-6">
            Development opportunities for athletes, teams, and families at every level.
          </p>
          <div className="inline-block bg-navy/5 rounded-lg px-6 py-3 border border-navy/10">
            <p className="text-sm text-gray-text">
              Pricing subject to change. Final rates will be confirmed before opening.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1 — Private Lessons */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-navy mb-6">Private Lessons</h2>
              <p className="text-gray-text leading-relaxed mb-6">
                One-on-one training with experienced coaches covering hitting, pitching, catching, and fielding instruction. Lessons are available 7 days per week.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-bg rounded-xl p-6">
                  <div className="text-2xl font-heading font-bold text-navy">$80</div>
                  <div className="text-sm text-gray-text">per session — Members</div>
                </div>
                <div className="bg-gray-bg rounded-xl p-6">
                  <div className="text-2xl font-heading font-bold text-navy">$100</div>
                  <div className="text-sm text-gray-text">per session — Non-members</div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Section 2 — Team Training */}
      <section className="bg-gray-bg py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-navy mb-6">Team Training</h2>
              <p className="text-gray-text leading-relaxed mb-6">
                Facility rental for club, high school, and Little League teams with full facility access including turf area, long cage, and plyo wall. Team packages available from Bronze through Diamond tiers.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="text-2xl font-heading font-bold text-navy">$130–150</div>
                  <div className="text-sm text-gray-text">per hour facility rate</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="text-2xl font-heading font-bold text-navy">40+</div>
                  <div className="text-sm text-gray-text">committed team hours per week</div>
                </div>
              </div>
              <p className="text-sm text-gray-text mt-4 italic">Volume discounts available for teams with regular bookings.</p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Section 3 — Camps & Clinics */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-navy mb-6">Camps &amp; Clinics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-heading font-bold text-navy mb-3">Camps</h3>
                  <p className="text-gray-text leading-relaxed mb-3">
                    Multi-hour and multi-day programs covering hitting, pitching, infield, and catching — for both baseball and softball athletes.
                  </p>
                  <div className="bg-gray-bg rounded-xl p-4">
                    <span className="text-lg font-heading font-bold text-navy">Up to $300</span>
                    <span className="text-sm text-gray-text ml-2">for multi-day camps</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-navy mb-3">Clinics</h3>
                  <p className="text-gray-text leading-relaxed mb-3">
                    1.5-hour focused sessions on specific skills. Seasonal programming offered Fall, Winter, Spring, and Summer.
                  </p>
                  <div className="bg-gray-bg rounded-xl p-4">
                    <span className="text-lg font-heading font-bold text-navy">From $75</span>
                    <span className="text-sm text-gray-text ml-2">per clinic</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Section 4 — Leagues */}
      <section className="bg-navy py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-white mb-6">Leagues</h2>
              <p className="text-white/70 leading-relaxed mb-8">
                In-facility competitive leagues with multiple age divisions. All leagues run 8 weeks at $300 per team.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: 'HitTrax League', desc: '2 games/week — 12U, 14U, HS, Adult divisions' },
                  { title: 'Whiffle League', desc: '10U, 12U, 14U, HS, Adult divisions' },
                  { title: '2v2 League', desc: '7-inning games — 14U, HS, Adult divisions' },
                  { title: 'Cage Baseball League', desc: 'Played in the high-performance lab' },
                ].map((league) => (
                  <div key={league.title} className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h3 className="text-lg font-heading font-bold text-white mb-2">{league.title}</h3>
                    <p className="text-sm text-white/60">{league.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Section 5 — Strength & Conditioning */}
      <section className="bg-gray-bg py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-navy mb-6">Strength &amp; Conditioning</h2>
              <p className="text-gray-text leading-relaxed mb-6">
                Athlete-specific programming focused on durability, explosiveness, speed, and injury prevention. Integrated with sport-specific programming for maximum transfer to on-field performance.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="text-2xl font-heading font-bold text-navy">$85</div>
                  <div className="text-sm text-gray-text">per team lift session</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="text-2xl font-heading font-bold text-navy">$800</div>
                  <div className="text-sm text-gray-text">10-session pack</div>
                </div>
              </div>
              <p className="text-sm text-gray-text mt-4 italic">Trainer-led team sessions also available.</p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Section 6 — Technology Sessions */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-navy mb-6">Technology Sessions</h2>
              <p className="text-gray-text leading-relaxed mb-6">
                Data-driven training sessions using BPL's technology suite. Available as add-ons to existing bookings or as standalone sessions.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  'HitTrax hitting analytics sessions',
                  'Rapsodo pitching analysis',
                  'Video breakdown & mechanical review',
                ].map((item) => (
                  <div key={item} className="bg-gray-bg rounded-xl p-5 text-center">
                    <p className="text-sm font-medium text-navy">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Section 7 — Memberships */}
      <section className="bg-navy py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-6">Memberships</h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                Flexible membership tiers designed for every type of athlete and family.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  title: 'Base',
                  price: '$80',
                  period: '/mo',
                  features: ['20% off lessons', '20% off camps & clinics', '20% off cage reservations'],
                },
                {
                  title: 'Premier',
                  price: '$120',
                  period: '/mo',
                  features: ['All Base benefits', 'Gym membership included'],
                  highlight: true,
                },
                {
                  title: 'Family',
                  price: '$200',
                  period: '/mo',
                  features: ['All Base benefits', '3 gym memberships included'],
                },
                {
                  title: 'Pro Individual',
                  price: '$1,000',
                  period: '/mo',
                  features: ['Full facility access', 'High-performance area', 'Gym included', 'Daytime access 7am–2pm', 'Annual options available'],
                  note: 'Designed for MLB/MiLB offseason athletes',
                },
                {
                  title: 'Family Gym Add-On',
                  price: '$40',
                  period: '/mo',
                  features: ['Available for any player membership', 'Additional gym access for family member'],
                },
              ].map((tier) => (
                <div
                  key={tier.title}
                  className={`rounded-xl p-6 ${
                    tier.highlight
                      ? 'bg-steel text-white ring-2 ring-steel-light'
                      : 'bg-white/5 text-white border border-white/10'
                  }`}
                >
                  <h3 className="text-lg font-heading font-bold mb-1">{tier.title}</h3>
                  {tier.note && (
                    <p className={`text-xs mb-3 ${tier.highlight ? 'text-white/80' : 'text-white/50'}`}>{tier.note}</p>
                  )}
                  <div className="mb-4">
                    <span className="text-3xl font-heading font-black">{tier.price}</span>
                    <span className={`text-sm ${tier.highlight ? 'text-white/80' : 'text-white/50'}`}>{tier.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <svg className={`w-4 h-4 mt-0.5 shrink-0 ${tier.highlight ? 'text-white' : 'text-steel-light'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className={tier.highlight ? 'text-white/90' : 'text-white/70'}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-bg py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInSection>
            <h2 className="text-2xl font-heading font-bold text-navy mb-4">
              Join the Community for Early Access
            </h2>
            <Link
              to="/#signup"
              className="inline-flex items-center px-8 py-4 bg-navy hover:bg-navy-light text-white font-semibold rounded-lg transition-colors text-base"
            >
              Sign Up for Updates
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </FadeInSection>
        </div>
      </section>
    </>
  )
}
