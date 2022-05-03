import React from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Details from '../Details/Details';

const Detail = ({detail}) => {
    

    const { name, img, id, price, description, quantity,suplierName } = detail;
    const navigate = useNavigate()
    const navigateToDetails = id =>{
         navigate(`./details/${id}`)
    }
    return (
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img}/>
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
      {description}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Id : {id}</ListGroupItem>
    <ListGroupItem>Quantity : {quantity}</ListGroupItem>
    <ListGroupItem>Suplier Name : {suplierName}</ListGroupItem>
    <ListGroupItem>Price : {price}</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Button onClick={()=> navigateToDetails(id)} >Stock Update</Button>
  </Card.Body>
</Card>
    );
};

export default Detail;