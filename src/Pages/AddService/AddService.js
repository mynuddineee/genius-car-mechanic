import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        console.log(data);

        axios.post('http://localhost:5000/services', data)

        .then (res => {
            if(res.data.insertedId){

                alert('added successfully');
                reset();
            }

            console.log(res);
        })
    }
    return (
        <div className ="">
            <h2>Add A Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder= "name" /><br/><br/>
                <textarea {...register("description")} placeholder= "description" /><br/><br/>
                <input type="number" {...register("price")} placeholder= "price" /><br/><br/>
                <input {...register("img")} placeholder= "your image" /><br/><br/>
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;