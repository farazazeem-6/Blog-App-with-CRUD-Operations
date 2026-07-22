# Blog App

A modern React blog website built with Vite, Material UI, and React Router. The app showcases a responsive hero section, post cards, a detailed post view, and a form to create new posts.

## Features

- Responsive blog landing page
- Featured post carousel
- Post cards with cover images and summaries
- Individual post detail route
- Add new post form
- Material UI-based styling
- Client-side routing with React Router

## Tech Stack

- React 19
- Vite
- React Router DOM
- Material UI
- React Multi Carousel

## Project Structure

- `src/App.jsx` – route setup for the application
- `src/components/Hero.jsx` – homepage posts and featured carousel
- `src/components/PostDetail.jsx` – individual post details
- `src/components/AddPost.jsx` – form to create a new blog post
- `src/Layout.jsx` – shared layout wrapper

## Getting Started

1. Install dependencies:

   npm install

2. Start the development server:

   npm run dev

3. Open the app in your browser at the local Vite URL printed in the terminal.

## Running the Blog Data API

This project fetches and posts blog content from a local API endpoint:

- `http://localhost:3000/posts`

Make sure your local JSON server or API is running on port `3000` before using the homepage and post creation features.

## Build for Production

npm run build

## Preview Production Build

npm run preview

## Notes

The project is currently structured as a frontend React practice app and depends on an external local API for blog data.
