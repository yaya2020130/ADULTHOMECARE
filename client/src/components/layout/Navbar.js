import React from 'react';


export default () =>
  <>
    <nav>
      <div class="nav-wrapper">

        <a href="#" class="brand-logo"><h5
        tyle={{textAlign: "center"
        
        }}>DAYA App</h5></a>


        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/login"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Login 
            </a>
          </li>
          <li className="nav-item">
            <a
              to="/patient"
              className={window.location.pathname === "/patient" ? "nav-link active" : "nav-link"}
            >
              patient
            </a>
          </li>
          <li className="nav-item">
            <a
              to="/logbook"
              className={window.location.pathname === "/logbook" ? "nav-link active" : "nav-link"}
              
            >
              Logbook
            </a>
          </li>
        </ul>

      </div>
    </nav>
  </>


