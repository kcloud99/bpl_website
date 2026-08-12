import { useState } from 'react'
import submitForm from '../utils/submitForm'

const COMMITMENT_LEVELS = [
  "I'm ready to commit",
  "Very interested — let's talk",
  'Interested — send me more information',
]

const ATHLETE_COUNTS = [
  '1 athlete',
  '2 athletes',
  '3+ athletes',
  'No athletes — I want to support this',
]

const inputClasses =
  'w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-steel focus:ring-2 focus:ring-steel/20 outline-none transition-all duration-200 text-base'

const errorInputClasses =
  'w-full px-5 py-4 rounded-xl border-2 border-red-400 focus:border-red-400 focus:ring-2 focus:ring-red-400/20 outline-none transition-all duration-200 text-base'

function Field({ label, hint, children }) {
  return (
    <div>
      <label className={`block text-base font-heading font-semibold text-navy ${hint ? 'mb-1' : 'mb-3'}`}>
        {label}
      </label>
      {hint && <p className="text-sm text-gray-text mb-3">{hint}</p>}
      {children}
    </div>
  )
}

export default function FoundingMemberForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState(false)
  const [errors, setErrors] = useState({})
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    athletes: '',
    recognitionName: '',
    commitment: '',
    referral: '',
    message: '',
  })

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Please enter your name'
    if (!form.email.trim()) {
      newErrors.email = 'Please enter your email'
    } else if (!validateEmail(form.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!form.phone.trim()) newErrors.phone = 'A phone number helps us follow up directly'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setErrors({})
    setSubmitting(true)
    setSubmitError(false)
    try {
      await submitForm('founding-member', form)
      setSubmitted(true)
    } catch {
      setSubmitError(true)
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-16 px-6 bg-white rounded-2xl border-2 border-accent/30 shadow-lg max-w-2xl mx-auto">
        <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent-light rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
          <svg className="w-10 h-10 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-3xl font-heading font-bold text-navy mb-4">We'll Be In Touch</h3>
        <p className="text-lg text-gray-text max-w-md mx-auto leading-relaxed">
          Thank you for your interest in a founding membership. A member of the BPL founding team will
          reach out personally to walk you through the details.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-2xl mx-auto bg-white rounded-2xl p-6 sm:p-10 border border-gray-200/60 shadow-lg"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-base font-heading font-semibold text-navy mb-3">Name *</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className={errors.name ? errorInputClasses : inputClasses}
            placeholder="Your full name"
          />
          {errors.name && <p className="mt-1.5 text-sm text-red-500">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-base font-heading font-semibold text-navy mb-3">Email *</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className={errors.email ? errorInputClasses : inputClasses}
            placeholder="you@example.com"
          />
          {errors.email && <p className="mt-1.5 text-sm text-red-500">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-base font-heading font-semibold text-navy mb-3">Phone *</label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            className={errors.phone ? errorInputClasses : inputClasses}
            placeholder="(541) 555-0134"
          />
          {errors.phone && <p className="mt-1.5 text-sm text-red-500">{errors.phone}</p>}
        </div>
        <div>
          <label className="block text-base font-heading font-semibold text-navy mb-3">City</label>
          <input
            type="text"
            value={form.city}
            onChange={(e) => handleChange('city', e.target.value)}
            className={inputClasses}
            placeholder="Bend, Redmond, Sisters..."
          />
        </div>
      </div>

      <Field label="Where are you at?" hint="This helps us know how to follow up. Nothing here is binding.">
        <div className="space-y-3">
          {COMMITMENT_LEVELS.map((level) => (
            <label
              key={level}
              className={`flex items-center gap-4 px-5 py-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                form.commitment === level
                  ? 'border-accent bg-accent/5 text-navy shadow-sm'
                  : 'border-gray-200 hover:border-gray-300 text-gray-600'
              }`}
            >
              <input
                type="radio"
                name="commitment"
                value={level}
                checked={form.commitment === level}
                onChange={() => handleChange('commitment', level)}
                className="w-5 h-5 border-gray-300 text-accent focus:ring-accent"
              />
              <span className="text-base">{level}</span>
            </label>
          ))}
        </div>
      </Field>

      <Field label="Athletes in your household" hint="Optional">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {ATHLETE_COUNTS.map((count) => (
            <label
              key={count}
              className={`flex items-center gap-3 px-5 py-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                form.athletes === count
                  ? 'border-steel bg-steel/5 text-navy shadow-sm'
                  : 'border-gray-200 hover:border-gray-300 text-gray-600'
              }`}
            >
              <input
                type="radio"
                name="athletes"
                value={count}
                checked={form.athletes === count}
                onChange={() => handleChange('athletes', count)}
                className="w-5 h-5 border-gray-300 text-steel focus:ring-steel"
              />
              <span className="text-sm sm:text-base">{count}</span>
            </label>
          ))}
        </div>
      </Field>

      <Field
        label="Name for Bat Wall recognition"
        hint="Optional — family name, athlete name, or business. You can decide later."
      >
        <input
          type="text"
          value={form.recognitionName}
          onChange={(e) => handleChange('recognitionName', e.target.value)}
          className={inputClasses}
          placeholder="The Smith Family"
        />
      </Field>

      <Field label="How did you hear about BPL?" hint="Optional">
        <input
          type="text"
          value={form.referral}
          onChange={(e) => handleChange('referral', e.target.value)}
          className={inputClasses}
          placeholder="Coach, friend, social media..."
        />
      </Field>

      <Field label="Questions or anything we should know?" hint="Optional">
        <textarea
          value={form.message}
          onChange={(e) => handleChange('message', e.target.value)}
          rows={4}
          className={`${inputClasses} resize-none`}
          placeholder="Ask us anything about the facility, the timeline, or the membership."
        />
      </Field>

      {submitError && (
        <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full px-10 py-4 bg-gradient-to-r from-accent to-accent-light hover:from-accent-light hover:to-accent text-navy text-base font-heading font-bold rounded-lg btn-glow btn-glow-accent transition-all duration-200 shadow-md disabled:opacity-50"
      >
        {submitting ? 'Submitting...' : 'Request Founding Member Information'}
      </button>
    </form>
  )
}
