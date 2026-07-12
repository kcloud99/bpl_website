import FadeInSection from '../components/FadeInSection'
import mirandaImg from '../assets/profiles/miranda.png'
import allenImg from '../assets/profiles/allen.png'
import davidImg from '../assets/profiles/david.png'
import wesImg from '../assets/profiles/wes.png'
import kyleImg from '../assets/profiles/kyle.png'

const founders = [
  {
    name: 'Miranda Abrahams McLeod, CSCS',
    initials: 'MA',
    image: mirandaImg,
    imageClass: 'object-top scale-125 origin-top',
    title: 'Co-Founder & Director of Softball & Athletic Performance',
    color: 'bg-steel',
    bio: [
      'Certified Strength and Conditioning Specialist (CSCS) with 10+ years in youth athlete development and injury prevention.',
      'Former collegiate softball catcher/utility player with 25+ years of competitive experience.',
      'A leading softball training resource in Central Oregon and nationwide — having trained hundreds of athletes from beginners to collegiate-bound players, and currently traveling to hold clinics in other states.',
      'Certified in Tincher Pitching methodology, with additional credentials in injury resilience (PFSCCA), StrongFirst Kettlebell Level 1, and pre/postnatal coaching (Girls Gone Strong).',
      'Former President of Central Oregon Fastpitch and a 9-year Bend resident with deep relationships across the local softball community.',
    ],
    role: 'At BPL: Leads all softball programming (lessons, clinics, camps, coach development) and oversees strength and conditioning operations.',
  },
  {
    name: 'David Diaz',
    initials: 'DD',
    image: davidImg,
    title: 'Director of Baseball',
    color: 'bg-steel-dark',
    bio: [
      'Founder of Diaz Infield Development with 15+ years of coaching and player development experience.',
      'Known for building a strong infield community and development culture.',
      'Has helped players advance to collegiate and professional baseball through a detail-oriented approach to fundamentals, athletic development, game awareness, and elite infield play.',
    ],
    role: 'At BPL: Manages all aspects of baseball operations and programming — day-to-day training, coaching, and event management for all camps and clinics.',
  },
  {
    name: 'Allen Cox',
    initials: 'AC',
    image: allenImg,
    title: 'Director of Player Development',
    color: 'bg-navy',
    bio: [
      '30+ years of experience in coaching, scouting, and player development.',
      'A nationally respected career that has influenced the paths of 50+ professional baseball players and more than 500 athletes who advanced to collegiate programs.',
    ],
    role: 'At BPL: Leads player development across the program — mentoring athletes and coaches and holding every part of the facility to the standard of excellence and professionalism that BPL stands for.',
  },
  {
    name: 'Wes Harper',
    initials: 'WH',
    image: wesImg,
    title: 'Director of Team Development',
    color: 'bg-navy-light',
    bio: [
      'An impressive high school and college pitching career brings deep pitching expertise to Bend.',
      'Coaches the Bend Elks and, alongside Allen and David, helps manage Oregon Premier Baseball.',
      'The youngest member of the group — bringing a strong connection to player development, tech expertise, and a hungry work ethic.',
    ],
    role: 'At BPL: Manages the many teams that use the facility — overseeing scheduling, proper usage, equipment knowledge, and the consistent, excellent service we expect to provide.',
  },
  {
    name: 'Kyle McLeod',
    initials: 'KM',
    image: kyleImg,
    title: 'Co-Founder & CEO',
    color: 'bg-steel',
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
              BPL was created by coaches, operators, and leaders deeply embedded in the Central Oregon baseball and softball community. The founders bring experience spanning professional baseball, national-level coaching, tournament operations, strength and conditioning, and business management. Founders already operate training and tournament businesses that will feed directly into BPL's programming and customer base.
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
                    {founder.image ? (
                      <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden">
                        <img
                          src={founder.image}
                          alt={founder.name}
                          className={`w-full h-full object-cover ${founder.imageClass || ''}`}
                        />
                      </div>
                    ) : (
                      <div
                        className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center ${founder.color}`}
                      >
                        <span className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-wide">
                          {founder.initials}
                        </span>
                      </div>
                    )}
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
