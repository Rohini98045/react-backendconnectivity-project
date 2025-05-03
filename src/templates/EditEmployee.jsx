import {useForm} from "react-hook-form";
import axios from 'axios';
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import '../../node_modules/bootstrap-icons/font/bootstrap-icons.css'



function EditEmployee(){
const{eid}=useParams();
const{register,handleSubmit,reset,setValue} =useForm();
const [empimge, SetEmpImg] = useState();
const getEditData= ()=>{
    axios.get(`http://localhost:9091/employee/getData/${eid}`)
          .then(res=>{
              if(res.status===200) 
                {
                   for(let prop in res.data){
                     setValue(prop,res.data[prop])
                     SetEmpImg(res.data["image"])
                     console.log(prop);
                     console.log(res.data[prop])
                   }
                }   
            })
  }

 useEffect(getEditData ,[]) 
function updateEmployee(data){
   const employeeDetails={
  eid:data.eid,
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
  axios.put(`http://localhost:9091/employee/updateDataImage/${eid}`,formData)
  .then(response=>console.log(response.data))
}
      
      return (
        <div className='d-flex justify-content-center'>
        <div className='card bg-warning w-50 mt-2 p-3'>
             <h1 className='text-center fs-3'>Update Product Here</h1>
             <form onSubmit={handleSubmit(updateEmployee)}>
       <div>
       <label className='fs-4 form-label'>Enter id</label>
       <input type='text' className='form-control' {...register("eid")}/>
       </div>

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
       <label className='fs-4 form-label'>Enter Local Address:-</label>
       <input type='text' className='form-control' {...register("addr.localAddr")}/>
       </div>
       <div>
       <label className='fs-4 form-label'>Enter Permanent Address:-</label>
       <input type='text' className='form-control' {...register("addr.permanentAddr")}/>
       </div>
       <div>
       <label className='fs-4 form-label'>Enter Pincode:-</label>
       <input type='text' className='form-control' {...register("addr.pincode")}/>
       </div>
       <div>
       <label className='fs-4 form-label'>Image</label>
       <input type='file' className='form-control' {...register("image")}/>
       </div>
       <img src={'data:image/jpeg;base64,'+empimge} height={30} width={30}/><br></br>

       <button className='w-25 btn btn-success fs-4 mt-2'>Submit</button>

    </form>
    </div>
    </div>
)
    }
      export default EditEmployee;
    
