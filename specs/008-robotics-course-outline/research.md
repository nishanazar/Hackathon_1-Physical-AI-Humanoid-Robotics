# Research: Physical AI & Humanoid Robotics Course

## 1. Module Sequence: ROS 2 vs. NVIDIA Isaac First

- **Decision**: The course will start with ROS 2 as the foundational module, followed by Gazebo/Unity, and then NVIDIA Isaac.
- **Rationale**: Teaching ROS 2 first provides students with a strong foundation in robotic middleware and the publish-subscribe architecture, which is essential for understanding the rest of the course. NVIDIA Isaac, while powerful, is a higher-level tool that builds on the concepts introduced in ROS 2.
- **Alternatives considered**:
    - **NVIDIA Isaac first**: This would allow students to get to the "AI" part of the course faster, which might be more engaging. However, it would require teaching ROS 2 concepts in a less structured way.

## 2. Hardware Tier Selection

- **Decision**: The course will recommend two hardware tiers:
    - **Budget Tier (Proxy)**: A powerful laptop with a modern NVIDIA GPU (e.g., RTX 3060 or higher). This is the minimum requirement for running Isaac Sim.
    - **Premium Tier (G1)**: A dedicated desktop computer with a high-end NVIDIA GPU (e.g., RTX 4080 or higher). This will provide a smoother experience and allow for more complex simulations.
- **Rationale**: This two-tiered approach makes the course accessible to a wider range of students while still providing a high-quality experience for those with more powerful hardware.
- **Alternatives considered**:
    - **Single hardware tier**: This would simplify the course materials, but it would either exclude students with less powerful hardware or limit the complexity of the simulations.

## 3. Simulation Software: Gazebo vs. Unity

- **Decision**: The course will use Gazebo for the initial ROS 2 and simulation modules, and then switch to Unity with the Isaac Sim Unity Connector for the NVIDIA Isaac modules.
- **Rationale**: Gazebo is the standard simulator for ROS 2 and is well-integrated with the ROS ecosystem. Isaac Sim on Unity provides a more powerful and realistic simulation environment, which is necessary for the advanced AI and perception topics covered in the later modules.
- **Alternatives considered**:
    - **Gazebo only**: This would simplify the course, but it would not provide the high-fidelity simulation capabilities of Isaac Sim.
    - **Unity only**: This would require using the Isaac Sim Unity Connector for all modules, which might be overly complex for the introductory ROS 2 topics.

## 4. Capstone Scope: Voice-Controlled Humanoid

- **Decision**: The capstone project will focus on building a simulated, voice-controlled autonomous humanoid robot. The scope will be limited to a set of pre-defined voice commands and tasks.
- **Rationale**: This scope is ambitious but achievable within the 13-week timeframe of the course. Limiting the scope to pre-defined commands and tasks will ensure that students can complete the project successfully.
- **Alternatives considered**:
    - **Multi-modal HRI**: This would be a more ambitious project, but it would require more time and resources than are available in this course.
    - **Simpler capstone**: A simpler capstone, such as a non-humanoid robot or a robot without voice control, would be less engaging and would not provide the same level of challenge and learning.
