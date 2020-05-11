import React from 'react';
// import {Link} from "react-router-dom";

 class Navbar extends React.Component{
  render(){
    return(
<div>
<nav>
    <div class="nav-wrapper">
    
        <a href="#" class="brand-logo">WELCOME </a> 
     
     
      <ul className="navbar-nav">
          <li className="nav-item">
            <a
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              login page
            </a>
          </li>
          <li className="nav-item">
            <a
              to="/discover"
              className={window.location.pathname === "/discover" ? "nav-link active" : "nav-link"}
            >
             Detail page
            </a>
          </li>
          <li className="nav-item">
            <a
              to="/search"
              className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
            >
           Loog book
            </a>
          </li>
        </ul>
    
    </div>
  </nav>
</div>
    )

  }
}
  export default Navbar;