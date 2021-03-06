import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <div>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="/">FreshBlogs</Link>
          </div>
          <div class="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li ><Link to="/">Home</Link></li>
              <li ><Link to="/category">Cateogry</Link></li>
              <li ><Link to="/aboutus">About Us</Link></li>
              <li ><Link to="/contactus">Contact Us</Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right" id="logreg" >
              <li><Link to="/register"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
              <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
