import React, { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { ScrollControls, Scroll } from '@react-three/drei'
import { motion, AnimatePresence } from 'framer-motion'
import Experience from './components/Experience'
import UI from './components/UI'
import CustomCursor from './components/CustomCursor'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Fast initial load
    const timer = setTimeout(() => setIsLoaded(true), 1800)
    return () => clearTimeout(timer)
  }, [])

  const scrollToPage = (pageIndex) => {
    const scrollContainer = document.querySelector('div[style*="overflow: auto"]') || document.querySelector('div[style*="overflow-y: auto"]')
    if (scrollContainer) {
      const targetY = (scrollContainer.scrollHeight / 8) * pageIndex
      scrollContainer.scrollTo({ top: targetY, behavior: 'smooth' })
    }
  }

  return (
    <div className="h-screen w-full overflow-hidden bg-void-black relative select-none">
      <CustomCursor />
      
      <AnimatePresence>
        {!isLoaded && <LoadingDots key="loading" />}
      </AnimatePresence>

      {/* Cyber HUD Fixed Header (Mobile & Multi-Device Optimized) */}
      <header className={`fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 md:px-12 py-3 sm:py-4 flex items-center justify-between pointer-events-none select-none transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex items-center gap-2 sm:gap-3 pointer-events-auto">
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-brand-emerald animate-pulse shadow-[0_0_12px_#10b981]"></div>
          <span className="orbitron font-bold text-[11px] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.25em] text-white">
            PRATYUSH KUMAR
          </span>
          <span className="hidden md:inline-block text-[9px] orbitron bg-brand-blue/10 text-brand-blue border border-brand-blue/30 px-2.5 py-0.5 rounded-full">
            WEB DEVELOPER &amp; ARCHITECT
          </span>
        </div>

        <div className="flex items-center gap-2.5 sm:gap-4 md:gap-5 pointer-events-auto text-[10px] md:text-xs orbitron">
          <a
            href="https://github.com/KNOWNASPRATYUSH"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block text-gray-400 hover:text-brand-blue transition-colors interactive cursor-pointer"
          >
            GITHUB
          </a>
          <a
            href="https://www.instagram.com/knownaspratyush_/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block text-gray-400 hover:text-brand-purple transition-colors interactive cursor-pointer"
          >
            INSTAGRAM
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=cartnova.co@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-blue/20 hover:bg-brand-blue/40 text-brand-blue border border-brand-blue/40 px-3 sm:px-4 py-1.5 rounded-full transition-all interactive cursor-pointer shadow-[0_0_15px_rgba(0,212,255,0.2)] text-[9px] sm:text-[11px]"
          >
            CONNECT ↗
          </a>
        </div>
      </header>

      {/* Right Side Section Navigation Index (Visible on Desktop / Tablets) */}
      <nav className={`hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-2.5 pointer-events-none select-none transition-opacity duration-1000 ${isLoaded ? 'opacity-80' : 'opacity-0'}`}>
        {[
          { num: '01', name: 'HERO', idx: 0 },
          { num: '02', name: 'VISION', idx: 1 },
          { num: '03', name: 'FITNESS', idx: 2 },
          { num: '04', name: 'COFFEE', idx: 3 },
          { num: '05', name: 'SKILLS', idx: 4 },
          { num: '06', name: 'JOURNEY', idx: 5 },
          { num: '07', name: 'BLUEPRINT', idx: 6 },
          { num: '08', name: 'CONNECT', idx: 7 },
        ].map((item) => (
          <button
            key={item.num}
            onClick={() => scrollToPage(item.idx)}
            className="flex items-center justify-end gap-2 text-[9px] orbitron group pointer-events-auto text-left hover:scale-105 transition-all interactive cursor-pointer bg-transparent border-0 p-1"
          >
            <span className="text-gray-400 group-hover:text-brand-blue group-hover:glow-text tracking-wider opacity-60 group-hover:opacity-100 transition-all">
              {item.num} {item.name}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-brand-blue group-hover:shadow-[0_0_8px_#00d4ff] group-hover:scale-150 transition-all"></span>
          </button>
        ))}
      </nav>

      {/* Cyber HUD Fixed Bottom Telemetry */}
      <footer className={`fixed bottom-0 left-0 right-0 z-40 px-4 sm:px-6 md:px-12 py-2.5 sm:py-3 flex items-center justify-between pointer-events-none select-none text-[8px] sm:text-[9px] md:text-[10px] orbitron text-gray-500 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="text-brand-blue font-bold">STATUS:</span> ONLINE
          <span className="hidden sm:inline text-gray-700">|</span>
          <span className="hidden sm:inline text-gray-400">PATNA (25.59° N, 85.14° E)</span>
        </div>
        <div className="flex items-center gap-1.5 text-brand-blue/90">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-ping"></span>
          <span className="hidden sm:inline">SCROLL TO NAVIGATE 8 SECTIONS</span>
          <span className="sm:hidden">SCROLL TO EXPLORE</span>
        </div>
      </footer>
      
      <div className={`h-screen w-full transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Canvas
          shadows
          camera={{ position: [0, 2, 5], fov: 45 }}
          onCreated={({ gl }) => {
            gl.setClearColor('#0a0a0a')
          }}
        >
          <Suspense fallback={null}>
            <ScrollControls pages={8} damping={0.12} distance={1}>
              <Experience />
              <Scroll html>
                <UI />
              </Scroll>
            </ScrollControls>
          </Suspense>
        </Canvas>
      </div>
    </div>
  )
}

function LoadingDots() {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        scale: 1.15,
        filter: 'blur(15px)',
        transition: { duration: 0.45, ease: "circIn" }
      }}
      className="fixed inset-0 flex flex-col items-center justify-center bg-void-black z-[100] orbitron overflow-hidden px-4"
    >
      <motion.div 
        initial={{ y: 0 }}
        exit={{ y: -25, transition: { duration: 0.3 } }}
        className="flex flex-col items-center max-w-full"
      >
        <div className="text-brand-blue text-[9px] sm:text-[10px] md:text-xs tracking-[0.4em] sm:tracking-[0.6em] mb-4 opacity-60 uppercase animate-pulse text-center">
          Establishing Quantum Link...
        </div>
        <div className="relative max-w-full">
          <motion.div 
            exit={{ letterSpacing: "0.6em", transition: { duration: 0.5 } }}
            className="text-white text-lg sm:text-2xl md:text-4xl font-bold tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.5em] glow-text text-center px-2 sm:px-4 break-words"
          >
            ENTERING PRATYUSH WORLD
          </motion.div>
          {/* Animated Scanning Line */}
          <div className="absolute inset-0 border-y border-brand-blue/30 scale-y-125 pointer-events-none">
            <div className="w-full h-[2px] bg-brand-blue shadow-[0_0_15px_#00d4ff] absolute top-0 animate-scan"></div>
          </div>
        </div>
        <div className="flex space-x-3 mt-8 sm:mt-12">
          <div className="w-2 h-2 bg-brand-blue rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-2 h-2 bg-brand-purple rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-2 h-2 bg-brand-amber rounded-full animate-bounce"></div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default App
