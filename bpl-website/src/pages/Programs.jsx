import { Link } from 'react-router-dom'
import FadeInSection from '../components/FadeInSection'

const programs = [
  {
    title: 'Private Lessons',
    description:
      'One-on-one training with experienced coaches covering hitting, pitching, catching, and fielding. Available 7 days per week for athletes of all ages and skill levels.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: 'Team Training',
    description:
      'Facility rental for club, high school, and Little League teams with full access to turf area, long cage, and plyo wall. Team packages available from Bronze through Diamond tiers.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Camps & Clinics',
    description:
      'Multi-day camps and focused 1.5-hour clinics covering hitting, pitching, infield, and catching for both baseball and softball athletes. Seasonal programming offered year-round.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Leagues',
    description:
      'In-facility competitive leagues including HitTrax, Whiffle Ball, 2v2, and Cage Baseball. Multiple age divisions from 10U through Adult with 8-week seasons.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: 'Strength & Conditioning',
    description:
      'Athlete-specific programming focused on durability, explosiveness, speed, and injury prevention. Integrated with sport-specific training for maximum transfer to on-field performance.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Technology Sessions',
    description:
      'Data-driven training using HitTrax hitting analytics, Rapsodo pitching analysis, and video breakdown with mechanical review. Available as add-ons or standalone sessions.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Memberships',
    description:
      'Flexible membership tiers from Base to Pro designed for every type of athlete and family. Members receive discounts on lessons, camps, clinics, and cage reservations.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
  {
    title: 'Tournaments & Events',
    description:
      'Sanctioned tournaments through NCS and NABA covering youth baseball, fastpitch softball, slowpitch, and adult baseball. Events hosted across Central Oregon, Northern California, and Washington.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
]

export default function Programs() {
  return (
    <>
      {/* Header */}
      <section className="relative bg-gradient-to-b from-cream to-gray-bg pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--color-sand)_0%,_transparent_60%)] opacity-60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-navy mb-4 tracking-tight">
            Programs &amp; Services
          </h1>
          <p className="text-lg sm:text-xl text-gray-text max-w-2xl mx-auto">
            Development opportunities for athletes, teams, and families at every level.
          </p>
        </div>
      </section>

      {/* Program Cards Grid */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {programs.map((program, i) => (
              <FadeInSection key={program.title} delay={i * 60}>
                <div className="group bg-gray-bg rounded-xl p-6 h-full border border-transparent hover:border-steel/20 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center text-navy mb-4 group-hover:bg-navy group-hover:text-white transition-colors duration-300">
                    {program.icon}
                  </div>
                  <h3 className="text-lg font-heading font-bold text-navy mb-3">
                    {program.title}
                  </h3>
                  <p className="text-sm text-gray-text leading-relaxed">
                    {program.description}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
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
