import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <header>
      <nav className="navbar fixed-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <a className="navbar-brand mx-auto" href="/">
            Lifted Out Trash™
          </a>

          <div
            className="offcanvas offcanvas-start text-bg-dark"
            tabIndex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                Lifted Out Trash™
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <div className="dropdowns-box">
                  <li className="nav-item dropdown">
                    <button
                      className="btn btn-dark dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Men
                    </button>
                    <ul className="dropdown-menu dropdown-menu-dark">
                      <li>
                        <a className="dropdown-item" href="#remeras">
                          Remeras
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#ziphoodies">
                          Zip-Hoodies
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#hoodies">
                          Hoodies
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#baggys">
                          Baggy Jeans
                        </a>
                      </li>
                    </ul>
                  </li>
                  
                  <li className="nav-item dropdown">
                    <button
                      className="btn btn-dark dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Woman
                    </button>
                    <ul className="dropdown-menu dropdown-menu-dark">
                      <li>
                        <a className="dropdown-item" href="#remeras">
                          Tops
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#ziphoodies">
                          Zip-Hoodies
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#hoodies">
                          Hoodies
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#baggys">
                          Baggy Jeans
                        </a>
                      </li>
                    </ul>
                  </li>
                </div>
              </ul>

              <form className="d-flex mt-3 searchbar" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn" type="submit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
          
          <form className="d-flex mt-3 searchbar-pc" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn" type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </button>
          </form>
          
          <CartWidget />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
