import { useState } from 'react'
import FadeInSection from '../components/FadeInSection'
import batWallImg from '../assets/bat_wall.png'
import bplAdvertisingImg from '../assets/bpl_advertising.png'
import ContactForm from '../components/ContactForm'

const CORE_BENEFITS = [
  'A real bat mounted on the wall inside Bend Performance Lab',
  'Custom engraving with your family name, athlete name, or business',
  'Visibility inside a high-traffic training facility',
  'Recognition as a Founding Supporter',
  'Website recognition on BendPerformanceLab.com',
  'Social media feature and announcement',
  'Invitation to opening events and early access opportunities',
]

const BUSINESS_TIERS = [
  {
    name: 'Community Sponsor',
    price: '$10,000',
    perks: [
      'Engraved bat on the Bat Wall',
      'Standard 10-year branded signage placement in the facility',
      'All Bat Wall Society core benefits',
      'Business recognition on BendPerformanceLab.com',
    ],
  },
  {
    name: 'Premier Sponsor',
    price: '$25,000',
    featured: true,
    perks: [
      'Engraved bat with premium Bat Wall placement',
      '10-year branded signage in a high-traffic facility zone',
      'Featured digital presence across BPL channels',
      'Priority access to opening and community events',
      'All Bat Wall Society core benefits',
    ],
  },
  {
    name: 'Founding Partner',
    price: '$50,000',
    perks: [
      'Engraved bat in the centerpiece location of the Bat Wall',
      'Top-tier 10-year branded signage in the highest-visibility zones',
      'Naming opportunities at select facility areas',
      'Featured sponsor recognition across facility, web, and events',
      'VIP recognition at opening and community events',
    ],
  },
]

const INDIVIDUAL_TIERS = [
  {
    name: 'Supporter',
    price: '$500',
    perks: [
      'Engraved bat on the Bat Wall',
      'Recognition as a Founding Supporter',
      'Website and social media recognition',
      'Invitation to opening events',
    ],
  },
  {
    name: 'All-Star',
    price: '$2,000',
    featured: true,
    perks: [
      'Engraved bat with featured Bat Wall placement',
      'All Supporter benefits',
      'Special social media feature and announcement',
      'Priority access to opening events',
    ],
  },
  {
    name: 'Legend',
    price: '$5,000',
    perks: [
      'Engraved bat with premium Bat Wall placement',
      'All All-Star benefits',
      'VIP recognition at opening events',
      'Early access to facility programs and lessons',
    ],
  },
]

