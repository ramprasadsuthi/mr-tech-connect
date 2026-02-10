# GEMINI Project Context

This document provides a comprehensive overview of the `mr-tech-connect` project to be used as instructional context for future AI interactions.

## Project Overview

This is a single-page marketing or landing page website built using a modern frontend stack.

*   **Framework:** React
*   **Language:** TypeScript
*   **Build Tool:** Vite
*   **Styling:** Tailwind CSS with `shadcn/ui` for UI components.
*   **Routing:** `react-router-dom` is used for client-side routing.
*   **Data Fetching:** `@tanstack/react-query` is set up for asynchronous state management.
*   **Deployment:** The project is configured to be deployed to GitHub Pages.

The application is structured as a single main page (`src/pages/Index.tsx`) which is composed of multiple thematic sections (e.g., `HeroSection`, `AboutSection`, `CoursesSection`). UI components are sourced from the `shadcn/ui` library, located in `src/components/ui`.

## Key Scripts

The following commands are available in `package.json` to manage the development lifecycle:

*   **`npm run dev`**: Starts the Vite development server with hot module replacement for a live preview. The server runs on `http://localhost:8080`.
*   **`npm run build`**: Compiles the TypeScript and React code into a production-ready build in the `dist/` directory.
*   **`npm run lint`**: Lints the codebase for potential errors and style issues using ESLint.
*   **`npm test`**: Executes the unit tests using Vitest.
*   **`npm run preview`**: Serves the production build locally from the `dist/` directory to preview the final application.
*   **`npm run deploy`**: Builds the project and deploys the contents of the `dist/` directory to GitHub Pages.

## Development Conventions

*   **Path Aliases:** The project is configured with a path alias `@` that points to the `src/` directory. This should be used for cleaner import statements (e.g., `import { Header } from "@/components/Header";`).
*   **Component Structure:** The application follows a component-based architecture. The main page is assembled by composing several larger "section" components. Reusable, atomic UI elements are located in `src/components/ui/`.
*   **Styling:** Styling is managed via Tailwind CSS utility classes.
*   **Testing:** Unit and component tests are written using Vitest and can be found in the `src/test/` directory.
*   **Type Safety:** The project is written in TypeScript, and type safety should be maintained.

**TODO:** Review the `vitest.config.ts` and `src/test/setup.ts` files to add more specific details about the testing conventions and setup.
