# Quickstart: Physical AI & Humanoid Robotics Book

**Feature Branch**: `001-robotics-book-outline`
**Created**: 2025-12-04

## Purpose

This guide provides a quick setup and execution overview for running the "Physical AI & Humanoid Robotics" book locally. It assumes you have Node.js (version 18 or higher) and npm installed on your system.

## Steps to Run Locally

1.  **Navigate to the project directory**:

    First, ensure you are in the root directory of the Docusaurus project. If you've just cloned the repository, the content will likely be in a subdirectory.

    ```bash
    cd physical-ai-humanoid-robotics
    ```

2.  **Install Dependencies**:

    Install all necessary Node.js packages for the Docusaurus site:

    ```bash
    npm install
    ```

3.  **Start the Development Server**:

    Launch the local development server. This will open the book in your web browser, typically at `http://localhost:3000`.

    ```bash
    npm start
    ```

    The Docusaurus site will rebuild automatically as you make changes to the Markdown files in the `docs/` directory.

## Building for Production

To build the static HTML, CSS, and JavaScript files for deployment:

```bash
npm run build
```

This will generate the static content in the `build/` directory.
