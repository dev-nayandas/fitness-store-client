import React from 'react';
import { useForm } from "react-hook-form";

const Addiventory = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/inventory`;
        fetch(url, {
            method: "POST",
            headers: {
               'content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result)
        })
    };
    return (
        <div className='w-50 mx-auto mb-3'>
            <h2>Add new inventory</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
     
      <input type='text' className='mb-2' placeholder='photo url'  {...register("img")} />
      <input type='text' className='mb-2' placeholder='name'  {...register("name")} />
      <textarea type='text' className='mb-2' placeholder='description'  {...register("description")} />
      <input type='number' className='mb-2' placeholder='price'  {...register("price")} />
      <input type='number' className='mb-2' placeholder='quantity' {...register("quantity")} />
      <input type='text' className='mb-2' placeholder='suplierName'  {...register("suplierName")} />
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" value= 'Add Inventory' />
    </form>
        </div>
    );
};

export default Addiventory;