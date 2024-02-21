import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link,useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const handleLogOut = ()=>{
    localStorage.removeItem('authToken');
    navigate('/login')
      
  }
  return (
    
<nav class="navbar navbar-expand-sm bg-light navbar-light">
  <div class="container-fluid">
    <ul class="navbar-nav me-auto mb-2">
      <li class="nav-item">
        <Link class="nav-link active" to="/">Home</Link>
      </li>
     <li class="nav-item">
        <Link class="nav-link" to="/About">About</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/Contact">Contact</Link>
      </li>
      {/* to make sure our login and sign up logic work we will use auth token from local storage */}
      {(localStorage.getItem("authToken"))?
      <li class="nav-item">
      <Link class="nav-link" to="/">My Orders</Link>
    </li>:""}
</ul>
<div className='d-flex'>
{/* to make sure we apply logic for navbar  we separate the links from ul now when you use div by default it is not 
inline so we will add a bootsrap code */}
   {(!localStorage.getItem("authToken"))?
   <>
        <Link class="btn bg-green text-success mx-1" to="/Login">Login</Link>
      
        <Link class="btn bg-green text-success mx-1" to="/Signup">Signup</Link>
        </>
        :
        <div>
           <div className='btn bg-blue text-success mx-2'>My Cart</div>
           <div className='btn bg-blue text-danger mx-2' onClick={handleLogOut}>LogOut</div>
        </div>
}
</div>
  </div>
</nav>
  )
}
