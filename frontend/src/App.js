import { createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import EventHandling from "./components/eventhandling";
import Header from "./components/header";
import Home from "./components/home";
import Login from "./components/login";
import ManageUsers from "./components/manageUsers";
import Signup from "./components/signup";

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
          <Route element={<EventHandling />} path="/event" />
          <Route element={<Signup />} path="/signup" />
          <Route element={<ManageUsers />} path="/manageusers" />

          {/* Redirecting from / to /home */}
          <Route path="/" element={<Navigate replace to="/home" />} />
        </Routes>

        {/* Invalid Way for routing in SPA */}
        {/* <a href="/login">Login</a> */}

        {/* For navigating to component routes without page refresh */}
        {/* <Link to="/login">Go to Login</Link>
        <Link to="/home">Go to Home</Link> */}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
