import { React,useEffect,useState } from "react";
import { useContext } from 'react'
import { myContext } from "./Login";
import { useParams } from "react-router-dom";
import axios from "axios";


function ProfileInfo() {
    const{username}=useParams();
  const{password}=useParams();
  console.log(username+ " " +password)
const[employee,setEmployee]=useState({addr:{}});
//const[error,setError]=useState(null);

function getData()
{
    axios.get(`http://localhost:9091/employee/loginCheck/${username}/${password}`)
    .then(response=>{
 setEmployee(response.data)
 console.log(response.data) 
}
 )
.catch(error=>{
 // setError(error.message);
 // console.log(error)
})   
}
console.log(employee)
useEffect(getData,[])
// if(!employee && !error){
// return <div>Loading....</div>
// }
// if(error){
//   return <div>Error: {error}</div>
// }
  return (
    <div>
    <h1>Employee List</h1>
    <table border={1}>
        <thead>
            <tr>
            <th>ID</th>
            <th>Fullname</th>
            <th>Contact</th>
            <th>Salary</th>
            <th>Username</th>
            <th>Password</th>
            <th>Local Address</th>
            <th>Permanent Address</th>
            <th>Pincode</th>
            <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                    <td>{employee.eid}</td>
                    <td>{employee.ename}</td>
                    <td>{employee.contact}</td>
                    <td>{employee.salary}</td>
                    <td>{employee.username}</td>
                    <td>{employee.password}</td>
                    <td>{employee.addr.localAddr}</td>
                    <td>{employee.addr.permanentAddr}</td>
                    <td>{employee.addr.pincode}</td> 
                    </tr> 
                   </tbody>
    </table>
    </div>
      )
    }
export default ProfileInfo