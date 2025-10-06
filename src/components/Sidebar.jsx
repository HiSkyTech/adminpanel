// src/components/Sidebar.jsx
import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Users, 
  UserCog, 
  UtensilsCrossed, 
  Dumbbell,        
  Settings,
  UserCircle,
  Menu,
  X,
  HelpCircle,
  CreditCard,     // 👈 For Payment
  Package         // 👈 For Subscription
} from "lucide-react";
import { useState } from "react";
import styles from "./Sidebar.module.css";

function Sidebar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { path: "/", label: "Dashboard", icon: LayoutDashboard },
    { path: "/users", label: "Users", icon: Users },
    { path: "/coaches", label: "Coaches", icon: UserCog },
    { path: "/food-plans", label: "Food Plans", icon: UtensilsCrossed },
    { path: "/exercise", label: "Exercise", icon: Dumbbell },
    { path: "/payment", label: "Payment", icon: CreditCard }, 
    { path: "/subscription", label: "Subscription", icon: Package }, 
    { path: "/profile", label: "Profile", icon: UserCircle },
    { path: "/settings", label: "Settings", icon: Settings },
    { path: "/faq", label: "FAQ", icon: HelpCircle }, 
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Toggle Button */}
      <button 
        className={styles.mobileMenuBtn}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className={`${styles.overlay} ${isOpen ? styles.show : ''}`} 
          onClick={() => setIsOpen(false)} 
        />
      )}

      {/* Sidebar */}
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <div className={styles.logoContainer}>
          <div className={styles.logoIcon}>AP</div>
          <h2 className={styles.logoText}>Admin Panel</h2>
        </div>
        
        <nav className={styles.nav}>
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`${styles.navLink} ${isActive(item.path) ? styles.active : ''}`}
                onClick={() => setIsOpen(false)}
              >
                <Icon size={20} className={styles.navIcon} />
                <span className={styles.navLabel}>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
