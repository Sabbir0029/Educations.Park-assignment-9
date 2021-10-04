import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const CardHome = (props) => {
  const {title, img, details} = props.item
  return (
    <div>
      <Row xs={1} md={12} className="m-1 mt-5 mb-5">
            <Col>
              <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{details}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
      </Row>
    </div>
  );
};

export default CardHome;