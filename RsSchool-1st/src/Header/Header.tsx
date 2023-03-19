import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <div className="Header-container">
        <nav>
          <ul>
            <li>
              <Link to="/about">About Us </Link>
            </li>
            <li>
              <Link to="/main">Main</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
