import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import img from '../../images/logo.jpg'

const Home = () => {
  return (
    <div className='container m-5'>
      <div>
      <Row>
        <Col>
        <h1 className=' fw-bolder mt-5 '>Educations is <br /> of successful youth</h1>
        </Col>
        <Col>
        <img className='w-100' src={img} alt="" />
        </Col>
      </Row>
      </div>
      {/* text and img section end */}
      {/* grid card section */}
    <div className='m-5'>
      <Row xs={1} md={2} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
      {/* grid card section end */}
    </div>
  );
};

export default Home;