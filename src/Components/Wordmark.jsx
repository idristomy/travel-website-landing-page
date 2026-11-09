export default function Wordmark({ className = '', dotClassName = 'text-brand' }) {
  return (
    <span dir="ltr" className={`leading-none font-extrabold tracking-[-0.03em] ${className}`}>
      Jadoo<span className={dotClassName}>.</span>
    </span>
  )
}
