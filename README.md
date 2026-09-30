# Otis (Phu) Han — Personal Portfolio & Engineering Showcase

[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![LeetCode](https://img.shields.io/badge/LeetCode-phuhanld-FFA116?style=flat&logo=leetcode&logoColor=black)](https://leetcode.com/u/phuhanld/)
[![GitHub](https://img.shields.io/badge/GitHub-htnphu-181717?style=flat&logo=github&logoColor=white)](https://github.com/htnphu)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-hanthonhatphu-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://linkedin.com/in/hanthonhatphu)

A modern, high-performance personal portfolio showcasing my engineering background in backend distributed systems, event-driven Change Data Capture (CDC) pipelines, AI applications, and continuous algorithm practice.

---

## 🌟 Highlights & Features

- **Actively Seeking Opportunities Status Pill**: Features a live green pulsing indicator and an occasional light-sweep animation highlighting my availability for Software Engineering roles and linking to daily practice.
- **Dynamic Coding Heatmaps & Analytics**:
  - **LeetCode Integration (`@phuhanld`)**: Live API fetching of solved questions (Easy, Medium, Hard breakdown), acceptance rate, active streak (60+ days), and a 365-day submission heatmap.
  - **GitHub Activity (`@htnphu`)**: 2024 peak engineering heatmap showcasing 1,880+ contributions and open-source systems work.
  - **Fluid Full-Width Grid**: Month columns dynamically stretch across desktop viewports with horizontal scroll support on mobile.
- **In-Depth System Architecture Case Study (`/projects/careercompass`)**:
  - Full case study of **CareerCompass AI** (Ranked #1 Capstone Award, Grade 9.8 / 10).
  - High-resolution system design diagram illustrating real-time CDC with PostgreSQL WAL, Debezium, Apache Kafka, Qdrant/Weaviate vector search, and RAG query expansion.
- **Responsive & Accessible Design**:
  - Mobile-first architecture tested across phones, tablets, and ultrawide displays.
  - Dedicated mobile drawer navigation and automatic header scroll padding.
  - Full `prefers-reduced-motion` compliance to respect accessibility preferences.

---

## 🛠️ Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Core Framework** | [Next.js](https://nextjs.org/) (App Router, Turbopack) |
| **UI Library** | [React 19](https://react.dev/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) & Vanilla CSS animations |
| **Typography** | [Geist & Geist Mono](https://vercel.com/font) |
| **Data & APIs** | LeetCode Stats API, GitHub Contributions API |

---

## 📁 Repository Structure

```text
personal-website/
├── app/
│   ├── globals.css                # Global theme, keyframes, scroll padding
│   ├── layout.tsx                 # Root layout, metadata, viewport configuration
│   ├── page.tsx                   # Main one-page portfolio layout
│   └── projects/
│       └── careercompass/
│           └── page.tsx           # CareerCompass AI deep-dive case study
├── components/
│   ├── About.tsx                  # Background, education, technical skills
│   ├── Coding.tsx                 # LeetCode & GitHub dynamic heatmaps and stats
│   ├── Contact.tsx                # Contact links (Email, LinkedIn, GitHub, LeetCode)
│   ├── Experience.tsx             # Professional software engineering experience
│   ├── Hero.tsx                   # Hero section with animated status pill
│   ├── Navbar.tsx                 # Fixed navigation bar with mobile drawer
│   └── Projects.tsx               # Featured engineering projects
└── public/
    ├── careercompass-system-design.png  # High-resolution architecture diagram
    ├── profile.JPG                      # Profile photography
    └── resume.pdf                       # Downloadable resume
```

---

## 🚀 Getting Started Locally

### 1. Clone the repository

```bash
git clone https://github.com/htnphu/personal-website.git
cd personal-website
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

### 4. Build for production

```bash
npm run build
npm run start
```

---

## 📬 Contact & Connect

- **Email**: [otishan.work@gmail.com](mailto:otishan.work@gmail.com)
- **LinkedIn**: [linkedin.com/in/hanthonhatphu](https://linkedin.com/in/hanthonhatphu)
- **GitHub**: [github.com/htnphu](https://github.com/htnphu)
- **LeetCode**: [leetcode.com/u/phuhanld/](https://leetcode.com/u/phuhanld/)
