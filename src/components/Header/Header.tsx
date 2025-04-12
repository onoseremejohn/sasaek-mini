import { ArrowDownIcon, HamburgerIcon } from "../../icons";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <img src="/logo.svg" alt="Logo" className="logo" /> {/* Optimize image */}
      <nav className="nav">
        <ul className="nav-links">
          <li>
            <a href="#">소개</a>
          </li>
          <li>
            <a href="#">소소담담 APP</a>
          </li>
          <li>
            <a href="#">활동</a>
          </li>
          <li>
            <button type="button" className="dropdown-btn">
              <span>KOR</span>
              <ArrowDownIcon />
            </button>
          </li>
        </ul>
        <button type="button" className="hamburger" aria-label="Menu">
          <HamburgerIcon />
        </button>
      </nav>
    </header>
  );
}

export default Header;
