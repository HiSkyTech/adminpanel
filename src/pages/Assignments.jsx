import styles from "./Assignments.module.css";

function Assignments() {
  return (
    <div className={styles.assignments}>
      <h2>Assignments Page</h2>
      <section className={styles.content}>
        <p>Manage your assignments below:</p>
        <div className={styles.card}>
          <h3>Assignment Overview</h3>
          <p>Total Assignments: 89</p>
          <p>Completed Assignments: 67</p>
        </div>
        <div className={styles.card}>
          <h3>Recent Activity</h3>
          <p>New Assignments Today: 4</p>
          <p>Pending Reviews: 15</p>
        </div>
      </section>
    </div>
  );
}

export default Assignments;