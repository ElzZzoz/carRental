import React from 'react';
import styles from './CarDetails.module.css'; // Changed import

const CarDetails = ({ car, image, onClose }) => {
  if (!car) {
    return null; // Or some loading/error state
  }

  return (
    <div className={styles['car-details-overlay']}> {/* Updated className */}
      <div className={styles['car-details-modal']}> {/* Updated className */}
        <button className={styles['close-button']} onClick={onClose}>&times;</button> {/* Updated className */}
        
        <div className={styles['car-details-content']}> {/* Updated className */}
          <div className={styles['car-details-image']}> {/* Updated className */}
            <img src={image} alt={`${car.car} ${car.car_model}`} />
          </div>
          
          <div className={styles['car-details-info']}> {/* Updated className */}
            <h2>{car.car} {car.car_model}</h2>
            
            <div className={styles['details-grid']}> {/* Updated className */}
              <div className={styles['detail-item']}> {/* Updated className */}
                <span className={styles['detail-label']}>Year</span> {/* Updated className */}
                <span className={styles['detail-value']}>{car.car_model_year}</span> {/* Updated className */}
              </div>
              <div className={styles['detail-item']}> {/* Updated className */}
                <span className={styles['detail-label']}>VIN</span> {/* Updated className */}
                <span className={styles['detail-value']}>{car.car_vin}</span> {/* Updated className */}
              </div>
              <div className={styles['detail-item']}> {/* Updated className */}
                <span className={styles['detail-label']}>Color</span> {/* Updated className */}
                <span className={styles['detail-value']}>{car.car_color}</span> {/* Updated className */}
              </div>
              <div className={styles['detail-item']}> {/* Updated className */}
                <span className={styles['detail-label']}>Price</span> {/* Updated className */}
                <span className={styles['detail-value']}>{car.price}/day</span> {/* Updated className */}
              </div>
            </div>

            <div className={styles['availability-section']}> {/* Updated className */}
              <h3>Availability Status</h3>
              <span className={`${styles.status} ${car.availability ? styles.available : styles.unavailable}`}> {/* Updated className */}
                {car.availability ? 'Available for Rent' : 'Currently Unavailable'}
              </span>
            </div>

            {car.availability && (
              <button className={styles['rent-button']}> {/* Updated className */}
                Proceed to Rent
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;