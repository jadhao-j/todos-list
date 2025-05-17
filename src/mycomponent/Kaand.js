import React from 'react';

const Kaand = ({ kaand, onDelete, onTrigger }) => {
  if (!kaand) {
    return (
      <div>
        <h2>Kaand</h2>
        <p>No Kaand data available.</p>
      </div>
    );
  }
  return (
    <div>
      <h3>{kaand.title}</h3>
      <p>{kaand.desc}</p>
      <button className='btn btn-sm btn-success me-2' onClick={() => onTrigger(kaand)}>
        Karo
      </button>
      <button className='btn btn-sm btn-danger' onClick={() => onDelete(kaand)}>
        Hatao
      </button>
    </div>
  );
};

export default Kaand;
