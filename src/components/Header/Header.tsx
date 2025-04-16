import { ArrowDownIcon, HamburgerIcon } from "../../icons";
import "./Header.css";
import { useEffect, useState } from "react";

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isSidebarOpen]);

  return (
    <header className="header">
      <img src="/logo.svg" alt="Logo" loading="lazy" /> {/* Optimize image */}
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
        <button
          type="button"
          className="hamburger"
          aria-label="Menu"
          onClick={toggleSidebar}
        >
          <HamburgerIcon />
        </button>
      </nav>
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <button
          className="close-btn"
          onClick={toggleSidebar}
          type="button"
          aria-label="Close Manu"
          style={{ fontSize: "30px" }}
        >
          &times;
        </button>
        <div style={{ padding: "0 32px", marginBottom: "20px" }}>
          <img src="/logo.svg" alt="Logo" />
        </div>
        <ul className="sidebar-links">
          <li>
            <a href="#">소개</a>
          </li>
          <li>
            <a href="#">소소담담 APP</a>
          </li>
          <li>
            <a href="#">활동</a>
          </li>
        </ul>
      </div>
      {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </header>
  );
}

export default Header;
