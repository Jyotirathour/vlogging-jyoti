import { Formik } from "formik";
import { Button, Card, CardContent } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

import "./login.css";
import app_config from "../config";
import Swal from "sweetalert2";

const Login = () => {
  const url = app_config.api_url;

  // Two important thing to use with Formik
  // 1. formObject
  const loginForm = {
    email: "",
    password: "",
  };

  // 2. submit callback function
  const LoginSubmit = (formdata) => {
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

    fetch(url + "/user/backendlogin", reqOpt)
      .then((res) => {
        console.log(res.status);
        if (res.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "You have loggdin successfully!",
          }).then(() => {
            window.location.replace("/addvlog");
          });
        } else if (res.status === 300) {
          Swal.fire({
            icon: "error",
            title: "Failed",
            text: "Email or password is incorrect!",
          });
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="login-bg">
      <div className="col-md-3 mx-auto">
        <Card className="mt-5">
          <CardContent>
            <h1 className="text-center">Signin Here</h1>
            <hr />
            <Formik initialValues={loginForm} onSubmit={LoginSubmit}>
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

                  <label className="mt-3">Password</label>
                  <input
                    type="password"
                    placeholder="password"
                    className="form-control"
                    id="password"
                    value={values.password}
                    onChange={handleChange}
                  />

                  <Button
                    type="submit"
                    className="w-100 mt-5"
                    variant="contained"
                    color="primary"
                  >
                    Login to Continue
                  </Button>
                </form>
              )}
            </Formik>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
