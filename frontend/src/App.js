import { createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Home from "./components/home";
import Login from "./components/login";
import Signup from "./components/signup";
import AddVlog from "./components/addVlog";
import ListVlogs from "./components/listVlogs";

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
          <Route element={<AddVlog />} path="/addvlog" />
          <Route element={<ListVlogs />} path="/list" />
          <Route path="/" element={<Navigate replace to="/home" />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
