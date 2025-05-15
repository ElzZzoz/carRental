import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="search-section">
      <div className="input-group">
        <input 
          type="text" 
          className="form-control form-control-lg"
          placeholder="Search by car name or model..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button 
          className="btn btn-primary" 
          type="submit"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;