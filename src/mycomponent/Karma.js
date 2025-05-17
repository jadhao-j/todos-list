import React from 'react';
import Kaand from './Kaand';

const Karma = (props) => {
  return (
    <div className='container'>
      <h2 className='text-center my-3'>Karma</h2>
      {props.karmas.length === 0 ? (
        <span className="fs-3">Aree ruk jaa bhai</span>
      ) : null}
      {props.karmas.map((kaand) => (
        <Kaand
          key={kaand.sno}
          kaand={kaand}
          onDelete={props.onDelete}
          onTrigger={props.onTrigger} 
        />
      ))}
    </div>
  );
};

export default Karma;
