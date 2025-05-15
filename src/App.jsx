import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MasterLayout from './layouts/MasterLayout';
import AllCars from './components/allCars/AllCars'; // Corrected import path
import PageNotFound from './components/pageNotFound/PageNotFound'; // Corrected import path and casing

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MasterLayout />} />
        <Route path="/carRental/" element={<MasterLayout />} /> {/* Add this line */}
        <Route path="/all-cars" element={<AllCars />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
