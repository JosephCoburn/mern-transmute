import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
let nav = props.user ?
  <nav className="navbar navbar-expand fadeInOne">
  <div className="mr-auto">
    <Link to="/" className="page-title navbar-brand fadeInOne">Transmute</Link>
  </div>
  <ul className="navbar-nav ml-auto">
    <li className="navbar-item">
      <Link to='' className='nav-link fadeInOne' onClick={props.handleLogout}>Logout</Link>
    </li>
  </ul>
  <ul className="navbar-nav">
    <li className="navbar-item">
      <div className="nav-link">|</div>
    </li>
  </ul>
  <ul className="navbar-nav">
    <li className="navbar-item">
      <Link to="/create" className="nav-link">Create</Link>
    </li>
  </ul>
  </nav>
:
  <nav className="navbar navbar-expand fadeInOne">
  <div className="mr-auto">
    <Link to="/" className="page-title navbar-brand fadeInOne">Transmute</Link>
  </div>
  <ul className="navbar-nav ml-auto">
    <li className="navbar-item">
      <Link to='/login' className='nav-link fadeInOne'>Login</Link>
    </li>
    <li className="navbar-item">
      <Link to='/signup' className='nav-link fadeInOne'>Signup</Link>
    </li>
  </ul>
  </nav>
  ;
return (
  <div>
    {nav}
  </div>
)};

export default Navbar;