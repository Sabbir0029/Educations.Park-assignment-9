import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const About = () => {
  return (
    <div className='container mb-5'>
      <h1 className='bg-danger p-5 text-center text-light rounded-3 mb-5 mt-5'>ABOUT US</h1>
      <div>
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
    </div>
  );
};

export default About;