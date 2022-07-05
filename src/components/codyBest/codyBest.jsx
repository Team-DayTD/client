import React from 'react';
import CodySlider from '../codySlider/codySlider';
import styles from './codyBest.module.css';

const CodyBest = () => {
  return (
    <div className={styles.slidersContainer}>
      <div className={styles.sliderContainer}>
        <CodySlider/>
      </div>
      <div className={styles.sliderContainer}>
        <CodySlider/>
      </div>
    </div>
  );
};

export default CodyBest;