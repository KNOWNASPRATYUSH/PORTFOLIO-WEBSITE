import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function CustomCursor() {
  const cursorRef = useRef(null)

  useEffect(() => {
    // Disable on touch devices immediately
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouch) return

    const cursor = cursorRef.current
    if (!cursor) return

    // Ultra-high-performance GSAP quickTo setters (zero garbage collection overhead)
    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.1, ease: 'power2.out' })
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.1, ease: 'power2.out' })

    let isHovering = false

    const onMouseMove = (e) => {
      xTo(e.clientX - 10)
      yTo(e.clientY - 10)
    }

    const onMouseOver = (e) => {
      const target = e.target
      if (target && target.closest && target.closest('button, a, .interactive, input, textarea, summary')) {
        if (!isHovering) {
          isHovering = true
          cursor.classList.add('hovering')
          gsap.to(cursor, { scale: 2.2, duration: 0.18, overwrite: 'auto' })
        }
      } else {
        if (isHovering) {
          isHovering = false
          cursor.classList.remove('hovering')
          gsap.to(cursor, { scale: 1, duration: 0.18, overwrite: 'auto' })
        }
      }
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    window.addEventListener('mouseover', onMouseOver, { passive: true })

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseover', onMouseOver)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      id="custom-cursor"
      className="pointer-events-none"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999,
        willChange: 'transform'
      }}
    />
  )
}
