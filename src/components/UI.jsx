import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import profileImg from '../assets/profile.jpg'
import fitnessLogo from '../assets/india_fitness.png'
import coffeeLogo from '../assets/coffee_cravings_clean.png'

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
    // 01: HERO
    {
      id: 'hero',
      content: (
        <div className="flex flex-col items-center justify-center min-h-screen px-6 md:px-10 text-center select-none pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse"></span>
            <span className="orbitron text-[10px] sm:text-xs tracking-[0.4em] text-brand-blue uppercase">
              Cartnova Engineering Hub
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl md:text-8xl orbitron font-bold glow-text mb-4 border-b-4 border-brand-blue pb-2"
          >
            PRATYUSH KUMAR
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-sm sm:text-lg md:text-2xl font-light tracking-[0.25em] mb-8 text-brand-blue"
          >
            FULL STACK ARCHITECT <span className="text-white/40">//</span> CREATIVE ENGINEER
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xs sm:text-sm text-gray-400 max-w-xl font-light mb-10 leading-relaxed"
          >
            Engineering zero-latency serverless architectures, real-time distributed platforms, and fluid 3D experiences under <span className="text-white font-medium">Cartnova</span>.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-3 pointer-events-auto"
          >
            <div className="text-[10px] sm:text-xs border border-brand-blue/30 px-5 py-2 rounded-full flex items-center gap-2 group hover:bg-brand-blue/10 transition-colors cursor-help">
               <span className="w-2 h-2 bg-brand-blue rounded-full animate-pulse"></span>
               SCROLL DOWN FOR WARP NAVIGATION
            </div>
            <div className="text-[10px] sm:text-xs border border-brand-purple/30 text-brand-purple px-4 py-2 rounded-full bg-brand-purple/5">
               2 FLAGSHIPS DEPLOYED
            </div>
          </motion.div>
        </div>
      )
    },

    // 02: ABOUT / THE VISION
    {
      id: 'about',
      content: (
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14 min-h-screen px-6 md:px-32 py-20 select-none">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-amber rounded-2xl blur-md opacity-30 group-hover:opacity-100 transition duration-1000"></div>
            <img 
              src={profileImg} 
              alt="Pratyush Kumar" 
              draggable="false" 
              className="relative w-48 sm:w-64 md:w-80 rounded-2xl border-2 border-brand-purple/50 object-cover shadow-2xl shadow-brand-purple/20 select-none" 
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-xl glass p-6 md:p-8 rounded-2xl border-l-4 border-brand-purple"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-brand-purple"></span>
              <span className="text-[10px] orbitron tracking-[0.3em] text-brand-purple uppercase">The Vision</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl orbitron font-bold text-white mb-4 uppercase tracking-wider">
              Logic Meets Aesthetics
            </h2>
            
            <p className="text-sm sm:text-base leading-relaxed text-gray-300 font-light mb-4">
              I’m <span className="text-white font-bold">Pratyush Kumar</span>, a full stack developer and creative engineer based in India. I specialize in bridging complex backend systems — from zero-dependency native Node.js and distributed Redis caches — with high-performance 3D visual storytelling.
            </p>

            <p className="text-xs sm:text-sm leading-relaxed text-gray-400 font-light mb-6">
              Through <span className="text-brand-blue font-medium">Cartnova</span>, I build end-to-end digital experiences that are blazingly fast, statutorily secure, and designed to leave a lasting impact.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {['Full Stack Systems', 'Zero-Dependency Core', 'Distributed Caching', 'Interactive 3D'].map(tag => (
                <span key={tag} className="text-[10px] orbitron bg-white/5 border border-white/10 px-3 py-1 rounded text-gray-300">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4 pointer-events-auto">
               <a 
                 href="https://www.instagram.com/knownaspratyush_/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="bg-brand-purple/20 hover:bg-brand-purple/40 text-brand-purple border border-brand-purple/40 px-6 py-2.5 rounded-lg transition-all interactive text-xs sm:text-sm cursor-pointer orbitron flex items-center gap-2"
               >
                 Follow Journal ↗
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
        <div className="flex items-center justify-center md:justify-end min-h-screen px-6 md:px-32 py-20 select-none">
           <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-xl glass p-6 md:p-8 rounded-2xl border-r-4 border-brand-blue text-center md:text-right relative overflow-hidden"
          >
            {/* Blended Logo */}
            <img 
              src={fitnessLogo} 
              alt="India Fitness" 
              draggable="false"
              className="absolute -top-10 -right-10 w-44 h-44 opacity-10 pointer-events-none grayscale hover:grayscale-0 transition-all duration-500" 
            />

            <div className="flex items-center justify-center md:justify-end gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse"></span>
              <span className="text-[10px] orbitron tracking-[0.3em] text-brand-blue uppercase">Elite System // 01</span>
            </div>

            <div className="flex items-center justify-center md:justify-end gap-3 mb-2">
              <img src={fitnessLogo} alt="Logo" draggable="false" className="w-8 h-8 rounded-full border border-brand-blue/30" />
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">INDIA FITNESS</h3>
            </div>
            
            <p className="text-xs sm:text-sm font-light text-brand-blue/90 mb-4 italic">
              Where Strength Meets Aesthetics • Athletic Web Engine
            </p>
            
            <p className="text-sm sm:text-base leading-relaxed text-gray-300 mb-6 font-light">
              A high-velocity athletics and fitness platform engineered for 60FPS fluid interactivity. Features modular training catalogs, coach management, and sleek dynamic layouts tailored for modern athletic engagement.
            </p>

            <div className="flex flex-wrap justify-center md:justify-end gap-2 mb-8 pointer-events-none">
              {['React 19', 'GSAP', 'Next.js', 'PostgreSQL', 'TailwindCSS'].map(tech => (
                <span key={tech} className="bg-brand-blue/10 text-brand-blue text-[10px] sm:text-xs px-3 py-1 rounded-full border border-brand-blue/20">{tech}</span>
              ))}
            </div>

            <div className="pointer-events-auto flex flex-wrap justify-center md:justify-end gap-3">
               <a 
                 href="https://india-fitness.vercel.app/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-block bg-brand-blue/90 hover:bg-brand-blue text-black font-bold orbitron px-6 py-3 sm:px-8 sm:py-3.5 rounded transition-all transform hover:scale-105 interactive shadow-[0_0_20px_rgba(0,212,255,0.4)] text-xs sm:text-sm cursor-pointer"
               >
                 LIVE BROADCAST ↗
               </a>
               <a 
                 href="https://github.com/KNOWNASPRATYUSH/INDIA-FITNESS" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-block bg-white/5 hover:bg-white/10 text-brand-blue border border-brand-blue/30 font-medium orbitron px-5 py-3 sm:px-6 sm:py-3.5 rounded transition-all interactive text-xs sm:text-sm cursor-pointer"
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
        <div className="flex items-center justify-center md:justify-start min-h-screen px-6 md:px-32 py-20 select-none">
           <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-xl glass p-6 md:p-8 rounded-2xl border-l-4 border-brand-amber text-center md:text-left relative overflow-hidden group"
          >
            {/* Blended Logo Watermark */}
            <img 
              src={coffeeLogo} 
              alt="Coffee & Cravings" 
              draggable="false"
              className="absolute -top-10 -left-10 w-48 h-48 opacity-10 pointer-events-none grayscale group-hover:opacity-25 transition-all duration-500" 
            />

            <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-brand-amber animate-pulse"></span>
              <span className="text-[10px] orbitron tracking-[0.3em] text-brand-amber uppercase">Elite System // 02</span>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <div className="w-9 h-9 rounded-full border border-brand-amber/40 bg-black/60 p-1.5 flex items-center justify-center shadow-[0_0_12px_rgba(245,158,11,0.25)]">
                <img src={coffeeLogo} alt="Logo" draggable="false" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">COFFEE &amp; CRAVINGS</h3>
            </div>

            <p className="text-xs sm:text-sm font-light text-amber-200/90 mb-4 italic">
              Artisan Cafe &amp; Contactless QR Dining Ecosystem • Patna
            </p>

            <p className="text-sm sm:text-base leading-relaxed text-gray-300 mb-6 font-light">
              Full-scale cafe operating platform featuring cryptographic HMAC-signed QR table ordering, online Razorpay &amp; dynamic UPI payments, and an instant-chime Barista Kitchen Display System (KDS). Engineered with a zero-dependency native Node.js core on Vercel Serverless with Upstash Redis KV for lightning-fast throughput.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-8 pointer-events-none">
              {['Node.js Core', 'Upstash Redis', 'Razorpay & UPI', 'HMAC Signatures', 'Live KDS', 'DPDP Compliant'].map(tech => (
                <span key={tech} className="bg-brand-amber/10 text-amber-300 text-[10px] sm:text-xs px-3 py-1 rounded-full border border-brand-amber/30">{tech}</span>
              ))}
            </div>

            <div className="pointer-events-auto flex flex-wrap justify-center md:justify-start gap-3">
               <a 
                 href="https://www.coffeeandcravings.shop/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-block bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-bold orbitron px-6 py-3 sm:px-8 sm:py-3.5 rounded transition-all transform hover:scale-105 interactive shadow-[0_0_20px_rgba(245,158,11,0.45)] text-xs sm:text-sm cursor-pointer"
               >
                 ENTER CAFE ↗
               </a>
               <a 
                 href="https://github.com/KNOWNASPRATYUSH/Coffee-cravings" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-block bg-white/5 hover:bg-white/10 text-amber-300 border border-brand-amber/30 font-medium orbitron px-5 py-3 sm:px-6 sm:py-3.5 rounded transition-all interactive text-xs sm:text-sm cursor-pointer"
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
        <div className="flex items-center justify-center min-h-screen px-6 md:px-10 py-20 select-none">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-5xl glass p-6 md:p-10 rounded-3xl border border-brand-blue/15"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse"></span>
              <span className="text-[10px] orbitron tracking-[0.3em] text-brand-blue uppercase">Technical Arsenal</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl orbitron font-bold text-white mb-8 md:mb-10 text-center uppercase tracking-widest">
              Core Capabilities
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { 
                  name: 'Frontend Engineering', 
                  color: 'border-brand-blue text-brand-blue',
                  items: ['React 19 & Next.js', 'Three.js / Fiber / Drei', 'Tailwind CSS & GSAP', 'TypeScript & Vite'] 
                },
                { 
                  name: 'Backend & Core Runtimes', 
                  color: 'border-brand-purple text-brand-purple',
                  items: ['Native Node.js (Core)', 'Express & Serverless APIs', 'Python & Go Basics', 'REST & Webhook Engines'] 
                },
                { 
                  name: 'Databases & In-Memory', 
                  color: 'border-brand-amber text-amber-400',
                  items: ['Upstash Redis (REST KV)', 'PostgreSQL & Supabase', 'MongoDB & NoSQL', 'Firebase & Realtime DB'] 
                },
                { 
                  name: 'Security & DevOps', 
                  color: 'border-brand-emerald text-emerald-400',
                  items: ['HMAC Cryptography', 'DPDP Act 2023 Compliance', 'Vercel & Cloud CI/CD', 'Docker & Git Architecture'] 
                }
              ].map(cat => (
                <div key={cat.name} className={`border-l-2 ${cat.color} pl-4 py-2 hover:bg-white/5 transition-colors group rounded-r-lg`}>
                  <h3 className={`font-bold mb-3 text-xs sm:text-sm tracking-wider uppercase ${cat.color}`}>
                    {cat.name}
                  </h3>
                  <ul className="text-xs text-gray-400 space-y-1.5">
                    {cat.items.map(item => (
                      <li key={item} className="hover:text-white transition-colors flex items-center gap-1.5">
                        <span className="text-[8px] opacity-60">▹</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      )
    },

    // 06: GALACTIC JOURNEY (TIMELINE)
    {
      id: 'journey',
      content: (
        <div className="flex items-center justify-start min-h-screen px-6 md:px-32 py-20 select-none">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-brand-purple animate-pulse"></span>
              <span className="text-[10px] orbitron tracking-[0.3em] text-brand-purple uppercase">Trajectory</span>
            </div>

            <h2 className="text-3xl sm:text-4xl orbitron font-bold text-white mb-8 md:mb-12 uppercase tracking-tight">
              Galactic Journey
            </h2>

            <div className="space-y-10 md:space-y-12">
              {[
                { 
                  year: '2024 - PRESENT', 
                  role: 'Full Stack Architect & Founder', 
                  company: 'Cartnova / Elite Productions', 
                  desc: 'Architecting end-to-end web ecosystems including Coffee & Cravings (real-time QR cafe platform with zero external dependencies) and India Fitness (high-velocity athletic portal).' 
                },
                { 
                  year: '2022 - 2024', 
                  role: 'Frontend Architect & UI Engineer', 
                  company: 'Independent / Creative Tech', 
                  desc: 'Crafted 60FPS user experiences, responsive design systems, and modern full-stack web solutions with modern JavaScript frameworks.' 
                }
              ].map(job => (
                <div key={job.year} className="relative pl-6 md:pl-8 border-l-2 border-brand-purple/30 hover:border-brand-purple transition-all group">
                  <div className="absolute top-0 left-[-7px] w-3 h-3 bg-brand-purple rounded-full group-hover:scale-150 transition-transform shadow-[0_0_12px_#a855f7]"></div>
                  <span className="text-[10px] orbitron text-brand-purple font-semibold">{job.year}</span>
                  <h3 className="text-lg sm:text-xl font-bold text-white mt-1 group-hover:text-brand-purple transition-colors">
                    {job.role}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 mb-2">{job.company}</p>
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
        <div className="flex items-center justify-center md:justify-end min-h-screen px-6 md:px-32 py-20 select-none">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-xl glass p-8 md:p-10 rounded-3xl border-r-4 md:border-r-8 border-brand-blue text-center md:text-right"
          >
            <div className="flex items-center justify-center md:justify-end gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse"></span>
              <span className="text-[10px] orbitron tracking-[0.3em] text-brand-blue uppercase">Philosophy</span>
            </div>

            <h2 className="text-2xl sm:text-3xl orbitron font-bold text-white mb-6 md:mb-8 uppercase">
              THE BLUEPRINT
            </h2>

            <div className="space-y-6 text-center md:text-right">
              {[
                { 
                  num: '01', 
                  title: 'Zero-Latency Architecture', 
                  desc: 'Every millisecond counts. Code is engineered with minimal overhead, native core libraries, and distributed memory caching to deliver instant responses.' 
                },
                { 
                  num: '02', 
                  title: 'Visual Poetry & 60FPS', 
                  desc: 'Interfaces should tell a gripping story. Reactive animations and 3D scenes are tuned to maintain 60FPS fluidity on all modern screens.' 
                },
                { 
                  num: '03', 
                  title: 'Security & Compliance First', 
                  desc: 'From cryptographic HMAC signatures to full DPDP Act statutory compliance, trust and data safety are built in at the foundation.' 
                }
              ].map(doc => (
                <div key={doc.title} className="hover:translate-x-[-8px] transition-transform group">
                   <div className="text-[10px] orbitron text-brand-blue/70 mb-0.5">{doc.num} // PRINCIPLE</div>
                   <h3 className="text-white group-hover:text-brand-blue font-bold text-md sm:text-lg mb-1 transition-colors">
                     {doc.title}
                   </h3>
                   <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">{doc.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      ),
    },

    // 08: CONTACT / INITIATE CONNECTION
    {
      id: 'contact',
      content: (
         <div className="flex flex-col items-center justify-center min-h-screen px-6 md:px-10 py-20 text-center select-none">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-8 md:p-12 rounded-3xl border border-brand-blue/20 w-full max-w-lg shadow-[0_0_30px_rgba(0,0,0,0.8)]"
          >
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-brand-blue animate-ping"></span>
              <span className="text-[10px] orbitron tracking-[0.4em] text-brand-blue uppercase">Encrypted Transmission</span>
            </div>

            <h2 className="text-2xl sm:text-4xl orbitron font-bold mb-4 glow-text text-white">
              INITIATE CONNECTION
            </h2>

            <p className="text-xs sm:text-sm text-gray-400 font-light mb-8">
              Open for full-stack engineering, 3D web platforms, and architectural consulting.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-5 pointer-events-auto text-left">
               <input type="hidden" name="access_key" value="c1cefa47-9b89-476b-8bd1-ada665d42bea" />
               <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
               
               <div>
                 <label className="text-[9px] orbitron text-gray-500 uppercase tracking-widest block mb-1">
                   Transmission Channel
                 </label>
                 <input 
                   type="email" 
                   name="email" 
                   placeholder="YOUR EMAIL (CHANNEL)" 
                   className="w-full bg-black/60 border border-brand-blue/30 px-5 py-3.5 rounded-xl outline-none focus:border-brand-blue focus:shadow-[0_0_15px_rgba(0,212,255,0.25)] text-white text-xs sm:text-sm interactive transition-all" 
                   required 
                 />
               </div>

               <div>
                 <label className="text-[9px] orbitron text-gray-500 uppercase tracking-widest block mb-1">
                   Payload Content
                 </label>
                 <textarea 
                   name="message" 
                   rows="3" 
                   placeholder="YOUR MESSAGE TO PRATYUSH..." 
                   className="w-full bg-black/60 border border-brand-blue/30 px-5 py-3.5 rounded-xl outline-none focus:border-brand-blue focus:shadow-[0_0_15px_rgba(0,212,255,0.25)] text-white text-xs sm:text-sm resize-none interactive transition-all" 
                   required 
                 />
               </div>

               <button 
                 type="submit" 
                 className="bg-brand-blue text-black font-bold orbitron py-4 rounded-xl hover:bg-brand-purple hover:text-white transition-all transform hover:scale-[1.02] interactive text-xs sm:text-sm cursor-pointer shadow-[0_0_20px_rgba(0,212,255,0.35)] mt-2"
               >
                 {status || "TRANSMIT PACKET ↗"}
               </button>

               {status && (
                 <p className="text-[10px] orbitron text-brand-blue text-center animate-pulse mt-1">
                   {status}
                 </p>
               )}
            </form>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap justify-center gap-4 md:gap-6 pointer-events-auto text-[10px] sm:text-xs orbitron">
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

          <p className="mt-8 md:mt-12 text-brand-blue font-bold orbitron text-[10px] md:text-[11px] tracking-[0.35em] glow-text">
            DESIGNED &amp; ENGINEERED UNDER CARTNOVA BY PRATYUSH
          </p>
        </div>
      )
    }
  ]

  return (
    <div className="w-screen overflow-hidden">
      {sections.map(section => (
        <section key={section.id} id={section.id}>
          {section.content}
        </section>
      ))}
    </div>
  )
}