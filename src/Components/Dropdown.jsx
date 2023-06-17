import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const Dropdown = ({ title, options }) => {
  const [showFilter, setShowFilter] = useState(false);
  const [iconDirection, setIconDirection] = useState('down');

  const handleFilterClick = () => {
    setShowFilter(!showFilter);
    setIconDirection(iconDirection === 'down' ? 'up' : 'down');
  }

  return (
    <section style={{ padding: "16px", borderBottom: "1px solid #f0f0f0" }}>
      <div onClick={handleFilterClick}>
        <span style={{ fontWeight: "bold" }}>{title}</span>
        {iconDirection === 'down' ? <FaAngleDown /> : <FaAngleUp />}
      </div>
      {showFilter && (
        <div>
          {options.map(option => (
            <p key={option}>
              {option}
              <input type="checkbox" name={option} id={option} />
            </p>
          ))}
        </div>
      )}
    </section>
  );
}

export default Dropdown;
