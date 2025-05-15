import React from 'react';
import styles from './HowItWorks.module.css';
import logo1 from '../../assets/Frame 24.png';
import logo2 from '../../assets/Frame 25.png';
import logo3 from '../../assets/Frame 26.png';
import logo4 from '../../assets/Frame 27.png';

const HowItWorks = () => {
  return (
    <section className={styles.howItWorks}>
      <div className={styles.container}>
        <p className={styles.statement}>How it Works</p>
        <h1 className={styles.title}>Rent With <span className={styles.highlight}>Following</span> Three Working Steps</h1>
        
        <div className={styles.steps}>
          <div className={styles.step}>
            <div className={styles.iconContainer}>
              <i className={`fas fa-location-dot ${styles.icon}`}></i>
            </div>
            <h3>Choose Location</h3>
            <p>Select your preferred pickup location and find available cars near you</p>
          </div>

          <div className={styles.step}>
            <div className={styles.iconContainer}>
              <i className={`far fa-calendar-alt ${styles.icon}`}></i>
            </div>
            <h3>Pick Up Date</h3>
            <p>Choose your rental duration and select convenient pickup dates</p>
          </div>

          <div className={styles.step}>
            <div className={styles.iconContainer}>
              <i className={`fas fa-car ${styles.icon}`}></i>
            </div>
            <h3>Book Your Car</h3>
            <p>Complete your booking and get ready for your journey</p>
          </div>
        </div>

        <div className={styles.logosSection}>
          <div className={styles.logosContainer}>
            <img src={logo1} alt="Car Brand Logo 1" className={styles.logoImage} />
            <img src={logo2} alt="Car Brand Logo 2" className={styles.logoImage} />
            <img src={logo3} alt="Car Brand Logo 3" className={styles.logoImage} />
            <img src={logo4} alt="Car Brand Logo 4" className={styles.logoImage} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;