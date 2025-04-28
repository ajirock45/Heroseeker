
hero-seekers/
├── public/
├── src/
│   ├── components/
│   │   └── ui/
│   └── HeroSeekers.tsx
├── package.json
├── README.md
└── vite.config.ts (if using Vite)
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
