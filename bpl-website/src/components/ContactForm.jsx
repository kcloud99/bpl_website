import { useState } from 'react'

const INTEREST_OPTIONS = [
  'Business Sponsorship',
  'Personal Support',
  'Investment',
  'General Inquiry',
]

export default function ContactForm({ defaultInterest = '' }) {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    interest: defaultInterest,
    message: '',
  })

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-steel/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-steel" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-heading font-bold text-navy mb-2">Thanks!</h3>
        <p className="text-gray-text">We'll be in touch soon.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Name *"
          required
          value={form.name}
          onChange={(e) => handleChange('name', e.target.value)}
          className="px-4 py-3 rounded-lg border border-gray-200 focus:border-steel focus:ring-2 focus:ring-steel/20 outline-none transition-colors text-sm"
        />
        <input
          type="email"
          placeholder="Email *"
          required
          value={form.email}
          onChange={(e) => handleChange('email', e.target.value)}
          className="px-4 py-3 rounded-lg border border-gray-200 focus:border-steel focus:ring-2 focus:ring-steel/20 outline-none transition-colors text-sm"
        />
      </div>
      <input
        type="tel"
        placeholder="Phone (optional)"
        value={form.phone}
        onChange={(e) => handleChange('phone', e.target.value)}
        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-steel focus:ring-2 focus:ring-steel/20 outline-none transition-colors text-sm"
      />
      <select
        value={form.interest}
        onChange={(e) => handleChange('interest', e.target.value)}
        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-steel focus:ring-2 focus:ring-steel/20 outline-none transition-colors text-sm text-gray-600"
      >
        <option value="">Select your interest...</option>
        {INTEREST_OPTIONS.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
      <textarea
        placeholder="Message (optional)"
        value={form.message}
        onChange={(e) => handleChange('message', e.target.value)}
        rows={4}
        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-steel focus:ring-2 focus:ring-steel/20 outline-none transition-colors resize-none text-sm"
      />
      <button
        type="submit"
        className="w-full px-8 py-3.5 bg-steel hover:bg-steel-light text-white font-semibold rounded-lg transition-colors text-sm"
      >
        Submit
      </button>
    </form>
  )
}
