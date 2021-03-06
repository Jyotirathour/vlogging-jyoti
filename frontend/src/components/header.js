import { Switch } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/home">
          VLOG
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/home"
                activeClassName="active"
                className="nav-link"
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/login"
                activeClassName="active"
                className="nav-link"
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/signup"
                activeClassName="active"
                className="nav-link"
              >
                Sign Up
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/addvlog"
                activeClassName="active"
                className="nav-link"
              >
                AddVlog
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/managevlog"
                activeClassName="active"
                className="nav-link"
              >
                Managevlog
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/video"
                activeClassName="active"
                className="nav-link"
              >
                Video
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/list" activeClassName="active" className="nav-link">
                List
              </NavLink>
            </li>

            <li className="nav-item">
              <Switch
                checked={props.darkTheme}
                onChange={(e, v) => {
                  props.setDarkTheme(v);
                }}
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
