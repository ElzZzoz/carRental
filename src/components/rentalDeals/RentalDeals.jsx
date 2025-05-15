import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './RentalDeals.css';
import CarDetails from '../carDetails/CarDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import audi1 from '../../assets/Audi 1 (1).png';
import image11 from '../../assets/image 11.png';
import image12 from '../../assets/image 12.png';
import image13 from '../../assets/image 13.png';

const RentalDeals = () => {
  const navigate = useNavigate();
  const [cars, setCars] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAll, setShowAll] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

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

  const filteredCars = cars.filter(car =>
    car.car.toLowerCase().includes(searchTerm.toLowerCase()) ||
    car.car_model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayedCars = showAll ? filteredCars : filteredCars.slice(0, 4);

  const handleRentClick = (car, imageIndex) => {
    setSelectedCar({
      car,
      image: carImages[(imageIndex % 4) + 1]
    });
  };

  return (
    <section className="rental-deals">
      <div className="search-section">
        <div className="input-group">
          <input 
            type="text" 
            className="form-control form-control-lg"
            placeholder="Search by car name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button 
            className="btn btn-primary"
            onClick={() => {}} // Add any additional search functionality if needed
          >
            Search
          </button>
        </div>
      </div>

      <div className="deals-header">
        <span className="subtitle">Popular Rental Deals</span>
        <h2>Most Popular Car Rental Deals</h2>
      </div>

      <div className="car-cards">
        {displayedCars.map((car, index) => (
          <div className="car-card" key={car.id}>
            <div className="car-image-container">
              <img 
                src={carImages[index + 1] || carImages[1]} 
                alt={`${car.car} ${car.car_model}`} 
                className="car-image"
              />
            </div>
            <div className="car-details">
              <h3>{car.car} {car.car_model}</h3>
              <div className="car-specs">
                <span>Year: {car.car_model_year}</span>
                <span>VIN: {car.car_vin.slice(0, 8)}...</span>
              </div>
              <div className="car-price">
                <span className="price">{car.price}/day</span>
                <button 
                  className={`rent-button ${!car.availability ? 'disabled' : ''}`}
                  disabled={!car.availability}
                  onClick={() => handleRentClick(car, index)}
                >
                  {car.availability ? 'Rent Now' : 'Not Available'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedCar && (
        <CarDetails 
          car={selectedCar.car}
          image={selectedCar.image}
          onClose={() => setSelectedCar(null)}
        />
      )}

      <div className="show-all-container">
        <button 
          className="show-all-button"
          onClick={() => navigate('/all-cars')}
        >
          Show All Vehicles
        </button>
      </div>
    </section>
  );
};

export default RentalDeals;