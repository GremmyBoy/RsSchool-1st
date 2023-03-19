import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <div className="Header-container">
        <nav>
          <ul>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/main">Main</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
