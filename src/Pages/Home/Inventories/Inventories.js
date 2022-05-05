import React, { useEffect, useState } from 'react';
import Inventory from './Inventory/Inventory'

const Inventories = () => {
    const [inventories, setInventories] = useState([]);


    // data loaded here

    
    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setInventories(data))
    }, [])
    return (
        <div className='Container '>
            <h1 className='mt-5'> Inventories</h1>
          <div>
               <div className='row d-flex'>
           {
                inventories.slice(0,6).map(inventory=> <Inventory 
                key= {inventory._id}
                inventory = {inventory}
                
                ></Inventory>)
            }
           </div>
          </div>
        </div>
    );
};

export default Inventories;