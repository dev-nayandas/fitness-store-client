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
    <div >
      <div className='container'>

        <div className='row' style={{ width: '300px' }} >
          <div className='col'>
          <CardGroup style={{ width: '300px' }}>
            <Card >
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
                <Button onClick={() =>navigateToInventories(id)} className='text-white, bg-dark'>Stock Update</Button>
              </Card.Footer>
            </Card>

          </CardGroup>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Inventory;