import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  imgSrc?: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'ROS 2 (Robotic Nervous System)',
    imgSrc: require('@site/static/img/module_1.png').default,
    description: (
      <>
        Learn the core of robot operating systems, enabling seamless communication and control for complex robotic behaviors.
      </>
    ),
  },
  {
    title: 'Gazebo & Unity (Digital Twin Simulation)',
    imgSrc: require('@site/static/img/module_2.png').default,
    description: (
      <>
        Dive into creating realistic digital twins for robots, simulating environments and interactions before physical deployment.
      </>
    ),
  },
  {
    title: 'NVIDIA Isaac (AI Robot Brain)',
    imgSrc: require('@site/static/img/module_3.png').default,
    description: (
      <>
        Harness the power of NVIDIA's AI platform for advanced perception, navigation, and decision-making in robots.
      </>
    ),
  },
  {
    title: 'Vision-Language-Action (VLA)',
    imgSrc: require('@site/static/img/module_4.png').default,
    description: (
      <>
        Integrate large language models to enable robots to understand natural language and execute complex tasks.
      </>
    ),
  },
];

function Feature({title, Svg, imgSrc, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
     <div className="text--center">
        {Svg ? (
          <Svg className={styles.featureSvg} role="img" />
        ) : imgSrc ? (
          <img src={imgSrc} className={styles.featureSvg} alt={title} />
        ) : null}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
