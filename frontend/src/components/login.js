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
        sessionStorage.setItem("user", JSON.stringify(data));
      });
  };

  return (
    <section class="login py-5 bg-light">
          <div class="container">
              <div class="row g-0">
                  <div class="col-lg-3">
                      <img src={"login.jpg"} />
                  </div>
                  <div class="col-lg-7 text-center py-5">
                    <h1>Log-In</h1>

                    <form>

                      <div class="form-row py-3 pt-5">
                        <div class="offset-1 col-lg-10">
                        <label>Username</label>
                        <input type="text" class="inp" placeholder="Username"/>
                        </div>
                      </div>

                      <div class="form-row py-3">
                        <div class="offset-1 col-lg-10">
                        <label>Password</label>
                          <input type="password" class="inp" placeholder="Password"/>
                        </div>
                      </div>
                     
                      <div class="form-row py-3">
                        <div class="offset-1 col-lg-10">
                        <button class="btn1">Signup</button>
                        </div>
                      </div>
                      <p>Don't have an account?<a href="./signup.html"target = "blank"> Signup Now</a></p>
                     


                    </form>
                  </div>
              </div>
          </div>
      </section>
   
  );
};

export default Login;
