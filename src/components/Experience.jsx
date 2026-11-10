import React, { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Float, useScroll, Stars, Sparkles, Environment, Text, MeshDistortMaterial, useTexture } from '@react-three/drei'
import * as THREE from 'three'
import profileImg from '../assets/profile.jpg'
import fitnessPreviewImg from '../assets/fitness_preview.jpg'
import coffeePreviewImg from '../assets/coffee_preview.jpg'

export default function Experience() {
  const { width, height } = useThree((state) => state.viewport)
  const scroll = useScroll()
  const groupRef = useRef()
  const starsRef = useRef()
  
  const isMobile = width < height
  const responsiveScale = isMobile ? Math.min(width * 0.16, 0.72) : 1

  useFrame((state, delta) => {
    const scrollOffset = scroll.offset
    const scrollVelocity = Math.abs(scroll.delta)
    
    // Warp speed stars acceleration on fast scroll
    if (starsRef.current) {
      starsRef.current.rotation.z += delta * (0.02 + scrollVelocity * 0.5)
      starsRef.current.scale.z = 1 + scrollVelocity * 15
      starsRef.current.scale.x = 1 + scrollVelocity * 1.5
      starsRef.current.scale.y = 1 + scrollVelocity * 1.5
    }

    // Camera movement based on scroll across 8 pages
    const zBase = isMobile ? 8.5 : 5
    const targetX = Math.sin(scrollOffset * Math.PI * 2) * (isMobile ? 0.6 : 3)
    const targetZ = zBase - (scrollOffset * (isMobile ? 25 : 28))
    const targetY = (isMobile ? 1.2 : 2) + Math.cos(scrollOffset * Math.PI) * (isMobile ? 0.6 : 1.5)

    const targetPos = new THREE.Vector3(targetX, targetY, targetZ)
    state.camera.position.lerp(targetPos, 0.05)
    
    // Look ahead dynamically
    const lookAtZ = -scrollOffset * (isMobile ? 20 : 24)
    state.camera.lookAt(0, 0, lookAtZ)

    // Parallax on mouse movement (desktop only, smoothed)
    const mouseX = state.mouse.x * 0.5
    const mouseY = state.mouse.y * 0.5
    if (groupRef.current && !isMobile) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mouseX * 0.2, 0.1)
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -mouseY * 0.1, 0.1)
    }
  })

  return (
    <group ref={groupRef} scale={[responsiveScale, responsiveScale, responsiveScale]}>
      {/* Dynamic Cyber Lighting */}
      <ambientLight intensity={0.25} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#00d4ff" />
      <spotLight position={[-5, 5, 5]} angle={0.3} penumbra={1} intensity={2} color="#a855f7" castShadow />
      <pointLight position={[-5, -2, -4]} intensity={1.5} color="#f59e0b" />
      <pointLight position={[5, -2, -8]} intensity={1.2} color="#00d4ff" />
      
      {/* Atmospheric Starfield and Sparkles */}
      <group ref={starsRef}>
         <Stars radius={100} depth={50} count={isMobile ? 3500 : 7000} factor={6} saturation={0} fade speed={1} />
      </group>
      <Sparkles count={isMobile ? 120 : 300} scale={[24, 24, 16]} size={2.5} speed={0.6} opacity={0.35} color="#00d4ff" />
      <fog attach="fog" args={['#0a0a0a', 5, 18]} />

      {/* Hero Workstation Desk */}
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.6}>
        <Desk isMobile={isMobile} />
      </Float>

      {/* Floating 3D Holographic Project Displays */}
      <Float speed={2.5} rotationIntensity={0.3} floatIntensity={0.8} position={[isMobile ? 0 : -2.8, isMobile ? 1.8 : 0.8, -2.5]}>
        <HoloProjectFrame 
          image={fitnessPreviewImg} 
          title="INDIA FITNESS" 
          subtitle="ATHLETIC WEB ENGINE"
          accentColor="#00d4ff" 
          rotation={isMobile ? [0, 0, 0] : [0, 0.35, 0]}
          scale={isMobile ? 0.65 : 1}
        />
      </Float>

      <Float speed={2.5} rotationIntensity={0.3} floatIntensity={0.8} position={[isMobile ? 0 : 2.8, isMobile ? 1.8 : 0.8, -6.5]}>
        <HoloProjectFrame 
          image={coffeePreviewImg} 
          title="COFFEE & CRAVINGS" 
          subtitle="ARTISAN QR CAFE SYSTEM"
          accentColor="#f59e0b" 
          rotation={isMobile ? [0, 0, 0] : [0, -0.35, 0]}
          scale={isMobile ? 0.65 : 1}
        />
      </Float>

      {/* Floating Tech Arsenal Orbiting Spheres (Responsive Coordinates) */}
      <Float speed={3} rotationIntensity={1} floatIntensity={1.8} position={[isMobile ? 1.4 : 3, isMobile ? 2.4 : 2, -2]}>
        <SkillSphere color="#00d4ff" name="React 19" ringColor="#00d4ff" />
      </Float>

      <Float speed={2.5} rotationIntensity={1} floatIntensity={1.5} position={[isMobile ? -1.4 : -3.8, isMobile ? 2.4 : 2, -1]}>
        <SkillSphere color="#a855f7" name="Node.js" ringColor="#a855f7" />
      </Float>

      <Float speed={3} rotationIntensity={1} floatIntensity={1.5} position={[isMobile ? -1.3 : -3.2, isMobile ? -1.4 : -1.2, -4.5]}>
        <SkillSphere color="#f59e0b" name="Redis KV" ringColor="#f59e0b" />
      </Float>

      <Float speed={4} rotationIntensity={1.5} floatIntensity={2} position={[isMobile ? 1.3 : 2.6, isMobile ? -1.2 : -0.6, -7.5]}>
        <SkillSphere color="#00d4ff" name="Next.js" ringColor="#00d4ff" />
      </Float>

      <Float speed={2} rotationIntensity={0.6} floatIntensity={1} position={[isMobile ? -1.3 : -3, isMobile ? 2.2 : 2.5, -11]}>
        <SkillSphere color="#a855f7" name="PostgreSQL" ringColor="#a855f7" />
      </Float>

      <Float speed={3.5} rotationIntensity={1.8} floatIntensity={1} position={[isMobile ? 1.3 : 3.8, isMobile ? -1.2 : -0.8, -15]}>
        <SkillSphere color="#00d4ff" name="Docker" ringColor="#00d4ff" />
      </Float>

      <Environment preset="city" />
    </group>
  )
}

