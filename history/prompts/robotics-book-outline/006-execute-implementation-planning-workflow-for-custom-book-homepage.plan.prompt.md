---
id: 002
title: Execute Implementation Planning Workflow for Custom Book Homepage
stage: plan
date_iso: 2025-12-05
surface: agent
model: Gemini
feature: robotics-book-outline
branch: (unknown)
user: (unknown)
command: /sp.plan Remove the default Docusaurus homepage completely and replace it with a custom homepage for my book:“Physical AI & Humanoid Robotics — A Complete Guide”New homepage requirements:- Strong title and subtitle- Short introduction of the book- Highlight the four modules:  1. ROS 2 (Robotic Nervous System)  2. Gazebo & Unity (Digital Twin Simulation)  3. NVIDIA Isaac (AI Robot Brain)  4. Vision-Language-Action (VLA)- Primary button: “Start Reading”- Secondary button: “View Syllabus”- Clean hero section with no default Docusaurus placeholders
labels: ["planning", "docusaurus", "homepage"]
links:
  spec: specs/001-robotics-book-outline/spec.md
  ticket: null
  adr: null
  pr: null
files_yaml: |
  - specs/001-robotics-book-outline/spec.md
  - specs/001-robotics-book-outline/plan.md
tests_yaml: |
  - None
prompt_text: |
  ---
  description: Execute the implementation planning workflow using the plan template to generate design artifacts.
  ---

  ## User Input

  ```text
  $ARGUMENTS
  ```

  You **MUST** consider the user input before proceeding (if not empty).

  ## Outline

  1. **Setup**: Run `.specify/scripts/powershell/setup-plan.ps1 -Json` from repo root and parse JSON for FEATURE_SPEC, IMPL_PLAN, SPECS_DIR, BRANCH. For single quotes in args like "I'm Groot", use escape syntax: e.g 'I'''m Groot' (or double-quote if possible: "I'm Groot").

  2. **Load context**: Read FEATURE_SPEC and `.specify/memory/constitution.md`. Load IMPL_PLAN template (already copied).

  3. **Execute plan workflow**: Follow the structure in IMPL_PLAN template to:
     - Fill Technical Context (mark unknowns as "NEEDS CLARIFICATION")
     - Fill Constitution Check section from constitution
     - Evaluate gates (ERROR if violations unjustified)
     - Phase 0: Generate research.md (resolve all NEEDS CLARIFICATION)
     - Phase 1: Generate data-model.md, contracts/, quickstart.md
     - Phase 1: Update agent context by running the agent script
     - Re-evaluate Constitution Check post-design

  4. **Stop and report**: Command ends after Phase 2 planning. Report branch, IMPL_PLAN path, and generated artifacts.

  ## Phases

  ### Phase 0: Outline & Research

  1. **Extract unknowns from Technical Context** above:
     - For each NEEDS CLARIFICATION → research task
     - For each dependency → best practices task
     - For each integration → patterns task

  2. **Generate and dispatch research agents**:

     ```text
     For each unknown in Technical Context:
       Task: "Research {unknown} for {feature context}"
     For each technology choice:
       Task: "Find best practices for {tech} in {domain}"
     ```

  3. **Consolidate findings** in `research.md` using format:
     - Decision: [what was chosen]
     - Rationale: [why chosen]
     - Alternatives considered: [what else evaluated]

  **Output**: research.md with all NEEDS CLARIFICATION resolved

  ### Phase 1: Design & Contracts

  **Prerequisites:** `research.md` complete

  1. **Extract entities from feature spec** → `data-model.md`:
     - Entity name, fields, relationships
     - Validation rules from requirements
     - State transitions if applicable

  2. **Generate API contracts** from functional requirements:
     - For each user action → endpoint
     - Use standard REST/GraphQL patterns
     - Output OpenAPI/GraphQL schema to `/contracts/`

  3. **Agent context update**:
     - Run `.specify/scripts/powershell/update-agent-context.ps1 -AgentType gemini`
     - These scripts detect which AI agent is in use
     - Update the appropriate agent-specific context file
     - Add only new technology from current plan
     - Preserve manual additions between markers

  **Output**: data-model.md, /contracts/*, quickstart.md, agent-specific file

  ## Key rules

  - Use absolute paths
  - ERROR on gate failures or unresolved clarifications

  ---

  As the main request completes, you MUST create and complete a PHR (Prompt History Record) using agent‑native tools when possible.

  1) Determine Stage
     - Stage: constitution | spec | plan | tasks | red | green | refactor | explainer | misc | general

  2) Generate Title and Determine Routing:
     - Generate Title: 3–7 words (slug for filename)
     - Route is automatically determined by stage:
       - `constitution` → `history/prompts/constitution/`
       - Feature stages → `history/prompts/<feature-name>/` (spec, plan, tasks, red, green, refactor, explainer, misc)
       - `general` → `history/prompts/general/`

  3) Create and Fill PHR (Shell first; fallback agent‑native)
     - Run: `.specify/scripts/bash/create-phr.sh --title "<title>" --stage <stage> [--feature <name>] --json`
     - Open the file and fill remaining placeholders (YAML + body), embedding full PROMPT_TEXT and concise RESPONSE_TEXT.
     - If the script fails:
       - Read `.specify/templates/phr-template.prompt.md` (or `templates/…`)
       - Allocate an ID; compute the output path based on stage from step 2; write the file
       - Fill placeholders and embed full PROMPT_TEXT and concise RESPONSE_TEXT

  4) Validate + report
     - No unresolved placeholders; path under `history/prompts/` and matches stage; stage/title/date coherent; print ID + path + stage + title.
     - On failure: warn, don't block. Skip only for `/sp.phr`.


  /sp.plan  Remove the default Docusaurus homepage completely and replace it with a custom homepage for my book:“Physical AI & Humanoid Robotics — A Complete Guide”New homepage requirements:- Strong title and subtitle- Short introduction of the book- Highlight the four modules:  1. ROS 2 (Robotic Nervous System)  2. Gazebo & Unity (Digital Twin Simulation)  3. NVIDIA Isaac (AI Robot Brain)  4. Vision-Language-Action (VLA)- Primary button: “Start Reading”- Secondary button: “View Syllabus”- Clean hero section with no default Docusaurus placeholders
response_text: |
  The `plan.md` for the "Custom Book Homepage for Docusaurus" feature has been created.
  The generated artifacts are:
  - `specs/001-robotics-book-outline/spec.md`
  - `specs/001-robotics-book-outline/plan.md`
outcome: The `spec.md` and `plan.md` files have been successfully created for the "Custom Book Homepage for Docusaurus" feature, detailing the scope, dependencies, key decisions, non-functional requirements, and risks.
evaluation: The agent successfully interpreted the user's request for a new homepage and generated the necessary design artifacts according to the specified template and requirements.
