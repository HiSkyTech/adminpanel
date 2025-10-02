import styles from "./FoodPlans.module.css";

function FoodPlans() {
  return (
    <div className={styles.foodPlans}>
      <h2>Food Plans Page</h2>
      <section className={styles.content}>
        <p>Explore your food plans below:</p>
        <div className={styles.card}>
          <h3>Plan Overview</h3>
          <p>Total Plans: 45</p>
          <p>Active Plans: 38</p>
        </div>
        <div className={styles.card}>
          <h3>Recent Plans</h3>
          <p>New Plans This Week: 5</p>
          <p>Updated Plans: 12</p>
        </div>
      </section>
    </div>
  );
}

export default FoodPlans;