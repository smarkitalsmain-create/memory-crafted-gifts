# Magzme

Magzme is a modern digital magazine web application built for long-form reading and curated editorial content.  
The focus is clarity, flow, and intentional consumption — not infinite scrolling.

---

## Overview

Magzme is designed to publish articles that people actually read.

It avoids feed-driven design, dark patterns, and content noise.  
The product is opinionated: fewer stories, better written, well presented.

---

## Features

- Clean, distraction-free reading layout
- Category-based editorial content
- Responsive, mobile-first UI
- Fast load times and smooth navigation
- Component-driven frontend architecture

Planned:
- Author profiles
- Editorial review flow
- Issue-based publishing
- Read and engagement analytics

---

## Tech Stack

This project is built using:

- Vite
- TypeScript
- React
- shadcn/ui
- Tailwind CSS

The stack is intentionally simple and modern to keep development and maintenance predictable.

---

## Project Structure
magzme/
├── src/
│ ├── components/ # Reusable UI components
│ ├── pages/ # Page-level components
│ ├── layouts/ # Layout wrappers
│ ├── styles/ # Global styles
│ └── main.tsx # App entry point
├── public/ # Static assets
├── index.html
├── package.json
└── README.md


---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Setup

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Move into project directory
cd magzme

# Install dependencies
npm install

# Start development server
npm run dev

