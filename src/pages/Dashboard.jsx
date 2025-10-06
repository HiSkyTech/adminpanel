// src/components/Dashboard.jsx
import { 
  Users, 
  DollarSign, 
  Activity, 
  CheckCircle, 
  TrendingUp,
  Clock,
  UserCheck,
  AlertCircle
} from "lucide-react";
import styles from "./Dashboard.module.css";

function Dashboard() {
  const stats = [
    {
      title: "Total Users",
      value: "1,234",
      change: "+12%",
      icon: Users,
      color: "#667eea",
      bgColor: "#f0f3ff"
    },
    {
      title: "Revenue",
      value: "$56,789",
      change: "+23%",
      icon: DollarSign,
      color: "#10b981",
      bgColor: "#f0fdf4"
    },
    {
      title: "Active Sessions",
      value: "456",
      change: "+8%",
      icon: Activity,
      color: "#f59e0b",
      bgColor: "#fffbeb"
    },
    {
      title: "Tasks Completed",
      value: "892",
      change: "+15%",
      icon: CheckCircle,
      color: "#8b5cf6",
      bgColor: "#faf5ff"
    }
  ];

  const recentActivity = [
    { icon: UserCheck, text: "45 new users registered", time: "2 hours ago", color: "#667eea" },
    { icon: Clock, text: "12 pending tasks to review", time: "4 hours ago", color: "#f59e0b" },
    { icon: TrendingUp, text: "Revenue increased by 23%", time: "1 day ago", color: "#10b981" },
    { icon: AlertCircle, text: "3 system alerts", time: "2 days ago", color: "#ef4444" }
  ];

  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <h2 className={styles.title}>Dashboard Overview</h2>
        <p className={styles.subtitle}>Welcome back! Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className={styles.statsGrid}>
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className={styles.statCard}>
              <div className={styles.statIcon} style={{ backgroundColor: stat.bgColor }}>
                <Icon size={24} style={{ color: stat.color }} />
              </div>
              <div className={styles.statContent}>
                <p className={styles.statLabel}>{stat.title}</p>
                <h3 className={styles.statValue}>{stat.value}</h3>
                <span className={styles.statChange} style={{ color: stat.color }}>
                  <TrendingUp size={14} /> {stat.change}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Content Section */}
      <div className={styles.contentGrid}>
        {/* Recent Activity */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h3 className={styles.cardTitle}>Recent Activity</h3>
            <button className={styles.viewAllBtn}>View All</button>
          </div>
          <div className={styles.activityList}>
            {recentActivity.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <div key={index} className={styles.activityItem}>
                  <div 
                    className={styles.activityIcon} 
                    style={{ backgroundColor: `${activity.color}15` }}
                  >
                    <Icon size={18} style={{ color: activity.color }} />
                  </div>
                  <div className={styles.activityContent}>
                    <p className={styles.activityText}>{activity.text}</p>
                    <span className={styles.activityTime}>{activity.time}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Actions */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h3 className={styles.cardTitle}>Quick Actions</h3>
          </div>
          <div className={styles.actionGrid}>
            <button className={styles.actionBtn}>
              <Users size={20} />
              <span>Add User</span>
            </button>
            <button className={styles.actionBtn}>
              <DollarSign size={20} />
              <span>View Reports</span>
            </button>
            <button className={styles.actionBtn}>
              <CheckCircle size={20} />
              <span>Manage Tasks</span>
            </button>
            <button className={styles.actionBtn}>
              <Activity size={20} />
              <span>Analytics</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;