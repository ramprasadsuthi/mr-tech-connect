# Pending Functionality

This document outlines the links and buttons in the application that are currently non-functional or have placeholder functionality.

## Project Structure Analysis

The project is a single-page React application built with Vite. The main entry point is `src/main.tsx`, which sets up React Router with `HashRouter`. The main application component, `App.tsx`, defines the routes. The primary page is `src/pages/Index.tsx`, which is composed of several smaller components from the `src/components/` directory.

The application is well-structured, with a clear separation of concerns between pages, components, and UI elements.

## Non-Functional Links and Buttons

### 1. Header (`src/components/Header.tsx`)

*   **Logo Link**: The main logo link in the header has a placeholder `href="#"`. It should ideally link to the top of the page or the homepage.

    ```tsx
    <a href="#" className="flex items-center gap-2">
      {/* ... logo ... */}
    </a>
    ```

### 2. Courses Section (`src/components/CoursesSection.tsx`)

*   **Course Cards**: The individual course cards are not clickable. They have a `cursor-pointer` style, suggesting they should be interactive, but they lack an `onClick` handler or a link to a page with more details about the course.

    ```tsx
    <Card
      variant="feature"
      className="h-full group cursor-pointer"
    >
      {/* ... card content ... */}
    </Card>
    ```

### 3. Gallery Section (`src/components/GallerySection.tsx`)

*   **Gallery Items**: The items in the gallery are not clickable. They show a "Coming Soon" overlay on hover, but do not link to any gallery page or modal.

    ```tsx
    <div className="group relative aspect-square rounded-2xl bg-gradient-to-br from-muted to-muted/50 overflow-hidden cursor-pointer">
      {/* ... item content ... */}
    </div>
    ```

### 4. Contact Section (`src/components/ContactSection.tsx`)

*   **Contact Form**: The "Send Message" button in the contact form does not actually submit the form data to a backend service. It currently simulates a successful submission using a `setTimeout`.

    ```tsx
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsSubmitting(true);

      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("Message sent successfully! We'll get back to you soon.");

      // Reset form after a delay
      setTimeout(() => {
        setIsSubmitted(false);
        (e.target as HTMLFormElement).reset();
      }, 3000);
    };
    ```
