import React, { useEffect, useState } from 'react';
import Inventory from './Inventory/Inventory'

const Inventories = () => {
    const [inventories, setInventories] = useState([]);


    // data loaded here

    
    useEffect(() => {
        fetch('inventories.json')
            .then(res => res.json())
            .then(data => setInventories(data))
    }, [])
    return (
        <div className='container'>
            <h1 className='mt-5'> Inventories</h1>
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