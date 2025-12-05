---
feature: Custom Book Homepage for Docusaurus
summary: This document outlines the architectural plan for replacing the default Docusaurus homepage with a custom design for the book "Physical AI & Humanoid Robotics — A Complete Guide".
---

## 1. Scope and Dependencies

### In Scope:
- Design and implement a new custom homepage for the Docusaurus site.
- Display the book title, subtitle, introduction, and module highlights.
- Implement a "Start Reading" button linking to `/docs/intro`.
- Ensure a clean hero section free of default Docusaurus placeholders.
- Integration with existing Docusaurus site structure.
- Create placeholder images for the book logo and each of the four modules.

### Out of Scope:
- Creation of actual book content (chapters, syllabus details).
- Complex animations or interactive elements beyond simple button clicks.
- Backend logic or database integrations.
- Changes to the Docusaurus build process beyond custom page creation.

### External Dependencies:
- **Docusaurus v3**: The existing framework for the website.
- **React**: For building the custom homepage component.
- **CSS Modules**: For styling the custom homepage component.

## 2. Key Decisions and Rationale

### Decision: Use a React component for the custom homepage.
- **Options Considered**: Modifying `index.js`/`index.tsx` directly, creating a new Docusaurus page.
- **Trade-offs**: Creating a dedicated React component offers better modularity, reusability, and separation of concerns compared to directly modifying the `index.tsx` file. A new Docusaurus page would require additional routing configuration.
- **Rationale**: Leverage Docusaurus's native support for React components for custom pages. This approach aligns with best practices for building maintainable web applications.

### Decision: Utilize Docusaurus's theming capabilities and custom CSS for styling.
- **Options Considered**: Inline styles, external CSS frameworks.
- **Trade-offs**: Inline styles can be hard to maintain. External frameworks might introduce unnecessary overhead for a simple homepage.
- **Rationale**: Docusaurus provides excellent support for custom CSS and theming. This allows for fine-grained control over the visual design while adhering to the existing project's styling conventions.

### Decision: Logo and module images will be placed in `static/img/`.
- **Logo**: Must include "Textbook" name (`/img/logo-textbook.png`).
- **Module Images**: Referenced as `/img/module1.png`, `/img/module2.png`, etc.
- **Rationale**: Centralized image management and easy referencing within Docusaurus.

### Decision: Layout for module section will be a 4-column responsive grid.
- **Tradeoff**: Responsive design for both desktop and mobile readability.
- **Rationale**: Provides a clear and organized presentation of the book's modules.

### Decision: Only the primary "Start Reading" button will be included.
- **Tradeoff**: Simpler interface vs fewer navigation options.
- **Rationale**: Focuses the user on the primary action and reduces visual clutter.

## 3. Interfaces and API Contracts

- No explicit API contracts are required for this feature, as it primarily involves frontend UI development.
- **Internal Interfaces**: The custom homepage will interact with Docusaurus's routing system to link to internal pages (e.g., `/docs/intro` for "Start Reading").

## 4. Non-Functional Requirements (NFRs) and Budgets

### Performance:
- **p95 latency**: The homepage should load within 2 seconds on a typical broadband connection.
- **Throughput**: Not applicable (static site).
- **Resource caps**: Minimal impact on build times and hosted resource usage due to static nature.

### Reliability:
- **SLOs**: 99.9% uptime for the hosted site (inherited from Docusaurus hosting).
- **Error budgets**: No runtime errors on the homepage.
- **Degradation strategy**: Not applicable.

### Security:
- **AuthN/AuthZ**: Not applicable (public static site).
- **Data handling**: No sensitive data handled.
- **Secrets**: No secrets involved.
- **Auditing**: Not applicable.

### Cost:
- Minimal, leveraging existing Docusaurus hosting infrastructure.

## 5. Data Management and Migration

- No new data management or migration is required, as this is a static content change.

## 6. Operational Readiness

### Observability:
- **Logs**: Docusaurus build logs will indicate any build-time errors.
- **Metrics**: Standard web analytics (e.g., page views) can be integrated if desired.
- **Traces**: Not applicable.

### Alerting:
- Build failures will trigger CI/CD alerts.

### Runbooks:
- Standard Docusaurus deployment and troubleshooting guides apply.

### Deployment and Rollback strategies:
- **Deployment**: Standard Docusaurus deployment via CI/CD (e.g., GitHub Pages, Netlify).
- **Rollback**: Revert the Git commit to revert the changes.

### Feature Flags and compatibility:
- Not applicable for a homepage replacement; the change is atomic.

## 7. Risk Analysis and Mitigation

### Top 3 Risks:
1.  **Broken Links**: Incorrect links for "Start Reading".
    - **Mitigation**: Thorough testing of all navigation links after deployment.
2.  **Styling Conflicts**: Custom CSS might conflict with Docusaurus's default or existing theme styles.
    - **Mitigation**: Use CSS Modules for scoped styles or inspect generated CSS to ensure specificity.
3.  **Performance Degradation**: Overly complex React component or large assets could slow down the page load.
    - **Mitigation**: Keep the component lightweight, optimize images, and follow React performance best practices.

## 8. Evaluation and Validation

### Definition of Done (tests, scans):
- The Docusaurus site builds successfully without errors.
- The custom homepage renders correctly as per the requirements.
- The "Start Reading" button links to the correct page.
- Visual inspection confirms the clean hero section and removal of placeholders.
- All images (logo and module images) render correctly on desktop and mobile.

### Output Validation for format/requirements/safety:
- The homepage adheres to the specified content (title, subtitle, intro, modules, button).
- No broken links or styling issues.

## 9. Architectural Decision Record (ADR)

- No new ADRs are suggested for this plan, as the decisions are relatively minor and within the existing Docusaurus framework.
