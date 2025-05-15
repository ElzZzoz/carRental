import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          {/* Column 1: Our Product */}
          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Our Product</h3>
            <ul className={styles.linkList}>
              <li><a href="#">Car Rentals</a></li>
              <li><a href="#">Mobile App</a></li>
              <li><a href="#">Deals & Offers</a></li>
              <li><a href="#">Locations</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>

          {/* Column 2: Resources */}
          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Resources</h3>
            <ul className={styles.linkList}>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Safety Information</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Column 3: About Rent Cars */}
          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>About Rent Cars</h3>
            <ul className={styles.linkList}>
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Partnerships</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 4: Follow Us */}
          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Follow Us</h3>
            <div className={styles.socialIcons}>
              <a href="#" aria-label="Facebook" className={styles.socialLink}><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Twitter" className={styles.socialLink}><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="Instagram" className={styles.socialLink}><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="LinkedIn" className={styles.socialLink}><i className="fab fa-linkedin-in"></i></a>
            </div>
            <div className={styles.newsletter}>
              <p>Subscribe to our newsletter:</p>
              <input type="email" placeholder="Enter your email" className={styles.newsletterInput} />
              <button className={styles.subscribeButton}>Subscribe</button>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} RentCars. All rights reserved.</p>
          <p>Designed with <i className={`fas fa-heart ${styles.heartIcon}`}></i> by Your Name/Company</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;