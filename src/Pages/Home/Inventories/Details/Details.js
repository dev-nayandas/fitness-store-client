

import React, { useEffect, useState } from 'react';
import { Button, Card, Form, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ManageInventories from '../../../ManageInventories/ManageInventories';
import Detail from '../Detail/Detail';

const Details = () => {

    const { detailsId } = useParams({});
    const [items, setItems] = useState([]);
    // const [details, setDetails] = useState([]);
    // const {name} = details;


    useEffect(() => {

        const url = `https://polar-brook-99260.herokuapp.com/inventory/${detailsId}`;
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);



    return (
        <div >
            <h1>Inventory Details</h1>
            {/* <h1>Invetory Details{items.name}</h1> */}
            {/* <h1>Invetory Details{name}</h1> */}


            <div className='mt-5 mx-auto w-25 '>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={items.img} />
                    <Card.Body>
                        <Card.Title>{items.name}</Card.Title>
                        <Card.Text>
                            {items.description}

                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Id: {items._id}</ListGroupItem>
                        <ListGroupItem>Quantity: {items.quantity}</ListGroupItem>
                        <ListGroupItem> Price: {items.price}</ListGroupItem>
                        <ListGroupItem>Suplier Name : {items.suplierName}</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Button >Delivered</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className='mx-auto w-50 mt-5'>
                <>
                    <Form.Group className="mb-2">
                        <Form.Label>Restock the item</Form.Label>
                        <Form.Control placeholder="Enter Restock Quantity" />
                    </Form.Group>


                    <Button type="submit">Submit</Button>
                    <ManageInventories></ManageInventories>
                </>
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