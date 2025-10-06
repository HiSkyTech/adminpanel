// src/components/Topbar.jsx
import { Bell, Settings, User, LogOut } from "lucide-react";
import { useState } from "react";
import styles from "./Topbar.module.css";
import NotificationModal from "./NotificationPopup";
// import Settings from "../pages/Settings";
import Profile from "../pages/Profile";

function Topbar() {
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);

  return (
    <>
      <div className={styles.topbar}>
        <div className={styles.leftSection}>
          <h3 className={styles.greeting}>Welcome, Admin</h3>
        </div>

        <div className={styles.rightSection}>
          {/* Settings */}
          <button className={styles.iconButton} aria-label="Settings">
            <Settings size={20} />
          </button>

          {/* Notifications - Opens Modal */}
          <button 
            className={styles.iconButton} 
            aria-label="Notifications"
            onClick={() => setIsNotificationModalOpen(true)}
          >
            <Bell size={20} />
            <span className={styles.badge}>3</span>
          </button>

          {/* User Profile */}
          <button className={styles.iconButton} aria-label="Profile">
            <User size={20} />
          </button>

          {/* Logout Button */}
          <button className={styles.logout}>
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Notification Modal */}
      <NotificationModal 
        isOpen={isNotificationModalOpen}
        onClose={() => setIsNotificationModalOpen(false)}
      />
    </>
  );
}

export default Topbar;