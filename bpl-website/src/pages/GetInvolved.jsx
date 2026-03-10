import { useState } from 'react'
import FadeInSection from '../components/FadeInSection'
import batWallImg from '../assets/bat_wall.png'
import ContactForm from '../components/ContactForm'

export default function GetInvolved() {
  const [selectedInterest, setSelectedInterest] = useState('')

  const scrollToForm = (interest) => {
    setSelectedInterest(interest)
    const el = document.getElementById('contact-form')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Header */}
      <section className="relative bg-gradient-to-b from-cream to-gray-bg pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-sand)_0%,_transparent_60%)] opacity-60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-navy mb-4 tracking-tight">
            Get Involved
          </h1>
          <p className="text-lg sm:text-xl text-gray-text max-w-2xl mx-auto">
            Three ways to support the creation of Central Oregon's first dedicated baseball and softball performance facility — and earn your place on the Bat Wall.
          </p>
        </div>
      </section>

      {/* Section 1 — Bat Wall Society */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy mb-6">
                  The Bat Wall Society
                </h2>
                <p className="text-lg text-gray-text leading-relaxed">
                  Every founding supporter — whether a local business, an individual fan, or an investor — will be permanently recognized on the Bat Wall inside Bend Performance Lab. This is a limited, one-time founding opportunity to be part of building Bend's baseball and softball home.
                </p>
              </div>
              <img src={batWallImg} alt="The Bat Wall Society" className="rounded-xl h-72 w-full object-cover" />
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Section 2 — Business Sponsorship */}
      <section className="bg-gray-bg py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-navy mb-6">Business Sponsorship</h2>
              <p className="text-lg text-gray-text leading-relaxed mb-6">
                Thousands of athletes and families will walk through BPL's doors each year — and as one of the first businesses to partner with us, you'll be front and center from day one.
              </p>
              <p className="text-lg text-gray-text leading-relaxed mb-8">
                Early sponsors lock in the best placement and pricing before the facility opens. Whether it's signage in our training areas, logo presence at camps and tournaments, or digital features across our platforms — your brand will be seen by a dedicated, engaged audience of athletes, coaches, and families throughout Central Oregon.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {[
                  { tier: 'Grand Slam Sponsor', desc: 'Premier in-facility signage, event naming rights, and featured digital placement' },
                  { tier: 'Home Run Sponsor', desc: 'Prominent logo placement in training areas and inclusion at camps and tournaments' },
                  { tier: 'On Base Sponsor', desc: 'Bat Wall recognition and community supporter visibility throughout the facility' },
                ].map((tier) => (
                  <div key={tier.tier} className="bg-white rounded-xl p-6 shadow-sm text-center border border-gray-200/60">
                    <h3 className="text-lg font-heading font-bold text-navy mb-2">{tier.tier}</h3>
                    <p className="text-sm text-gray-text">{tier.desc}</p>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <button
                  onClick={() => scrollToForm('Business Sponsorship')}
                  className="px-8 py-4 bg-steel hover:bg-steel-light text-white font-semibold rounded-lg transition-colors text-base"
                >
                  Request Sponsorship Information
                </button>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Section 3 — Personal Support */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-heading font-bold text-navy mb-6">Individual &amp; Family Support</h2>
              <p className="text-lg text-gray-text leading-relaxed mb-8">
                Love baseball and softball in Central Oregon? Support the facility with a personal contribution and earn your name (or your athlete's name) on the Bat Wall. Perfect for families, former players, and anyone who wants to be part of building something lasting for the community.
              </p>
              <button
                onClick={() => scrollToForm('Personal Support')}
                className="px-8 py-4 bg-steel hover:bg-steel-light text-white font-semibold rounded-lg transition-colors text-base"
              >
                Support BPL
              </button>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Section 4 — Investment */}
      <section className="bg-navy py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-6">
                Invest in Bend Performance Lab
              </h2>
              <p className="text-lg text-white/70 leading-relaxed mb-6">
                BPL addresses a clear infrastructure gap in Central Oregon. We're building a sustainable, multi-revenue-stream facility — and we're offering equity opportunities to investors who want to be part of it from the ground floor.
              </p>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                If you're interested in learning more about investing in Bend Performance Lab, reach out below and we'll share the details.
              </p>
              <div className="text-center">
                <button
                  onClick={() => scrollToForm('Investment')}
                  className="px-8 py-4 bg-steel hover:bg-steel-light text-white font-semibold rounded-lg transition-colors text-base"
                >
                  Request Investor Information
                </button>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="bg-gray-bg py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-10">
              <h2 className="text-3xl font-heading font-bold text-navy mb-4">Get in Touch</h2>
              <p className="text-gray-text">
                Fill out the form below and we'll follow up with more information.
              </p>
            </div>
            <ContactForm defaultInterest={selectedInterest} />
          </FadeInSection>
        </div>
      </section>
    </>
  )
}
