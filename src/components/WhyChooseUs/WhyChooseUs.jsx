import React from 'react';
import styles from './WhyChooseUs.module.css';
import audiImage from '../../assets/Audi 1 (1).png'; // Assuming this is the correct path for Audi 1.png

const WhyChooseUs = () => {
  const features = [
    {
      icon: 'fas fa-tags',
      title: 'Best Price Guaranteed',
      description: 'Find the best deals and offers with our transparent pricing. No hidden fees.'
    },
    {
      icon: 'fas fa-user-shield',
      title: 'Experienced & Verified Drivers',
      description: 'Our drivers are professional, experienced, and thoroughly vetted for your safety.'
    },
    {
      icon: 'fas fa-truck-fast',
      title: '24-Hour Car Delivery',
      description: 'Get your chosen car delivered to your doorstep, anytime, anywhere.'
    },
    {
      icon: 'fas fa-headset',
      title: '24/7 Technical Support',
      description: 'Our dedicated support team is always available to assist you with any queries.'
    }
  ];

  return (
    <section className={styles.whyChooseUs}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={audiImage} alt="Audi Car" className={styles.mainImage} />
        </div>
        <div className={styles.contentContainer}>
          <p className={styles.subheading}>Why Choose Us</p>
          <h2 className={styles.heading}>We Offer the Best Experience with Our Rental Deals</h2>
          <ul className={styles.featuresList}>
            {features.map((feature, index) => (
              <li key={index} className={styles.featureItem}>
                <div className={styles.featureIconContainer}>
                  <i className={`${feature.icon} ${styles.featureIcon}`}></i>
                </div>
                <div className={styles.featureText}>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;