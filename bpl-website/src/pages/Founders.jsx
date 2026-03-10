import FadeInSection from '../components/FadeInSection'
import mirandaImg from '../assets/profiles/miranda.png'
import ianImg from '../assets/profiles/ian.png'
import seanImg from '../assets/profiles/sean.png'
import kyleImg from '../assets/profiles/kyle.png'

const founders = [
  {
    name: 'Miranda Abrahams McLeod',
    initials: 'MA',
    image: mirandaImg,
    title: 'Director of Softball & Strength Training',
    color: 'bg-steel',
    bio: [
      'Certified Strength and Conditioning Specialist (CSCS) with 10+ years in youth athlete development.',
      'Former collegiate softball catcher/utility player with 25+ years of competitive experience.',
      'Founder of Mojo Strength and Softball — a leading softball training resource in Central Oregon and nationally, currently traveling to hold clinics across multiple states.',
      'Certified in Tincher Pitching methodology with additional credentials in injury resilience, kettlebell training, and pre/postnatal coaching.',
      'Former President of Central Oregon Fastpitch (now merged into Crush Softball).',
      '9-year Bend resident with deep relationships across the local softball community.',
    ],
    role: 'At BPL: Leads all softball programming (lessons, clinics, camps, coach development) and oversees strength and conditioning operations.',
  },
  {
    name: 'Ian MacDougall',
    initials: 'IM',
    image: ianImg,
    title: 'Director of Baseball Programs',
    color: 'bg-navy',
    bio: [
      'Former professional pitcher: Australian Baseball League (Perth Heat) and Frontier League (Traverse City Beach Bums).',
      'Playing career: Summit High School (part of program\'s first league championship, 2007), Columbia Basin CC, Western Oregon University.',
      'Co-owner of MacDougall & Sons Bat Company.',
      'Head baseball coach at Caldera High School, co-managed the Gladiators to consecutive championships (2022–2023).',
      'Active private pitching and hitting instructor serving Central Oregon youth athletes.',
    ],
    role: 'At BPL: Leads all baseball programming including lessons, clinics, camps, and coach development.',
  },
  {
    name: 'Sean Jacox',
    initials: 'SJ',
    image: seanImg,
    title: 'Business Operations & Tournaments',
    color: 'bg-steel',
    bio: [
      'Central Oregon native, immersed in baseball since age 7.',
      'Player-manager at Summit High School, 4 seasons of club baseball at COCC, 6 years on coaching staff.',
      'Co-managed competitive adult teams to 4 straight league championships (2022–2025).',
      'League President of Central Oregon Adult Baseball (after 3 years as Commissioner).',
      'State Director for National Championship Sports (NCS) and Tournament Director for NABA.',
      'Brings operational and financial management experience from non-profit and business management.',
    ],
    role: 'At BPL: Oversees business operations, tournament hosting, and league partnerships.',
  },
  {
    name: 'Kyle McLeod',
    initials: 'KM',
    image: kyleImg,
    title: 'Business Management & Investor Relations',
    color: 'bg-navy',
    bio: [
      'Background in small business operations, technology, and startup development.',
      'Experience guiding early-stage companies through capital raises, operational buildouts, and growth scaling.',
      '9-year Bend resident.',
    ],
    role: 'At BPL: Oversees business management, financial operations, technology systems, and investor communications.',
  },
]

export default function Founders() {
  return (
    <>
      {/* Header */}
      <section className="relative bg-gradient-to-b from-cream to-gray-bg pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,_var(--color-sand)_0%,_transparent_60%)] opacity-60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-navy mb-4 tracking-tight">
            Meet the Founders
          </h1>
          <p className="text-lg sm:text-xl text-gray-text max-w-2xl mx-auto">
            The team building Bend Performance Lab.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <p className="text-lg text-gray-text leading-relaxed text-center">
              BPL was created by coaches, operators, and leaders deeply embedded in the Central Oregon baseball and softball community. The founders bring experience spanning professional baseball, national-level coaching, tournament operations, strength and conditioning, and business management. Several founders already operate training and tournament businesses that will feed directly into BPL's programming and customer base.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Founder Profiles */}
      <section className="bg-gray-bg py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {founders.map((founder) => (
            <FadeInSection key={founder.initials}>
              <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm">
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
                  {/* Avatar */}
                  <div className="shrink-0 flex flex-col items-center">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover"
                    />
                  </div>
                  {/* Bio */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-heading font-bold text-navy mb-1">{founder.name}</h3>
                    <p className="text-steel font-medium text-sm mb-4">{founder.title}</p>
                    <ul className="space-y-2 mb-4">
                      {founder.bio.map((point, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-steel mt-2 shrink-0" />
                          <span className="text-sm text-gray-text leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm font-medium text-navy bg-gray-bg rounded-lg px-4 py-3">
                      {founder.role}
                    </p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* Why This Team */}
      <section className="bg-navy py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white text-center mb-10">
              Why This Team
            </h2>
            <ul className="space-y-4 mb-10">
              {[
                'Playing and coaching credibility at professional, collegiate, and youth levels across both baseball and softball.',
                'Deep local roots with established relationships across schools, travel teams, adult leagues, and tournaments.',
                'Operational infrastructure through existing training businesses, tournament networks, and league leadership.',
                'Business acumen spanning facility operations, finance, capital raising, and technology.',
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-steel-light mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80 leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
            <div className="text-center">
              <blockquote className="text-xl sm:text-2xl font-heading font-bold text-white italic">
                "This is not a team learning the market — they are the market."
              </blockquote>
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  )
}
