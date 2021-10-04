import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='d-flex container mt-4'>
      <div>
        <h1>Educations<span className='text-danger'>.Park</span> </h1>
      </div>
      <div className='text-center ms-5 mt-3'>
          <Link className='p-4 text-decoration-none text-danger fw-bold' to="/Home">Home</Link>
          <Link className=' p-4 text-decoration-none text-danger fw-bold' to="/Services">Services</Link>
          <Link className=' p-4 text-decoration-none text-danger fw-bold' to="/About">About</Link>
          <Link className=' p-4 text-decoration-none text-danger fw-bold' to="/Teachers">Teachers</Link>
      </div>
    </div>
  );
};

export default Header;