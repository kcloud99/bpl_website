import { useEffect, useRef } from 'react'

const directionClasses = {
  up: 'fade-in-section',
  left: 'fade-in-left',
  right: 'fade-in-right',
  scale: 'fade-in-scale',
}

export default function FadeInSection({ children, className = '', direction = 'up', delay = 0 }) {
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const baseClass = directionClasses[direction] || directionClasses.up
  const delayStyle = delay ? { transitionDelay: `${delay}ms` } : {}

  return (
    <div ref={ref} className={`${baseClass} ${className}`} style={delayStyle}>
      {children}
    </div>
  )
}
