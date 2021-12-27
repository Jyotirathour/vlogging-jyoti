import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import app_config from "../config";

const ViewVlog = () => {
  const { id } = useParams();
  const [vlogDetail, setVlogDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const url = app_config.api_url;

  const fetchVlogData = () => {
    fetch(url + "/vlog/getbyid/" + id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setVlogDetail(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchVlogData();
  }, []);

  const displayVlog = () => {
    if (!loading) {
      return (
        <video
          className="img-fluid"
          src={url + "/" + vlogDetail.file}
          controls
        ></video>
      );
    }
  };

  return (
    <div>
      <Container>{displayVlog()}</Container>
    </div>
  );
};

export default ViewVlog;