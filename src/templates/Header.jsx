import React from 'react'
import { Link } from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'

function Header() 
{
  return (

    <div className='bg-dark p-2 d-flex justify-content-around'>
      <Link className='btn btn-light' to='home'>Home</Link>
      <Link className='btn btn-light' to='login'>Login</Link>
      <Link className='btn btn-light' to='register'>Register</Link>
      <Link className='btn btn-light' to='view'>ViewData</Link>
  


     </div>
  )
}

export default Header