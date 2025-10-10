import styles from "./Success.module.css";
import myPic from "../assets/gym.jpeg";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function Success() {
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
            <h1 className={styles.mainTitle}>All Set!</h1>
            <p className={styles.subtitle}>
              Your password has been successfully reset. You can now log in with your new password and continue your fitness journey.
            </p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className={styles.right}>
        <div className={styles.card}>
          <div className={styles.successAnimation}>
            <div className={styles.checkmarkWrapper}>
              <FaCheckCircle className={styles.checkIcon} />
            </div>
          </div>

          <div className={styles.content}>
            <h1 className={styles.title}>Password Reset Successful!</h1>
            <p className={styles.description}>
              Your password has been changed successfully. You can now use your new password to log in to your account.
            </p>

            <div className={styles.infoBox}>
              <p className={styles.infoText}>
                <strong>Security Tip:</strong> Make sure to keep your password secure and don't share it with anyone.
              </p>
            </div>

            <a href="/login" className={styles.button}>
              Back to Login
              <FaArrowRight className={styles.arrowIcon} />
            </a>

            <div className={styles.helpSection}>
              <p className={styles.helpText}>
                Having trouble logging in? 
                  <Link to="/reset" className={styles.helpLink}>
    Reset password again
  </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Success;