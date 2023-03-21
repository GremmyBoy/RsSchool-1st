import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <div className="Header-container">
        <nav>
          <ul>
            <li>
              <NavLink to="/about">About Us </NavLink>
            </li>
            <li>
              <NavLink to="/main">Main</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
