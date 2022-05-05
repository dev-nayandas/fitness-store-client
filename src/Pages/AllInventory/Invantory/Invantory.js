import React, { useEffect, useState } from 'react';
import { Button, Card, CardGroup, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Invantory = ({ inventory }) => {
  const [inventories, setInventories] = useState([]);
    const { name, img, _id, price, description, quantity, suplierName, sold } = inventory;





    const handleDelete = id =>{
      const proceed = window.confirm('Are You Sure to delete the inventory')
      if(proceed){
        const url = `http://localhost:5000/inventory/${id}`;
        fetch(url, {
          method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
          const remaining = inventories.filter(inventory=>inventory._id !== id);
          console.log(remaining)
          setInventories(remaining)
        })
        
      }
    }
 
    return (
       

<div className='row ' style={{ width: '300px' , marginTop:"40px"}} >
          <CardGroup >
            <Card  >
              <Card.Img  variant="top" src={img} />
              <Card.Body >
                {/* <Card.Title>Id: {_id}</Card.Title> */}
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
                <Button onClick={()=>handleDelete(_id)} className='text-white, bg-dark w-100'>Delete</Button>
              </Card.Footer>
            </Card>

          </CardGroup>
        </div>
      
    );
};

export default Invantory;