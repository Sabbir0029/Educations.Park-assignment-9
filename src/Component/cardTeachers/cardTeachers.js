import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const CardTeachers = (props) => {
  const { name, position,img,} = props.teacher
  return (
    <div>
      <Row xs={1} md={12} className="m-1 mt-5 mb-5">
            <Col>
              <Card>
                <Card.Img variant="top h-50 rounded-5" src={img} />
                <Card.Body>
                  <Card.Title>Name : {name}</Card.Title>
                  <Card.Text>position : {position}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
      </Row>
    </div>
  );
};

export default CardTeachers;