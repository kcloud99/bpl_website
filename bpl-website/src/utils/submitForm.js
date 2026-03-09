const WEBHOOK_URL = import.meta.env.VITE_FORM_WEBHOOK_URL

export default async function submitForm(formType, data) {
  const payload = {
    formType,
    submittedAt: new Date().toISOString(),
    ...data,
  }

  // Serialize arrays to comma-separated strings for spreadsheet readability
  for (const [key, value] of Object.entries(payload)) {
    if (Array.isArray(value)) {
      payload[key] = value.join(', ')
    }
  }

  const res = await fetch(WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
    mode: 'no-cors', // Apps Script doesn't support CORS preflight
  })

  // no-cors means we can't read the response, but the request still goes through
  return res
}
