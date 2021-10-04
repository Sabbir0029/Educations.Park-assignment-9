import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import CardServices from '../cardServices/CardServices';

const Services = () => {
  const[items, setItem] = useState([]);
  useEffect(() =>{
    fetch('./item.json')
    .then(res => res.json())
    .then(data => setItem(data))
  },[])
  return (
    <div className='container mb-5'>
      <h1 className='bg-danger p-5 text-center text-light rounded-3 mb-5 mt-5'>SERVICES</h1>
      <div className='d-flex g-5'>
      <Row xs={1} md={3} className="g-4">
      {
        items.map(item => <CardServices
           key={item.id}
           item={item}>
           </CardServices>)
      }
      </Row>
      </div>
    </div>
  );
};

export default Services;