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
        <div className='container'>
            <h1> Inventories</h1>
           <div className='row'>
           {
                inventories.slice(0,6).map(inventory=> <Inventory 
                key= {inventory.id}
                inventory = {inventory}
                
                ></Inventory>)
            }
           </div>
        </div>
    );
};

export default Inventories;