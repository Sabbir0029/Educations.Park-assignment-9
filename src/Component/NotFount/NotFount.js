import React from 'react';
import img from '../../images/requested-page-found-404-error_81534-2158.jpg'

const NotFount = () => {
  return (
    <div className='text-center mt-5'>
      <h1>NOT FOUNT</h1>
      <img src={img} alt="" />
    </div>
  );
};

export default NotFount;