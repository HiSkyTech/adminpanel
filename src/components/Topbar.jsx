// src/components/Topbar.jsx
import styles from "./Topbar.module.css";

function Topbar() {
  return (
    <div className={styles.topbar}>
      <h3>Welcome, Admin</h3>
      <button className={styles.logout}>Logout</button>
    </div>
  );
}

export default Topbar;
