import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import img from '../../images/logo.jpg'
import CardHome from '../CardHome/CardHome';

const Home = () => {
  const[items, setItem] = useState([]);
  useEffect(() =>{
    fetch('./data.json')
    .then(res => res.json())
    .then(data => setItem(data))
  },[])
  return (
    <div className='container m-5'>
      <div>
      <Row>
        <Col>
        <h1 className=' fw-bolder mt-5 text-danger'>Educations is <br /> of successful youth</h1>
        <p>Consectetur adipisicing elit. Eaque voluptas nobis dicta fuga magni aut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, expedita. Optio vel alias ullam eos est, culpa expedita fugiat, laudantium non inventore, voluptatum nostrum debitis.</p>
        </Col>
        <Col>
        <img className='w-100' src={img} alt="" />
        </Col>
      </Row>
      </div>
      {/* text and img section end */}
      {/* grid card section */}
    <div>
    <Row xs={1} md={3} className="g-4">
    {
        items.map(item => <CardHome
          key={item.id}
           item={item}></CardHome>)
      }
    </Row>
    </div>
      {/* grid card section end */}
    </div>
  );
};

export default Home;