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

  return (
    <div className="h-screen w-full overflow-hidden bg-void-black cursor-none relative">
      <CustomCursor />
      
      <AnimatePresence>
        {!isLoaded && <LoadingDots key="loading" />}
      </AnimatePresence>

      {/* Cyber HUD Fixed Header */}
      <header className={`fixed top-0 left-0 right-0 z-40 px-6 md:px-12 py-4 flex items-center justify-between pointer-events-none select-none transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex items-center gap-3 pointer-events-auto">
          <div className="w-2.5 h-2.5 rounded-full bg-brand-emerald animate-pulse shadow-[0_0_12px_#10b981]"></div>
          <span className="orbitron font-bold text-xs md:text-sm tracking-[0.25em] text-white">
            CARTNOVA <span className="text-brand-blue">//</span> PRATYUSH
          </span>
          <span className="hidden sm:inline-block text-[9px] orbitron bg-brand-blue/10 text-brand-blue border border-brand-blue/30 px-2.5 py-0.5 rounded-full">
            SYSTEM OPTIMAL
          </span>
        </div>

        <div className="flex items-center gap-3 md:gap-5 pointer-events-auto text-[10px] md:text-xs orbitron">
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
            className="bg-brand-blue/20 hover:bg-brand-blue/40 text-brand-blue border border-brand-blue/40 px-3.5 py-1.5 rounded-full transition-all interactive cursor-pointer shadow-[0_0_15px_rgba(0,212,255,0.2)]"
          >
            CONNECT ↗
          </a>
        </div>
      </header>

      {/* Cyber HUD Fixed Bottom Telemetry */}
      <footer className={`fixed bottom-0 left-0 right-0 z-40 px-6 md:px-12 py-3 flex items-center justify-between pointer-events-none select-none text-[9px] md:text-[10px] orbitron text-gray-500 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex items-center gap-2">
          <span className="text-brand-blue font-bold">WARP STATUS:</span> ONLINE
          <span className="hidden sm:inline text-gray-700">|</span>
          <span className="hidden sm:inline text-gray-400">PATNA (25.59° N, 85.14° E)</span>
        </div>
        <div className="flex items-center gap-2 text-brand-blue/90">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-ping"></span>
          SCROLL TO NAVIGATE
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
            <ScrollControls pages={8} damping={0.1} distance={1}>
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
      className="fixed inset-0 flex flex-col items-center justify-center bg-void-black z-[100] orbitron overflow-hidden"
    >
      <motion.div 
        initial={{ y: 0 }}
        exit={{ y: -25, transition: { duration: 0.3 } }}
        className="flex flex-col items-center"
      >
        <div className="text-brand-blue text-[10px] md:text-xs tracking-[0.6em] mb-4 opacity-60 uppercase animate-pulse">
          Establishing Quantum Link...
        </div>
        <div className="relative">
          <motion.div 
            exit={{ letterSpacing: "0.8em", transition: { duration: 0.5 } }}
            className="text-white text-xl md:text-4xl font-bold tracking-[0.3em] md:tracking-[0.5em] glow-text text-center px-4"
          >
            ENTERING PRATYUSH WORLD
          </motion.div>
          {/* Animated Scanning Line */}
          <div className="absolute inset-0 border-y border-brand-blue/30 scale-y-125 pointer-events-none">
            <div className="w-full h-[2px] bg-brand-blue shadow-[0_0_15px_#00d4ff] absolute top-0 animate-scan"></div>
          </div>
        </div>
        <div className="flex space-x-3 mt-12">
          <div className="w-2 h-2 bg-brand-blue rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-2 h-2 bg-brand-purple rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-2 h-2 bg-brand-amber rounded-full animate-bounce"></div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default App