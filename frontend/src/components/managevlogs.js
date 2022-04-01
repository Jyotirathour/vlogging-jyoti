import { useEffect, useState } from "react";
import app_config from "../config";
import Swal from "sweetalert2";
import { Button } from "@mui/material";

const Managevlog = () => {
  const [vlogArray, setVlogArray] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const url = app_config.api_url;

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

  const displayVlogs = () => {
    if (!loading) {
      return vlogArray.map((vlog) => (
        <tr>
          <td>{vlog.title}</td>
          <td>{vlog.category}</td>
          <td>{vlog.description}</td>
          <td>{vlog.created}</td>
          <td>
            <Button
              onClick={(e) => deleteVlog(vlog._id)}
              color="error"
              variant="contained"
            >
              <i class="fas fa-trash-alt"></i>
            </Button>
          </td>
        </tr>
      ));
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
          </tr>
        </thead>
        <tbody>{displayVlogs()}</tbody>
      </table>
    </div>
  );
};
export default Managevlog;
