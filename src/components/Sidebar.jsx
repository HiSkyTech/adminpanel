// 




// src/components/Sidebar.jsx
import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <h2 className={styles.logo}>Admin Panel</h2>
      <nav className={styles.nav}>
        <Link to="/">Dashboard</Link>
        <Link to="/users">Users</Link>
        <Link to="/coaches">Coaches</Link>
        <Link to="/food-plans">Food Plans</Link>
        <Link to="/assignments">Assignments</Link>
        <Link to="/settings">Settings</Link>
      </nav>
    </div>
  );
}

export default Sidebar;
