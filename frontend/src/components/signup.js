import { Formik } from "formik";
import { Button, Card, CardContent } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { Link } from 'react-router-dom';

import "./signup.css";
import app_config from "../config";
import Swal from "sweetalert2";

const Signup = () => {
  const url = app_config.api_url;

  // Two important thing to use with Formik
  // 1. formObject
  const signupForm = {
    email: "",
    username: "",
    password: "",
  };

  // 2. submit callback function
  const SignupSubmit = (formdata) => {
    console.log(formdata);

    // three things are required to request
    // 1. address
    // 2. http request method
    // 3. data and its format

    const reqOpt = {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(url + "/user/add", reqOpt)
      .then((res) => {
        console.log(res.status);
        return res.json();
      })
      .then((data) => {
        console.log(data);

        Swal.fire({
          icon: "success",
          title: "Success",
          text: "You have registered successfully!",
        }).then(() => {
          window.location.replace("/login");
        });
      });
  };

  return (
    <div className="signup-bg">
     
      <div className="col-md-4 mx-auto">
        <Card className="mt-5">
          <CardContent>
          <h1 className="text-center">Signup Here</h1>
           <hr />
            <Formik initialValues={signupForm} onSubmit={SignupSubmit}>
              {({ values, handleSubmit, handleChange }) => (
                <form onSubmit={handleSubmit}>
                  <label className="mt-3">Email</label>
                  <input
                    placeholder="email"
                    className="form-control"
                    id="email"
                    value={values.email}
                    onChange={handleChange}
                  />

                  <label className="mt-3">Username</label>
                  <input
                    placeholder="username"
                    className="form-control"
                    id="username"
                    value={values.username}
                    onChange={handleChange}
                  />

                  <label className="mt-3">Password</label>
                  <input
                    type="password"
                    placeholder="password"
                    className="form-control"
                    id="password"
                    value={values.password}
                    onChange={handleChange}
                  />
                  <p><input type="checkbox"></input>I agree with <Link to='/'>Terms</Link>and<Link to='/'>Condition</Link></p>

                   <a href="login.js"target = "login.js"> Already have an account?</a>
                   
                  <Button
                    type="submit"
                    className="w-100 mt-5"
                    variant="contained"
                    color="secondary"
                  >
                    Register to Continue
                  </Button>
                  <hr/>
                  <Link to="/login">Lgin Now</Link>
                 
                </form>
              )}
            </Formik>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Signup;
