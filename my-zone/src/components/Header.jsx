import "./Header.css";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div
        className="container-fluid shadow p-3 mb-5 bg-body rounded pb-3 mt-2"
        style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}
      >
        <nav className="navbar navbar-expand-lg">
          <div className="container d-flex justify-content-between align-items-center">
            <div className="row">
              <div className="col d-flex justify-content-start justify-content-sm-center">
                <img
                  src="https://www.winzmedia.org/static/assets/img/winzone.png"
                  className="img-fluid"
                  style={{ width: "250px" }}
                  alt="Logo"
                />
              </div>
            </div>

            {/* Hamburger Menu */}
            <span
              className="d-sm-block d-md-none"
              onClick={toggleMenu}
              style={{ cursor: "pointer" }}
            >
              <RxHamburgerMenu size={30} />
            </span>

            <div
              className={`collapse navbar-collapse nav-elements ${
                isMenuOpen ? "show" : ""
              }`}
              id="navbarTogglerDemo01"
            >
              <ul className="navbar-nav ms-auto mb-2">
                <li className="nav-item">
                  <a
                    className="nav-link active text-dark nav-hover"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item me-4">
                  <a className="nav-link active text-dark" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item dropdown text-dark me-4">
                  <a
                    className="nav-link dropdown-toggle text-dark"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Products
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a className="dropdown-item text-dark" href="#">
                        Brief Description
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item text-dark" href="#">
                        Product Categories
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item text-dark" href="#">
                        Key Benefits
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item me-4">
                  <a className="nav-link active text-dark" href="#">
                    Contact
                  </a>
                </li>
                <li className="nav-item me-4">
                  <a className="nav-link active text-dark" href="#">
                    Login
                  </a>
                </li>
                <button className="btn btn-info rounded-pill signup-button px-5">
                  Sign Up
                </button>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
