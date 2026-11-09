// Shared section heading: the title carries the section on its own, no label above it.
export default function SectionHeading({ title, intro, tone = 'light', className = '' }) {
  const dark = tone === 'dark'
  return (
    <div className={`max-w-2xl ${className}`}>
      <h2
        className={`text-[clamp(2.1rem,1.3rem+2.6vw,3.5rem)] leading-[1.06] font-extrabold tracking-[-0.035em] ${
          dark ? 'text-white' : 'text-navy'
        }`}
      >
        {title}
      </h2>
      {intro && <p className={`mt-5 max-w-[46ch] text-lg leading-relaxed ${dark ? 'text-white/65' : 'text-slate'}`}>{intro}</p>}
    </div>
  )
}
