import React, { Component } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false,
    };
  }

  toggleDarkMode = () => {
    this.setState(prevState => {
      const newDarkMode = !prevState.darkMode;
      document.body.classList.toggle('dark-mode', newDarkMode);
      return { darkMode: newDarkMode };
    });
  };

  render() {
    const { darkMode } = this.state;

    return (
      <nav className={`navbar navbar-expand-lg shadow-sm fixed-top ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light custom-bg'}`}>
        <div className="container">
          {/* Logo */}
          <a className="navbar-brand fw-bold" href="#">
            <img src="logo.png" alt="SoftSell" width="30" className="me-2" />
            <span className="fw-bold fs-5">SoftSell</span>
          </a>

          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu */}
          <div className="collapse navbar-collapse mobile-menu" id="navbarNav">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link" href="#how-it-works">How It Works</a></li>
              <li className="nav-item"><a className="nav-link" href="#why-us">Why Us</a></li>
              <li className="nav-item"><a className="nav-link" href="#testimonials">Testimonials</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>

            {/* Right-Side Controls */}
            <div className="d-flex align-items-center gap-2">
              <button
                className={`btn btn-sm ${darkMode ? 'btn-warning' : 'btn-outline-secondary'}`}
                onClick={this.toggleDarkMode}
                title="Toggle dark mode"
              >
                {darkMode ? '☀️ Light' : '🌙 Dark'}
              </button>


              {/* Auth Buttons */}
            <div className="d-flex gap-2 mt-2 mt-lg-0">
              <a href="#login" className="btn btn-outline-primary btn-sm">Login</a>
              <a href="#signup" className="btn btn-primary btn-sm">Sign Up</a>
            </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
