import { useFormik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import { useGlobalContext } from "../../context.jsx";

const JoinFree = () => {
  const navigate = useNavigate();
  const { setIsLoading, isLoading } = useGlobalContext();
  const [errorMsg, setErrorMsg] = useState("");

  const HandleRegister = async (values) => {
    setIsLoading(true);
    try {
      let { data } = await axios.post(
        "https://route-ecommerce.onrender.com/api/v1/auth/signup",
        values
      );
      setIsLoading(false);
      navigate("/login");
    } catch (error) {
      setIsLoading(false);
      setErrorMsg(error.response.data.message);
      console.log(error);
    }
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("name is required")
      .min(3, "minLength is 3")
      .max(10, "maxLength is 10"),
    email: Yup.string().required("email is required").email("email is invalid"),
    password: Yup.string()
      .required("password is required")
      .matches(
        /^[A-Z][a-z0-9]{5,10}$/,
        "password mush start with uppercase letters.."
      ),
    rePassword: Yup.string()
      .required("repassword is required")
      .oneOf([Yup.ref("password")], "password and repassword doesn't matched"),
    phone: Yup.string()
      .required("phone is required")
      .matches(/^01[0125][0-9]{8}$/, "phone inavlid"),
  });

  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "01069858429",
    },
    validationSchema,
    onSubmit: HandleRegister,
  });

  return (
    <>
      <div className="container loginSec py-5 ">
        <div className="row bg-light login-form">
          <div className="col-md-6 m-0 p-0 login-img">
            <div className="imgBack"></div>
          </div>

          <div className="col-md-6 col-sm-12  p-4 d-flex flex-column align-items-center login-info">
            <h1 className="h4 text-white py-2">Create My Account!</h1>
            {errorMsg ? (
              <div className="alert alert-danger">{errorMsg}</div>
            ) : (
              ""
            )}
            <form
              className="joinSec d-flex flex-column  text-center w-100"
              onSubmit={formik.handleSubmit}
            >
              <input
                className="form-control text-white bg-dark"
                type="text"
                placeholder="Name"
                name="name"
                id="name"
                value={formik.values.name}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.errors.name && formik.touched.name ? (
                <span className="alert alert-danger">{formik.errors.name}</span>
              ) : null}
              <input
                className="w-100 form-control  my-1 text-white bg-dark"
                type="email"
                placeholder="Email"
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
                className="w-100 form-control my-1 text-white bg-dark"
                type="Password"
                placeholder="Password"
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
              <input
                className="w-100 form-control my-1 text-white bg-dark"
                type="Password"
                placeholder="Re Password"
                name="rePassword"
                id="rePassword"
                value={formik.values.rePassword}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.errors.rePassword && formik.touched.rePassword ? (
                <span className="alert alert-danger">
                  {formik.errors.rePassword}
                </span>
              ) : null}
              {isLoading ? (
                <button className="form-control  py-2 my-3 text-white loginBtForm w-100 ">
                  <div className="formLoading"></div>
                </button>
              ) : (
                <button
                  className="form-control  py-2 my-3 text-white loginBtForm w-100 "
                  type="submit"
                >
                  Create Account
                </button>
              )}
            </form>
            <div className=" h6 py-2 line text-muted fw-lighter text-center">
              This site is protected by reCAPTCHA and the Google Privacy Policy
              and Terms of <a className="cursor text-muted"> Service</a> apply.
            </div>
            <h2 className=" h6 py-1 text-muted fw-lighter">
              Already a member?
              <Link className="text-primary cursor" to="/logIn">
                Log In
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinFree;
