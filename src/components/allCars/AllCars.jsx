import React, { useState, useEffect } from 'react';
import styles from './AllCars.module.css';
import SearchBar from '../searchBar/SearchBar';
import CarDetails from '../carDetails/CarDetails'; // Add this import
import audi1 from '../../assets/Audi 1 (1).png';
import image11 from '../../assets/image 11.png';
import image12 from '../../assets/image 12.png';
import image13 from '../../assets/image 13.png';

const AllCars = () => {
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAll, setShowAll] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null); // Add this state
  const carsPerPage = 8;

  const carImages = {
    1: audi1,
    2: image11,
    3: image12,
    4: image13,
  };

  useEffect(() => {
    fetch('https://myfakeapi.com/api/cars/')
      .then(response => response.json())
      .then(data => setCars(data.cars))
      .catch(error => console.error('Error fetching cars:', error));
  }, []);

  const handleSearch = (searchTerm) => {
    setSearchQuery(searchTerm);
    setCurrentPage(1);
  };

  // Add these new functions
  const handleShowAll = () => {
    setShowAll(!showAll);
    setCurrentPage(1);
  };

  const handleRentClick = (car, imageIndex) => { // Add this function
    setSelectedCar({
      car,
      image: carImages[(imageIndex % 4) + 1] || carImages[1] // Ensure a fallback if imageIndex is out of bounds for carImages keys
    });
  };

  const filteredCars = cars.filter(car =>
    car.car.toLowerCase().includes(searchQuery.toLowerCase()) ||
    car.car_model.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCars.length / carsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 3;
    let startPage = Math.max(currentPage - 1, 1);
    let endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(endPage - maxVisiblePages + 1, 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  const displayedCars = showAll
    ? filteredCars.slice((currentPage - 1) * carsPerPage, currentPage * carsPerPage)
    : filteredCars.slice(0, carsPerPage);

  return (
    <div className={styles['all-cars']}>
      <div className={styles['all-cars-header']}>
        <h1>All Available Cars</h1>
        <p>Browse through our entire collection of rental vehicles</p>
        <SearchBar onSearch={handleSearch} />
      </div>

      <div className={styles['car-grid']}>
        {displayedCars.map((car, index) => (
          <div className={styles['car-card']} key={car.id}>
            <div className={styles['car-image-container']}>
              <img 
                src={carImages[(index % 4) + 1] || carImages[1]} // Added fallback
                alt={`${car.car} ${car.car_model}`} 
                className={styles['car-image']}
              />
            </div>
            <div className={styles['car-details']}>
              <h3>{car.car} {car.car_model}</h3>
              <div className={styles['car-specs']}>
                <span>Year: {car.car_model_year}</span>
                <span>VIN: {car.car_vin.slice(0, 8)}...</span>
              </div>
              <div className={styles['car-price']}>
                <span className={styles.price}>{car.price}/day</span>
                <button 
                  className={`${styles['rent-button']} ${!car.availability ? styles.disabled : ''}`}
                  disabled={!car.availability}
                  onClick={() => handleRentClick(car, index)} // Updated onClick handler
                >
                  {car.availability ? 'Rent Now' : 'Not Available'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles['show-all-container']}>
        <button 
          className={styles['show-all-button']}
          onClick={handleShowAll}
        >
          {showAll ? 'Show Less' : 'Show All Vehicles'}
        </button>
      </div>

      {showAll && (
        <div className={styles.pagination}>
          <button 
            onClick={() => paginate(currentPage - 1)}
            className={`${styles['page-button']} ${styles['nav-button']}`}
            disabled={currentPage === 1}
          >
            &lt;
          </button>

          {currentPage > 2 && (
            <>
              <button
                onClick={() => paginate(1)}
                className={styles['page-button']}
              >
                1
              </button>
              <span className={styles['page-dots']}>...</span>
            </>
          )}

          {getPageNumbers().map(number => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`${styles['page-button']} ${currentPage === number ? styles.active : ''}`}
            >
              {number}
            </button>
          ))}

          {currentPage < totalPages - 1 && (
            <>
              <span className={styles['page-dots']}>...</span>
              <button
                onClick={() => paginate(totalPages)}
                className={styles['page-button']}
              >
                {totalPages}
              </button>
            </>
          )}

          <button 
            onClick={() => paginate(currentPage + 1)}
            className={`${styles['page-button']} ${styles['nav-button']}`}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>
      )}

      {selectedCar && ( // Add this conditional rendering for CarDetails
        <CarDetails
          car={selectedCar.car}
          image={selectedCar.image}
          onClose={() => setSelectedCar(null)}
        />
      )}
    </div>
  );
};

export default AllCars;