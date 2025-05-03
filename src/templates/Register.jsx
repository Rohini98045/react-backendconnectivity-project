import React, { useState } from 'react';
import {useForm} from "react-hook-form";
import axios from 'axios';

function Register(){
const{register,handleSubmit,reset,setValue,formState:{errors}} =useForm();
      const [result, setResult] = useState('');

    //   function saveData(data){
    //     axios.post(`http://localhost:9091/employee/saveData`,data)
    //     .then(response => {
    //         alert('Employee Data save Successfully');
    //     })
    //     .catch(error =>{
    //      console.error('error in saving employee',error);
    //      alert('Failed to save');
    //     });  
    
    // }
    function onRegister(data){
      const employeeDetails={
      ename:data.ename,
      salary:data.salary,
      username:data.username,
      password:data.password,
      contact:data.contact,
      addr:{
        pincode:data.addr.pincode,
        localAddr:data.addr.localAddr,
        permanentAddr:data.addr.permanentAddr
        
      }
      }
      const formData=new FormData();
      formData.append("empjson",JSON.stringify(employeeDetails));
      formData.append("image",data.image[0]);

      console.log(data)
      axios.post("http://localhost:9091/employee/saveData",formData)
      .then(response=>console.log(response.data))
    }
      return (
    <div> 
         <form onSubmit={handleSubmit(onRegister)}>
      
         <div>
       <label className='fs-4 form-label'>Enter Name:-</label>
       <input type='text' className='form-control' {...register("ename")}/>
       </div>
       <div>
       <label className='fs-4 form-label'>Enter Mobile Number:-</label>
       <input type='text' className='form-control' {...register("contact")}/>
       </div>
       <div>
       <label className='fs-4 form-label'>Enter Salary:-</label>
       <input type='text' className='form-control' {...register("salary")}/>
       </div>
       <div>
       <label className='fs-4 form-label'>Enter Username:-</label>
       <input type='text' className='form-control' {...register("username")}/>
       </div>
       <div>
       <label className='fs-4 form-label'>Enter Password:-</label>
       <input type='text' className='form-control' {...register("password")}/>
       </div>
       <div>
       <label className='fs-4 form-label'>PinCode:-</label>
       <input type='text' className='form-control' {...register("addr.pincode")}/>
       </div>
       <div>
       <label className='fs-4 form-label'>Permanent Address:-</label>
       <input type='text' className='form-control' {...register("addr.permanentAddr")}/>
       </div> 
       <div>
       <label className='fs-4 form-label'>Local Address:-</label>
       <input type='text' className='form-control' {...register("addr.localAddr")}/>
       </div>
       <div>
       <label className='fs-4 form-label'>image</label>
       <input type='file' className='form-control' {...register("image")}/>
       </div>
       <button className='w-25 btn btn-success fs-4 mt-2'>Submit</button>

       </form>
       </div>
      )
    }
    export default Register