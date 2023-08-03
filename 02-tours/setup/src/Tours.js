import React from 'react';
import Tour from './Tour';
const Tours = ({tourData, Removed}) => {
  return (
  <div>
      <div className='title'>
          <h2>Our Tours</h2>
          <div className='underline'></div>
      </div>
      <div>
        {
          tourData.map(() => {
            
          })
        }
      </div>
  </div>
  )
};

export default Tours;
