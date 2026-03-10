import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import FadeInSection from '../components/FadeInSection'
import PlaceholderImage from '../components/PlaceholderImage'
import SurveyForm from '../components/SurveyForm'
import EmailSignup from '../components/EmailSignup'
import logo from '../assets/bpl-logo.png'
import heroBg from '../assets/hero-bg.jpg'
import softballPitcher from '../assets/bbsb/sb_pitcher.jpeg'
import facilityRender from '../assets/facility_rendering.png'
import weightRoom from '../assets/bpl_weight_room.jpeg'
import sbCatcher from '../assets/bbsb/sb_catcher.png'
import sbGirls from '../assets/bbsb/sb_girls.jpeg'
import communityImg from '../assets/bbsb/community.png'

// Animated counter hook for stats
function useCountUp(target, duration = 2000) {
  const [count, setCount] = useState(0)
  const ref = useRef()
  const started = useRef(false)

  // Extract the numeric value and the trailing suffix (e.g. '+' from '3,000+')
  const num = parseInt(target.replace(/[^0-9]/g, ''), 10)
  const suffixMatch = target.match(/[^0-9,].*$/)
  const suffix = suffixMatch ? suffixMatch[0] : ''

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          if (isNaN(num)) { setCount(target); return }
          const startTime = performance.now()
          const animate = (now) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * num))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, duration])

  const formatted = typeof count === 'number' ? count.toLocaleString() : count
  return { count: `${formatted}${suffix}`, ref }
}

function AnimatedStat({ stat, label, className = '' }) {
  const { count, ref } = useCountUp(stat)
  return (
    <div ref={ref} className={className}>
      <div className="text-4xl sm:text-5xl font-heading font-black text-navy mb-2">{count}</div>
      <div className="text-sm text-gray-text font-medium uppercase tracking-wider">{label}</div>
    </div>
  )
}

