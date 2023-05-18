import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
    <div className="container">
      <nav className='navbar navbar-expand-lg bg-warning'>
        <div className=' navbar navbar-brand text-Succes'><Link to={"/"}> Todo Application</Link></div>
        <div className="ml-auto">
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link to={"./Login"}  className='nav-link' >Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>

    </div>
  )
}

export default Navbar