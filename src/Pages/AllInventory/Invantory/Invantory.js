import React from 'react';
import { Button, Card, CardGroup, ListGroup, ListGroupItem } from 'react-bootstrap';

const Invantory = ({ inventory }) => {
    const { name, img, id, price, description, quantity, suplierName, sold } = inventory;
    return (
       

<div className='row ' style={{ width: '300px' }} >
          <CardGroup style={{ width: '300px' }}>
            <Card  >
              <Card.Img style={{ width: '300px' }} variant="top" src={img} />
              <Card.Body >
                <Card.Title> Id :{id}</Card.Title>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                  {description}
                </Card.Text>
                <Card.Text>
                 Price :{price}
                </Card.Text>
                <Card.Text>
                 Quantity : {quantity}
                </Card.Text>
                <Card.Text>
                 Suplier Name  : {suplierName}
                </Card.Text>
                <Card.Text>
                 Total Sold  : {sold}
                </Card.Text>
              </Card.Body>
              {/* <Card.Footer>
                <Button className='text-white, bg-dark'>Stock Update</Button>
              </Card.Footer> */}
            </Card>

          </CardGroup>
        </div>
      
    );
};

export default Invantory;