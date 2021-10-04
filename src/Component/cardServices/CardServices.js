import React from 'react';
import { Card, Col,} from 'react-bootstrap';

const CardServices = (props) => {
  const {img, title, price,} = props.item
  return (
    <div>
            <Col>
              <Card>
                <Card.Img variant="top" src={img}/>
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{title}</Card.Text>
                  <p>price : {price}</p>
                </Card.Body>
              </Card>
            </Col>
    </div>
  );
};

export default CardServices;