# Portfolio - Next.js

This is a Next.js version of the portfolio website, converted from Create React App.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/` - Next.js app directory containing pages and layout
- `components/` - React components
- `public/` - Static assets (images, etc.)
- `src/data/` - JSON data files

## Build for Production

```bash
npm run build
npm start
```

## Key Changes from React App

1. Converted from Create React App to Next.js 14
2. Using App Router (app directory) instead of Pages Router
3. Replaced React Router with Next.js routing
4. Updated components to use Next.js `useRouter` instead of React Router hooks
5. Using Next.js `Image` component for optimized images
6. All components are client components (marked with 'use client')

## Deployment

The app can be deployed on Vercel, Netlify, or any platform that supports Next.js.
