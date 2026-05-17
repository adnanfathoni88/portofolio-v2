# AGENTS.md

## Project Overview

This project is a modern personal portfolio website built using React and Vite.

The website should:
- showcase projects
- present personal branding
- provide contact information
- support responsive layouts
- maintain clean UI/UX
- prioritize performance and accessibility

---

# Tech Stack

## Core
- React
- Vite
- Tailwind CSS

## Additional Libraries
- Framer Motion
- React Icons
- React Router DOM

---

# Folder Structure

src/
├── assets/
├── components/
│   ├── common/
│   ├── layout/
│   └── ui/
├── sections/
├── pages/
├── layouts/
├── data/
├── hooks/
├── routes/
├── styles/
├── utils/
├── App.jsx
└── main.jsx

---

# Development Rules

## Components

- Components must be reusable.
- Keep components small and modular.
- Avoid large monolithic files.
- One component per file.

## Naming Conventions

### Components
Use PascalCase.

Example:
- Navbar.jsx
- ProjectCard.jsx

### Hooks
Use camelCase with "use" prefix.

Example:
- useDarkMode.js
- useScrollAnimation.js

### Utility Files
Use camelCase.

Example:
- constants.js
- animations.js

---

# Styling Rules

## Tailwind CSS

- Use Tailwind utility classes.
- Avoid inline styles.
- Avoid duplicated class groups.

## Responsive Design

The website must support:
- mobile
- tablet
- desktop

Use responsive utilities:
- sm:
- md:
- lg:
- xl:

---

# UI/UX Guidelines

## Design Principles

- Minimal
- Clean
- Modern
- Smooth animations
- Good spacing
- Strong typography hierarchy

## Animations

Use Framer Motion for:
- fade-in
- scroll reveal
- hover interactions

Avoid excessive animations.

---

# Performance Rules

- Optimize images.
- Lazy load sections when necessary.
- Avoid unnecessary re-renders.
- Keep bundle size minimal.

---

# Accessibility

- Use semantic HTML.
- Add alt text to images.
- Ensure color contrast readability.
- Keyboard navigation should work properly.

---

# Data Management

Static data should be stored inside:
src/data/

Example:
- projects.js
- skills.js
- socials.js

Avoid hardcoding data inside components.

---

# Git Workflow

## Branch Naming

feature/navbar
feature/projects-section
fix/mobile-layout

## Commit Convention

feat:
fix:
refactor:
style:
docs:

Example:
feat: add responsive navbar

---

# Code Quality

Before pushing:
- remove unused imports
- remove console.log
- check responsive layout
- run lint

---

# Future Scalability

The architecture should support:
- dark mode
- blog integration
- CMS integration
- multilingual support
- project detail pages

---

# General Philosophy

Build maintainable, scalable, and clean code.

Prioritize:
1. readability
2. reusability
3. consistency
4. user experience
5. performance
