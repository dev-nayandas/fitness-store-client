import React from 'react';
import { Spinner } from 'react-bootstrap';
import Addiventory from '../../AddInventory/Addiventory';
import AllInventory from '../../AllInventory/AllInventory';
import ManageInventories from '../../ManageInventories/ManageInventories';
import Banner from '../Banner/Banner';
import Customer from '../Customer/Customer';
import Details from '../Inventories/Details/Details';
import Inventories from '../Inventories/Inventories';
import Inventory from '../Inventories/Inventory/Inventory';

import Items from '../Items/Items';

const Home = () => {
    if(Home === 0){
        <Spinner animation="border" variant="primary" />
    }
    return (
        <div>

            <Banner></Banner>
            <Inventories></Inventories>
            <ManageInventories></ManageInventories>
            <Customer></Customer>
            <Items></Items>
            
          
            

        </div>
    );
};

export default Home;