import { useState } from 'react'

const FACILITY_AREAS = [
  'Batting cages',
  'Pitching lanes',
  'Team practice space',
  'Strength training area',
  'Hitting or pitching technology (HitTrax / Rapsodo)',
]

const SECTIONS = [
  { id: 'about', label: 'About You' },
  { id: 'challenges', label: 'Challenges' },
  { id: 'facility', label: 'Facility' },
  { id: 'demand', label: 'Demand' },
  { id: 'feedback', label: 'Feedback' },
]

export default function SurveyForm() {
  const [submitted, setSubmitted] = useState(false)
  const [currentSection, setCurrentSection] = useState(0)
  const [form, setForm] = useState({
    userType: [],
    sport: [],
    ageGroup: [],
    challenge: [],
    frequency: '',
    usage: [],
    facilityAreas: [],
    strengthTraining: '',
    teamReserve: '',
    communityNeed: '',
    membershipCount: '',
    additionalFeedback: '',
    name: '',
    email: '',
    team: '',
  })

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const toggleMulti = (field, value) => {
    setForm((prev) => {
      const arr = prev[field]
      const has = arr.includes(value)
      if (has) return { ...prev, [field]: arr.filter((v) => v !== value) }
      return { ...prev, [field]: [...arr, value] }
    })
  }

  const toggleFacilityArea = (area) => {
    setForm((prev) => {
      const has = prev.facilityAreas.includes(area)
      if (has) return { ...prev, facilityAreas: prev.facilityAreas.filter((a) => a !== area) }
      if (prev.facilityAreas.length >= 3) return prev
      return { ...prev, facilityAreas: [...prev.facilityAreas, area] }
    })
  }

  const [errors, setErrors] = useState({})

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Please enter your name'
    if (!form.email.trim()) {
      newErrors.email = 'Please enter your email'
    } else if (!validateEmail(form.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setCurrentSection(4)
      return
    }
    setErrors({})
    setSubmitted(true)
  }

  const totalSections = SECTIONS.length
  const progress = ((currentSection + 1) / totalSections) * 100

  if (submitted) {
    return (
      <div className="text-center py-20">
        <div className="w-24 h-24 bg-gradient-to-br from-steel to-steel-light rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-3xl font-heading font-bold text-navy mb-4">Thanks for Your Input!</h3>
        <p className="text-lg text-gray-text max-w-lg mx-auto">
          Your feedback will directly shape Bend Performance Lab. We'll keep you updated as things progress.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Progress bar */}
      <div className="space-y-3">
        <div className="flex justify-between">
          {SECTIONS.map((section, i) => (
            <button
              key={section.id}
              type="button"
              onClick={() => setCurrentSection(i)}
              className={`text-sm font-medium transition-colors ${
                i === currentSection
                  ? 'text-steel font-semibold'
                  : i < currentSection
                    ? 'text-navy/60'
                    : 'text-gray-text/50'
              }`}
            >
              <span className="hidden sm:inline">{section.label}</span>
              <span className="sm:hidden">{i + 1}</span>
            </button>
          ))}
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-steel to-steel-light rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Section 1 — About You */}
      <div className={currentSection === 0 ? 'space-y-8' : 'hidden'}>
        <CheckboxGroup
          label="Who would primarily use the facility?"
          hint="Select all that apply"
          selected={form.userType}
          onToggle={(v) => toggleMulti('userType', v)}
          options={['Parent of athlete', 'Youth athlete', 'High school athlete', 'Coach / team organization']}
        />

        <CheckboxGroup
          label="What sport are you primarily involved in?"
          hint="Select all that apply"
          selected={form.sport}
          onToggle={(v) => toggleMulti('sport', v)}
          options={['Baseball', 'Softball']}
        />

        <CheckboxGroup
          label="Athlete age group"
          hint="Select all that apply"
          selected={form.ageGroup}
          onToggle={(v) => toggleMulti('ageGroup', v)}
          options={['8–12', '13–15', '16–18', 'College / adult']}
        />
      </div>

      {/* Section 2 — Current Training Challenges */}
      <div className={currentSection === 1 ? 'space-y-8' : 'hidden'}>
        <CheckboxGroup
          label="What are the biggest challenges training in Bend today?"
          hint="Select all that apply"
          selected={form.challenge}
          onToggle={(v) => toggleMulti('challenge', v)}
          options={[
            'Limited indoor training space',
            'Weather limits training opportunities',
            'Fields are frequently overbooked',
            'Driving to other cities for training',
          ]}
        />

        <RadioGroup
          label="If BPL existed today, how often would you expect to train there?"
          name="frequency"
          value={form.frequency}
          onChange={(v) => handleChange('frequency', v)}
          options={['3–5 times per week', '1–2 times per week', 'A few times per month']}
        />
      </div>

      {/* Section 3 — Facility */}
      <div className={currentSection === 2 ? 'space-y-8' : 'hidden'}>
        <CheckboxGroup
          label="How would you primarily use the facility?"
          hint="Select all that apply"
          selected={form.usage}
          onToggle={(v) => toggleMulti('usage', v)}
          options={['Individual training', 'Team practices', 'Private lessons']}
        />

        <fieldset>
          <legend className="text-lg font-heading font-semibold text-navy mb-1">
            Which areas would you most likely use?
          </legend>
          <p className="text-base text-gray-text mb-4">Select up to 3</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {FACILITY_AREAS.map((area) => (
              <label
                key={area}
                className={`flex items-center gap-4 px-5 py-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                  form.facilityAreas.includes(area)
                    ? 'border-steel bg-steel/5 text-navy shadow-sm'
                    : 'border-gray-150 hover:border-gray-300 text-gray-600'
                }`}
              >
                <input
                  type="checkbox"
                  checked={form.facilityAreas.includes(area)}
                  onChange={() => toggleFacilityArea(area)}
                  className="w-5 h-5 rounded border-gray-300 text-steel focus:ring-steel"
                />
                <span className="text-base">{area}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <RadioGroup
          label="Would you or your athlete use a strength training area built for baseball/softball?"
          name="strengthTraining"
          value={form.strengthTraining}
          onChange={(v) => handleChange('strengthTraining', v)}
          options={['Yes, regularly', 'Yes, occasionally', 'Maybe', 'No']}
        />
      </div>

      {/* Section 4 — Demand */}
      <div className={currentSection === 3 ? 'space-y-8' : 'hidden'}>
        <RadioGroup
          label="Would your team likely reserve indoor practice space at BPL?"
          name="teamReserve"
          value={form.teamReserve}
          onChange={(v) => handleChange('teamReserve', v)}
          options={['Yes', 'Maybe', 'No']}
        />

        <RadioGroup
          label="How important is a dedicated indoor baseball/softball facility in Bend?"
          name="communityNeed"
          value={form.communityNeed}
          onChange={(v) => handleChange('communityNeed', v)}
          options={['Extremely important', 'Very important', 'Somewhat important', 'Not important']}
        />

        <RadioGroup
          label="How many athletes in your household or team would train at BPL?"
          name="membershipCount"
          value={form.membershipCount}
          onChange={(v) => handleChange('membershipCount', v)}
          options={['1 athlete', '2 athletes', '3+ athletes', 'Not sure yet']}
        />
      </div>

      {/* Section 5 — Feedback & Contact */}
      <div className={currentSection === 4 ? 'space-y-8' : 'hidden'}>
        <div>
          <label className="text-lg font-heading font-semibold text-navy mb-1 block">
            Anything else you'd like to see at Bend Performance Lab?
          </label>
          <p className="text-base text-gray-text mb-4">Optional — but we'd love to hear your ideas</p>
          <textarea
            value={form.additionalFeedback}
            onChange={(e) => handleChange('additionalFeedback', e.target.value)}
            rows={4}
            className="w-full px-5 py-4 rounded-xl border-2 border-gray-150 focus:border-steel focus:ring-2 focus:ring-steel/20 outline-none transition-all duration-200 resize-none text-base"
            placeholder="Tell us what you'd like to see..."
          />
        </div>

        <div>
          <h4 className="text-lg font-heading font-semibold text-navy mb-1">Contact Information</h4>
          <p className="text-base text-gray-text mb-4">So we can keep you updated on progress</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                placeholder="Name *"
                value={form.name}
                onChange={(e) => {
                  handleChange('name', e.target.value)
                  if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }))
                }}
                className={`w-full px-5 py-4 rounded-xl border-2 focus:ring-2 focus:ring-steel/20 outline-none transition-all duration-200 text-base ${
                  errors.name ? 'border-red-400 focus:border-red-400' : 'border-gray-150 focus:border-steel'
                }`}
              />
              {errors.name && <p className="mt-1.5 text-sm text-red-500">{errors.name}</p>}
            </div>
            <div>
              <input
                type="email"
                placeholder="Email *"
                value={form.email}
                onChange={(e) => {
                  handleChange('email', e.target.value)
                  if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }))
                }}
                className={`w-full px-5 py-4 rounded-xl border-2 focus:ring-2 focus:ring-steel/20 outline-none transition-all duration-200 text-base ${
                  errors.email ? 'border-red-400 focus:border-red-400' : 'border-gray-150 focus:border-steel'
                }`}
              />
              {errors.email && <p className="mt-1.5 text-sm text-red-500">{errors.email}</p>}
            </div>
          </div>
          <input
            type="text"
            placeholder="Team / Organization (optional)"
            value={form.team}
            onChange={(e) => handleChange('team', e.target.value)}
            className="mt-4 w-full px-5 py-4 rounded-xl border-2 border-gray-150 focus:border-steel focus:ring-2 focus:ring-steel/20 outline-none transition-all duration-200 text-base"
          />
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-6">
        {currentSection > 0 ? (
          <button
            type="button"
            onClick={() => setCurrentSection((s) => s - 1)}
            className="flex items-center gap-2 px-6 py-3 text-base font-medium text-gray-text hover:text-navy transition-colors rounded-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
        ) : (
          <div />
        )}

        {currentSection < totalSections - 1 ? (
          <button
            type="button"
            onClick={() => setCurrentSection((s) => s + 1)}
            className="flex items-center gap-2 px-8 py-3 bg-steel hover:bg-steel-light text-white text-base font-semibold rounded-lg btn-glow transition-all duration-200"
          >
            Next
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        ) : (
          <button
            type="submit"
            className="px-10 py-3.5 bg-gradient-to-r from-steel to-steel-light hover:from-steel-light hover:to-steel text-white text-base font-semibold rounded-lg btn-glow transition-all duration-200 shadow-md"
          >
            Submit Survey
          </button>
        )}
      </div>
    </form>
  )
}

