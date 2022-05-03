import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Inventories from '../Inventories';



const Inventory = ({ inventory }) => {
  const { name, img, id, price, description, quantity,suplierName } = inventory;
  const navigate = useNavigate()
  const navigateToInventories = id =>{
    navigate(`./detail/${id}`)
  }
  return (
  
     

        <div className='row gx-5' style={{ width: '18rem' }} >
          <div className='col-lg-4 gx-5'>
          <CardGroup style={{ width: '200px' }}>
            <Card >
              <Card.Img style={{ width: '200px' }} variant="top" src={img} />
              <Card.Body >
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
              </Card.Body>
              <Card.Footer>
                <Button onClick={() =>navigateToInventories(id)} className='text-white, bg-dark'>Stock Update</Button>
              </Card.Footer>
            </Card>

          </CardGroup>
          </div>
        </div>
     

   
  );
};

export default Inventory;