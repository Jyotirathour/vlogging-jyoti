import { Formik } from "formik";
import { Button, Card, CardContent, Container, TextField } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

import "./login.css";
import app_config from "../config";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const url = app_config.api_url;
  const navigate = useNavigate();

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
            navigate("/addvlog");
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
        sessionStorage.setItem("user", JSON.stringify(data));
      });
  };

  return (
    <div style={{ background: "#ccc" }}>
      <Container
        maxWidth="xs"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
      >
        <Card>
          <CardContent>
            <p className="text-center h3 mb-5 mt-5">Login Here</p>

            <Formik initialValues={loginForm} onSubmit={LoginSubmit}>
              {({ values, handleSubmit, handleChange }) => (
                <form onSubmit={handleSubmit}>
                  <TextField
                    color="secondary"
                    label="Email"
                    type="email"
                    variant="filled"
                    className="w-100 mb-4"
                    helperText="Enter Your Email ID"
                    id="email"
                    onChange={handleChange}
                    value={values.email}
                  />
                  <TextField
                    label="Password"
                    type="password"
                    variant="filled"
                    className="w-100 mb-4"
                    id="password"
                    onChange={handleChange}
                    value={values.password}
                  />
                  <Button
                    type="submit"
                    sx={{ background: "blue" }}
                    className="mt-5 w-100"
                    variant="contained"
                  >
                    Login Now
                  </Button>
                </form>
              )}
            </Formik>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Login;