function CheckIcon({ className = 'text-accent' }) {
  return (
    <svg className={`w-5 h-5 flex-shrink-0 mt-0.5 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  )
}

function TierGrid({ tiers, accentTextClass = 'text-steel' }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {tiers.map((tier) => (
        <div
          key={tier.name}
          className={`relative rounded-xl p-8 flex flex-col ${tier.featured
              ? 'bg-navy text-white border-2 border-accent shadow-xl md:scale-105'
              : 'bg-white border border-gray-200/60 shadow-sm'
            }`}
        >
          {tier.featured && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-navy text-xs font-heading font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Most Popular
            </div>
          )}
          <h3 className={`text-xl font-heading font-bold mb-2 ${tier.featured ? 'text-white' : 'text-navy'}`}>
            {tier.name}
          </h3>
          <p className={`text-3xl font-heading font-black mb-6 ${tier.featured ? 'text-accent' : accentTextClass}`}>
            {tier.price}
          </p>
          <ul className="space-y-3 flex-1">
            {tier.perks.map((perk) => (
              <li key={perk} className="flex items-start gap-2">
                <CheckIcon className={tier.featured ? 'text-accent' : accentTextClass} />
                <span className={`text-sm leading-relaxed ${tier.featured ? 'text-white/90' : 'text-gray-text'}`}>
                  {perk}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default function GetInvolved() {
  const [selectedInterest, setSelectedInterest] = useState('')

  const scrollToForm = (interest) => {
    setSelectedInterest(interest)
    const el = document.getElementById('contact-form')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-cream to-gray-bg pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-sand)_0%,_transparent_60%)] opacity-60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-navy mb-4 tracking-tight">
            Join the Bat Wall Society
          </h1>
          <p className="text-xl sm:text-2xl font-heading font-semibold text-steel mb-6">
            Leave Your Mark at Bend Performance Lab
          </p>
          <p className="text-lg sm:text-xl text-gray-text max-w-2xl mx-auto mb-8">
            Be part of building Central Oregon's premier indoor baseball &amp; softball facility. From local businesses claiming prime 10-year advertising placement, to families honoring their athlete — the Bat Wall Society is for everyone who wants to make this facility possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => scrollToSection('business-sponsorship')}
              className="btn-glow px-8 py-4 bg-steel hover:bg-steel-light text-white font-semibold rounded-lg transition-colors text-base"
            >
              For Businesses
            </button>
            <button
              onClick={() => scrollToSection('individual-sponsorship')}
              className="btn-glow px-8 py-4 bg-white hover:bg-cream text-navy border-2 border-navy font-semibold rounded-lg transition-colors text-base"
            >
              For Individuals &amp; Families
            </button>
          </div>
        </div>
      </section>

      {/* Image Section — Your Name. On This Wall. */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <img src={batWallImg} alt="The Bat Wall at Bend Performance Lab" className="rounded-xl h-80 sm:h-96 w-full object-cover shadow-lg" />
              <div>
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy mb-3">
                  Your Name. On This Wall.
                </h2>
                <p className="text-xl font-heading font-semibold text-steel mb-6">
                  This is the Bat Wall Society.
                </p>
                <p className="text-lg text-gray-text leading-relaxed mb-4">
                  A permanent installation inside Bend Performance Lab where each bat represents a founding supporter — a family, athlete, or business who helped build this facility from the ground up.
                </p>
                <p className="text-lg text-navy font-semibold leading-relaxed">
                  Your family name. Your athlete's name. Your business.
                </p>
                <p className="text-lg text-gray-text leading-relaxed">
                  Displayed here — forever.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* What Is the Bat Wall Society */}
      <section className="bg-gray-bg py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy mb-6">
                What Is the Bat Wall Society
              </h2>
              <p className="text-lg text-gray-text leading-relaxed mb-6">
                The Bat Wall Society is a one-time opportunity to be recognized inside Bend Performance Lab through a custom bat installation displayed prominently in the facility.
              </p>
              <p className="text-lg text-gray-text leading-relaxed mb-6">
                Each sponsor receives a real bat mounted on the wall with their name engraved on it.
              </p>
              <p className="text-xl font-heading font-bold text-navy leading-relaxed">
                This is not temporary signage.<br />
                This is a permanent part of the facility.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Core Benefits */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy mb-4">
                  What Every Sponsor Receives
                </h2>
                <p className="text-lg text-gray-text">
                  Every Bat Wall Society sponsor — business, family, or individual — receives:
                </p>
              </div>
              <ul className="space-y-4 bg-gray-bg rounded-xl p-8 border border-gray-200/60">
                {CORE_BENEFITS.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-base sm:text-lg text-navy leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* For Businesses */}
      <section id="business-sponsorship" className="bg-gray-bg py-20 sm:py-28 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-sm font-heading font-bold text-accent uppercase tracking-widest mb-3">
                For Businesses
              </p>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy mb-6">
                A Prime 10-Year Advertising Opportunity
              </h2>
              <p className="text-lg text-gray-text leading-relaxed mb-6">
                Thousands of athletes, families, coaches, and community members will walk through BPL each year. Business sponsors get everything in the Bat Wall Society <strong className="text-navy">plus</strong> a dedicated 10-year branded advertising placement inside the facility — locking in long-term visibility before our doors even open.
              </p>
              <p className="text-base text-gray-text leading-relaxed">
                Higher contribution tiers receive larger, more prominent advertising placement in the facility's highest-traffic zones.
              </p>
            </div>
            <div className="max-w-5xl mx-auto mb-12">
              <img
                src={bplAdvertisingImg}
                alt="Example of business advertising placement inside Bend Performance Lab"
                className="rounded-xl w-full object-cover shadow-lg"
              />
            </div>
            <TierGrid tiers={BUSINESS_TIERS} />
            <div className="text-center mt-12">
              <button
                onClick={() => scrollToForm('Business Sponsorship')}
                className="btn-glow px-8 py-4 bg-steel hover:bg-steel-light text-white font-semibold rounded-lg transition-colors text-base"
              >
                Pledge Your Business Sponsorship
              </button>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* For Individuals & Families */}
      <section id="individual-sponsorship" className="bg-white py-20 sm:py-28 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-sm font-heading font-bold text-accent uppercase tracking-widest mb-3">
                For Individuals &amp; Families
              </p>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy mb-6">
                Honor Your Athlete. Build the Future of the Game.
              </h2>
              <p className="text-lg text-gray-text leading-relaxed">
                Love baseball and softball in Central Oregon? Reserve a bat on the wall with your family name, your athlete's name, or your own. Every individual sponsor receives the full Bat Wall Society experience — a permanent bat on the wall, founding supporter recognition, and an invitation to opening events.
              </p>
            </div>
            <TierGrid tiers={INDIVIDUAL_TIERS} />
            <div className="text-center mt-12">
              <button
                onClick={() => scrollToForm('Personal Support')}
                className="btn-glow px-8 py-4 bg-steel hover:bg-steel-light text-white font-semibold rounded-lg transition-colors text-base"
              >
                Pledge Your Individual Sponsorship
              </button>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="bg-navy py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-8">
                Why It Matters
              </h2>
              <p className="text-xl text-white/90 leading-relaxed mb-6">
                Every athlete who trains here will walk past this wall.
              </p>
              <p className="text-lg text-white/70 leading-relaxed mb-6">
                Every lesson, every team, every family — they will see the names of the people who made this space possible.
              </p>
              <p className="text-xl font-heading font-semibold text-accent leading-relaxed">
                This is your chance to be part of that foundation.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Pledge Section */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy mb-6">
                Reserve Your Spot Before It's Full
              </h2>
              <p className="text-lg text-gray-text leading-relaxed mb-4">
                There are a limited number of bats available on the wall.
              </p>
              <p className="text-lg text-gray-text leading-relaxed mb-4">
                We are currently accepting pledges to reserve placement as we finalize construction and investment.
              </p>
              <p className="text-lg text-navy font-semibold leading-relaxed mb-4">
                No payment is required to submit a pledge today.
              </p>
              <p className="text-base text-gray-text leading-relaxed mb-10">
                Spots will be reserved in the order pledges are received.
              </p>
              <button
                onClick={() => scrollToForm('Bat Wall Society Pledge')}
                className="btn-glow px-8 py-4 bg-steel hover:bg-steel-light text-white font-semibold rounded-lg transition-colors text-base"
              >
                Pledge Your Spot on the Bat Wall
              </button>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-10 max-w-2xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-navy mb-4">Get in Touch</h2>
              <p className="text-gray-text">
                Fill out the form below and we'll follow up with more information.
              </p>
            </div>
            <ContactForm defaultInterest={selectedInterest} />
            <p className="text-xs text-gray-text text-center mt-6 max-w-lg mx-auto leading-relaxed">
              Submitting this form is a non-binding pledge of interest. A member of Bend Performance Lab will follow up to confirm details, placement, and payment timeline.
            </p>
          </FadeInSection>
        </div>
      </section>
    </>
  )
}
