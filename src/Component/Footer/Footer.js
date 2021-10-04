import React from 'react';
import { Col, Row } from 'react-bootstrap';
const Footer = () => {
  return (
    <div className='bg-info p-4'>
      <div className='container'>
      <Row>
        <Col className='p-4'>
        <h1>Educations<span className='text-danger'>.Park</span></h1>
        <p>Educations is a fun, interactive, visual, and friendly way <br /> to learn programming.</p>
        </Col>
        <Col className='p-4'>
        <h1>follow us</h1>
        <Row md={6}>
          <Col><p>Facebook</p></Col>
          <Col><p>Twitter</p></Col>
          <Col><p>Instagram</p></Col>
        </Row>
        </Col>
      </Row>
      <div className='p-2'>
      <h4 className='text-center'>Copyright © 2021 Educationspark.com</h4>
      </div>
      </div>
    </div>
  );
};

export default Footer;