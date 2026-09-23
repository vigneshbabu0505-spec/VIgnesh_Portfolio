# Vignesh B — Portfolio

A personal developer portfolio built with React, Vite and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Adding your assets

**No photo or resume file was available when this project was generated** — add them yourself:

1. **Profile photo** → save it as `public/profile.jpg`
   The Hero and About sections both reference `/profile.jpg`. Until you add it, the photo frame in the Hero section shows a small placeholder note; the About section photo will simply be blank. A square or near-square image (min. ~800×800px) works best — it's displayed with `object-fit: cover` so it won't distort.

2. **Resume PDF** → save it as `public/resume.pdf`
   The "Download Resume" button in the Hero section already links to `/resume.pdf` and will start working as soon as the file exists.

## Editing content

Almost everything on the site — your bio, skills, project details, achievements, links — lives in one place:

```
src/data/portfolioData.js
```

Edit that file and the whole site updates. You shouldn't need to touch the component files for routine content changes.

## Adding real project links

In `src/data/portfolioData.js`, each project object has `github` and `demo` fields currently set to `'#'` as placeholders:

```js
github: '#', // TODO: replace with actual GitHub repo URL
demo: '#',   // TODO: replace with actual live demo URL
```

Replace `'#'` with your real URLs. For the Student Management System project, `demo` is set to `null` since it's a desktop Java app with no live demo — leave it as `null` to hide the "Live Demo" button, or set a URL if you add one later.

## Project structure

```
vignesh-portfolio/
├── public/
│   ├── profile.jpg      (add your photo here)
│   └── resume.pdf        (add your resume here)
├── src/
│   ├── components/       All UI components (Navbar, Hero, About, Skills, Projects, etc.)
│   ├── data/
│   │   └── portfolioData.js   All content — edit this to update the site
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
└── vite.config.js
```

## Tech stack

- React 18 (functional components + hooks only)
- Vite
- Framer Motion (animations)
- lucide-react (icons)
- Plain CSS (no framework) — dark theme, glassmorphism accents, lime/electric-green highlight color
- No TypeScript, no backend
