<div align="center">

# 🌌 PRATYUSH KUMAR — 3D INTERACTIVE PORTFOLIO
### *WebGL Visual Computing • React 19 & Three.js • High-Performance Kinetic Interface*

[![Production Status](https://img.shields.io/badge/Production-Live%20on%20Vercel-success?style=for-the-badge&logo=vercel&logoColor=white)](https://www.knownaspratyush.online/)
[![React Version](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-WebGL%20Canvas-black?style=for-the-badge&logo=threedotjs&logoColor=white)](https://threejs.org/)
[![Vite](https://img.shields.io/badge/Bundler-Vite%208-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

<br/>

**[🌐 Launch 3D Portfolio](https://www.knownaspratyush.online/)** • **[💼 Connect on LinkedIn](https://www.knownaspratyush.online/)** • **[🐙 GitHub Profile](https://github.com/KNOWNASPRATYUSH)**

---

</div>

## 📌 Executive Overview

This repository powers the official **3D interactive digital portfolio** of **Pratyush Kumar** (`KNOWNASPRATYUSH`). Built with **React 19**, **Three.js**, and **React Three Fiber (R3F)**, the application delivers a GPU-accelerated spatial computing interface designed for smooth 60fps animations, interactive 3D object rendering, and cinematic page transitions.

```
         Browser Client                     Canvas Layer                     DOM & State
   ┌───────────────────────┐            ┌───────────────────┐            ┌─────────────────┐
   │ 🖥️ User Interaction   │ ─────────> │ 🪐 Three.js / R3F │ ─────────> │ ⚛️ React 19 UI  │
   │ 🖱️ Mouse Parallax     │            │ 🎨 Custom Shaders │            │ 🎭 Framer Motion│
   │ 📱 Responsive Layout  │ <───────── │ ⚡ WebGL Pipeline │ <───────── │ 🎬 GSAP Timeline│
   └───────────────────────┘            └───────────────────┘            └─────────────────┘
```

---

## ✨ Engineering & Visual Highlights

### 1. 🪐 3D WebGL Spatial Computing
- **React Three Fiber & Drei:** Declarative 3D scene construction with dynamic lighting, environment mapping, and real-time mesh deformation.
- **Interactive Mouse Parallax:** Depth-aware perspective shifts responding fluidly to pointer movements and device orientation.

### 2. 🎬 Kinetic Transitions & Digital Dissolve
- **Custom Loading Screen:** Engineered with GSAP and Framer Motion featuring a high-speed "Digital Dissolve" exit animation sequence.
- **Smooth Scroll & Section Navigation:** Interpolated physics-based scroll choreography coordinating 2D DOM elements with 3D canvas positions.

### 3. 🎨 Dark Cyberpunk Minimalist Design System
- **Typography:** Orbitron geometric futurist headings paired with Inter body copy for clean readability.
- **Glassmorphism & Neon Accents:** Frosted backdrop-filter panels with cyan and emerald gradient illumination.

### 4. ⚡ Extreme Frontend Performance
- **React 19 & Vite 8:** Zero-latency Hot Module Replacement (HMR) and optimized tree-shaken production bundles.
- **Asset Optimization:** Low-poly 3D models and compressed textures to maintain fast First Contentful Paint (FCP) on mobile networks.

---

## 🛠️ Technology Stack & Dependencies

| Category | Primary Technologies |
|---|---|
| **Core Framework** | React 19 (`react`, `react-dom`), Vite 8, TypeScript |
| **3D Rendering** | Three.js (`three`), `@react-three/fiber`, `@react-three/drei` |
| **Choreography & Motion** | Framer Motion 12, GSAP 3 (GreenSock Animation Platform) |
| **Styling & Design System** | Tailwind CSS 3, PostCSS, Autoprefixer, `tailwind-merge`, `clsx` |
| **Iconography** | Lucide React (`lucide-react`) |
| **Hosting & Edge** | Vercel Global Edge Network with instant SSL and HTTP/3 support |

---

## 🏗️ Repository Architecture

```
PORTFOLIO-WEBSITE/
├── public/                 # Static assets, models, and favicon icons
├── src/
│   ├── assets/             # Vector icons, imagery, and sound effects
│   ├── components/         # 3D Canvas scenes, Navbar, Experience cards, Hero
│   ├── hooks/              # Custom hooks for viewport, pointer, and theme state
│   ├── App.jsx             # Main canvas and layout composition
│   ├── index.css           # Tailwind custom utility classes and design tokens
│   └── main.jsx            # Application entry point
├── package.json            # Scripts, build tools, and modern dependencies
├── tailwind.config.js      # Custom theme extensions (fonts, colors, shadows)
├── vite.config.js          # Vite configuration and plugin pipelines
└── vercel.json             # Edge caching and clean URL rewrite rules
```

---

## 🚀 Local Development Setup

Ensure you have **Node.js 20+** installed:

```bash
# 1. Clone the repository
git clone https://github.com/KNOWNASPRATYUSH/PORTFOLIO-WEBSITE.git
cd PORTFOLIO-WEBSITE

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Compile optimized production build
npm run build

# 5. Preview production build locally
npm run preview
```

---

## 👨‍💻 Architect & Engineering Lead

<table border="0">
 <tr>
  <td width="120" align="center" valign="top">
    <img src="https://github.com/KNOWNASPRATYUSH.png" width="100" style="border-radius:50%;" alt="Pratyush Kumar"/>
  </td>
  <td>
    <h3>Pratyush Kumar</h3>
    <p><b>Full-Stack Engineer • Creative Technologist • Founder, CARTNOVA</b></p>
    <p>Specializing in 3D WebGL interfaces, real-time distributed systems, and modern digital commerce solutions.</p>
    <p>
      <a href="https://www.knownaspratyush.online/"><img src="https://img.shields.io/badge/Portfolio-knownaspratyush.online-646CFF?style=flat-square&logo=googlechrome&logoColor=white" alt="Portfolio"/></a>&nbsp;
      <a href="https://github.com/KNOWNASPRATYUSH"><img src="https://img.shields.io/badge/GitHub-KNOWNASPRATYUSH-181717?style=flat-square&logo=github&logoColor=white" alt="GitHub"/></a>&nbsp;
      <a href="https://www.instagram.com/knownaspratyush_/"><img src="https://img.shields.io/badge/Instagram-@knownaspratyush__-E4405F?style=flat-square&logo=instagram&logoColor=white" alt="Instagram"/></a>&nbsp;
      <a href="mailto:admin@knownaspratyush.online"><img src="https://img.shields.io/badge/Email-admin@knownaspratyush.online-D14836?style=flat-square&logo=gmail&logoColor=white" alt="Email"/></a>
    </p>
  </td>
 </tr>
</table>

---

## 📄 License & Attribution

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for complete terms.

&copy; 2026 **Pratyush Kumar**. All rights reserved.
