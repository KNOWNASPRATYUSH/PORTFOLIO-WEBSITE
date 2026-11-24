<div align="center">

# 🌌 PRATYUSH KUMAR
### *Official Portfolio & Digital Engineering Studio • Founder, CARTNOVA*

[![Live Production](https://img.shields.io/badge/Live-knownaspratyush.online-00d4ff?style=for-the-badge&logo=vercel&logoColor=white)](https://www.knownaspratyush.online/)
[![Founder](https://img.shields.io/badge/Founder-CARTNOVA-a855f7?style=for-the-badge)](https://www.knownaspratyush.online/)
[![React Version](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-WebGL%20Canvas-black?style=for-the-badge&logo=threedotjs&logoColor=white)](https://threejs.org/)
[![Core Web Vitals](https://img.shields.io/badge/Core%20Web%20Vitals-100%2F100-emerald?style=for-the-badge)](https://www.knownaspratyush.online/)
[![License: MIT](https://img.shields.io/badge/License-MIT-10b981?style=for-the-badge)](./LICENSE)

<br/>

**[🌐 Official Portfolio](https://www.knownaspratyush.online/)** • **[🏢 Studio (CARTNOVA)](https://www.knownaspratyush.online/)** • **[💼 Work & Case Studies](https://www.knownaspratyush.online/work)** • **[⚡ Services](https://www.knownaspratyush.online/services)**

---

</div>

## 📌 Executive Overview

Official open-source codebase for the digital portfolio of **Pratyush Kumar** (`KNOWNASPRATYUSH`), Full-Stack Web Developer and Founder of **CARTNOVA** based in Patna, Bihar, India.

Combining **React 19**, **Three.js / React Three Fiber**, and fluid **GSAP** timelines, this platform delivers an interactive WebGL spatial computing experience engineered with a zero-dependency mindset and zero cumulative layout shift (CLS = 0).

```
         Browser Client                     Canvas Layer                     DOM & State
   ┌───────────────────────┐            ┌───────────────────┐            ┌─────────────────┐
   │ 🖥️ User Interaction   │ ─────────> │ 🪐 Three.js / R3F │ ─────────> │ ⚛️ React 19 UI  │
   │ 🖱️ Mouse Parallax     │            │ 🎨 Custom Shaders │            │ 🎭 Framer Motion│
   │ 📱 Responsive Layout  │ <───────── │ ⚡ WebGL Pipeline │ <───────── │ 🎬 GSAP Timeline│
   └───────────────────────┘            └───────────────────┘            └─────────────────┘
```

---

## 🌐 Live Broadcast & Canonical Knowledge Endpoints

* **Official Portfolio**: [https://www.knownaspratyush.online/](https://www.knownaspratyush.online/)
* **Engineering Studio**: [CARTNOVA](https://www.knownaspratyush.online/) (Patna, Bihar, India)
* **Flagship Case Studies**: [https://www.knownaspratyush.online/work](https://www.knownaspratyush.online/work)
* **Services & Technical Consulting**: [https://www.knownaspratyush.online/services](https://www.knownaspratyush.online/services)
* **AI Machine Ingestion Specs**: [llms.txt](https://www.knownaspratyush.online/llms.txt) • [llms-full.txt](https://www.knownaspratyush.online/llms-full.txt)

---

## 🚀 Flagship Production Systems

| Platform | Domain | Tech Stack | Status | Repository |
| :--- | :--- | :--- | :--- | :--- |
| **☕ Coffee & Cravings** | [coffeeandcravings.shop](https://www.coffeeandcravings.shop/) | Native Node.js Core, Upstash Redis KV, HMAC-SHA256 | `Production` | [Coffee-cravings](https://github.com/KNOWNASPRATYUSH/Coffee-cravings) |
| **🏋️ India Fitness** | [india-fitness.vercel.app](https://india-fitness.vercel.app/) | HTML5, CSS Grid, FitFlex Theme, Decap CMS | `Production` | [INDIA-FITNESS](https://github.com/KNOWNASPRATYUSH/INDIA-FITNESS) |
| **🏢 CARTNOVA Studio** | [knownaspratyush.online](https://www.knownaspratyush.online/) | Full-Stack Custom Systems, VŌLT Storefront | `Active` | [CARTNOVA](https://github.com/KNOWNASPRATYUSH) |

---

## ⚡ Engineering Architecture & Features

* **Fluid 60FPS Kinetic Transitions**: Choreographed using GSAP (GreenSock) and ScrollTrigger with zero cumulative layout shift (CLS = 0).
* **3D Canvas & WebGL Computing**: Depth-aware perspective shifts responding fluidly to pointer movements and device orientation.
* **Zero-Dependency Mindset**: Lean, hardened runtime boot times minimizing third-party bundle bloat.
* **Deep Schema.org Knowledge Graph**: Comprehensive JSON-LD linking `Person`, `Organization` (CARTNOVA), `LocalBusiness` / `ProfessionalService`, `FAQPage`, and Wikidata entity relationships.
* **Answer Engine Optimization (AEO)**: Fully integrated `llms.txt` and `llms-full.txt` endpoints designed for machine ingestion by Perplexity, SearchGPT, Claude, and Gemini.
* **Geographic Search Optimization (GEO)**: Explicit geolocation metadata targeting Patna, Bihar, India (Postal Code: 800001, Geo: 25.5941° N, 85.1376° E).
* **Statutory Data Privacy**: Designed in full compliance with India's Digital Personal Data Protection Act (DPDP Act 2023).

---

## 🛠️ Local Development & Build

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0.0 or later)
- [npm](https://www.npmjs.com/) (v9.0.0 or later)

### Quickstart

```bash
# 1. Clone repository
git clone https://github.com/KNOWNASPRATYUSH/PORTFOLIO-WEBSITE.git
cd PORTFOLIO-WEBSITE

# 2. Install dependencies
npm install

# 3. Start development server (Vite)
npm run dev

# 4. Compile optimized production build
npm run build

# 5. Preview production build locally
npm run preview
```

---

## 📂 Project Structure

```
PORTFOLIO-WEBSITE/
├── index.html              # Main portfolio application & Schema.org Graph
├── about/                  # Dedicated About & Biography page
├── work/                   # Production Flagships & Architectural Case Studies
├── services/               # Full-Stack Engineering & Consulting Services
├── contact/                # Contact Terminal & Project Inquiry console
├── public/
│   ├── assets/             # CSS, JS, Fonts, Icons, and Media
│   ├── robots.txt          # Multi-bot crawling directives (11 AI/Search bots)
│   ├── sitemap.xml         # Image-rich XML sitemap for Search Console
│   ├── llms.txt            # Machine-readable summary for AI engines
│   ├── llms-full.txt       # Uncompressed AI entity knowledge base
│   └── site.webmanifest    # Progressive Web App manifest
├── .github/
│   ├── ISSUE_TEMPLATE/     # Standard bug and feature issue templates
│   ├── PULL_REQUEST_TEMPLATE.md
│   └── SECURITY.md         # Vulnerability reporting protocol
├── CODE_OF_CONDUCT.md      # Contributor Covenant v2.1
├── CONTRIBUTING.md         # Contribution guidelines
├── LICENSE                 # MIT License
└── package.json
```

---

## 👨‍💻 Author & Engineering Lead

<table border="0">
 <tr>
  <td width="120" align="center" valign="top">
    <img src="https://github.com/KNOWNASPRATYUSH.png" width="100" style="border-radius:50%;" alt="Pratyush Kumar"/>
  </td>
  <td>
    <h3>Pratyush Kumar</h3>
    <p><b>Full-Stack Web Developer • Software Architect • Founder, CARTNOVA</b></p>
    <p>Based in Patna, Bihar, India. Specializing in WebGL computing, high-conversion web platforms, and edge cloud architectures.</p>
    <p>
      <a href="https://www.knownaspratyush.online/"><img src="https://img.shields.io/badge/Portfolio-knownaspratyush.online-00d4ff?style=flat-square&logo=googlechrome&logoColor=black" alt="Portfolio"/></a>&nbsp;
      <a href="https://github.com/KNOWNASPRATYUSH"><img src="https://img.shields.io/badge/GitHub-KNOWNASPRATYUSH-181717?style=flat-square&logo=github&logoColor=white" alt="GitHub"/></a>&nbsp;
      <a href="https://www.instagram.com/knownaspratyush_/"><img src="https://img.shields.io/badge/Instagram-@knownaspratyush__-E4405F?style=flat-square&logo=instagram&logoColor=white" alt="Instagram"/></a>&nbsp;
      <a href="mailto:admin@knownaspratyush.online"><img src="https://img.shields.io/badge/Email-admin@knownaspratyush.online-D14836?style=flat-square&logo=gmail&logoColor=white" alt="Email"/></a>
    </p>
  </td>
 </tr>
</table>

---

## 📄 License & Intellectual Property

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for complete details.

&copy; 2026 **Pratyush Kumar**. All rights reserved.
