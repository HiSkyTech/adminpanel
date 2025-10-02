import styles from "./Coaches.module.css";

function Coaches() {
  return (
    <div className={styles.coaches}>
      <h2>Coaches Page</h2>
      <section className={styles.content}>
        <p>Manage your coaches below:</p>
        <div className={styles.card}>
          <h3>Coach Overview</h3>
          <p>Total Coaches: 156</p>
          <p>Active Coaches: 124</p>
        </div>
        <div className={styles.card}>
          <h3>Recent Additions</h3>
          <p>New Coaches Today: 3</p>
          <p>New Coaches This Month: 28</p>
        </div>
      </section>
    </div>
  );
}

export default Coaches;