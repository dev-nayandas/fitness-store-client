import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Addiventory from '../AddInventory/Addiventory';
import Invantory from '../AllInventory/Invantory/Invantory';

const AllInventory = () => {
    const [inventories, setInventories] = useState([]);
    
    useEffect(() => {
        fetch('https://polar-brook-99260.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setInventories(data))
    }, [inventories, setInventories])
    return (
        <div className='container'>
            <h1 style={{marginTop:"40px"}}> Inventories</h1>
            <div className='row gx-2'>
                {
                    inventories.map(inventory => <Invantory
                        key={inventory._id}
                        inventory={inventory}

                    ></Invantory>)
                }
            </div>
           
            <Addiventory></Addiventory>
        </div>
    );
};

export default AllInventory;