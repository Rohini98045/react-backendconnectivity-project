import axios from "axios";
import { createContext, useState } from 'react'
import {useForm} from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

export const myContext=createContext()


function Login(){



    const{register,handleSubmit,reset,setValue,formState:{errors}} =useForm();
    
    const[employees,setEmployee]=useState({})

    const navigate = useNavigate();

    function getData(data)
    {
        console.log(data)
        // axios.get(`http://localhost:9091/employee/loginCheck/${data.username}/${data.password}`).
        // then(response=>{
        //  setEmployee(response.data)
        // console.log(response.data)
        navigate(`/profile/${data.username}/${data.password}`);
    //     }
    // )
    // .catch(error=>console.log(error))
    }
   
 

return (
<div>
<form onSubmit={handleSubmit(getData)}>
    <div>
       <label className='fs-4 form-label'>Enter Username:-</label>
       <input type='text' className='form-control' {...register("username")}/>
       </div>
       <div>
       <label className='fs-4 form-label'>Enter Password:-</label>
       <input type='text' className='form-control' {...register("password")}/>
       </div>
       <button type="submit" className='w-25 btn btn-success fs-4 mt-2'>Submit</button>
       </form>
       <div>
       &nbsp;
          <myContext.Provider value={employees}></myContext.Provider>    
      </div>
       </div>
       
)
}
export default Login;