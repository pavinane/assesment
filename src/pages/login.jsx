// LoginPage.js
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../action/userAction";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // Assuming authentication logic here; set user to Redux state on successful login
    dispatch(setUser(data.username));
    navigate("/productList");
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center  flex-column"
      style={{ minHeight: "100vh" }}
    >
      <div className="p-4">
        <h1 className="text-warning text-bold">LoginPage</h1>
      </div>
      {/* create login form using username and password inputs */}
      <div className="card bg-secondary p-4 w-50 m-auto">
        <form className="col g-3 w-50 m-auto" onSubmit={handleSubmit(onSubmit)}>
          <div className="d-flex flex-column pb-4">
            <label for="inputUser" className="form-label text-light">
              Username:
            </label>
            <input
              id="inputUser"
              className="form-text rounded-3 p-2"
              aria-describedby="userBlock"
              {...register("username", { required: true })}
            />

            <div id="userBlock" className="form-text text-danger">
              {errors.username && <span>UserName is required</span>}
            </div>
          </div>
          <div className="d-flex flex-column pb-4">
            <label for="inputPassword5" className="form-label text-light">
              Password:
            </label>
            <input
              {...register("password", { required: true })}
              id="inputPassword5"
              className="form-text rounded-3 p-2"
              type="password"
              aria-describedby="passwordHelpBlock"
            />
            <div id="passwordHelpBlock" className="form-text text-danger">
              {errors.password && <span>Password is required</span>}
            </div>
          </div>
          <div className="col-auto mt-4">
            <button type="submit" className="btn btn-info ">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
