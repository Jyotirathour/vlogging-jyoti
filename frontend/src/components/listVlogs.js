import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Paper,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import app_config from "../config";

const ListVLogs = () => {
  const url = app_config.api_url;

  const [vlogData, setVlogData] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const fetchVlogs = () => {
    fetch(url + "/vlog/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setVlogData(data);
        setLoading(false);
      });
  };

  const displayVlogs = () => {
    if (!loading) {
      return (
        <Grid container spacing={5}>
          {vlogData.map((vlog) => (
            <Grid item md={3}>
              <Card>
                <CardMedia
                  component="img"
                  image={url + "/" + vlog.thumbnail}
                  height="200"
                />
                <CardContent>
                  <h4>{vlog.title}</h4>
                  <p>{vlog.category}</p>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={(e) => navigate("/view/" + vlog._id)}
                  >
                    View full vlog
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      );
    }
  };

  const swiper = useRef(null);
  useEffect(() => {
    fetchVlogs();
  }, []);

  return (
    <Paper className="mb-5">
      <Container maxWidth="xl">
        <header style={{ height: "30rem", marginBottom: "5rem" }}></header>

        <Grid container justifyContent="space-between" className="mb-3">
          <Grid item>
            <h3 classNameName="subtitle">All Vlogs</h3>
          </Grid>

          <Grid item>
            <Button color="secondary" variant="contained">
              Show More
            </Button>
          </Grid>
        </Grid>
        {displayVlogs()}
      </Container>
    </Paper>
  );
};

export default ListVLogs;
