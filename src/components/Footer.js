import React from 'react'
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#3e4551', color: 'white', padding: '20px 0' }}>
      <div style={{ textAlign: 'center' }}>
        <p>&copy; 2024 Your Website Name. All rights reserved.</p>
        <p>
          Developed with <span style={{ color: '#e25555' }}>&hearts;</span> by Your Name
        </p>
        <li class="nav-item d-inline" style={{marginRight:'10px'}}>
        <Link class="nav-link active d-inline" to="/">Home</Link>
      </li>
     <li class="nav-item d-inline" style={{marginRight:'10px'}}>
        <Link class="nav-link d-inline" to="/About">About</Link>
      </li>
      <li class="nav-item d-inline" style={{marginRight:'10px'}}>
        <Link class="nav-link d-inline" to="/Contact">Contact</Link>
      </li>
      </div>
    </footer>
  )
}
