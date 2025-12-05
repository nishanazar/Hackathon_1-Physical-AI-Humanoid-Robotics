---
feature: Custom Book Homepage for Docusaurus
summary: This document outlines the tasks required to replace the default Docusaurus homepage with a custom design for the book "Physical AI & Humanoid Robotics — A Complete Guide".
---

## Phase 1: Setup (Image Assets)

### User Story 1: Prepare Image Assets

**Goal**: As a developer, I want to have placeholder images for the book logo and modules ready so they can be integrated into the custom homepage.

**Independent Test Criteria**:
- All specified image files exist in the `static/img/` directory.

### Implementation Tasks

- [X] T001 [US1] Create a placeholder image for the book logo named `logo-textbook.png` in `physical-ai-humanoid-robotics/static/img/`.
- [X] T002 [US1] Create a placeholder image for Module 1 named `module1.png` in `physical-ai-humanoid-robotics/static/img/`.
- [X] T003 [US1] Create a placeholder image for Module 2 named `module2.png` in `physical-ai-humanoid-robotics/static/img/`.
- [X] T004 [US1] Create a placeholder image for Module 3 named `module3.png` in `physical-ai-humanoid-robotics/static/img/`.
- [X] T005 [US1] Create a placeholder image for Module 4 named `module4.png` in `physical-ai-humanoid-robotics/static/img/`.

## Phase 2: Custom Homepage Implementation

### User Story 2: Build Custom Homepage Content

**Goal**: As a book author, I want a custom homepage for my Docusaurus site that effectively introduces my book, displays the logo, and highlights the modules.

**Independent Test Criteria**:
- The website's root URL (e.g., `/`) displays the new custom homepage content.
- The custom homepage includes the specified title, subtitle, introduction, and module highlights.
- The book logo (`logo-textbook.png`) is displayed in the hero section.
- Each module (ROS 2, Gazebo & Unity, NVIDIA Isaac, Vision-Language-Action) is displayed with its corresponding image, title, and a short description.
- The "Start Reading" button is present and links to `/docs/intro`.
- There are no Docusaurus default homepage elements visible in the main content area.

### Implementation Tasks

- [X] T006 [P] [US2] Create or update the React component for the custom homepage at `physical-ai-humanoid-robotics/src/pages/index.tsx`.
- [X] T007 [P] [US2] Integrate the `logo-textbook.png` image into the hero section of `physical-ai-humanoid-robotics/src/pages/index.tsx`.
- [X] T008 [P] [US2] Add the book title "Physical AI & Humanoid Robotics — A Complete Guide" to `physical-ai-humanoid-robotics/src/pages/index.tsx`.
- [X] T009 [P] [US2] Add the compelling subtitle "A Complete Guide to Building and Controlling Intelligent Humanoid Robots" to `physical-ai-humanoid-robotics/src/pages/index.tsx`.
- [X] T010 [P] [US2] Add the short book introduction to `physical-ai-humanoid-robotics/src/pages/index.tsx`.
- [X] T011 [P] [US2] Implement the four modules (ROS 2, Gazebo & Unity, NVIDIA Isaac, Vision-Language-Action) in a 4-column responsive grid layout within `physical-ai-humanoid-robotics/src/pages/index.tsx`,
      using `module1.png`, `module2.png`, `module3.png`, `module4.png` respectively.
- [X] T012 [P] [US2] Implement the primary button "Start Reading" linking to `/docs/intro` in `physical-ai-humanoid-robotics/src/pages/index.tsx`.
- [X] T013 [US2] Update `physical-ai-humanoid-robotics/src/css/custom.css` with styles for the hero section, modules grid, and buttons to ensure a clean visual design.

## Phase 3: Cleanup and Verification

### User Story 3: Finalize and Verify Homepage

**Goal**: As a developer, I want to ensure the custom homepage is fully functional, styled correctly, and that no default Docusaurus homepage elements remain.

**Independent Test Criteria**:
- The site builds successfully without any errors.
- The site runs successfully in development mode.
- Visual inspection confirms the custom homepage renders as expected on desktop and mobile.
- All links on the homepage are functional.
- No residual default Docusaurus homepage content or styling conflicts are present.

### Implementation Tasks

- [X] T014 [US3] Verify and remove any conflicting default CSS files, specifically checking `physical-ai-humanoid-robotics/src/pages/index.module.css` for removal if not needed.
- [X] T015 [US3] Run `npm run build` in `physical-ai-humanoid-robotics/` to ensure the Docusaurus site builds without errors.
- [X] T016 [US3] Run `npm start` in `physical-ai-humanoid-robotics/` and manually verify the new homepage and button links.

## Dependencies and Execution

### Story Dependencies

- **US1 (Prepare Image Assets)** must be completed before **US2 (Build Custom Homepage Content)**, as the images are required for the homepage.
- **US2 (Build Custom Homepage Content)** must be completed before **US3 (Finalize and Verify Homepage)**.

### Parallel Execution Examples

- Tasks within **US1** (T001-T005) can be executed in parallel as they involve creating independent image files.
- Tasks within **US2** (T006-T012) can be logically grouped and executed as parts of the `index.tsx` component, with T013 for styling being a dependent step.
- Tasks within **US3** (T014-T016) are generally sequential for verification.

## Implementation Strategy

This implementation will follow a phased approach:
1.  **Asset Preparation**: Create all necessary placeholder image assets.
2.  **Homepage Development**: Implement the custom React component for the homepage, integrating text content, images, and buttons.
3.  **Styling and Verification**: Apply custom CSS to ensure proper visual presentation, followed by a thorough build and runtime verification to confirm functionality and absence of default elements.