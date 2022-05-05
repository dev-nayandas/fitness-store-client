import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Inventories from '../Inventories';


// Inventory destructure here


const Inventory = ({ inventory }) => {
  const { name, img, _id, price, description, quantity,suplierName } = inventory;
  
  const navigate = useNavigate()
  const navigateToInventories = id =>{
    navigate('/allinventory/' + id)
  }
  return (
  
     

        <div className='Row gx-5' style={{ width: '18rem',marginRight:'40px', marginLeft:"40px" ,marginBottom:"40px"}} >
          <div className='Col-lg-3 '>
          <CardGroup className='ms-5 mt-3' style={{ width: '300px ', height:'500px'}}>
            <Card className='mt-4'>
              <Card.Img style={{ width: '300px' }} variant="top" src={img} />
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
                <Button onClick={() =>navigateToInventories(_id)} className='text-white, bg-dark'>Stock Update</Button>
              </Card.Footer>
            </Card>

          </CardGroup>
          </div>
        </div>
     

   
  );
};

export default Inventory;