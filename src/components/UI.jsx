import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import profileImg from '../assets/profile.jpg'
import fitnessLogo from '../assets/india_fitness.png'
import fitnessPreviewImg from '../assets/fitness_preview.jpg'
import coffeeLogo from '../assets/coffee_cravings_clean.png'
import coffeePreviewImg from '../assets/coffee_preview.jpg'

export default function UI() {
  const [status, setStatus] = useState("")

  useEffect(() => {
    // Hardening: Prevent Right-Click and Common Shortcuts
    const handleContextMenu = (e) => e.preventDefault()
    const handleKeyDown = (e) => {
      if ((e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) || (e.key === 'F12')) {
        e.preventDefault()
      }
    }
    document.addEventListener('contextmenu', handleContextMenu)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("TRANSMITTING ENCRYPTED PACKET...")
    const formData = new FormData(e.target)
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })
      
      const data = await response.json()
      if (data.success) {
        setStatus("TRANSMISSION SUCCESSFUL ✓")
        e.target.reset()
      } else {
        setStatus("FAILURE DETECTED. RETRY.")
      }
    } catch (error) {
      setStatus("ERROR IN TRANSMISSION CHANNEL. RETRY.")
    }
  }

  const sections = [
    // 01: HERO SECTION
    {
      id: 'hero',
      content: (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-10 text-center select-none pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-3 sm:mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse"></span>
            <span className="orbitron text-[9px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] text-brand-blue uppercase">
              Web Developer // Full Stack Portfolio // 2026
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl orbitron font-bold glow-text mb-3 sm:mb-4 border-b-2 sm:border-b-4 border-brand-blue pb-2 leading-tight"
          >
            PRATYUSH KUMAR
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xs sm:text-base md:text-xl lg:text-2xl font-light tracking-[0.15em] sm:tracking-[0.2em] mb-4 sm:mb-6 text-brand-blue"
          >
            WEB DEVELOPER <span className="text-white/40">//</span> FULL STACK ARCHITECT <span className="text-white/40">//</span> CREATIVE ENGINEER
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-[11px] sm:text-xs md:text-sm text-gray-400 max-w-xl font-light mb-6 sm:mb-8 leading-relaxed px-2"
          >
            I’m Pratyush Kumar, a professional Web Developer and Full Stack Systems Engineer based in Patna, India. I architect zero-dependency backend runtimes, distributed Redis key-value platforms, and fluid 60FPS 3D WebGL experiences for production applications.
          </motion.p>

          {/* Core Telemetry Counter Pills */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-6 sm:mb-8 w-full max-w-2xl px-2"
          >
            {[
              { label: 'FLAGSHIPS LIVE', val: '2 PRODS', color: 'text-brand-blue' },
              { label: 'BACKEND LATENCY', val: '< 10 MS', color: 'text-brand-amber' },
              { label: 'UI RENDERING', val: '60 FPS', color: 'text-brand-purple' },
              { label: 'TEST PASS RATE', val: '100% (71/71)', color: 'text-brand-emerald' },
            ].map(pill => (
              <div key={pill.label} className="glass p-2 sm:p-3 rounded-xl border border-white/10 text-center">
                <div className={`text-[11px] sm:text-sm font-bold orbitron ${pill.color}`}>{pill.val}</div>
                <div className="text-[8px] sm:text-[9px] text-gray-400 orbitron tracking-wider mt-0.5">{pill.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-3 pointer-events-auto"
          >
            <div className="text-[9px] sm:text-xs border border-brand-blue/30 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full flex items-center gap-2 group hover:bg-brand-blue/10 transition-colors cursor-help">
               <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-brand-blue rounded-full animate-pulse"></span>
               SCROLL DOWN TO EXPLORE ARCHITECTURE
            </div>
          </motion.div>
        </div>
      )
    },

    // 02: ABOUT / THE VISION
    {
      id: 'about',
      content: (
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12 min-h-screen px-4 sm:px-6 md:px-12 lg:px-24 py-16 sm:py-20 select-none">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group shrink-0"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-amber rounded-3xl blur-md opacity-35 group-hover:opacity-100 transition duration-1000"></div>
            <img 
              src={profileImg} 
              alt="Pratyush Kumar — Web Developer &amp; Full Stack Software Engineer" 
              draggable="false" 
              className="relative w-36 sm:w-52 md:w-64 lg:w-72 rounded-2xl border-2 border-brand-purple/50 object-cover shadow-2xl shadow-brand-purple/20 select-none" 
            />
            
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-black/90 border border-brand-purple/40 px-3 py-1 rounded-full text-[8px] sm:text-[9px] orbitron text-brand-purple flex items-center gap-1.5 whitespace-nowrap shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald animate-ping"></span>
              PATNA, IN • WEB DEVELOPER
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-xl glass p-5 sm:p-6 md:p-8 rounded-2xl border-l-4 border-brand-purple"
          >
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <span className="w-2 h-2 rounded-full bg-brand-purple"></span>
              <span className="text-[9px] sm:text-[10px] orbitron tracking-[0.3em] text-brand-purple uppercase">The Vision &amp; Craft // Pratyush Kumar</span>
            </div>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl orbitron font-bold text-white mb-3 sm:mb-4 uppercase tracking-wider">
              PRATYUSH KUMAR — WEB DEVELOPER
            </h2>
            
            <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-300 font-light mb-3 sm:mb-4">
              I’m <span className="text-white font-bold">Pratyush Kumar</span>, a professional Web Developer and Full-Stack Systems Engineer based in Patna, India. I combine rigorous backend engineering with cinematic 3D visual frontend design to build systems that solve real operational needs and mesmerize users.
            </p>

            <p className="text-[11px] sm:text-xs md:text-sm leading-relaxed text-gray-400 font-light mb-4 sm:mb-6">
              My engineering philosophy focuses on zero-dependency runtimes, memory-speed caching with Redis KV, cryptographic HMAC request verification, and statutory DPDP compliance.
            </p>

            {/* Specializations Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5 sm:mb-6 text-[9px] sm:text-xs orbitron">
              <div className="bg-white/5 border border-white/10 p-2 sm:p-2.5 rounded-lg">
                <span className="text-brand-blue block font-bold mb-0.5">CORE SYSTEMS</span>
                <span className="text-gray-400 font-light">Zero-dep Node.js &amp; Upstash Redis</span>
              </div>
              <div className="bg-white/5 border border-white/10 p-2 sm:p-2.5 rounded-lg">
                <span className="text-brand-purple block font-bold mb-0.5">CREATIVE 3D</span>
                <span className="text-gray-400 font-light">Three.js, Shaders &amp; 60FPS GSAP</span>
              </div>
              <div className="bg-white/5 border border-white/10 p-2 sm:p-2.5 rounded-lg">
                <span className="text-brand-amber block font-bold mb-0.5">PAYMENTS &amp; AUTH</span>
                <span className="text-gray-400 font-light">Razorpay, UPI QR &amp; Webhooks</span>
              </div>
              <div className="bg-white/5 border border-white/10 p-2 sm:p-2.5 rounded-lg">
                <span className="text-brand-emerald block font-bold mb-0.5">COMPLIANCE</span>
                <span className="text-gray-400 font-light">HMAC Security &amp; India DPDP Act</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pointer-events-auto">
               <a 
                 href="https://www.instagram.com/knownaspratyush_/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="bg-brand-purple/20 hover:bg-brand-purple/40 text-brand-purple border border-brand-purple/40 px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg transition-all interactive text-[11px] sm:text-xs cursor-pointer orbitron flex items-center gap-1.5"
               >
                 Instagram Journal ↗
               </a>
               <a 
                 href="https://github.com/KNOWNASPRATYUSH" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="bg-white/5 hover:bg-white/10 text-gray-300 border border-white/15 px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg transition-all interactive text-[11px] sm:text-xs cursor-pointer orbitron flex items-center gap-1.5"
               >
                 GitHub Archive ↗
               </a>
            </div>
          </motion.div>
        </div>
      )
    },

    // 03: ELITE PROJECT 01 - INDIA FITNESS
    {
      id: 'project_fitness',
      content: (
        <div className="flex items-center justify-center md:justify-end min-h-screen px-4 sm:px-6 md:px-12 lg:px-20 py-16 sm:py-20 select-none">
           <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-xl md:max-w-2xl glass p-5 sm:p-6 md:p-8 rounded-2xl border-r-2 sm:border-r-4 border-brand-blue text-center md:text-right relative overflow-hidden"
          >
            {/* Project Preview Screenshot Banner */}
            <div className="relative mb-4 sm:mb-6 rounded-xl overflow-hidden border border-brand-blue/30 max-h-36 sm:max-h-44 group">
              <img 
                src={fitnessPreviewImg} 
                alt="India Fitness Web Application — Developed by Pratyush Kumar Web Developer" 
                draggable="false"
                className="w-full h-36 sm:h-44 object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              
              <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 bg-black/80 border border-brand-blue/50 px-2.5 py-0.5 rounded-full text-[9px] orbitron text-brand-blue">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse"></span>
                PRODUCTION LIVE
              </div>

              <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-left">
                <div>
                  <span className="text-[9px] orbitron text-brand-blue/80 uppercase tracking-widest block">Flagship // 01</span>
                  <span className="text-base sm:text-lg font-bold text-white orbitron">INDIA FITNESS</span>
                </div>
                <img src={fitnessLogo} alt="India Fitness Logo — Built by Web Developer Pratyush Kumar" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-brand-blue/40 p-0.5 bg-black" />
              </div>
            </div>

            <p className="text-[11px] sm:text-xs md:text-sm font-light text-brand-blue mb-3 sm:mb-4 italic">
              Where Strength Meets Aesthetics • Athletic Web Engine
            </p>
            
            <p className="text-[11px] sm:text-xs md:text-sm leading-relaxed text-gray-300 mb-4 sm:mb-5 font-light">
              High-performance digital athletics platform engineered with Next.js 15 and GSAP to deliver 60FPS fluid screen transitions with zero cumulative layout shifts. Features personalized membership tiers, coach profiles, and dynamic training plan catalogs.
            </p>

            {/* Architecture Highlights Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 mb-5 sm:mb-6 text-left text-[10px] sm:text-[11px] text-gray-300">
              <div className="bg-white/5 border border-white/10 p-2 rounded flex items-center gap-2">
                <span className="text-brand-blue">✓</span> 60FPS Micro-Animations (GSAP)
              </div>
              <div className="bg-white/5 border border-white/10 p-2 rounded flex items-center gap-2">
                <span className="text-brand-blue">✓</span> Next.js Serverless SSR Architecture
              </div>
              <div className="bg-white/5 border border-white/10 p-2 rounded flex items-center gap-2">
                <span className="text-brand-blue">✓</span> Structured PostgreSQL Athlete Data
              </div>
              <div className="bg-white/5 border border-white/10 p-2 rounded flex items-center gap-2">
                <span className="text-brand-blue">✓</span> Sub-100ms Vercel Edge Response
              </div>
            </div>

            <div className="flex flex-wrap justify-center md:justify-end gap-1.5 mb-5 sm:mb-6 pointer-events-none">
              {['React 19', 'Next.js 15', 'GSAP', 'PostgreSQL', 'TailwindCSS'].map(tech => (
                <span key={tech} className="bg-brand-blue/10 text-brand-blue text-[9px] sm:text-[10px] px-2.5 py-0.5 rounded-full border border-brand-blue/20">{tech}</span>
              ))}
            </div>

            <div className="pointer-events-auto flex flex-col sm:flex-row justify-center md:justify-end gap-2.5 sm:gap-3">
               <a 
                 href="https://india-fitness.vercel.app/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-block bg-brand-blue/90 hover:bg-brand-blue text-black font-bold orbitron px-5 sm:px-7 py-2.5 sm:py-3 rounded-lg transition-all transform hover:scale-105 interactive shadow-[0_0_20px_rgba(0,212,255,0.4)] text-[11px] sm:text-xs cursor-pointer text-center"
               >
                 LIVE BROADCAST ↗
               </a>
               <a 
                 href="https://github.com/KNOWNASPRATYUSH/INDIA-FITNESS" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-block bg-white/5 hover:bg-white/10 text-brand-blue border border-brand-blue/30 font-medium orbitron px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-all interactive text-[11px] sm:text-xs cursor-pointer text-center"
               >
                 SOURCE CODE ↗
               </a>
            </div>
          </motion.div>
        </div>
      )
    },

    // 04: ELITE PROJECT 02 - COFFEE & CRAVINGS
    {
      id: 'project_coffee',
      content: (
        <div className="flex items-center justify-center md:justify-start min-h-screen px-4 sm:px-6 md:px-12 lg:px-20 py-16 sm:py-20 select-none">
           <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-xl md:max-w-2xl glass p-5 sm:p-6 md:p-8 rounded-2xl border-l-2 sm:border-l-4 border-brand-amber text-center md:text-left relative overflow-hidden group"
          >
            {/* Project Preview Screenshot Banner */}
            <div className="relative mb-4 sm:mb-6 rounded-xl overflow-hidden border border-brand-amber/30 max-h-36 sm:max-h-44 group">
              <img 
                src={coffeePreviewImg} 
                alt="Coffee & Cravings Artisan Dining Web Platform — Engineered by Pratyush Kumar Web Developer" 
                draggable="false"
                className="w-full h-36 sm:h-44 object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              
              <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 bg-black/80 border border-brand-amber/50 px-2.5 py-0.5 rounded-full text-[9px] orbitron text-brand-amber">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-amber animate-pulse"></span>
                PRODUCTION LIVE • PATNA
              </div>

              <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-left">
                <div>
                  <span className="text-[9px] orbitron text-brand-amber/80 uppercase tracking-widest block">Flagship // 02</span>
                  <span className="text-base sm:text-lg font-bold text-white orbitron">COFFEE &amp; CRAVINGS</span>
                </div>
                <div className="w-8 h-8 rounded-full border border-brand-amber/40 bg-black p-1 flex items-center justify-center">
                  <img src={coffeeLogo} alt="Coffee & Cravings Logo — Built by Web Developer Pratyush Kumar" className="w-6 h-6 object-contain" />
                </div>
              </div>
            </div>

            <p className="text-[11px] sm:text-xs md:text-sm font-light text-amber-200/90 mb-3 sm:mb-4 italic">
              Artisan Cafe &amp; Contactless QR Dining Ecosystem • Mithapur, Patna
            </p>

            <p className="text-[11px] sm:text-xs md:text-sm leading-relaxed text-gray-300 mb-4 sm:mb-5 font-light">
              Full-scale artisan dining platform engineered with a <strong className="text-white">zero external dependency</strong> native Node.js core on Vercel Serverless and Upstash Redis. Features cryptographic HMAC-signed QR table ordering across 6 tables, online Razorpay &amp; dynamic UPI QR payments, and an instant-chime Barista Kitchen Display System (KDS).
            </p>

            {/* Architecture Highlights Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 mb-5 sm:mb-6 text-left text-[10px] sm:text-[11px] text-gray-300">
              <div className="bg-white/5 border border-white/10 p-2 rounded flex items-center gap-2">
                <span className="text-amber-400">✓</span> HMAC-Signed Table QR Ordering
              </div>
              <div className="bg-white/5 border border-white/10 p-2 rounded flex items-center gap-2">
                <span className="text-amber-400">✓</span> Barista Live KDS with Audio Chimes
              </div>
              <div className="bg-white/5 border border-white/10 p-2 rounded flex items-center gap-2">
                <span className="text-amber-400">✓</span> Razorpay &amp; Dynamic UPI Webhooks
              </div>
              <div className="bg-white/5 border border-white/10 p-2 rounded flex items-center gap-2">
                <span className="text-amber-400">✓</span> DPDP Act 2023 Statutory Compliance
              </div>
              <div className="bg-white/5 border border-white/10 p-2 rounded flex items-center gap-2">
                <span className="text-amber-400">✓</span> Zero npm Backend Dependencies
              </div>
              <div className="bg-white/5 border border-white/10 p-2 rounded flex items-center gap-2">
                <span className="text-amber-400">✓</span> 71 Automated Integration Tests
              </div>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-1.5 mb-5 sm:mb-6 pointer-events-none">
              {['Node.js (Core)', 'Upstash Redis KV', 'Razorpay & UPI', 'HMAC-SHA256', 'Live KDS', 'DPDP Act', 'Vercel'].map(tech => (
                <span key={tech} className="bg-brand-amber/10 text-amber-300 text-[9px] sm:text-[10px] px-2.5 py-0.5 rounded-full border border-brand-amber/30">{tech}</span>
              ))}
            </div>

            <div className="pointer-events-auto flex flex-col sm:flex-row justify-center md:justify-start gap-2.5 sm:gap-3">
               <a 
                 href="https://www.coffeeandcravings.shop/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-block bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-bold orbitron px-5 sm:px-7 py-2.5 sm:py-3 rounded-lg transition-all transform hover:scale-105 interactive shadow-[0_0_20px_rgba(245,158,11,0.45)] text-[11px] sm:text-xs cursor-pointer text-center"
               >
                 ENTER CAFE (LIVE) ↗
               </a>
               <a 
                 href="https://github.com/KNOWNASPRATYUSH/Coffee-cravings" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-block bg-white/5 hover:bg-white/10 text-amber-300 border border-brand-amber/30 font-medium orbitron px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-all interactive text-[11px] sm:text-xs cursor-pointer text-center"
               >
                 SOURCE CODE ↗
               </a>
            </div>
          </motion.div>
        </div>
      )
    },

    // 05: CORE ARSENAL (SKILLS)
    {
      id: 'skills_detail',
      content: (
        <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 md:px-10 py-16 sm:py-20 select-none">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-5xl glass p-5 sm:p-8 md:p-10 rounded-3xl border border-brand-blue/15 shadow-[0_0_40px_rgba(0,0,0,0.8)]"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse"></span>
              <span className="text-[9px] sm:text-[10px] orbitron tracking-[0.3em] text-brand-blue uppercase">Web Developer Capabilities</span>
            </div>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl orbitron font-bold text-white mb-6 sm:mb-10 text-center uppercase tracking-widest">
              Technical Arsenal &amp; Web Stack
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                { 
                  name: 'Frontend Systems', 
                  color: 'border-brand-blue text-brand-blue',
                  desc: 'High-performance UI & 3D rendering',
                  items: [
                    'React 19 & Next.js 15', 
                    'Three.js / React Three Fiber', 
                    'Drei & Shaders', 
                    'Tailwind CSS & GSAP 60FPS', 
                    'TypeScript & Modern Vite'
                  ] 
                },
                { 
                  name: 'Backend Core', 
                  color: 'border-brand-purple text-brand-purple',
                  desc: 'Zero-dep runtimes & APIs',
                  items: [
                    'Native Node.js (Core http/crypto)', 
                    'Express & Serverless Handlers', 
                    'Python & Go Automation', 
                    'REST & Webhook Processors', 
                    'HMAC-SHA256 Token Engines'
                  ] 
                },
                { 
                  name: 'Data & In-Memory', 
                  color: 'border-brand-amber text-amber-400',
                  desc: 'Sub-millisecond retrieval',
                  items: [
                    'Upstash Redis REST KV', 
                    'Redis Sorted Sets & TTL', 
                    'PostgreSQL & Supabase', 
                    'MongoDB & Document DBs', 
                    'Firebase Realtime & Auth'
                  ] 
                },
                { 
                  name: 'DevOps & Safety', 
                  color: 'border-brand-emerald text-emerald-400',
                  desc: 'Enterprise security & scale',
                  items: [
                    'India DPDP Act 2023', 
                    'Vercel Serverless CD/CI', 
                    'Docker Containerization', 
                    'Git Architecture', 
                    'Rate Limiting & Anti-Replay'
                  ] 
                }
              ].map(cat => (
                <div key={cat.name} className={`border-l-2 ${cat.color} pl-3 sm:pl-4 py-2 hover:bg-white/5 transition-colors group rounded-r-lg`}>
                  <h3 className={`font-bold text-xs sm:text-sm tracking-wider uppercase mb-1 ${cat.color}`}>
                    {cat.name}
                  </h3>
                  <p className="text-[9px] sm:text-[10px] text-gray-500 mb-2 sm:mb-3">{cat.desc}</p>
                  <ul className="text-[11px] sm:text-xs text-gray-300 space-y-1.5 sm:space-y-2">
                    {cat.items.map(item => (
                      <li key={item} className="hover:text-white transition-colors flex items-center gap-1.5">
                        <span className="text-[8px] opacity-60">▹</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/10 text-center text-[10px] sm:text-xs text-gray-400 orbitron">
              PROFICIENT IN TAKING IDEAS FROM ZERO TO HARDENED PRODUCTION DEPLOYMENT
            </div>
          </motion.div>
        </div>
      )
    },

    // 06: GALACTIC JOURNEY (TIMELINE)
    {
      id: 'journey',
      content: (
        <div className="flex items-center justify-start min-h-screen px-4 sm:px-6 md:px-14 lg:px-24 py-16 sm:py-20 select-none">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-3xl"
          >
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <span className="w-2 h-2 rounded-full bg-brand-purple animate-pulse"></span>
              <span className="text-[9px] sm:text-[10px] orbitron tracking-[0.3em] text-brand-purple uppercase">Track Record</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl orbitron font-bold text-white mb-6 sm:mb-10 uppercase tracking-tight">
              Galactic Journey
            </h2>

            <div className="space-y-8 sm:space-y-10 md:space-y-12">
              {[
                { 
                  year: '2024 - PRESENT', 
                  role: 'Full Stack Architect & Lead Engineer', 
                  company: 'Independent Flagships', 
                  desc: 'Engineered two live, high-traffic web ecosystems: Coffee & Cravings (real-time QR cafe platform built with zero npm backend dependencies, Upstash Redis, Razorpay/UPI payments, KDS, and DPDP Act compliance) and India Fitness (high-velocity athletic portal with GSAP 60FPS fluid navigation).' 
                },
                { 
                  year: '2023 - 2024', 
                  role: '3D Web & Interactive Interface Developer', 
                  company: 'Creative Tech & Systems', 
                  desc: 'Developed interactive Three.js scenes, hardware-accelerated shaders, and responsive UI components. Specialized in lowering bundle overhead while ensuring fluid performance across mobile and desktop.' 
                },
                { 
                  year: '2022 - 2023', 
                  role: 'Frontend Architect & UI Engineer', 
                  company: 'Web Application Consulting', 
                  desc: 'Constructed custom design systems, API integration pipelines, and state management frameworks using React, Next.js, and TypeScript.' 
                }
              ].map(job => (
                <div key={job.year} className="relative pl-5 sm:pl-6 md:pl-8 border-l-2 border-brand-purple/30 hover:border-brand-purple transition-all group">
                  <div className="absolute top-0 left-[-7px] w-3 h-3 bg-brand-purple rounded-full group-hover:scale-150 transition-transform shadow-[0_0_12px_#a855f7]"></div>
                  <span className="text-[9px] sm:text-[10px] orbitron text-brand-purple font-semibold">{job.year}</span>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mt-1 group-hover:text-brand-purple transition-colors">
                    {job.role}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-gray-500 mb-2">{job.company}</p>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light">{job.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      )
    },

    // 07: THE BLUEPRINT
    {
      id: 'blueprint',
      content: (
        <div className="flex items-center justify-center md:justify-end min-h-screen px-4 sm:px-6 md:px-14 lg:px-24 py-16 sm:py-20 select-none">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-xl glass p-6 sm:p-8 md:p-10 rounded-3xl border-r-2 sm:border-r-4 md:border-r-8 border-brand-blue text-center md:text-right"
          >
            <div className="flex items-center justify-center md:justify-end gap-2 mb-2 sm:mb-3">
              <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse"></span>
              <span className="text-[9px] sm:text-[10px] orbitron tracking-[0.3em] text-brand-blue uppercase">Engineering Tenets</span>
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl orbitron font-bold text-white mb-5 sm:mb-8 uppercase">
              THE BLUEPRINT
            </h2>

            <div className="space-y-4 sm:space-y-6 text-center md:text-right">
              {[
                { 
                  num: '01', 
                  title: 'Zero-Latency Architecture', 
                  desc: 'Every millisecond counts. Native Node.js core runtimes without third-party bloat combined with in-memory Redis KV deliver sub-10ms response times globally.' 
                },
                { 
                  num: '02', 
                  title: 'Visual Poetry at 60 FPS', 
                  desc: 'Web applications should be visceral and unforgettable. 3D WebGL scenes, physics-based motion, and reactive cursor feedback tell a brand story while remaining featherlight.' 
                },
                { 
                  num: '03', 
                  title: 'Statutory Safety by Design', 
                  desc: 'Data protection and cryptographic HMAC verification are never afterthoughts. Built with DPDP Act 2023 compliance, encrypted session cookies, and multi-tier rate limiting.' 
                }
              ].map(doc => (
                <div key={doc.title} className="hover:translate-x-[-4px] sm:hover:translate-x-[-8px] transition-transform group">
                   <div className="text-[9px] sm:text-[10px] orbitron text-brand-blue/70 mb-0.5">{doc.num} // ARCHITECTURAL LAW</div>
                   <h3 className="text-white group-hover:text-brand-blue font-bold text-sm sm:text-base md:text-lg mb-1 transition-colors">
                     {doc.title}
                   </h3>
                   <p className="text-gray-400 text-[11px] sm:text-xs md:text-sm font-light leading-relaxed">{doc.desc}</p>
                </div>
              ))}
            </div>

            {/* Interactive SEO FAQ Accordion */}
            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/10 text-left">
              <div className="flex items-center gap-1.5 mb-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-pulse"></span>
                <span className="text-[9px] sm:text-[10px] orbitron text-brand-purple tracking-[0.2em] uppercase">
                  Frequently Asked Questions // FAQ
                </span>
              </div>
              
              <div className="space-y-2 text-[10px] sm:text-xs">
                {[
                  {
                    q: 'Who is Pratyush Kumar?',
                    a: 'Pratyush Kumar is a Web Developer & Full-Stack Systems Engineer based in Patna, Bihar, India. He builds high-performance production web systems, zero-dependency Node.js architectures, Upstash Redis caching, and fluid 60FPS 3D WebGL interfaces.'
                  },
                  {
                    q: 'What web development technologies does Pratyush specialize in?',
                    a: 'Full-stack web engineering with React 19, Next.js 15, Three.js 3D WebGL, native Node.js core runtimes, Upstash Redis KV, PostgreSQL databases, Tailwind CSS, and Razorpay/UPI payment infrastructure.'
                  },
                  {
                    q: 'What major web projects has Pratyush engineered?',
                    a: 'Coffee & Cravings (artisan QR dining operating system with live KDS at coffeeandcravings.shop) and India Fitness (high-velocity athletic web portal with GSAP motion at india-fitness.vercel.app).'
                  },
                  {
                    q: 'How can I hire or contact Pratyush for web development?',
                    a: 'Transmit a message via the Encrypted Terminal in Section 08, email directly, or connect through GitHub (KNOWNASPRATYUSH) and Instagram (@knownaspratyush_).'
                  }
                ].map((faq, i) => (
                  <details key={i} className="glass p-2.5 sm:p-3 rounded-xl border border-white/10 cursor-pointer pointer-events-auto group open:border-brand-blue/40 transition-colors">
                    <summary className="font-semibold text-white group-hover:text-brand-blue list-none flex justify-between items-center select-none text-[10px] sm:text-[11px] orbitron tracking-wide">
                      <span>{faq.q}</span>
                      <span className="text-brand-blue text-xs ml-2 group-open:rotate-180 transition-transform">▾</span>
                    </summary>
                    <p className="mt-2 text-gray-300 font-light leading-relaxed text-[10px] sm:text-[11px] border-t border-white/5 pt-2">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      ),
    },

    // 08: CONTACT / INITIATE CONNECTION
    {
      id: 'contact',
      content: (
         <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-10 py-16 sm:py-20 text-center select-none">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-5 sm:p-8 md:p-12 rounded-3xl border border-brand-blue/20 w-full max-w-lg shadow-[0_0_40px_rgba(0,0,0,0.85)]"
          >
            <div className="flex items-center justify-center gap-2 mb-2 sm:mb-3">
              <span className="w-2 h-2 rounded-full bg-brand-blue animate-ping"></span>
              <span className="text-[9px] sm:text-[10px] orbitron tracking-[0.4em] text-brand-blue uppercase">Encrypted Terminal</span>
            </div>

            <h2 className="text-xl sm:text-3xl md:text-4xl orbitron font-bold mb-2 sm:mb-3 glow-text text-white">
              INITIATE CONNECTION // CONTACT
            </h2>

            <p className="text-[11px] sm:text-xs md:text-sm text-gray-400 font-light mb-5 sm:mb-6">
              Available for full stack web development, 3D interactive web applications, and software consulting.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3.5 sm:gap-4 text-left pointer-events-auto">
               <input type="hidden" name="access_key" value="c1cefa47-9b89-476b-8bd1-ada665d42bea" />
               <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
               
               <div>
                 <label className="text-[8px] sm:text-[9px] orbitron text-gray-400 uppercase tracking-widest block mb-1">
                   Sender Channel (Email)
                 </label>
                 <input 
                   type="email" 
                   name="email" 
                   placeholder="YOUR EMAIL (CHANNEL)" 
                   className="w-full bg-black/60 border border-brand-blue/30 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl outline-none focus:border-brand-blue focus:shadow-[0_0_15px_rgba(0,212,255,0.25)] text-white text-xs sm:text-sm interactive transition-all" 
                   required 
                 />
               </div>

               <div>
                 <label className="text-[8px] sm:text-[9px] orbitron text-gray-400 uppercase tracking-widest block mb-1">
                   Message Payload
                 </label>
                 <textarea 
                   name="message" 
                   rows="3" 
                   placeholder="YOUR MESSAGE TO PRATYUSH..." 
                   className="w-full bg-black/60 border border-brand-blue/30 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl outline-none focus:border-brand-blue focus:shadow-[0_0_15px_rgba(0,212,255,0.25)] text-white text-xs sm:text-sm resize-none interactive transition-all" 
                   required 
                 />
               </div>

               <button 
                 type="submit" 
                 className="bg-brand-blue text-black font-bold orbitron py-3 sm:py-3.5 rounded-xl hover:bg-brand-purple hover:text-white transition-all transform hover:scale-[1.02] interactive text-xs sm:text-sm cursor-pointer shadow-[0_0_20px_rgba(0,212,255,0.35)] mt-1"
               >
                 {status || "TRANSMIT PACKET ↗"}
               </button>

               {status && (
                 <p className="text-[9px] sm:text-[10px] orbitron text-brand-blue text-center animate-pulse mt-1">
                   {status}
                 </p>
               )}
            </form>

            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/10 flex flex-wrap justify-center gap-3 sm:gap-6 pointer-events-auto text-[9px] sm:text-xs orbitron">
               <a 
                 href="https://www.instagram.com/knownaspratyush_/" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-brand-purple transition-all interactive cursor-pointer"
               >
                 INSTAGRAM ↗
               </a>
               <a 
                 href="https://github.com/KNOWNASPRATYUSH" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-brand-blue transition-all interactive cursor-pointer"
               >
                 GITHUB ↗
               </a>
               <a 
                 href="https://mail.google.com/mail/?view=cm&fs=1&to=cartnova.co@gmail.com" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-brand-amber transition-all interactive cursor-pointer"
               >
                 EMAIL DIRECT ↗
               </a>
            </div>
          </motion.div>

          <p className="mt-6 sm:mt-10 text-brand-blue font-bold orbitron text-[8px] sm:text-[10px] md:text-[11px] tracking-[0.25em] sm:tracking-[0.35em] glow-text">
            DESIGNED &amp; ENGINEERED BY PRATYUSH KUMAR
          </p>
        </div>
      )
    }
  ]

  return (
    <div className="w-full max-w-full overflow-hidden">
      {sections.map(section => (
        <section key={section.id} id={section.id}>
          {section.content}
        </section>
      ))}
    </div>
  )
}
