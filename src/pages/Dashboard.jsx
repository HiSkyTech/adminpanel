import styles from "./Dashboard.module.css";

function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <h2>Dashboard Page</h2>
      <section className={styles.content}>
        <p>Welcome to your dashboard! Here’s a quick overview:</p>
        <div className={styles.card}>
          <h3>Stats</h3>
          <p>Users: 1,234</p>
          <p>Revenue: $56,789</p>
        </div>
        <div className={styles.card}>
          <h3>Activity</h3>
          <p>Recent logins: 45</p>
          <p>Pending tasks: 12</p>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;