import { useEffect, useState } from "react";
import app_config from "../config";
import Swal from "sweetalert2";
import { Box, Button, Card, CardContent, Modal } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { Formik } from "formik";

const Managevlog = () => {
  const [vlogArray, setVlogArray] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const url = app_config.api_url;
  const [vlogForm, setVlogForm] = useState({});

  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const fetchVlogs = () => {
    fetch(url + "/vlog/getbyuser/" + currentUser._id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setVlogArray(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchVlogs();
  }, []);

  const deleteVlog = (id) => {
    fetch(url + "/vlog/delete/" + id, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: "Vlog Deleted Successfully.",
        }).then(() => {
          fetchVlogs();
        });
      });
  };

  const truncate = (str) => {
    return str.length > 20 ? str.substring(0, 20) + "..." : str;
  };

  const updateVlog = (formdata) => {
    console.log(formdata);
    setVlogForm(formdata);
    setShowUpdateModal(true);
  };

  const displayVlogs = () => {
    if (!loading) {
      return vlogArray.map((vlog) => (
        <tr>
          <td>{vlog.title}</td>
          <td>{vlog.category}</td>
          <td>{truncate(vlog.description)}</td>
          <td>{vlog.created}</td>
          <td>
            <Button
              onClick={(e) => deleteVlog(vlog._id)}
              color="error"
              variant="contained"
            >
              <Delete />
            </Button>
          </td>
          <td>
            <Button
              onClick={(e) => updateVlog(vlog)}
              color="primary"
              variant="contained"
            >
              <Edit />
            </Button>
          </td>
        </tr>
      ));
    }
  };

  const vlogSubmit = (formdata) => {
    console.log(formdata);
    fetch(url + "/vlog/update/" + formdata._id, {
      method: "PUT",
      body: JSON.stringify(formdata),
      headers: {
        "Content-type": "application/json",
      },
    }).then((res) => {
      console.log(res.status);
      fetchVlogs();
    });
  };

  const updateForm = () => {
    if (showUpdateModal) {
      return (
        <Card>
          <CardContent>
            <h3>Update Your Vlog</h3>
            <hr />
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
                    list="cate"
                  />
                  <datalist id="cate">
                    {[
                      "Beauty",
                      "Travel",
                      "Gaming",
                      "Technology",
                      "Health & Fitness",
                      "Cooking",
                      "Lifestyle",
                    ].map((op) => (
                      <option value={op} />
                    ))}
                  </datalist>

                  <label className="mt-3">Description</label>
                  <textarea
                    placeholder="write vlog description here..."
                    className="form-control"
                    id="description"
                    value={values.description}
                    onChange={handleChange}
                    rows="5"
                  />

                  {/* <label>Upload Thumbnail</label>
                  <input
                    type="file"
                    className="form-control"
                    onChange={uploadThumbnail}
                  /> */}

                  <Button
                    type="submit"
                    className="w-100 mt-5"
                    variant="contained"
                    color="secondary"
                  >
                    Update Vlog
                  </Button>
                </form>
              )}
            </Formik>
          </CardContent>
        </Card>
      );
    }
  };

  return (
    <div className="container">
      <h1 className="text-center">Manage your Vlogs</h1>
      <hr />
      <table className="table table-light mt-5">
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Description</th>
            <th>Uploaded on</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>{displayVlogs()}</tbody>
      </table>
      {updateForm()}
    </div>
  );
};

export default Managevlog;
