import { createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Header from "./components/header2";
import Home from "./components/home";
import Login from "./components/login";
import Signup from "./components/signup";
import AddVlog from "./components/addVlog";
import ListVlogs from "./components/listVlogs";
import ViewVlog from "./components/viewVlog";
import Managevlog from "./components/managevlogs";
import UserAuthenticator from "./authenticator";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  const myCustomTheme = createTheme({
    palette: {
      mode: darkTheme ? "dark" : "light",
      secondary: {
        main: "#c76000",
      },
    },
  });

  return (
    <ThemeProvider theme={myCustomTheme}>
      <BrowserRouter>
        <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />

        <Routes>
          <Route element={<Home />} path="/home" />
          <Route element={<Login />} path="/login" />
          <Route element={<Signup />} path="/signup" />

          <Route
            element={
              <UserAuthenticator loginRoute={"/login"}>
                <AddVlog />
              </UserAuthenticator>
            }
            path="/addvlog"
          />
          <Route element={<ListVlogs />} path="/list" />
          <Route element={<ViewVlog />} path="/view/:id" />
          <Route
            element={
              <UserAuthenticator loginRoute={"/login"}>
                <Managevlog />
              </UserAuthenticator>
            }
            path="/managevlog"
          />
          <Route path="/" element={<Navigate replace to="/home" />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
