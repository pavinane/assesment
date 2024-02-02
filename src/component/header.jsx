import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setSearchProduct } from "../action/userAction";

const Header = ({ searchName }) => {
  const user = useSelector((state) => state.user.user);

  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    // Assuming authentication logic here; set user to Redux state on successful login
    console.log(data, "datas");
    dispatch(setSearchProduct(data.searchName));
  };

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
                <form
                  className="d-flex"
                  role="search"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    {...register("searchName", { required: true })}
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>

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