function AnimatedStatLight({ stat, label }) {
  const { count, ref } = useCountUp(stat)
  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl sm:text-4xl font-heading font-black text-white mb-1">{count}</div>
      <div className="text-xs sm:text-sm text-white/50 font-medium">{label}</div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      {/* ===== Section 1 — Hero with Background Image ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <img
          src={heroBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay — 70% opacity */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/70 to-navy/85" />
        {/* Accent gradient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(201,168,76,0.08)_0%,_transparent_60%)]" />

        <div className="relative z-10 text-center px-4 py-20">
          <img src={logo} alt="Bend Performance Lab" className="h-28 sm:h-36 md:h-44 mx-auto mb-8 drop-shadow-lg" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black text-white mb-4 tracking-tight drop-shadow-md">
            Bend Performance Lab
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/85 font-light max-w-3xl mx-auto mb-3">
            Central Oregon's First Dedicated Baseball &amp; Softball Performance Facility
          </p>
          <p className="text-base sm:text-lg text-white/50 mb-10">
            Built for mechanics. Built for the whole athlete. Opening Fall 2026.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#signup"
              className="px-8 py-4 bg-gradient-to-r from-steel to-steel-light hover:from-steel-light hover:to-steel text-white font-semibold rounded-lg transition-all duration-300 text-base btn-glow shadow-lg shadow-steel/20"
            >
              Join the Community
            </a>
            <Link
              to="/get-involved"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-300 border border-white/25 text-base backdrop-blur-sm"
            >
              Get Involved
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ===== Section 2 — The Problem ===== */}
      <section className="bg-gradient-to-b from-white to-gray-bg/30 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center mb-14">
              <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">The Challenge</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-navy mb-6">
                Bend Has Thousands of Diamond Athletes — But No True Training Home
              </h2>
              <p className="text-lg text-gray-text leading-relaxed">
                Central Oregon is home to thousands of baseball and softball athletes, dozens of competitive travel teams, multiple high school programs, and even professional players. Yet the region has no dedicated indoor facility designed specifically for baseball and softball training. Winter weather, oversubscribed outdoor fields, and shared multi-sport indoor spaces make consistent training nearly impossible.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto mb-16">
            {[
              { stat: '3,000+', label: 'Athletes' },
              { stat: '70+', label: 'Teams' },
              { stat: '0', label: 'Dedicated Facilities' },
            ].map((item, i) => (
              <FadeInSection key={item.label} direction="scale" delay={i * 150}>
                <AnimatedStat
                  stat={item.stat}
                  label={item.label}
                  className="text-center p-8 rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                />
              </FadeInSection>
            ))}
          </div>

          <FadeInSection>
            <img
              src={softballPitcher}
              alt="Softball pitcher in motion"
              className="w-full h-[36rem] sm:h-[40rem] object-cover rounded-2xl shadow-md"
            />
          </FadeInSection>
        </div>
      </section>

      {/* ===== Section 3 — The Vision ===== */}
      <section className="bg-gradient-to-br from-navy via-navy to-navy-dark py-24 sm:py-32 relative overflow-hidden">
        {/* Decorative accent glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-steel/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">The Vision</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                A New Home for Baseball &amp; Softball Development
              </h2>
              <p className="text-lg text-white/70 leading-relaxed">
                Bend Performance Lab is a 17,682 sq ft purpose-built indoor training facility in east Bend, designed specifically for baseball and softball athletes. Year-round access to training environments built around how diamond athletes actually develop.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            {[
              {
                title: 'Mechanics',
                desc: 'Dedicated spaces for skill development and position-specific training with expert coaching.',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                ),
              },
              {
                title: 'Strength & Conditioning',
                desc: 'Athlete-specific conditioning designed for durability, power, and on-field performance.',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                ),
              },
              {
                title: 'Performance Analytics',
                desc: 'HitTrax, Rapsodo, and video analysis for measurable, data-driven improvement.',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                ),
              },
              {
                title: 'Whole-Athlete Development',
                desc: 'An environment designed to develop focus, confidence, and competitive presence alongside physical skills.',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                ),
              },
            ].map((card, i) => (
              <FadeInSection key={card.title} direction="scale" delay={i * 120}>
                <div className="group bg-gradient-to-br from-white/8 to-white/3 rounded-2xl p-8 sm:p-10 border border-white/10 hover:border-accent/60 transition-all duration-300 card-hover card-hover-dark cursor-default">
                  <div className="w-14 h-14 bg-gradient-to-br from-steel/30 to-steel/10 rounded-xl flex items-center justify-center mb-6 group-hover:from-accent/30 group-hover:to-accent/10 transition-all duration-300">
                    <svg className="w-7 h-7 text-steel-light group-hover:text-accent-light transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {card.icon}
                    </svg>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-white mb-3">{card.title}</h3>
                  <p className="text-base text-white/60 leading-relaxed">{card.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>

          {/* <FadeInSection>
            <PlaceholderImage label="Facility Concept Render — Coming Soon" height="h-72 sm:h-96" />
          </FadeInSection> */}
        </div>
      </section>

      {/* ===== Section 4 — Facility Preview ===== */}
      <section className="bg-gradient-to-b from-gray-bg to-white py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">The Facility</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-navy mb-6">
                A Purpose-Built Facility for Diamond Athletes
              </h2>
              <p className="text-lg text-gray-text leading-relaxed">
                BPL will feature specialized training spaces designed to support athletes, teams, and coaches in a professional environment built for development.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
            {[
              { feature: 'Retractable batting cages and pitching lanes', desc: 'Configurable lanes for hitting, pitching, and defensive work.', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /> },
              { feature: "70' x 45' convertible turf infield", desc: 'Full infield surface for ground balls, team drills, and defensive reps.', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z" /> },
              { feature: 'High-performance lab with HitTrax & Rapsodo', desc: 'Data-driven hitting and pitching analysis for measurable progress.', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /> },
              { feature: '1,800 sq ft athlete-specific weight room', desc: 'Sport-specific strength equipment built for rotational athletes.', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /> },
              { feature: 'Plyometrics and arm care area', desc: 'Dedicated space for arm health, mobility, and explosive training.', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /> },
              { feature: 'Pro shop and athlete lounge', desc: 'Gear, recovery, and a space for athletes to prepare and recharge.', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /> },
            ].map((item, i) => (
              <FadeInSection key={i} delay={i * 80} className="h-full">
                <div className="group flex items-start gap-4 bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg border border-gray-100 hover:border-steel/20 transition-all duration-300 card-hover cursor-default h-full">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-steel/15 to-steel/5 flex items-center justify-center shrink-0 group-hover:from-steel/25 group-hover:to-steel/10 transition-all duration-300">
                    <svg className="w-5 h-5 text-steel" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {item.icon}
                    </svg>
                  </div>
                  <div>
                    <span className="text-base text-navy font-medium leading-snug">{item.feature}</span>
                    <p className="text-sm text-gray-text mt-1">{item.desc}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            <FadeInSection direction="left">
              <img src={facilityRender} alt="BPL facility rendering" className="w-full h-64 sm:h-72 object-cover rounded-2xl shadow-md" />
            </FadeInSection>
            <FadeInSection direction="right">
              <img src={weightRoom} alt="BPL weight room" className="w-full h-64 sm:h-72 object-cover rounded-2xl shadow-md" />
            </FadeInSection>
          </div>

          <FadeInSection>
            <div className="text-center">
              <Link
                to="/facility"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-navy to-navy-light hover:from-navy-light hover:to-navy text-white font-semibold rounded-lg transition-all duration-300 text-base btn-glow shadow-lg shadow-navy/15"
              >
                Explore the Facility
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ===== Section 5 — Training Philosophy ===== */}
      <section className="bg-gradient-to-b from-white to-gray-bg/30 py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">Our Philosophy</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-navy mb-6">
                Train the Right Way
              </h2>
              <p className="text-lg text-gray-text leading-relaxed">
                At Bend Performance Lab, development goes beyond simply taking more swings or throwing more pitches. Great athletes are built through intentional training environments where mechanics, strength, and mindset develop together.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
            {[
              {
                title: 'Mechanics before volume',
                desc: 'Movement quality before speed, load, or volume.',
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 12.75l6 6 9-13.5" />,
              },
              {
                title: 'Strength must transfer to sport',
                desc: 'Every program designed to improve on-field performance.',
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />,
              },
              {
                title: 'Durability is trained, not hoped for',
                desc: 'Deceleration, tissue tolerance, and joint control matter.',
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />,
              },
              {
                title: 'Youth athletes are developed, not pushed',
                desc: 'Structured progression protects long-term development.',
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />,
              },
              {
                title: 'Baseball & softball deserve specialized environments',
                desc: 'Rotational, asymmetric, skill-dominant sports need purpose-built spaces.',
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />,
              },
              {
                title: 'Data informs, coaches develop',
                desc: 'Technology supports coaching — it never replaces it.',
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />,
              },
            ].map((principle, i) => (
              <FadeInSection key={i} delay={i * 100}>
                <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg border border-gray-100 hover:border-accent/20 transition-all duration-300 card-hover cursor-default h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy to-navy-light flex items-center justify-center mb-5 group-hover:from-accent group-hover:to-accent-light transition-all duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {principle.icon}
                    </svg>
                  </div>
                  <h3 className="font-heading font-bold text-navy text-lg mb-2">{principle.title}</h3>
                  <p className="text-sm text-gray-text leading-relaxed">{principle.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FadeInSection direction="left">
              <img src={sbCatcher} alt="Softball catcher in action" className="w-full h-80 sm:h-96 object-cover rounded-2xl shadow-md" />
            </FadeInSection>
            <FadeInSection direction="right">
              <img src={sbGirls} alt="Softball athletes training" className="w-full h-80 sm:h-96 object-cover rounded-2xl shadow-md" />
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ===== Section 6 — Community Roots ===== */}
      <section className="bg-gradient-to-br from-navy via-navy to-navy-dark py-24 sm:py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-steel/5 rounded-full blur-3xl translate-y-1/3 translate-x-1/4" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">Our Roots</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                Built by the Bend Baseball &amp; Softball Community
              </h2>
              <p className="text-lg text-white/70 leading-relaxed">
                BPL is being built by coaches, athletes, and leaders who are already deeply embedded in Central Oregon's baseball and softball community. This is not an outside company bringing a facility to Bend — it's a facility being built by the people already serving this community.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto mb-14">
            {[
              { stat: '70+', label: 'Teams Engaged' },
              { stat: '15+', label: 'Organizations in Conversation' },
              { stat: '2,200+', label: 'Little League Athletes' },
              { stat: '50+', label: 'Athletes on Waitlists' },
            ].map((item, i) => (
              <FadeInSection key={item.label} direction="scale" delay={i * 100}>
                <AnimatedStatLight stat={item.stat} label={item.label} />
              </FadeInSection>
            ))}
          </div>

          <FadeInSection>
            <div className="mb-14">
              <img src={communityImg} alt="Bend baseball and softball community" className="w-full h-64 sm:h-72 object-cover rounded-xl" />
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="text-center">
              <Link
                to="/founders"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-steel to-steel-light hover:from-steel-light hover:to-steel text-white font-semibold rounded-lg transition-all duration-300 text-base btn-glow shadow-lg shadow-steel/20"
              >
                Meet the Founders
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ===== Section 7 — Testimonials ===== */}
      <section className="bg-gradient-to-b from-gray-bg to-white py-24 sm:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">Testimonials</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-navy">
                From the Community
              </h2>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                quote: "Between the scheduling difficulties and baseball getting priority, our softball teams just don't have reliable indoor access during the winter months.",
                name: 'Kayleen',
                title: 'President, Jr. Cougars Softball',
              },
              {
                quote: "Even getting a single cage rental after school or on weekends is a struggle. There's just not enough availability for families who want to work with their kids outside of team practice.",
                name: 'Jason Wilson',
                title: 'Parent',
              },
            ].map((testimonial, i) => (
              <FadeInSection key={i} direction={i === 0 ? 'left' : 'right'}>
                <div className="group bg-gradient-to-br from-navy to-navy-light rounded-2xl p-8 sm:p-10 relative border border-white/5 hover:border-accent/20 transition-all duration-300 card-hover card-hover-dark h-full">
                  <div className="absolute top-6 right-8 w-16 h-16 bg-accent/5 rounded-full blur-xl" />
                  <svg className="w-10 h-10 text-accent/30 mb-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
                  </svg>
                  <p className="text-white/85 text-lg leading-relaxed mb-8 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent-light flex items-center justify-center">
                      <span className="text-white text-sm font-bold">{testimonial.name[0]}</span>
                    </div>
                    <div>
                      <p className="text-white font-heading font-semibold">{testimonial.name}</p>
                      <p className="text-white/50 text-sm">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Section 8 — Community Input Survey ===== */}
      <section className="bg-gradient-to-b from-white to-gray-bg/50 py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">Your Voice Matters</p>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy mb-4">
                Help Shape Bend Performance Lab
              </h2>
              <p className="text-lg text-gray-text leading-relaxed">
                We are building Bend Performance Lab — Central Oregon's first dedicated indoor baseball and softball training facility. This short survey helps us understand how athletes and teams would use the facility so we can design memberships, training spaces, and programs the right way. This survey takes about 2 minutes.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-lg border border-gray-100">
              <SurveyForm />
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ===== Section 9 — Email Signup ===== */}
      <section id="signup" className="relative bg-gradient-to-br from-navy via-navy to-navy-dark py-24 sm:py-32 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-steel/8 rounded-full blur-3xl" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <FadeInSection>
            <div className="text-center mb-10">
              <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">Stay Connected</p>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
                Be Part of Building Bend's Baseball &amp; Softball Home
              </h2>
              <p className="text-lg text-white/60 leading-relaxed">
                Whether you're a parent, athlete, coach, or supporter of youth sports in Central Oregon — join the community to receive updates on progress, early access opportunities, and ways to get involved.
              </p>
            </div>
            <EmailSignup />
          </FadeInSection>
        </div>
      </section>
    </>
  )
}
