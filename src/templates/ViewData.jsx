import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom';


function ViewData() {
    const[employees,setEmployee]=useState([])

function getData(){
    axios.get(`http://localhost:9091/employee/getAllData`).then(response=>setEmployee(response.data))
}
function deleteData(eid){
    axios.delete(`http://localhost:9091/employee/deletedata/${eid}`)
    .then(response => {
        getData()
        alert('Employee deleted Successfully');
    })
    .catch(error =>{
     console.error('error in deleting employee',error);
     alert('Failed to delete');
    });  
}
  return (
    <div>
<h1>Employee List</h1>
<button onClick={getData}>get Data</button>
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
        <th>image</th>
        <th>Action</th>
        </tr>
    </thead>
    <tbody>
            {employees.map((s,i)=>(
              <tr key={i}>
                <td>{s.eid}</td>
                <td>{s.ename}</td>
                <td>{s.contact}</td>
                <td>{s.salary}</td>
                <td>{s.username}</td>
                <td>{s.password}</td>
                <td>{s.addr.localAddr}</td>
                <td>{s.addr.permanentAddr}</td>
                <td>{s.addr.pincode}</td>
                <td><img src={'data:image/jpeg;base64,'+s.image} height={50} width={50}/></td>
                <td>
                <button onClick={() => deleteData(s.eid)}>Delete</button>
                &nbsp;
                        <Link className='btn btn-primary' to={`/edit/${s.eid}`}> 
                        <i className="bi bi-pen-fill"></i>
                        </Link>
                </td>
              </tr>  
            ))}
        </tbody>
</table>
</div>
  )
}

export default ViewData