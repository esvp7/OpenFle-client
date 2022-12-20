import React from 'react';

const LevelFilter = ({handleChange}) => {
  return (
    <select className="select select2 " onChange={handleChange}>
    <option value="">French Level</option>
    <option value="A1">A1</option>
    <option value="A2">A2</option>
    <option value="B1">B1</option>
    <option value="B2">B2</option>
    <option value="C1">C1</option>
    <option value="C2">C2</option>
  </select>
  )
}

export default LevelFilter;