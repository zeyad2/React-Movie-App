# MovieApp
Deployed to CloudFlare: https://movie-app-vhq.pages.dev/

MovieApp is a modern web application for discovering and searching movies, built with React and Vite. It provides a sleek, responsive interface for browsing popular movies, searching by title, and viewing movie details, all powered by The Movie Database (TMDB) API.

## Features

- **Browse Popular Movies:** Instantly view a curated list of trending and popular movies fetched from TMDB.
- **Search Functionality:** Search through thousands of movies by title with real-time results.
- **Movie Cards:** Each movie is displayed with a poster, title, rating, and genre, with smooth animations and hover effects.
- **Responsive Design:** Fully responsive layout with a modern UI, including a hero section and animated transitions.
- **Navigation Bar:** Easy navigation with a fixed navbar, including links to Home, Movies, TV Shows, About, and authentication pages.
- **User Authentication UI:** Sign Up and Sign In forms with validation (UI only; backend integration can be added).
- **Accessibility:** Keyboard navigation and accessible form elements.
- **Performance:** Fast load times and smooth transitions, leveraging Vite's HMR and React's efficient rendering.

## Code Quality & Best Practices

- **Modern React (v19):** Utilizes functional components and React Hooks (`useState`, `useEffect`, `useRef`) for state management, side effects, and DOM interactions.
- **Component-Driven Architecture:** The UI is broken down into small, reusable, and well-documented components (e.g., `Navbar`, `Hero`, `MovieCard`, `Search`, `SignUp`). This modularity makes the codebase easy to maintain and extend.
- **Clean & Readable Code:** Consistent code style enforced by ESLint, clear naming conventions, and separation of concerns throughout the project.
- **Accessibility:** Semantic HTML, proper labeling, and keyboard-friendly navigation are prioritized for an inclusive user experience.
- **Scalable Structure:** Organized folder structure and separation of API logic (`src/api/TMDB.js`) from UI components, making it easy to add new features or scale the app.
- **Responsive & Animated UI:** Uses Tailwind CSS for utility-first styling and custom animations for a polished, interactive feel.
- **Developer Experience:** Fast development workflow with Vite, hot module replacement, and instant feedback on code changes.
- **Environment Variables:** Sensitive API keys are managed via environment variables for security and flexibility.

## Tech Stack

- **Frontend:**
  - [React](https://react.dev/) (v19)
  - [Vite](https://vitejs.dev/) (for fast development and build)
  - [React Router](https://reactrouter.com/) (for navigation)
  - [Tailwind CSS](https://tailwindcss.com/) (for utility-first styling)
- **API:**
  - [The Movie Database (TMDB) API](https://www.themoviedb.org/documentation/api) for movie data
- **Tooling:**
  - [ESLint](https://eslint.org/) (for code quality)
  - [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react)

## Getting Started

1. Clone the repository and install dependencies:
   ```bash
   npm install
   ```
2. Set your TMDB API key in a `.env` file as `VITE_TMDB_API_KEY`.
3. Start the development server:
   ```bash
   npm run dev
   ```

## Folder Structure

- `src/components/` – Reusable UI components (Navbar, Hero, MovieCard, Search, SignUp, etc.)
- `src/api/` – API integration (TMDB.js)
- `src/` – Main app files (App.jsx, LandingPage.jsx, etc.)
- `public/` – Static assets (images, icons)

---


