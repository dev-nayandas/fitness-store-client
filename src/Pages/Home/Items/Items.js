import React from 'react';
import { Table } from 'react-bootstrap';


// Item highlight here

const Items = () => {
    return (
        <div className='mx-auto mt-5 mb-5' style={{height:'300px', width:'800px'}}>
            <h2>Most popular Items that we have now!</h2>
            <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Sl No</th>
      <th>Eqipment's Name</th>
      <th>Brand</th>
      <th>Qunatity</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Treadmil</td>
      <td>Life Fitness</td>
      <td>256 Pcs</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Elliptical Machine</td>
      <td>Skybex</td>
      <td>452 Pcs</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Indoor Exercise Spin Bike</td>
      <td>Star Trac</td>
      <td>273 Pcs</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Mini Exercise Bike</td>
      <td>Stair Master</td>
      <td>456 Pcs</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Rowing Machinergery</td>
      <td>Hamer Strength</td>
      <td>159 Pcs</td>
    </tr>
    
  </tbody>
</Table>
        </div>
    );
};

export default Items;