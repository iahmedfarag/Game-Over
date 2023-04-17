import React from "react";
import picLogo from "../../assets/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context.jsx";

const Navbar = () => {
  const navigate = useNavigate();
  const { isLogin, setIsLogin } = useGlobalContext();
  const logOut = () => {
    localStorage.removeItem("userToken");
    setIsLogin(false);
    navigate("/login");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light fixed-top">
        <div className="container d-flex justify-content-between">
          <Link to="home" className="d-flex align-items-center ">
            <img src={picLogo} className="logoPic" />
            <p className="navbar-brand text-white d-block p-0 m-0">Game over</p>
          </Link>

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

          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarSupportedContent"
          >
            {/*  */}

            <ul className="d-flex my-3 flex-lg-row flex-md-column">
              {isLogin ? (
                <>
                  <NavLink to="home" className="py-2 text-muted specialNav">
                    Home
                  </NavLink>

                  <NavLink to="all" className="py-2 text-muted  specialNav">
                    All
                  </NavLink>

                  <li className="py-2  text-muted specialNav nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Platform
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="/Platform/pc">
                          pc
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/Platform/browser">
                          browser
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="py-2 text-muted specialNav nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      sort-by
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/sort-by/release-date"
                        >
                          release-date
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/sort-by/popularity"
                        >
                          popularity
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/sort-by/alphabetical"
                        >
                          alphabetical
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/sort-by/relevance">
                          relevance
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="py-2  text-muted specialNav nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      categories
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="/category/racing">
                          Racing
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/category/sports">
                          Sports
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/category/social">
                          social
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/category/shooter">
                          shooter
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/category/open-world"
                        >
                          open-world
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/category/zombie">
                          zombie
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/category/fantasy">
                          fantasy
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/category/action-rpg"
                        >
                          action-rpg
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/category/action">
                          action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/category/flight">
                          flight
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="#">
                          battle-royal
                        </Link>
                      </li>
                    </ul>
                  </li>
                </>
              ) : (
                ""
              )}
            </ul>

            {/*  */}

            {isLogin ? (
              <button className="btn joinBtn" onClick={logOut}>
                Logout
              </button>
            ) : (
              <div className="d-flex">
                <Link to="logIn" className="btn loginBtn  mx-3  ">
                  Login
                </Link>
                <Link to="joinFree" className="joinBtn py-2 px-3">
                  Join Free
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
