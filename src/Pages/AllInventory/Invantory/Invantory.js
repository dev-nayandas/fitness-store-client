import React, { useEffect, useState } from 'react';
import { Button, Card, CardGroup, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Invantory = ({ inventory }) => {
    const { name, img, id, price, description, quantity, suplierName, sold } = inventory;
 
    return (
       

<div className='row ' style={{ width: '300px' , marginTop:"40px"}} >
          <CardGroup >
            <Card  >
              <Card.Img  variant="top" src={img} />
              <Card.Body >
                <Card.Title> {id}</Card.Title>
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
              <Card.Footer>
                <Button className='text-white, bg-dark w-100'>Delete</Button>
              </Card.Footer>
            </Card>

          </CardGroup>
        </div>
      
    );
};

export default Invantory;