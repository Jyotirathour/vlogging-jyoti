import { Formik } from "formik";
import { Button, Card, CardContent } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

import "./signup.css";
import app_config from "../config";
import Swal from "sweetalert2";
import { useState } from "react";

const AddVlog = () => {
  const url = app_config.api_url;

  // Two important thing to use with Formik
  // 1. formObject
  const vlogForm = {
    title: "",
    file: "",
    thumbnail: "",
    category: "",
    author: JSON.parse(sessionStorage.getItem("user")),
  };

  const [thumbnail, setThumbnail] = useState("");
  const [video, setVideo] = useState("");

  // 2. submit callback function
  const vlogSubmit = (formdata) => {
    formdata.file = video;
    formdata.thumbnail = thumbnail;

    console.log(formdata);

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
        });
      });
  };

  const uploadThumbnail = (e) => {
    let formdata = new FormData();
    let file = e.target.files[0];
    setThumbnail(file.name);
    formdata.append("file", file);

    fetch(url + "/util/uploadfile", { method: "POST", body: formdata })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const uploadVideo = (e) => {
    let formdata = new FormData();
    let file = e.target.files[0];
    setVideo(file.name);
    formdata.append("file", file);

    fetch(url + "/util/uploadfile", { method: "POST", body: formdata })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="signup-bg">
      <h1 className="text-center">Signup Here</h1>
      <hr />
      <div className="col-md-4 mx-auto">
        <Card>
          <CardContent>
            <Formik initialValues={vlogForm} onSubmit={vlogSubmit}>
              {({ values, handleSubmit, handleChange }) => (
                <form onSubmit={handleSubmit}>
                  <label className="mt-3">Title</label>
                  <input
                    placeholder="title"
                    className="form-control"
                    id="title"
                    value={values.title}
                    onChange={handleChange}
                  />

                  <label className="mt-3">Category</label>
                  <input
                    placeholder="category"
                    className="form-control"
                    id="category"
                    value={values.category}
                    onChange={handleChange}
                  />

                  <label>Upload Thumbnail</label>
                  <input
                    type="file"
                    className="form-control"
                    onChange={uploadThumbnail}
                  />

                  <label>Upload Video</label>
                  <input
                    type="file"
                    className="form-control"
                    onChange={uploadVideo}
                  />

                  <Button
                    type="submit"
                    className="w-100 mt-5"
                    variant="contained"
                    color="secondary"
                    startIcon={<GoogleIcon />}
                  >
                    Register to Continue
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

export default AddVlog;
