import React from 'react';
import { Card, Col,} from 'react-bootstrap';

const CardServices = (props) => {
  const {img, title, Price, manths,details} = props.item
  return (
    <div>
            <Col>
              <Card>
                <Card.Img variant="top" src={img}/>
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>Price : {Price}</Card.Text>
                  <Card.Text>Manths : {manths}</Card.Text>
                  <Card.Text>{details}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
    </div>
  );
};

export default CardServices;