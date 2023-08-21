import React from 'react'
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();
  return (
    <nav
      class="navbar navbar-expand-lg navbar-dark "
      style={{
        backgroundImage:
          "https://img.freepik.com/free-vector/realistic-clouds-abstract-composition-with-overcast-gray-clouds-sky_1284-33932.jpg",
      }}
    >
      <a class="navbar-brand" href="#">
        Weather
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li
            className={`nav-item ${location.pathname === "/" ? "active" : ""}`}
          >
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li
            className={`nav-item ${
              location.pathname === "/forecast" ? "active" : ""
            }`}
          >
            <Link className="nav-link" to="/forecast">
              Forecast
            </Link>
          </li>
          <li
            className={`nav-item ${
              location.pathname === "/current" ? "active" : ""
            }`}
          >
            <Link className="nav-link" to="/current">
              Current Location
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header
