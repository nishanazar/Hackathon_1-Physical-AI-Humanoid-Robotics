# Module 2: Simulate a Humanoid Robot in a Digital Twin

This module delves into the exciting world of robotics simulation, focusing on creating and interacting with digital twins of humanoid robots.

## Physics Simulation and Environment Building with Gazebo

Gazebo is a powerful 3D robotics simulator that allows you to accurately and efficiently test your robot's algorithms in a virtual environment. It provides a robust physics engine, high-quality graphics, and convenient programmatic interfaces.

### Key Concepts in Gazebo

- **Worlds**: A world file describes the entire simulation environment, including the ground plane, lights, and any objects or robots present.
- **Models**: Robot models (often URDFs) and other objects in the world.
- **Sensors**: Gazebo supports a wide range of virtual sensors, such as LiDAR, cameras, and IMUs.
- **Plugins**: Extend Gazebo's functionality with custom code.

## Gravity and Collisions

Gazebo's physics engine accurately simulates gravity and collisions, which are crucial for realistic robot behavior. You can define the physical properties of your robot's links (mass, inertia, collision shapes) in its URDF file, and Gazebo will handle the rest.

### Example: Simple Gazebo World

```xml
<?xml version="1.0" ?>
<sdf version="1.6">
  <world name="simple_humanoid_world">
    <gui>
      <camera name="user_camera">
        <pose> -5 0 5 0 0.5 -0</pose>
      </camera>
    </gui>
    <light name="sun" type="directional">
      <cast_shadows>1</cast_shadows>
      <pose>0 0 10 0 -30 0</pose>
      <diffuse>0.8 0.8 0.8 1</diffuse>
      <specular>0.2 0.2 0.2 1</specular>
      <attenuation>
        <range>1000</range>
        <constant>0.9</constant>
        <linear>0.01</linear>
        <quadratic>0.001</quadratic>
      </attenuation>
      <direction>-0.5 0.1 -0.9</direction>
    </light>
    <model name="ground_plane">
      <static>true</static>
      <link name="link">
        <collision name="collision">
          <geometry>
            <plane>
              <normal>0 0 1</normal>
              <size>100 100</size>
            </plane>
          </geometry>
          <surface>
            <friction>
              <ode>
                <mu>1.0</mu>
                <mu2>1.0</mu2>
              </ode>
            </friction>
          </surface>
        </collision>
        <visual name="visual">
          <geometry>
            <plane>
              <normal>0 0 1</normal>
              <size>100 100</size>
            </plane>
          </geometry>
          <material>
            <ambient>0.8 0.8 0.8 1</ambient>
            <diffuse>0.8 0.8 0.8 1</diffuse>
            <specular>0.8 0.8 0.8 1</specular>
          </material>
        </visual>
      </link>
    </model>
  </world>
</sdf>
```
