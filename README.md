# Anudeep Nayak · Portfolio

A React + Vite portfolio with an editorial layout, three illustrated case studies,
an interactive fact-verification example, and expandable experience and project archives.

## Development

Use a working Node.js installation compatible with Vite 7 (Node 22.12+ recommended).

```sh
npm ci
npm run dev
```

```sh
npm run build
npm run lint
```

## Content and design

- `src/content.js`: existing project, employment, and background evidence.
- `src/App.jsx`: featured case studies, navigation, and illustrative diagrams.
- `src/index.css`: shared palette, responsive layouts, focus and reduced-motion behavior.
- `public/resume/anudeep_nayak.pdf`: downloadable résumé.

Facts are sourced from the neighboring `resume_generator/LLM/reference/seed_anudeep.yaml`.
Preserve measurement scope, attribution, and development status when editing copy.
The project visuals illustrate architecture; the verifier example is a local UI demonstration,
not a connection to the resume generator. It compares a supported 90% grading claim with
an unsupported 99% rewrite using the AniTA measurement in the seed.

The palette uses low-chroma warm paper surfaces, terracotta actions, and cool teal evidence
panels. Tokens are expressed in OKLCH with equivalent hex fallbacks. Text colors are chosen
for contrast on their actual surfaces. Native disclosures and buttons support keyboard
navigation; motion respects the operating system’s reduced-motion preference.
