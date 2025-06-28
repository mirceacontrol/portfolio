# Mircea-Andrei Ignatiuc – Developer Portfolio

This is a personal portfolio website built with **React**, **Tailwind CSS**, and **Vite**, showcasing my background, skills, projects, and experience in software development.

## Features

- Smooth scroll navigation
- Responsive layout with TailwindCSS
- Interactive "About Me", "Skills", "Experience", and "Projects" sections
- Downloadable CV hosted in the `public/` folder
- Deployed on GitHub Pages

## Installation

To run the project locally:

```bash
npm install
npm run dev
```

## Deployment

To deploy to GitHub Pages:

```bash
npm run build
# Then push the contents of the dist/ folder to the gh-pages branch or use gh-pages package
```

Make sure your `vite.config.js` contains:

```js
export default defineConfig({
  base: "/portfolio/",
})
```

## Contact

Made by [Mircea](https://github.com/mirceacontrol).

For older university projects, visit [@IgnatiucMircea](https://github.com/IgnatiucMircea).

---