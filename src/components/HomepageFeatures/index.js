import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Focus on Cloud Services',
    // Svg: require('@site/static/img/SpiritMark_BW.svg').default,
    description: (
      <>
        The Cloud Center of Excellence provides Researchers the ability to discover and integrate cloud services within their projects.
      </>
    ),
  },
  {
    title: 'Tailored for Researchers',
    // Svg: require('@site/static/img/SpiritMark_BW.svg').default,
    description: (
      <>
        All documentation from the Cloud Center of Excellence is created a Researcher's perspective.
      </>
    ),
  },
  {
    title: 'Long Term Support',
    // Svg: require('@site/static/img/SpiritMark_BW.svg').default,
    description: (
      <>
        The Cloud Center of Excellence will be consistently updated over time. 
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
