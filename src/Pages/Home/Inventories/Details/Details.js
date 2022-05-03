

import React, { useEffect, useState } from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Detail from '../Detail/Detail';

const Details = () => {
    
    const { detailsId } = useParams({});
    const [items, setItems] = useState([]);
    // const [details, setDetails] = useState([]);
    // const {name} = details;


    useEffect(() => {
       
        const url = `http://localhost:3000/allinventory/${detailsId}`;
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div>
            <h1>Invetory Details{detailsId}</h1>
            {/* <h1>Invetory Details{items.name}</h1> */}
            {/* <h1>Invetory Details{name}</h1> */}


            <div >
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Quantity : 100</ListGroupItem>
                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
                <Card.Body>
                   <Button>Delivered</Button>
                </Card.Body>
            </Card>
            </div>

            {/* {

                details.map(detail=><Detail
                key={detail.id}
                detail={detail}
                
                ></Detail>)
            } */}
        </div>
    );
};

export default Details;