function Desk({ isMobile }) {
  const profileTexture = useTexture(profileImg)

  return (
    <group position={[0, isMobile ? -0.2 : -0.5, 0]}>
      {/* Table Top Surface */}
      <mesh receiveShadow position={[0, 0, 0]}>
        <boxGeometry args={[4.2, 0.1, 2.2]} />
        <meshStandardMaterial color="#121214" metalness={0.85} roughness={0.2} />
      </mesh>

      {/* Ambient Desk LED Underglow */}
      <pointLight position={[0, -0.4, 0]} intensity={1.2} color="#00d4ff" distance={2.5} />

      {/* Cyber Desk Mat */}
      <mesh position={[0, 0.055, 0.1]}>
        <boxGeometry args={[3.2, 0.01, 1.2]} />
        <meshStandardMaterial color="#090d16" roughness={0.6} />
      </mesh>
      {/* Desk Mat Glowing Edge */}
      <mesh position={[0, 0.058, 0.1]}>
        <boxGeometry args={[3.24, 0.005, 1.24]} />
        <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={0.4} />
      </mesh>

      {/* Mechanical Keyboard with Backlit Keys */}
      <group position={[-0.1, 0.07, 0.3]}>
        <mesh>
          <boxGeometry args={[1.1, 0.025, 0.38]} />
          <meshStandardMaterial color="#1e1e24" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0.015, 0]}>
          <boxGeometry args={[1.04, 0.01, 0.34]} />
          <meshStandardMaterial color="#0f172a" emissive="#00d4ff" emissiveIntensity={0.3} />
        </mesh>
      </group>

      {/* Ergonomic Wireless Mouse */}
      <group position={[0.85, 0.07, 0.3]}>
        <mesh>
          <boxGeometry args={[0.16, 0.03, 0.26]} />
          <meshStandardMaterial color="#1f1f23" metalness={0.7} roughness={0.3} />
        </mesh>
        <mesh position={[0, 0.018, 0]}>
          <boxGeometry args={[0.02, 0.005, 0.12]} />
          <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={0.8} />
        </mesh>
      </group>

      {/* Artisan Coffee Mug (Coffee & Cravings Tribute) */}
      <group position={[1.4, 0.18, -0.2]}>
        <mesh>
          <cylinderGeometry args={[0.13, 0.11, 0.26, 24]} />
          <meshStandardMaterial color="#18181b" metalness={0.4} roughness={0.3} />
        </mesh>
        <mesh position={[0, 0.1, 0]}>
          <cylinderGeometry args={[0.12, 0.12, 0.01, 24]} />
          <meshStandardMaterial color="#3b1d11" roughness={0.1} />
        </mesh>
        <mesh position={[0.14, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.07, 0.022, 12, 24]} />
          <meshStandardMaterial color="#18181b" metalness={0.4} roughness={0.3} />
        </mesh>
        <pointLight position={[0, 0.2, 0]} intensity={0.4} color="#f59e0b" distance={0.6} />
      </group>

      {/* Main Developer Laptop */}
      <group position={[-0.1, 0.06, -0.15]}>
        <mesh position={[0, 0.03, 0]}>
          <boxGeometry args={[1.3, 0.04, 0.9]} />
          <meshStandardMaterial color="#27272a" metalness={0.9} roughness={0.15} />
        </mesh>
        <mesh position={[0, 0.052, 0.22]}>
          <boxGeometry args={[0.42, 0.002, 0.28]} />
          <meshStandardMaterial color="#18181b" metalness={0.6} roughness={0.4} />
        </mesh>

        {/* Laptop Screen Open */}
        <group position={[0, 0.05, -0.42]} rotation={[-0.22, 0, 0]}>
           <mesh position={[0, 0.44, 0]}>
              <boxGeometry args={[1.3, 0.88, 0.04]} />
              <meshStandardMaterial color="#18181b" metalness={0.9} roughness={0.1} />
           </mesh>
           <mesh position={[0, 0.44, 0.022]}>
              <planeGeometry args={[1.22, 0.8]} />
              <meshStandardMaterial color="#030712" emissive="#00d4ff" emissiveIntensity={0.18} roughness={0.2} />
              <pointLight position={[0, 0, 0.1]} intensity={0.7} color="#00d4ff" distance={1.4} />
           </mesh>
           
           <Text
             position={[-0.56, 0.74, 0.026]}
             fontSize={0.042}
             color="#00d4ff"
             anchorX="left"
             anchorY="top"
             lineHeight={1.4}
           >
{`// PRATYUSH KUMAR — CORE WORKSPACE
const engineer = {
  name: "Pratyush Kumar",
  role: "Web Developer & Systems Architect",
  specialties: ["React 19", "Node.js Core", "Redis KV", "Three.js"],
  production: ["Coffee & Cravings", "India Fitness"]
};
await engineer.deployNextGen({ fps: 60 });`}
           </Text>
        </group>
      </group>

      {/* Floating Vertical Pro Monitor */}
      <group position={[-1.6, 0.85, -0.4]} rotation={[0, 0.32, 0]}>
        <mesh>
          <boxGeometry args={[0.65, 1.35, 0.08]} />
          <meshStandardMaterial color="#0f172a" metalness={0.9} roughness={0.1} />
        </mesh>
        <mesh position={[0, 0, 0.045]}>
          <planeGeometry args={[0.58, 1.25]} />
          <meshStandardMaterial map={profileTexture} emissive="#ffffff" emissiveIntensity={0.25} />
        </mesh>
        <group position={[0, -0.52, 0.048]}>
          <mesh>
             <planeGeometry args={[0.54, 0.14]} />
             <meshStandardMaterial color="#030712" emissive="#a855f7" emissiveIntensity={0.4} />
          </mesh>
          <Text
            position={[0, 0, 0.01]}
            fontSize={0.026}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
            lineHeight={1.3}
          >
            {`SYSTEM: FULL STACK ONLINE\nPATNA (25.59° N, 85.14° E)`}
          </Text>
        </group>
        <mesh position={[0, -0.7, -0.1]}>
          <cylinderGeometry args={[0.03, 0.03, 0.45]} />
          <meshStandardMaterial color="#222" metalness={0.9} />
        </mesh>
      </group>
    </group>
  )
}

