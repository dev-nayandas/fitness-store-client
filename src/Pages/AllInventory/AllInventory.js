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
        <div className='container'>
            <h1> Inventories</h1>
           <div className='row'>
           {
                inventories.map(inventory=> <Invantory 
                key= {inventories.id}
                inventory = {inventory}
                
                ></Invantory>)
            }
           </div>
        </div>
    );
};

export default AllInventory;