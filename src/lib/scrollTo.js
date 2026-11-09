const HEADER = 80

// Smooth-scroll to a section or trip, clearing the sticky masthead. Runs after the next paint so a
// caller can close a menu (and release its scroll lock) or update state first.
export function scrollToId(id, gap = 16) {
  requestAnimationFrame(() => {
    const el = document.getElementById(id)
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - HEADER - gap
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top, behavior: reduce ? 'auto' : 'smooth' })
  })
}
