import numpy as np
import matplotlib.pyplot as plt

def simulate_lidar_scan(num_samples=360, min_angle=-np.pi, max_angle=np.pi, max_range=10.0, noise_std=0.1):
    """Simulates a 2D LiDAR scan.

    Args:
        num_samples (int): Number of rays in the scan.
        min_angle (float): Minimum angle of the scan in radians.
        max_angle (float): Maximum angle of the scan in radians.
        max_range (float): Maximum range of the LiDAR sensor.
        noise_std (float): Standard deviation of Gaussian noise.

    Returns:
        tuple: Angles and ranges of the simulated scan.
    """
    angles = np.linspace(min_angle, max_angle, num_samples)
    # Simulate a simple environment: a wall at 5m, and some closer objects
    true_ranges = np.full(num_samples, max_range)

    # Simulate a wall at a certain distance
    wall_distance = 5.0
    true_ranges[np.where(angles > -np.pi/4)[0]] = wall_distance
    true_ranges[np.where(angles > np.pi/4)[0]] = max_range # opening

    # Add some noise to the ranges
    noise = np.random.normal(0, noise_std, num_samples)
    simulated_ranges = np.clip(true_ranges + noise, 0, max_range)

    return angles, simulated_ranges

def visualize_lidar_scan(angles, ranges):
    """Visualizes a 2D LiDAR scan in a polar plot.

    Args:
        angles (np.array): Angles of the scan in radians.
        ranges (np.array): Ranges of the scan.
    """
    fig, ax = plt.subplots(subplot_kw={'projection': 'polar'})
    ax.plot(angles, ranges, '.', markersize=2)
    ax.set_theta_zero_location("right")
    ax.set_theta_direction(-1) # Clockwise
    ax.set_title("Simulated LiDAR Scan", va='bottom')
    plt.show()

# Example Usage:
if __name__ == "__main__":
    angles, ranges = simulate_lidar_scan()
    visualize_lidar_scan(angles, ranges)

    print("Simulated LiDAR scan with 360 samples, max range 10m, and noise.")
    print("A polar plot visualizing the scan should appear.")
