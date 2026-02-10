# Project Documentation: MR Technologies

This project is a modern, responsive landing page for **MR Technologies**, an IT training and placement provider. It's built with **React**, **Vite**, **TypeScript**, and styled with **Tailwind CSS** and **shadcn/ui**. The application is designed to be a one-page experience, with smooth scrolling navigation and animated sections using **Framer Motion**.

## Project Structure

The project is organized into several components and pages, with a clear separation of concerns.

-   `src/pages/Index.tsx`: The main entry point for the landing page, which assembles all the different sections.
-   `src/components/`: Contains reusable UI components and the main sections of the page.
-   `src/components/ui/`: Contains the `shadcn/ui` components.
-   `courses.csv`: A CSV file that contains the data for the courses offered.

## Features

### 1.  **Header**

-   **Responsive Navigation:** The header features a responsive navigation bar that collapses into a mobile-friendly menu on smaller screens.
-   **Sticky on Scroll:** The header becomes sticky and changes its background color when the user scrolls down the page, ensuring it's always accessible.
-   **Smooth Scrolling:** Clicking on the navigation links scrolls the user smoothly to the corresponding section of the page.
-   **External Links:** Contains prominent buttons that link to the "Training" (Medha XL) and "Hiring" (RUBIKS) partner websites.

### 2.  **Hero Section**

-   **Engaging Introduction:** A visually appealing hero section with a catchy headline and a brief introduction to MR Technologies.
-   **Calls to Action:** Clear call-to-action buttons for exploring training programs and hiring services.
-   **Key Statistics:**  Displays key metrics such as the number of students trained, hiring partners, placement rate, and courses offered.

### 3.  **About Section**

-   **Company Overview:**  Provides a clear and concise overview of MR Technologies' mission to bridge the gap between skills and careers.
-   **Partnership Details:** Explains the strategic collaboration between **Medha XL** (the training partner) and **RUBIKS** (the hiring partner).

### 4.  **Ecosystem Section**

-   **Dual Focus:**  This section is dedicated to explaining the two core components of the ecosystem:
    -   **Medha XL:** Focused on skills development, hands-on training, and live projects.
    -   **RUBIKS:** Focused on placements, corporate partnerships, and recruitment support.
-   **Direct Links:** Each partner has a dedicated card with a button to their respective website.

### 5.  **Courses Section**

-   **Dynamic Course Listing:** Displays a grid of available courses, with each course having an icon, title, description, and duration.
-   **Data-Driven:** The course information is loaded from the `courses.csv` file, making it easy to update the course offerings.

### 6.  **Why Us Section**

-   **Key Differentiators:**  Highlights the unique selling points of MR Technologies, such as the integrated training and hiring model, real-time projects, and corporate-ready skill development.
-   **Benefit-Oriented:**  Focuses on the benefits for the students, such as career counseling, interview preparation, and resume building.

### 7.  **Gallery Section**

-   **Visual Showcase:**  A section designed to display images from training sessions, workshops, and other company events. It currently contains placeholder content.

### 8.  **Testimonials Section**

-   **Social Proof:** Features testimonials from successful students and hiring partners to build trust and credibility.
-   **Engaging Display:** Each testimonial is presented in a clean and visually appealing card format.

### 9.  **Contact Section**

-   **Contact Information:**  Provides essential contact details, including location, email, and phone number.
-   **Inquiry Form:** A user-friendly form for visitors to send messages and inquiries directly from the website.

### 10. **Footer**

-   **Consistent Branding:** Reinforces the brand identity with the company logo.
-   **Easy Navigation:**  Includes links to the partner websites and a summary of the company's mission.

## Technologies Used

-   **Frontend Framework:** React with Vite
-   **Language:** TypeScript
-   **Styling:** Tailwind CSS with shadcn/ui
-   **Animations:** Framer Motion
-   **Routing:** React Router DOM
-   **Data Fetching:** TanStack Query
-   **Form Handling:** React Hook Form and Zod for validation.
-   **Linting:** ESLint
-   **Testing:** Vitest and React Testing Library

This project is a great example of a modern, single-page application that effectively showcases a company's services and value proposition. The use of modern technologies and a well-structured component architecture makes it both performant and maintainable.
