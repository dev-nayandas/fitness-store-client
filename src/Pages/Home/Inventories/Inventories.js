import React, { useEffect, useState } from 'react';
import Inventory from './Inventory/Inventory'

const Inventories = () => {
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
                inventories.slice(0,6).map(inventory=> <Inventory 
                key= {inventories.id}
                inventory = {inventory}
                
                ></Inventory>)
            }
        </div>
    );
};

export default Inventories;