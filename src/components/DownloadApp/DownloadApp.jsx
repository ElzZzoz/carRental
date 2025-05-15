import React, { useState } from 'react';
import styles from './DownloadApp.module.css';
import phoneMockup from '../../assets/iPhone 14 Pro Space Black Mockup.png'; // Ensure this image is in src/assets
// Assuming you have these logo images in your assets folder:
import googlePlayLogo from '../../assets/image 2.png';
import appStoreLogo from '../../assets/image 3.png';

const DownloadApp = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data submitted:', formData);
    alert('Thank you! We will send you the download link.');
    setFormData({ name: '', phone: '', email: '' }); // Reset form
  };

  return (
    <section className={styles.downloadAppSection}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.leftPanel}>
            <h2 className={styles.heading}>Download Our App</h2>
            <p className={styles.subheading}>Get the best car rental experience on the go. Download our app for exclusive deals and easy booking.</p>
            
            <div className={styles.appLogos}>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={googlePlayLogo} alt="Get it on Google Play" className={styles.storeLogo} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={appStoreLogo} alt="Download on the App Store" className={styles.storeLogo} />
              </a>
            </div>

            <p className={styles.formIntro}>Or, get a download link sent to your phone/email:</p>
            <form onSubmit={handleSubmit} className={styles.downloadForm}>
              <div className={styles.formGroup}>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className={styles.formGroup}>
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="Phone Number (Optional)" 
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formGroup}>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Email Address" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <button type="submit" className={styles.submitButton}>Get Download Link</button>
            </form>
          </div>

          <div className={styles.rightPanel}>
            <img src={phoneMockup} alt="App on iPhone" className={styles.phoneImage} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;