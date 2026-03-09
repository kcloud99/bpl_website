import { Link } from 'react-router-dom'
import FadeInSection from '../components/FadeInSection'
import battingLanesImg from '../assets/batting_lanes.png'
import facilityRenderingImg from '../assets/facility_rendering.png'
import weightRoomImg from '../assets/bpl_weight_room.jpeg'

export default function Facility() {
  return (
    <>
      {/* Header */}
      <section className="relative bg-gradient-to-b from-cream to-gray-bg pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-sand)_0%,_transparent_60%)] opacity-60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-navy mb-4 tracking-tight">
            Inside Bend Performance Lab
          </h1>
          <p className="text-lg sm:text-xl text-gray-text max-w-2xl mx-auto">
            A 17,682 sq ft baseball and softball performance facility designed for complete athlete development.
          </p>
        </div>
      </section>

      {/* Section 1 — Training Cages & Lanes */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-heading font-bold text-navy mb-6">Training Cages &amp; Lanes</h2>
                <ul className="space-y-4">
                  {[
                    '100\' long cage with optional divider — converts to 3 full-size bullpens or 2 x 50\' cages',
                    '30\' hitting cage for focused work',
                    'High-performance lab: 65\' x 25\' with HitTrax and Rapsodo integration',
                    'Retractable curtain system configurable for individual, small group, and team use',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-steel mt-2 shrink-0" />
                      <span className="text-gray-text leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <img src={battingLanesImg} alt="Training Cages & Lanes" className="rounded-xl h-72 w-full object-cover" />
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Section 2 — Team Training Area */}
      <section className="bg-gray-bg py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img src={facilityRenderingImg} alt="Team Training Area" className="rounded-xl h-72 w-full object-cover" />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-heading font-bold text-navy mb-6">Team Training Area</h2>
                <ul className="space-y-4">
                  {[
                    '70\' x 45\' turfed infield area',
                    'Converts to 4 x 17\' x 45\' tunnels or 2 x 35\' x 45\' spaces',
                    'Designed for team practices, infield work, and defensive drills',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-steel mt-2 shrink-0" />
                      <span className="text-gray-text leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Section 3 — Strength & Performance */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-heading font-bold text-navy mb-6">Strength &amp; Performance</h2>
                <ul className="space-y-4 mb-6">
                  {[
                    '1,800 sq ft weight room: squat racks, barbells, baseball/softball-specific equipment, slam wall, sled area',
                    '700 sq ft plyometrics/medballs area for warmup, arm care, and recovery classes',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-steel mt-2 shrink-0" />
                      <span className="text-gray-text leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-text italic">
                  Programming emphasis: rotational power, lower body strength, arm care, deceleration training, speed and agility.
                </p>
              </div>
              <img src={weightRoomImg} alt="Strength & Performance Weight Room" className="rounded-xl h-72 w-full object-cover" />
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Section 4 — Technology */}
      <section className="bg-navy py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-6">Technology</h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                Measurable, data-driven feedback to accelerate development and track progress over time.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'HitTrax', desc: 'Hitting analytics with game simulation and performance metrics' },
                { title: 'Rapsodo', desc: 'Pitching data for baseball and softball — spin rate, break, velocity' },
                { title: 'Video Analysis', desc: 'Frame-by-frame mechanical review and progress tracking' },
                { title: 'ForceDecks & Perch', desc: 'Performance monitoring for strength, power, and readiness' },
              ].map((tech) => (
                <div key={tech.title} className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-heading font-bold text-white mb-2">{tech.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{tech.desc}</p>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Section 5 — Professional Offices */}
      <section className="bg-gray-bg py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-heading font-bold text-navy mb-6">Professional Offices</h2>
              <ul className="space-y-4 text-left max-w-xl mx-auto">
                {[
                  '10 private office suites',
                  'Designed for performance-aligned professionals: physical therapists, sports psychologists, nutrition specialists, performance coaches',
                  'Weight room access included for tenants',
                  'Coworking space available',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-steel mt-2 shrink-0" />
                    <span className="text-gray-text leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Section 6 — Facility at a Glance */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy text-center mb-14">
              Facility at a Glance
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-4xl mx-auto mb-12">
              {[
                { stat: '17,682', label: 'Square Feet' },
                { stat: '8+', label: 'Training Lanes' },
                { stat: '1,800', label: 'Sq Ft Weight Room' },
                { stat: '10', label: 'Office Suites' },
                { stat: '35+', label: 'Parking Spaces' },
              ].map((item) => (
                <div key={item.label} className="text-center p-5 bg-gray-bg rounded-xl">
                  <div className="text-2xl sm:text-3xl font-heading font-black text-navy mb-1">{item.stat}</div>
                  <div className="text-xs text-gray-text font-medium uppercase tracking-wider">{item.label}</div>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-text mb-8">Location: East Bend, Oregon</p>
            <div className="text-center">
              <Link
                to="/get-involved"
                className="inline-flex items-center px-8 py-4 bg-navy hover:bg-navy-light text-white font-semibold rounded-lg transition-colors text-base"
              >
                Get Involved
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  )
}
