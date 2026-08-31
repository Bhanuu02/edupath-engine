# PathFinder AI — Universal Multi-Stream Career & Educational Pathway Engine

> **Intelligent Multi-Stream Roadmap Engine** that analyzes any student passion or dream role (from Acting, Film Direction, and Music Production to Commercial Aviation, Corporate Law, AI Engineering, and Neuro-Surgery) and dynamically generates parallel post-10th educational routes with chronological milestone trees, 100+ entrance exams, lateral switch points, and side-by-side comparative matrices.

---

## 🌟 Key Architectural Pillars

- **Universal Passion Coverage Across 12 Domains**: Full blueprints for Film, Music, Performing Arts, Design, Fashion, Aviation, Defense, Law, Civil Services, STEM, Life Sciences, Culinary, Sports, Agriculture, and Applied Trades.
- **Parallel 6-Stream Mapping for Every Career**:
  1. **MPC**: Mathematics, Physics, Chemistry (Engineering, Computational Sciences, Defense NDA, Technical Direction)
  2. **BiPC**: Biology, Physics, Chemistry (Clinical Medicine, Biotech, Wildlife Conservation, Bio-acoustics)
  3. **MEC / CEC**: Mathematics/Civics, Economics, Commerce (FinTech, Investment Banking, M&A Law, Studio Leadership)
  4. **HEC**: Humanities, Economics, Civics (Civil Services, Classical Theatre, Literature, Public Policy)
  5. **3-Year Polytechnic Diploma**: Early hands-on technical entry via POLYCET -> lateral switch to 2nd year B.Tech via ECET
  6. **Vocational & Direct Guild**: Direct apprenticeship, independent portfolio creation, and NSQF skill certifications
- **100+ Entrance Exams & Audition Gateways**: FTII JET, NSD Auditions, NID DAT, NIFT, UCEED, NCHMCT JEE, IGRUA CPL, IMU CET, CLAT, NDA, JEE Main/Advanced, NEET, CUET, IPMAT, POLYCET, ECET, and more.
- **Side-by-Side Stream Comparator**: Direct comparative matrix comparing timeline (years), cost, competition index, flexibility, and pros/cons.
- **Lateral Switch Visualizer**: Details non-linear degree bridges (e.g. *Polytechnic Diploma -> ECET -> B.Tech 2nd Year*, *B.Sc/BCA -> NIMCET -> MCA*, *Non-science -> NIOS Maths -> Pilot CPL*).
- **Interactive Tools**:
  - **AI Career Copilot Q&A** for contextual counseling
  - **Stream Fit Aptitude Quiz** (4-question screener)
  - **Vector PDF / High-Res Roadmap Exporter**

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | React 19 + TypeScript | Strict type safety, modular UI, zero runtime errors |
| **Build Tool** | Vite 6.x | Instant hot reload, optimized tree-shaking, fast static builds |
| **Styling** | Tailwind CSS v4 | CSS-first configuration, native OKLCH themes, responsive layouts |
| **Search Engine** | Fuse.js | Client-side sub-10ms fuzzy matching across 500+ career roles |
| **AI Synthesis** | Google GenAI SDK (`@google/genai`) | Dynamic roadmap generation for custom/emerging passions |
| **Validation** | Zod | Runtime schema validation for AI payloads and static datasets |
| **State Management** | Zustand | Global state with persistent local storage caching |
| **Iconography** | Lucide React | Clean, scalable SVG icons for exam badges and streams |
| **PDF Export** | html2canvas + jsPDF | Instant client-side download of career roadmaps |
| **Hosting & CI/CD** | GitHub Pages + GitHub Actions | Free automated testing, building, and edge deployment |

---

## 🚀 Quick Start Guide

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Build Production Bundle
```bash
npm run build
```

---

## 🌐 Deploy to Your GitHub Repository

### Method A: One-Click Windows Script
Double-click `deploy-to-github.bat` in the project root folder. Enter your GitHub repository URL when prompted, and the script will automatically initialize Git, commit all files, and push to `main`.

### Method B: Manual Git Commands
```bash
git init -b main
git add .
git commit -m "feat: complete intelligent universal multi-stream career pathway engine"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

### Method C: Enable Automated GitHub Pages
1. Go to your repository on **GitHub.com**.
2. Navigate to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. The included `.github/workflows/deploy.yml` workflow will automatically build and publish your site to `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY/`!

---

## 📜 License
MIT License. Built for students, educators, and career counselors.
