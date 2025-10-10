import styles from "./Forgot.module.css";
import myPic from "../assets/gym.jpeg";
import { FaArrowLeft, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
function Forgot() {
  return (
    <div className={styles.container}>
      {/* Left Section */}
      <div className={styles.left}>
        <div className={styles.decorativeElements}>
          <div className={styles.circle1}></div>
          <div className={styles.circle2}></div>
          <div className={styles.circle3}></div>
        </div>
        
        <div className={styles.logoContainer}>
          <div className={styles.logoWrapper}>
            <img src={myPic} alt="Logo" className={styles.logo} />
          </div>
          
          <div className={styles.contentWrapper}>
            <h1 className={styles.mainTitle}>Reset Password</h1>
            <p className={styles.subtitle}>
              Don't worry! It happens. Please enter the email address associated with your account.
            </p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className={styles.right}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.iconWrapper}>
              <FaEnvelope className={styles.emailIcon} />
            </div>
            <h1 className={styles.title}>Forgot Password?</h1>
            <p className={styles.description}>
              Enter your email address and we'll send you instructions to reset your password.
            </p>
          </div>

          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label>Email Address</label>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className={styles.input}
              />
            </div>

            {/* <button type="submit" className={styles.button}>
              Send Reset Link
            </button> */}
<button type="button" className={styles.button}>
  <Link to="/reset" style={{ textDecoration: "none", color: "inherit" }}>
    Send Reset Link
  </Link>
</button>
  
            <div className={styles.backToLogin}>
              <a href="/login">
                <FaArrowLeft className={styles.arrowIcon} />
                Back to Login
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Forgot;