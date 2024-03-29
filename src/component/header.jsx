import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./searchBar";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <>
      {user && (
        <>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo03"
                aria-controls="navbarTogglerDemo03"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse navbarContent"
                id="navbarTogglerDemo03"
              >
                <ul className="navbar-nav mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link" to="productList">
                      ProductList
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="profile">
                      Profile
                    </Link>
                  </li>
                </ul>

                <>
                  <SearchBar />
                </>

                <div className="navbar-nav ">
                  {user ? (
                    <p className="text-danger  mb-2 text-bold-2">
                      {user.toUpperCase()}
                    </p>
                  ) : (
                    <button className="btn btn-primary">Login</button>
                  )}
                </div>
              </div>
            </div>
          </nav>
        </>
      )}
    </>
  );
};
export default Header;
