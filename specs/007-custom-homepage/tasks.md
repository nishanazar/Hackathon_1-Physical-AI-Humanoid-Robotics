---
feature: Custom Book Homepage
summary: This document outlines the tasks required to replace the default Docusaurus homepage with a custom design for the book "Physical AI & Humanoid Robotics — A Complete Guide".
---

## Phase 1: Custom Homepage Implementation

### User Story 1: Replace Default Homepage

**Goal**: As a book author, I want to replace the default Docusaurus homepage with a custom design that introduces my book.

**Independent Test Criteria**:
- The website's root URL (e.g., `/`) displays the new custom homepage content.
- The custom homepage includes the specified title, subtitle, introduction, and module highlights.
- The "Start Reading" and "View Syllabus" buttons are present and link to the correct placeholder pages.
- There are no Docusaurus default homepage elements visible.

### Implementation Tasks

- [X] T001 [US1] Create a new React component for the custom homepage at `physical-ai-humanoid-robotics/src/pages/index.tsx`.
- [X] T002 [US1] Add the book title "Physical AI & Humanoid Robotics — A Complete Guide" to the `index.tsx` component.
- [X] T003 [US1] Add a compelling subtitle to the `index.tsx` component.
- [X] T004 [US1] Add a short introduction of the book to the `index.tsx` component.
- [X] T005 [US1] Highlight the four modules (ROS 2, Gazebo & Unity, NVIDIA Isaac, Vision-Language-Action) in the `index.tsx` component.
- [X] T006 [US1] Implement a primary button "Start Reading" linking to `/docs/intro` in `index.tsx`.
- [X] T007 [US1] *Removed* secondary button "View Syllabus" from `index.tsx`.
- [X] T008 [US1] Update `physical-ai-humanoid-robotics/src/css/custom.css` with styles for the new homepage components (hero section, buttons, typography).

## Phase 2: Cleanup and Verification

### User Story 2: Remove Default Components and Verify

**Goal**: As a developer, I want to ensure no default Docusaurus homepage elements remain and verify the site's functionality.

**Independent Test Criteria**:
- The site builds and runs without errors after homepage changes.
- No residual default Docusaurus homepage content is visible.

### Implementation Tasks

- [X] T009 [US2] Verify `physical-ai-humanoid-robotics/src/pages/index.module.css` is not conflicting with the new homepage styling, and remove if unnecessary.
- [X] T010 [US2] Run `npm run build` in `physical-ai-humanoid-robotics/` to ensure the site builds successfully.
- [ ] T011 [US2] Run `npm start` in `physical-ai-humanoid-robotics/` and manually verify the new homepage and button links.

## Dependencies and Execution

### Story Dependencies

- **US1 (Replace Default Homepage)** must be completed before **US2 (Remove Default Components and Verify)**.

### Parallel Execution Examples

- Tasks within **US1** (T001-T008) can be executed in a logical order within the `index.tsx` file.
- Tasks within **US2** (T009-T011) are sequential.

## Implementation Strategy

This implementation will follow a two-phase approach:
1.  **Custom Homepage Implementation**: Develop the new React component for the homepage and apply necessary styling.
2.  **Cleanup and Verification**: Remove any conflicting default elements and perform build/runtime verification to ensure the new homepage is fully functional and correctly displayed.
