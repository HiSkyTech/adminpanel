import styles from "./Reset.module.css";
import myPic from "../assets/gym.jpeg";
import { FaArrowLeft, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
function Reset() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
            <h1 className={styles.mainTitle}>New Password</h1>
            <p className={styles.subtitle}>
              Your new password must be different from previously used passwords. Make it strong and secure.
            </p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className={styles.right}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.iconWrapper}>
              <FaLock className={styles.lockIcon} />
            </div>
            <h1 className={styles.title}>Reset Password</h1>
            <p className={styles.description}>
              Please enter your new password below.
            </p>
          </div>

          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label>New Password</label>
              <div className={styles.passwordWrapper}>
                <input 
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter new password" 
                  className={styles.input}
                />
                <button 
                  type="button"
                  className={styles.eyeButton}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label>Confirm Password</label>
              <div className={styles.passwordWrapper}>
                <input 
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm new password" 
                  className={styles.input}
                />
                <button 
                  type="button"
                  className={styles.eyeButton}
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <div className={styles.passwordRequirements}>
              <p className={styles.requirementTitle}>Password must contain:</p>
              <ul className={styles.requirementList}>
                <li>At least 8 characters</li>
                <li>One uppercase letter</li>
                <li>One lowercase letter</li>
                <li>One number</li>
              </ul>
            </div>

            <Link to="/success" className={styles.button}>
  Reset Password
</Link>
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

export default Reset;