import { useState } from 'react'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Register from './templates/Register'
import Home from './templates/Home'
import Login from './templates/Login'
import Header from './templates/Header'
import ViewData from './templates/ViewData'
import EditEmployee from './templates/EditEmployee'
import ProfileInfo from './templates/ProfileInfo'

function App() {
  const [count, setCount] = useState(0)

  return (
     <div className='bg-info m-2 pb-5'>
    <h1 className='text-center text-primary..!'>Facility</h1>
    <div className='bg-secondary p-2 margin'></div>
    

     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='home' element={<Home/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='register' element={<Register/>}/>
      <Route path='view'    element={<ViewData/>}/>
      <Route path='edit/:eid' element={<EditEmployee/>} />
      <Route path='profile/:username/:password' element={<ProfileInfo/>} />
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
