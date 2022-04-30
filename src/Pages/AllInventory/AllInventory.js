import React, { useEffect, useState } from 'react';
import Invantory from '../AllInventory/Invantory/Invantory';

const AllInventory = () => {
    const [inventories, setInventories] = useState([]);
    useEffect(() => {
        fetch('inventories.json')
            .then(res => res.json())
            .then(data => setInventories(data))
    }, [])
    return (
        <div>
            <h1> Inventories</h1>
            {
                inventories.map(inventory=> <Invantory 
                key= {inventories.id}
                inventory = {inventory}
                
                ></Invantory>)
            }
        </div>
    );
};

export default AllInventory;