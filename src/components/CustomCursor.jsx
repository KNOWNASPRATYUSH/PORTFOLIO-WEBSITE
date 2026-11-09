import React, { useEffect, useState } from 'react'
import { gsap } from 'gsap'

export default function CustomCursor() {
  const [hovering, setHovering] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    const checkTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    setIsTouchDevice(checkTouch)

    if (checkTouch) return

    const cursor = document.getElementById('custom-cursor')
    if (!cursor) return

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX - 10,
        y: e.clientY - 10,
        duration: 0.1,
        opacity: 1,
        scale: hovering ? 2.5 : 1,
        ease: 'power2.out'
      })
    }

    const handleMouseOver = (e) => {
      if (e.target && e.target.closest && e.target.closest('button, a, .interactive, input, textarea')) {
        setHovering(true)
      } else {
        setHovering(false)
      }
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [hovering])

  if (isTouchDevice) return null

  return (
    <div 
      id="custom-cursor" 
      className={`${hovering ? 'hovering' : ''} pointer-events-none`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999,
        mixBlendMode: 'screen'
      }}
    />
  )
}
