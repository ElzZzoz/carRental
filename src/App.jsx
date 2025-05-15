import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MasterLayout from './layouts/MasterLayout';
import AllCars from './components/allCars/AllCars';
import PageNotFound from './components/pageNotFound/PageNotFound';

function App() {
  return (
    <Router basename="/carRental"> {/* Add basename prop here */}
      <Routes>
        <Route path="/" element={<MasterLayout />} />
        {/* The explicit /carRental/ route is removed as basename handles it */}
        <Route path="/all-cars" element={<AllCars />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
