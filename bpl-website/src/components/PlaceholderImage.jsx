export default function PlaceholderImage({ label = 'Image Coming Soon', height = 'h-64' }) {
  return (
    <div
      className={`${height} w-full rounded-2xl bg-gradient-to-br from-navy via-navy-light to-steel-dark flex items-center justify-center border border-white/5 relative overflow-hidden`}
    >
      {/* Decorative gradient overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,168,76,0.06)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(45,90,142,0.1)_0%,_transparent_50%)]" />

      <div className="text-center px-4 relative z-10">
        <svg className="w-12 h-12 mx-auto mb-4 text-white/15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
        </svg>
        <p className="text-white/25 text-sm font-medium font-heading tracking-wide">{label}</p>
      </div>
    </div>
  )
}
