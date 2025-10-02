import styles from "./Settings.module.css";

function Settings() {
  return (
    <div className={styles.settings}>
      <h2>Settings Page</h2>
      <section className={styles.content}>
        <p>Configure your settings below:</p>
        <div className={styles.card}>
          <h3>Account Settings</h3>
          <p>Profile Updates: Enabled</p>
          <p>Notifications: On</p>
        </div>
        <div className={styles.card}>
          <h3>System Preferences</h3>
          <p>Theme: Light</p>
          <p>Language: English</p>
        </div>
      </section>
    </div>
  );
}

export default Settings;