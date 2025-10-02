import styles from "./Users.module.css";

function Users() {
  return (
    <div className={styles.users}>
      <h2>Users Page</h2>
      <section className={styles.content}>
        <p>Manage your users below:</p>
        <div className={styles.card}>
          <h3>User Overview</h3>
          <p>Total Users: 1,234</p>
          <p>Active Users: 987</p>
        </div>
        <div className={styles.card}>
          <h3>Recent Registrations</h3>
          <p>New Users Today: 15</p>
          <p>New Users This Week: 102</p>
        </div>
      </section>
    </div>
  );
}

export default Users;