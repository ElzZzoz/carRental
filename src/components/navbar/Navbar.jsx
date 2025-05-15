import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles['navbar-container']}>
        <div className={styles['navbar-logo']}>
          <a href="/">
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
        </ul>
        <div className={styles['auth-buttons']}>
          <a href="/signin" className={styles['auth-link']}>Sign In</a>
          <a href="/signup" className={styles['signup-btn']}>Sign Up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;