import React from 'react';

const CountryFilter = ({ 
    handleChange,
    filteredCategories
}) => {
  return (
    <select className="select select1" onChange={handleChange}>
    <option value="">Country</option>
      {filteredCategories?.map((user) => (
        <option key={user._id} value={user.country}>
        {user.country}</option>
      ))}
  </select>
  )
}

export default CountryFilter;