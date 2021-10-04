import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='d-flex container mt-4'>
      <div>
        <h1>Education<span className='text-danger'>.</span> </h1>
      </div>
      <div className='text-center ms-5 mt-3'>
          <Link className='p-4 text-decoration-none text-danger fw-bold' to="/Home">Home</Link>
          <Link className=' p-4 text-decoration-none text-danger fw-bold' to="/Services">Services</Link>
          <Link className=' p-4 text-decoration-none text-danger fw-bold' to="/About">About</Link>
          <Link className=' p-4 text-decoration-none text-danger fw-bold' to="/About">About</Link>
      </div>
    </div>
  );
};

export default Header;