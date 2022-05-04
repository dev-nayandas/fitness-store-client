import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Inventories from '../Inventories';



const Inventory = ({ inventory }) => {
  const { name, img, id, price, description, quantity,suplierName } = inventory;
  
  const navigate = useNavigate()
  const navigateToInventories = id =>{
    navigate('/allinventory/' + id)
  }
  return (
  
     

        <div className='row gx-5' style={{ width: '18rem' }} >
          <div className='col-lg-4 gx-5'>
          <CardGroup className='ms-5 mt-3' style={{ width: '200px ', height:'500px'}}>
            <Card className='mt-4'>
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