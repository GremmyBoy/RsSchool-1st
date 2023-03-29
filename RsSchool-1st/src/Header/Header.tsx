import { NavLink, Route, Routes } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <div className="Header-container">
        <div>
          Current page:
          <h2>
            <Routes>
              <Route path="/" element={"Main"} />
              <Route path="/main" element={"Main"} />
              <Route path="/about" element={"About"} />
              <Route path="/form" element={"Form"} />
              <Route path="*" element={"Error page"} />
            </Routes>
          </h2>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/about">About Us </NavLink>
            </li>
            <li>
              <NavLink to="/main">Main</NavLink>
            </li>
            <li>
              <NavLink to="/form">Form</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