function HoloProjectFrame({ image, title, subtitle, accentColor, rotation = [0, 0, 0], scale = 1 }) {
  const texture = useTexture(image)
  
  return (
    <group rotation={rotation} scale={[scale, scale, scale]}>
      {/* Outer Floating Cyber Glass Frame */}
      <mesh>
        <boxGeometry args={[2.5, 1.6, 0.06]} />
        <meshStandardMaterial color="#0a0a0f" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Glowing Neon Cyber Border */}
      <mesh position={[0, 0, 0.032]}>
        <planeGeometry args={[2.42, 1.52]} />
        <meshStandardMaterial color={accentColor} emissive={accentColor} emissiveIntensity={0.3} wireframe />
      </mesh>

      {/* Main Project Screenshot Texture */}
      <mesh position={[0, 0, 0.035]}>
        <planeGeometry args={[2.34, 1.44]} />
        <meshStandardMaterial map={texture} roughness={0.2} emissive="#ffffff" emissiveIntensity={0.05} />
      </mesh>

      {/* Floating Holographic Projection Title Badge */}
      <group position={[0, -0.92, 0.05]}>
        <mesh>
          <planeGeometry args={[2.1, 0.28]} />
          <meshStandardMaterial color="#030712" emissive={accentColor} emissiveIntensity={0.25} />
        </mesh>
        <Text
          position={[0, 0.04, 0.01]}
          fontSize={0.08}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          {title}
        </Text>
        <Text
          position={[0, -0.06, 0.01]}
          fontSize={0.045}
          color={accentColor}
          anchorX="center"
          anchorY="middle"
        >
          {subtitle}
        </Text>
      </group>
    </group>
  )
}

function SkillSphere({ color, name, ringColor }) {
  const ringRef = useRef()

  useFrame((_, delta) => {
    if (ringRef.current) {
      ringRef.current.rotation.x += delta * 0.8
      ringRef.current.rotation.y += delta * 0.5
    }
  })

  return (
    <group>
      {/* Core Dynamic Mesh Sphere */}
      <mesh>
        <sphereGeometry args={[0.42, 32, 32]} />
        <MeshDistortMaterial
          distort={0.35}
          speed={2.2}
          color={color}
          emissive={color}
          emissiveIntensity={0.6}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Planetary Holographic Orbital Ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[0.62, 0.015, 16, 64]} />
        <meshStandardMaterial 
          color={ringColor} 
          emissive={ringColor} 
          emissiveIntensity={0.8} 
          wireframe
        />
      </mesh>

      {/* Floating 3D Technology Label */}
      <Text
        position={[0, 0.65, 0]}
        fontSize={0.15}
        color="white"
        anchorX="center"
        anchorY="bottom"
      >
        {name}
      </Text>
    </group>
  )
}
