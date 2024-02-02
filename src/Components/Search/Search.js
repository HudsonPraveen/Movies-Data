import React, { useState } from 'react';
import './Search.css';

export const Search = ({ onSearchFilterChange }) => {

  const[searchFilter,setSearchFilter] = useState("");

  const handleSearchFilterChange = (event) => {
    const filterValue = event.target.value;
    setSearchFilter(filterValue);
    onSearchFilterChange(filterValue);
  }

  return (
    <div className="button-container">
      <p>
        <input type='text' placeholder='Search!' value={searchFilter}  onChange={handleSearchFilterChange}/>
      </p>
    </div>

  )
}
