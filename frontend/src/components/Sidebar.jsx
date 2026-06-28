import {
  FaHome,
  FaMoneyBillWave,
  FaUsers,
  FaChartLine,
  FaSms,
  FaRobot,
  FaCog,
  FaSignOutAlt
} from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="logo">

        <h1>Higlow</h1>

        <p>Business Suite</p>

      </div>

      <nav>

        <ul>

          <li className="active">
            <FaHome />
            <span>Dashboard</span>
          </li>

          <li>
            <FaMoneyBillWave />
            <span>Payments</span>
          </li>

          <li>
            <FaUsers />
            <span>Customers</span>
          </li>

          <li>
            <FaChartLine />
            <span>Reports</span>
          </li>

          <li>
            <FaSms />
            <span>SMS</span>
          </li>

          <li>
            <FaRobot />
            <span>Gemini AI</span>
          </li>

          <li>
            <FaCog />
            <span>Settings</span>
          </li>

        </ul>

      </nav>

      <button className="logout">

        <FaSignOutAlt />

        Logout

      </button>

    </aside>
  );
}

export default Sidebar;
