import { Link } from 'react-router-dom'
import FadeInSection from '../components/FadeInSection'
import FoundingMemberForm from '../components/FoundingMemberForm'
import heroBg from '../assets/hero-bg.jpg'
import batWallImg from '../assets/bat_wall.png'
import facilityRenderingImg from '../assets/facility_new.PNG'
import {
  FOUNDING_SPOTS_TOTAL,
  FOUNDING_SPOTS_CLAIMED,
  FOUNDING_SPOTS_REMAINING,
} from '../utils/foundingSpots'

const BENEFITS = [
  {
    title: 'Lifetime Family Membership',
    description:
      'Your entire household trains at Bend Performance Lab for life. No monthly dues. No renewals. Ever.',
    icon: 'M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z',
  },
  {
    title: 'Double the Booking Lead Time',
    description:
      'Reserve cages, lanes, and turf twice as far in advance as any other membership tier. You get first pick of the calendar.',
    icon: 'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5',
  },
  {
    title: 'First Access Before We Open',
    description:
      'A private founding members party inside the facility before the doors open to the public. You train here first.',
    icon: 'M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z',
  },
  {
    title: 'Your Place on the Bat Wall',
    description:
      'Founding members are included in the Bat Wall Society — a permanent, engraved bat inside the facility showing the community you made this happen.',
    icon: 'M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z',
  },
  {
    title: 'Pro Player Meet & Greets',
    description:
      'Meet-and-greet access to every professional player we bring in for camps, clinics, and community events.',
    icon: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z',
  },
  {
    title: 'Annual Holiday Thank-You Party',
    description:
      'A yearly holiday party for founding members and their families. Our way of saying thank you, every single year.',
    icon: 'M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z',
  },
  {
    title: 'Exclusive Annual Swag',
    description:
      'Custom BPL gear designed fresh each year and made only for founding members. It is not for sale to anyone else.',
    icon: 'M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z',
  },
  {
    title: 'A Real Seat at the Table',
    description:
      'Twice-yearly advisory meetings where founding members help set policy and shape the future planning of BPL.',
    icon: 'M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z',
  },
]

const STEPS = [
  {
    number: '01',
    title: 'Submit Your Interest',
    description:
      'Fill out the form below. Nothing is binding and no payment is required — it simply starts the conversation.',
  },
  {
    number: '02',
    title: 'Sit Down With a Founder',
    description:
      'We walk you through the full facility plan, the timeline, where the money goes, and answer every question you have.',
  },
  {
    number: '03',
    title: 'Take Your Place',
    description:
      'Complete your founding membership, choose your name for the Bat Wall, and get your invitation to the founding members party.',
  },
]

function BenefitIcon({ path }) {
  return (
    <svg
      className="w-6 h-6 text-accent"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
  )
}

function SpotsTicker() {
  return (
    <div className="max-w-xl mx-auto rounded-2xl border border-accent/30 bg-navy-dark/50 p-6 sm:p-8">
      <div className="flex items-baseline justify-between mb-4 gap-3">
        <span className="text-xs sm:text-sm font-heading font-bold text-white/60 uppercase tracking-widest">
          Founding Memberships
        </span>
        <span className="text-xs sm:text-sm font-heading font-bold text-accent uppercase tracking-widest">
          {FOUNDING_SPOTS_CLAIMED} of {FOUNDING_SPOTS_TOTAL} claimed
        </span>
      </div>

      <div
        className="flex gap-1.5 sm:gap-2 mb-6"
        role="img"
        aria-label={`${FOUNDING_SPOTS_CLAIMED} of ${FOUNDING_SPOTS_TOTAL} founding memberships claimed, ${FOUNDING_SPOTS_REMAINING} still available`}
      >
        {Array.from({ length: FOUNDING_SPOTS_TOTAL }, (_, i) => (
          <div
            key={i}
            className={`h-3 flex-1 rounded-full ${
              i < FOUNDING_SPOTS_CLAIMED ? 'bg-accent shadow-[0_0_12px_-2px_rgba(201,168,76,0.8)]' : 'bg-white/15'
            }`}
          />
        ))}
      </div>

      <div className="flex items-baseline justify-center gap-2">
        <span className="text-4xl sm:text-5xl font-heading font-black text-white">
          {FOUNDING_SPOTS_REMAINING}
        </span>
        <span className="text-base sm:text-lg font-heading font-semibold text-white/70">
          spots remaining
        </span>
      </div>
    </div>
  )
}

