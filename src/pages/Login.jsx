import styles from "./Login.module.css";
import myPic from "../assets/gym.jpeg";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";


function Login() {
  return (
    <div className={styles.container}>
      {/* Left Section */}
      <div className={styles.left}>
        <div className={styles.decorativeElements}>
          <div className={styles.circle1}></div>
          <div className={styles.circle2}></div>
          <div className={styles.circle3}></div>
        </div>
        
        {/* Logo moved to top left */}
        <div className={styles.topLeftLogo}>
          <img src={myPic} alt="Logo" className={styles.logo} />
        </div>
        
        <div className={styles.logoContainer}>
          <div className={styles.contentWrapper}>
            <h1 className={styles.mainTitle}>Sign In</h1>
            
            <div className={styles.featureList}>
              <div className={styles.featureItem}>
                <span className={styles.checkIcon}>
                  <FaCheck />
                </span>
                <span>Fully auto-layout</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.checkIcon}>
                  <FaCheck />
                </span>
                <span>Responsive design</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.checkIcon}>
                  <FaCheck />
                </span>
                <span>Easy to use</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className={styles.right}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h2 className={styles.welcome}>WELCOME BACK</h2>
            <h1 className={styles.title}>Log In</h1>
          </div>

          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label>Email</label>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className={styles.input}
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Password</label>
              <input 
                type="password" 
                placeholder="Enter your password" 
                className={styles.input}
              />
            </div>

            {/* Forgot Password */}
            <div className={styles.forgot}>
              <Link to="/forgot" className={styles.forgotLink}>
                Forgot password?
              </Link>
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