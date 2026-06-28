import { FaBars, FaBell, FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <header className="navbar">

      <div className="nav-left">

        <button className="menu-btn">
          <FaBars />
        </button>

        <div>
          <h2>Higlow Business</h2>
          <p className="subtitle">
            Smart Business Management
          </p>
        </div>

      </div>

      <div className="nav-right">

        <button className="icon-btn">
          <FaBell />
        </button>

        <div className="profile">

          <FaUserCircle className="profile-icon" />

          <div>

            <strong>Administrator</strong>

            <small>Online</small>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Navbar;