export default function FoundingMembers() {
  const scrollToForm = () => {
    const el = document.getElementById('founding-member-form')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Hero */}
      <section className="relative flex items-center overflow-hidden pt-32 sm:pt-40 pb-20 sm:pb-28">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/85 to-navy/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,168,76,0.18)_0%,_transparent_55%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-heading font-bold text-accent uppercase tracking-[0.2em] mb-5">
            Founding Membership
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-white mb-6 tracking-tight">
            Build It. Then Train Here<br className="hidden sm:block" /> For Life.
          </h1>
          <p className="text-lg sm:text-xl text-white/75 max-w-2xl mx-auto mb-10 leading-relaxed">
            Founding memberships are how Bend Performance Lab gets fully funded and across the finish
            line. Everyone who participates will have a direct hand in making sure this facility
            exists in Central Oregon.
          </p>

          <div className="inline-flex flex-col items-center gap-1 px-8 sm:px-12 py-6 rounded-2xl border-2 border-accent/40 bg-navy-dark/40 backdrop-blur-sm mb-10">
            <span className="text-4xl sm:text-5xl font-heading font-black text-accent">$25,000</span>
            <span className="text-sm sm:text-base font-heading font-semibold text-white/80 uppercase tracking-wider">
              Lifetime Family Membership
            </span>
          </div>

          <div>
            <button
              onClick={scrollToForm}
              className="btn-glow btn-glow-accent px-8 py-4 bg-accent hover:bg-accent-light text-navy font-heading font-bold rounded-lg transition-colors text-base"
            >
              Request Information
            </button>
          </div>
        </div>
      </section>

      {/* Why This Exists */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy mb-6">
                  This Is How We Get to the Finish Line
                </h2>
                <p className="text-lg text-gray-text leading-relaxed mb-4">
                  Bend Performance Lab is designed, planned, and moving. Founding memberships are the
                  final piece — the funding that takes this facility from renderings to open doors.
                </p>
                <p className="text-lg text-gray-text leading-relaxed mb-4">
                  This is not a donation and it is not a sponsorship. It is a lifetime membership for
                  your entire family, purchased before the building opens, by the people who made the
                  building possible.
                </p>
                <p className="text-xl font-heading font-semibold text-navy leading-relaxed">
                  Every founding member has a direct hand in ensuring this exists in Central Oregon.
                </p>
              </div>
              <img
                src={facilityRenderingImg}
                alt="Bend Performance Lab facility rendering"
                className="rounded-xl h-80 sm:h-96 w-full object-cover shadow-lg"
              />
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gray-bg py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center mb-14">
              <p className="text-sm font-heading font-bold text-accent uppercase tracking-widest mb-3">
                The Founding Member Package
              </p>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy mb-5">
                What Founding Members Receive
              </h2>
              <p className="text-lg text-gray-text leading-relaxed">
                One investment. A lifetime of access, recognition, and a permanent voice in how this
                facility runs.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {BENEFITS.map((benefit, i) => (
              <FadeInSection key={benefit.title} delay={(i % 2) * 100}>
                <div className="card-hover h-full bg-white rounded-xl p-7 border border-gray-200/60 shadow-sm">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                    <BenefitIcon path={benefit.icon} />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-navy mb-2">{benefit.title}</h3>
                  <p className="text-base text-gray-text leading-relaxed">{benefit.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Bat Wall tie-in */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <img
                src={batWallImg}
                alt="The Bat Wall at Bend Performance Lab"
                className="rounded-xl h-80 sm:h-96 w-full object-cover shadow-lg order-2 lg:order-1"
              />
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy mb-4">
                  Your Name Goes on the Wall
                </h2>
                <p className="text-lg text-gray-text leading-relaxed mb-4">
                  Every founding member is included in the Bat Wall Society — a permanent installation
                  inside the facility where each engraved bat represents a family, athlete, or business
                  that built this place from the ground up.
                </p>
                <p className="text-lg text-gray-text leading-relaxed mb-6">
                  Every athlete who ever trains here will walk past it.
                </p>
                <Link
                  to="/get-involved"
                  className="inline-flex items-center gap-2 text-steel hover:text-steel-light font-semibold transition-colors"
                >
                  Learn about the Bat Wall Society
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* The Investment */}
      <section className="bg-navy py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-8">
                The Investment
              </h2>
              <div className="inline-flex flex-col items-center gap-2 mb-8">
                <span className="text-5xl sm:text-6xl font-heading font-black text-accent">$25,000</span>
                <span className="text-base font-heading font-semibold text-white/80 uppercase tracking-wider">
                  One time · Lifetime family membership
                </span>
              </div>
              <p className="text-lg text-white/70 leading-relaxed mb-10">
                A founding membership covers your entire household for the life of the facility — no
                monthly dues, no annual renewals, no rate increases.
              </p>

              <SpotsTicker />

              <p className="text-lg text-white/70 leading-relaxed mt-8 mb-10">
                Only {FOUNDING_SPOTS_TOTAL} founding memberships will ever be offered. Once they are
                claimed, this opportunity closes permanently — there will never be another founding
                class at Bend Performance Lab.
              </p>
              <button
                onClick={scrollToForm}
                className="btn-glow btn-glow-accent px-8 py-4 bg-accent hover:bg-accent-light text-navy font-heading font-bold rounded-lg transition-colors text-base"
              >
                Start the Conversation
              </button>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy mb-4">
                How It Works
              </h2>
              <p className="text-lg text-gray-text max-w-2xl mx-auto">
                No pressure and no commitment to start. Just a conversation.
              </p>
            </div>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {STEPS.map((step, i) => (
              <FadeInSection key={step.number} delay={i * 120}>
                <div className="h-full bg-white rounded-xl p-8 border border-gray-200/60 shadow-sm">
                  <span className="text-3xl font-heading font-black text-accent/40">{step.number}</span>
                  <h3 className="text-xl font-heading font-bold text-navy mt-3 mb-3">{step.title}</h3>
                  <p className="text-base text-gray-text leading-relaxed">{step.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="founding-member-form" className="bg-gray-bg py-20 sm:py-28 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-10 max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy mb-4">
                Become a Founding Member
              </h2>
              <p className="text-lg text-gray-text leading-relaxed">
                Tell us a little about your family and we'll reach out personally with the full
                founding member details.
              </p>
            </div>
            <FoundingMemberForm />
            <p className="text-xs text-gray-text text-center mt-8 max-w-lg mx-auto leading-relaxed">
              Submitting this form is a non-binding expression of interest. No payment is required
              today. A member of the Bend Performance Lab founding team will follow up to confirm
              details, answer questions, and walk through next steps.
            </p>
          </FadeInSection>
        </div>
      </section>
    </>
  )
}
