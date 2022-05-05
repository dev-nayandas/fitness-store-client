import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Addiventory from '../AddInventory/Addiventory';
import Invantory from '../AllInventory/Invantory/Invantory';

const AllInventory = () => {
    const [inventories, setInventories] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setInventories(data))
    }, [])
    return (
        <div className='container'>
            <h1 style={{marginTop:"40px"}}> Inventories</h1>
            <div className='row gx-2'>
                {
                    inventories.map(inventory => <Invantory
                        key={inventory.id}
                        inventory={inventory}

                    ></Invantory>)
                }
            </div>
           
            <Addiventory></Addiventory>
        </div>
    );
};

export default AllInventory;