import React, { useState } from "react";
import pic from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useGlobalContext } from "../../context.jsx";
const Login = () => {
  const { setIsLogin, setIsLoading, isLoading } = useGlobalContext();
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");

  const HandleLogin = async (values) => {
    setIsLoading(true);
    try {
      let { data } = await axios.post(
        "https://route-ecommerce.onrender.com/api/v1/auth/signin",
        values
      );
      setIsLoading(false);
      localStorage.setItem("userToken", data.token);
      setIsLogin(true);
      navigate("/home");
    } catch (error) {
      setIsLoading(false);
      setErrorMsg(error.response.data.message);
    }
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("email is required").email("email is invalid"),
    password: Yup.string()
      .required("password is required")
      .matches(
        /^[A-Z][a-z0-9]{5,10}$/,
        "password mush start with uppercase letters.."
      ),
  });

  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    validationSchema,
    onSubmit: HandleLogin,
  });

  return (
    <>
      <div className="container py-5 loginSec">
        <div className="row bg-light login-form">
          <div className="col-md-6 m-0 p-0 login-img">
            <div className="imgBack"></div>
          </div>

          <div className="col-md-6 col-sm-12 py-5  d-flex flex-column align-items-center bg-dark login-info">
            <img src={pic} className="gamePic" />
            <h1 className="h4 text-muted">Log in to GameOver</h1>
            {errorMsg ? (
              <span className="alert alert-danger">{errorMsg}</span>
            ) : (
              ""
            )}
            <form
              className=" loginForm d-flex flex-column justify-content-center align-items-center text-center w-75"
              onSubmit={formik.handleSubmit}
            >
              <input
                className=" w-100 form-control"
                placeholder="Email"
                type="email"
                name="email"
                id="email"
                value={formik.values.email}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.errors.email && formik.touched.email ? (
                <span className="alert alert-danger">
                  {formik.errors.email}
                </span>
              ) : null}
              <input
                className="w-100 form-control my-2"
                placeholder="Password"
                type="password"
                name="password"
                id="password"
                value={formik.values.password}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.errors.password && formik.touched.password ? (
                <span className="alert alert-danger">
                  {formik.errors.password}
                </span>
              ) : null}

              {isLoading ? (
                <button className="form-control py-1 my-3 text-white loginBtForm w-100">
                  <div className="formLoading"></div>
                </button>
              ) : (
                <button
                  className="form-control py-1 my-3 text-white loginBtForm w-100"
                  type="submit"
                >
                  Login
                </button>
              )}
            </form>

            <h2 className=" h6 py-2  cursor text-primary fw-lighter ">
              Forgot Password?
            </h2>
            <h2 className=" h6 py-1 text-muted fw-lighter">
              Not a member yet?
              <Link className="text-primary cursor" to="/JoinFree">
                Create an Account
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
