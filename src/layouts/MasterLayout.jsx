import React from 'react';
import LandingSection from '../components/landingSection/LandingSection';
import RentalDeals from '../components/RentalDeals/RentalDeals';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import Testimonials from '../components/Testimonials/Testimonials';
import DownloadApp from '../components/DownloadApp/DownloadApp';
import Footer from '../components/Footer/Footer'; // Add this import
import styles from './MasterLayout.module.css';

const MasterLayout = () => {
  return (
    <div className={styles.masterLayout}>
      <LandingSection />
      <RentalDeals />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <DownloadApp />
      <Footer /> {/* Add this line */}
    </div>
  );
};

export default MasterLayout;