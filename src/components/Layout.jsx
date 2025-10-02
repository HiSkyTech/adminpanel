// src/components/Layout.jsx
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      {/* Sidebar on the left */}
      <Sidebar />

      <div className={styles.mainContent}>
        {/* Topbar on top */}
        <Topbar />

        {/* Page Content */}
        <div className={styles.pageContent}>{children}</div>
      </div>
    </div>
  );
}

export default Layout;
