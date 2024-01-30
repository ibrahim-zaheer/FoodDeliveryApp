import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
<nav class="navbar navbar-expand-sm bg-light navbar-light">
  <div class="container-fluid">
    <ul class="navbar-nav">
      <li class="nav-item">
        <Link class="nav-link active" to="/">Home</Link>
      </li>
     <li class="nav-item">
        <Link class="nav-link" to="/About">About</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/Contact">Contact</Link>
      </li>
      
      
    </ul>
  </div>
</nav>
  )
}
