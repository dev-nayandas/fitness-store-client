import React from 'react';
import { Table } from 'react-bootstrap';

const Blogs = () => {
    return (

<div>
    <h1 className='mt-5'> Different Between Javascript and Node.js</h1>
<Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Sl No.</th>
      <th>Javascript</th>
      <th>Node Js</th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
     
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      
    </tr>
    
  </tbody>
</Table>

</div>
    
    );
};

export default Blogs;