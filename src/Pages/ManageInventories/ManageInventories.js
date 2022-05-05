import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ManageInventories = () => {
    return (
        <div className='mt-5'>
            <Link style={{backgroundColor:"#452e06"}} className='text-decoration-none text-white p-2' to='/allinventory'>Manage Inventories</Link>
        </div>
    );
};

export default ManageInventories;