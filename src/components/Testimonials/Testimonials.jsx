import React from 'react';
import styles from './Testimonials.module.css';
import testimonialImage from '../../assets/Rectangle 8.png'; // Make sure this image is in src/assets

const Testimonials = () => {
  // Sample testimonial data - you can expand this to an array for multiple testimonials
  const testimonial = {
    image: testimonialImage,
    stars: 5,
    reviewText: "Finding the right car was incredibly easy with their platform. The process was smooth, and the customer service was top-notch. I highly recommend them for your next car rental!",
    reviewerName: "Charlie Johnson",
    reviewerTitle: "Frequent Traveler" // Optional: add a title or role
  };

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>
        <p className={styles.subheading}>Testimonials</p>
        <h2 className={styles.heading}>What People Say About Us</h2>

        <div className={styles.testimonialCard}>
          <div className={styles.testimonialImageContainer}>
            <img src={testimonial.image} alt="Testimonial" className={styles.testimonialImage} />
          </div>
          <div className={styles.testimonialContent}>
            <div className={styles.starsContainer}>
              {Array(testimonial.stars).fill().map((_, i) => (
                <i key={i} className={`fas fa-star ${styles.starIcon}`}></i>
              ))}
              {Array(5 - testimonial.stars).fill().map((_, i) => (
                <i key={i + testimonial.stars} className={`far fa-star ${styles.starIcon}`}></i> // For empty stars if needed
              ))}
            </div>
            <blockquote className={styles.reviewText}>
              "{testimonial.reviewText}"
            </blockquote>
            <p className={styles.reviewerName}>- {testimonial.reviewerName}</p>
            {testimonial.reviewerTitle && <p className={styles.reviewerTitle}>{testimonial.reviewerTitle}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;