import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Focus on Cloud Services',
    // Svg: require('@site/static/img/SpiritMark_BW.svg').default,
    description: (
      <>
        The Cloud Center of Excellence strives to discover and integrate implementations of AWS features within software prototypes.
      </>
    ),
  },
  {
    title: 'Tailored for Both',
    // Svg: require('@site/static/img/SpiritMark_BW.svg').default,
    description: (
      <>
        Documentation related to the Cloud Center of Excellence will be separated for Developers and Researchers.
      </>
    ),
  },
  {
    title: 'Support in the Future',
    // Svg: require('@site/static/img/SpiritMark_BW.svg').default,
    description: (
      <>
        The Roadmap for the Cloud Center of Excellence aims to keep our mission for as long as possible. 
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
