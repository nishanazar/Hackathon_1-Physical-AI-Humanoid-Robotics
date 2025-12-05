# Appendices: Hardware Setups

This appendix provides comprehensive guides for setting up various hardware components essential for physical AI and humanoid robotics development, including workstations, NVIDIA Jetson Edge Kits, sensors, and actuators.

## Workstations

**Minimum Specifications:**

-   **CPU**: Intel Core i5 (8th Gen) or AMD Ryzen 5 (2nd Gen) or newer
-   **RAM**: 16 GB DDR4
-   **GPU**: NVIDIA GeForce RTX 2060 (6GB) or AMD Radeon RX 5600 XT (6GB)
-   **Storage**: 500 GB NVMe SSD
-   **OS**: Ubuntu 20.04 LTS (recommended) or Windows 10/11

**Recommended Specifications:**

-   **CPU**: Intel Core i7/i9 (10th Gen+) or AMD Ryzen 7/9 (3rd Gen+) or newer
-   **RAM**: 32 GB DDR4 (or more)
-   **GPU**: NVIDIA GeForce RTX 3070 (8GB) or AMD Radeon RX 6700 XT (12GB) or higher
-   **Storage**: 1 TB NVMe SSD
-   **OS**: Ubuntu 22.04 LTS

## NVIDIA Jetson Edge Kits

NVIDIA Jetson devices are powerful, small-form-factor computers designed for AI at the edge, ideal for deploying robot intelligence directly onto physical hardware.

### Jetson Nano

-   **Specs**: Quad-core ARM A57 CPU, 128-core NVIDIA Maxwell GPU, 4GB RAM.
-   **Use Cases**: Entry-level AI and robotics projects, sensor processing, simple navigation.

### Jetson Xavier NX

-   **Specs**: 6-core NVIDIA Carmel ARMv8.2 CPU, 384-core NVIDIA Volta GPU with 48 Tensor Cores, 8GB/16GB RAM.
-   **Use Cases**: More demanding AI inference, complex perception, multi-sensor fusion.

### Jetson Orin Nano / Orin NX

-   **Specs**: 6-core/8-core ARM Cortex-A78AE CPU, 2048-core/1024-core NVIDIA Ampere GPU with 64/32 Tensor Cores, 8GB/16GB RAM.
-   **Use Cases**: High-performance AI, advanced autonomous robotics, real-time control.

**Common Setup Steps (for all Jetson Kits):**

1.  **Flash JetPack SDK**: Use NVIDIA SDK Manager to flash the latest JetPack SDK onto your Jetson device's SD card or internal eMMC.
2.  **Install ROS 2**: Follow the official ROS 2 installation guide for Ubuntu ARM (e.g., Ubuntu 20.04 for Humble, 22.04 for Iron).
3.  **Install Isaac ROS (Optional)**: If using Isaac ROS components, ensure you follow the installation instructions for your specific Jetson and JetPack version.

## Sensors

### LiDAR (Light Detection and Ranging)

-   **Purpose**: 2D or 3D environmental mapping, obstacle detection.
-   **Examples**: RPLIDAR A1/A2 (2D), Intel RealSense L515 (3D).
-   **Integration**: Typically connect via USB and communicate via serial or Ethernet, with ROS 2 drivers available.

### Depth Cameras

-   **Purpose**: RGB image and depth information for 3D perception, object recognition.
-   **Examples**: Intel RealSense D435i/D455, Azure Kinect DK.
-   **Integration**: Connect via USB, often with dedicated ROS 2 wrappers providing `sensor_msgs/Image` and `sensor_msgs/PointCloud2` topics.

### IMUs (Inertial Measurement Units)

-   **Purpose**: Measure linear acceleration and angular velocity for robot localization, orientation, and balance.
-   **Examples**: BNO055 (9-DOF), MPU6050 (6-DOF).
-   **Integration**: Typically connect via I2C or UART, requiring custom drivers or existing ROS 2 packages to publish `sensor_msgs/Imu` data.

## Actuators

Humanoid robots utilize a variety of actuators to enable movement and manipulation.

### Servo Motors (e.g., Dynamixel)

-   **Purpose**: Control joints in arms, legs, and hands.
-   **Features**: Often feature precise position control, torque feedback, and daisy-chaining capabilities.
-   **Integration**: Connect via USB-to-serial adapters, with ROS 2 packages providing interfaces for command and control.

### DC Motors with Encoders

-   **Purpose**: Drive wheeled bases (for mobile platforms that include a humanoid torso) or provide powerful linear/rotary motion.
-   **Features**: Encoders provide feedback on position and velocity for closed-loop control.
-   **Integration**: Require motor drivers (e.g., Adafruit Motor HAT, Roboclaw) and custom ROS 2 nodes for control.

By carefully selecting and integrating these hardware components, you can build a robust platform for your physical AI and humanoid robotics projects.
