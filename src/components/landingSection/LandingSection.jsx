import React from 'react';
import blueCar from '../../assets/blue_car.png';
import vector1 from '../../assets/Vector 1.png';
import image2 from '../../assets/image 2.png';
import image3 from '../../assets/image 3.png';
import framLogo from '../../assets/Frame.png';
import Navbar from '../navbar/Navbar';
import styles from './LandingSection.module.css';

const LandingSection = () => {
  return (
    <div className={styles['landing-section']}>
      <nav className={styles.navbar}>
        <div className={styles['navbar-container']}>
          <div className={styles['navbar-logo']}>
            <a href="/" className={styles['logo-container']}>
              <img src={framLogo} alt="Fram Logo" className={styles['fram-logo']} />
              <span className={styles['logo-text']}>CarRental</span>
            </a>
          </div>
          <ul className={styles['navbar-menu']}>
            <li className={styles['navbar-item']}>
              <a href="/become-renter" className={styles['navbar-link']}>Become a Renter</a>
            </li>
            <li className={styles['navbar-item']}>
              <a href="/rental-deals" className={styles['navbar-link']}>Rental Deals</a>
            </li>
            <li className={styles['navbar-item']}>
              <a href="/how-it-works" className={styles['navbar-link']}>How it Works</a>
            </li>
            <li className={styles['navbar-item']}>
              <a href="/why-choose-us" className={styles['navbar-link']}>Why Choose Us</a>
            </li>
          </ul>
          <div className={styles['auth-buttons']}>
            <a href="/signin" className={styles['auth-link']}>Sign In</a>
            <a href="/signup" className={styles['signup-btn']}>Sign Up</a>
          </div>
        </div>
      </nav>
      
      <div className={styles['landing-content-wrapper']}>
        <div className={styles['landing-content']}>
          <h1>Find Book And Rent Car <span className={styles['blue-text']}>EasilY</span></h1>
          <img src={vector1} alt="Vector decoration" className={styles['vector-image']} />
          <p>Discover the best cars with the best deals</p>
          <div className={styles['cta-buttons']}>
            <img src={image2} alt="Browse Cars" className={styles['cta-image']} />
            <img src={image3} alt="Learn More" className={styles['cta-image']} />
          </div>
        </div>
        <div className={styles['landing-image']}>
          <img src={blueCar} alt="Blue Car" className={styles['car-image']} />
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
