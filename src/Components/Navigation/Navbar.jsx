import React from 'react';
import { FileEarmarkTextFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Import the custom CSS file

function NavBar() {
  return (
    <div className="navbar-container">
      <nav className="navbar navbar-expand-lg navbar-light p-0 m-0">
        <div className="container-fluid">
          <div className="navbar-brand">
            <div className="icon">
              <FileEarmarkTextFill />
            </div>
            <div>Resume Builder</div>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link active"
                >
                  Resume Templates
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/myresume"
                  className="nav-link active"
                >
                  My Resume
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-link active"
                >
                  About Us
                </Link>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
