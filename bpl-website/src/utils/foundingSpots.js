// Single source of truth for founding membership availability.
// Update CLAIMED as memberships are sold — the ticker on /founding-members and
// the "spots remaining" caption on /get-involved both read from these numbers.
export const FOUNDING_SPOTS_TOTAL = 15
export const FOUNDING_SPOTS_CLAIMED = 5
export const FOUNDING_SPOTS_REMAINING = FOUNDING_SPOTS_TOTAL - FOUNDING_SPOTS_CLAIMED
