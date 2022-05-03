import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ManageInventories = () => {
    return (
        <div className='mt-3'>
            <Link className='text-decoration-none bg-info p-2' to='/allinventory'>Manage Inventories</Link>
        </div>
    );
};

export default ManageInventories;