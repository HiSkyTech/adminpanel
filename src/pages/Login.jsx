import styles from "./Login.module.css";
import myPic from "../assets/gym.jpeg";
function Login() {
  return (
    <div className={styles.container}>
      {/* Left Section (Image / Logo) */}
      <div className={styles.left}>
        {/* You will add your image or logo here */}
  <img src={myPic} alt="Logo" className={styles.logo} />
      </div>

      {/* Right Section (Form) */}
      <div className={styles.right}>
        <div className={styles.card}>
          <h2 className={styles.welcome}>Welcome back !!!</h2>
          <h1 className={styles.title}>Log In</h1>

          <form>
            <div className={styles.inputGroup}>
              <label>Email</label>
              <input type="email" placeholder="Enter your email" />
            </div>

            <div className={styles.inputGroup}>
              <label>Password</label>
              <input type="password" placeholder="Enter your password" />
            </div>

            <div className={styles.forgot}>
              <a href="#">Forgot password?</a>
            </div>

            <button type="submit" className={styles.button}>
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