function CheckboxGroup({ label, hint, selected, onToggle, options }) {
  return (
    <fieldset>
      <legend className="text-lg font-heading font-semibold text-navy mb-1">{label}</legend>
      {hint && <p className="text-base text-gray-text mb-4">{hint}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {options.map((option) => (
          <label
            key={option}
            className={`flex items-center gap-4 px-5 py-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
              selected.includes(option)
                ? 'border-steel bg-steel/5 text-navy shadow-sm'
                : 'border-gray-150 hover:border-gray-300 text-gray-600'
            }`}
          >
            <input
              type="checkbox"
              checked={selected.includes(option)}
              onChange={() => onToggle(option)}
              className="w-5 h-5 rounded border-gray-300 text-steel focus:ring-steel"
            />
            <span className="text-base">{option}</span>
          </label>
        ))}
      </div>
    </fieldset>
  )
}

function RadioGroup({ label, name, value, onChange, options }) {
  return (
    <fieldset>
      <legend className="text-lg font-heading font-semibold text-navy mb-4">{label}</legend>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {options.map((option) => (
          <label
            key={option}
            className={`flex items-center gap-4 px-5 py-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
              value === option
                ? 'border-steel bg-steel/5 text-navy shadow-sm'
                : 'border-gray-150 hover:border-gray-300 text-gray-600'
            }`}
          >
            <input
              type="radio"
              name={name}
              value={option}
              checked={value === option}
              onChange={() => onChange(option)}
              className="w-5 h-5 border-gray-300 text-steel focus:ring-steel"
            />
            <span className="text-base">{option}</span>
          </label>
        ))}
      </div>
    </fieldset>
  )
}
