import React from 'react';
import { Row, Col,} from 'react-bootstrap';
import img from '../../images/20943839.jpg'

const About = () => {
  return (
    <div className='container mb-5'>
      <h1 className='bg-danger p-5 text-center text-light rounded-3 mb-5 mt-5'>ABOUT US</h1>
      <div className='m-5'>
      <Row>
        <Col className='p-5 fs-3 fw-bold'>
        <p>Education disciplines and develops both academic performances as well as curricula activities. A person learns to read, weite ,speak,practice activities, and learn various skills through Education. Education makes a person independent and self-sufficient.Learning is a part of Education and can be learned for anyone around us.</p>
        </Col>
        <Col>
        <img src={img} className='w-75 p-4' alt="" />
        </Col>
      </Row>
      </div>
    </div>
  );
};

export default About;