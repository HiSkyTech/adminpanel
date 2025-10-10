// src/components/Topbar.jsx
import { Bell, Settings, User, LogOut } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import navigate
import styles from "./Topbar.module.css";
import NotificationModal from "./NotificationPopup";

function Topbar() {
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);
  const navigate = useNavigate(); // ✅ Initialize navigate

  const handleProfileClick = () => {
    navigate("/profile"); // ✅ Navigate to Profile page
  };

  return (
    <>
      <div className={styles.topbar}>
        <div className={styles.leftSection}>
          <h3 className={styles.greeting}>Welcome, Admin</h3>
        </div>

        <div className={styles.rightSection}>
          {/* Notifications */}
          <button
            className={styles.iconButton}
            aria-label="Notifications"
            onClick={() => setIsNotificationModalOpen(true)}
          >
            <Bell size={20} />
            <span className={styles.badge}>3</span>
          </button>

          {/* Profile */}
          <button
            className={styles.iconButton}
            aria-label="Profile"
            onClick={handleProfileClick} // ✅ Go to profile
          >
            <User size={20} />
          </button>

          {/* Logout */}
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
