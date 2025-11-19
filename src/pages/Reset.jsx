import styles from "./Reset.module.css";
import myPic from "../assets/gym.jpeg";
import { FaArrowLeft, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { API_ENDPOINTS } from "../config/api";

function Reset() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get email and code from Forgot page
  const { email, code } = location.state || {};
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Redirect to forgot page if no email or code
  useEffect(() => {
    if (!email || !code) {
      navigate("/forgot");
    }
  }, [email, code, navigate]);

  // Password validation
  const validatePassword = (pwd) => {
    const requirements = {
      length: pwd.length >= 8,
      uppercase: /[A-Z]/.test(pwd),
      lowercase: /[a-z]/.test(pwd),
      number: /[0-9]/.test(pwd),
    };
    return requirements;
  };

  const requirements = validatePassword(password);
  const isPasswordValid = Object.values(requirements).every(Boolean);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    // Validate passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Validate password strength
    if (!isPasswordValid) {
      setError("Password does not meet all requirements");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(API_ENDPOINTS.AUTH.RESET_PASSWORD, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          email, 
          code, 
          newPassword: password 
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        
        // Redirect to login after 2 seconds
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        setError(data.message || "Failed to reset password.");
      }
    } catch (err) {
      console.error("Reset password error:", err);
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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

          <form className={styles.form} onSubmit={handleSubmit}>
            {/* Success Message */}
            {message && (
              <div style={{
                padding: "12px",
                backgroundColor: "#d4edda",
                color: "#155724",
                borderRadius: "8px",
                marginBottom: "15px",
                border: "1px solid #c3e6cb"
              }}>
                {message}
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div style={{
                padding: "12px",
                backgroundColor: "#f8d7da",
                color: "#721c24",
                borderRadius: "8px",
                marginBottom: "15px",
                border: "1px solid #f5c6cb"
              }}>
                {error}
              </div>
            )}

            <div className={styles.inputGroup}>
              <label>New Password</label>
              <div className={styles.passwordWrapper}>
                <input 
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter new password" 
                  className={styles.input}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={loading}
                />
                <button 
                  type="button"
                  className={styles.eyeButton}
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={loading}
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
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  disabled={loading}
                />
                <button 
                  type="button"
                  className={styles.eyeButton}
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  disabled={loading}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <div className={styles.passwordRequirements}>
              <p className={styles.requirementTitle}>Password must contain:</p>
              <ul className={styles.requirementList}>
                <li style={{ color: requirements.length ? '#28a745' : '#dc3545' }}>
                  {requirements.length ? '✓' : '○'} At least 8 characters
                </li>
                <li style={{ color: requirements.uppercase ? '#28a745' : '#dc3545' }}>
                  {requirements.uppercase ? '✓' : '○'} One uppercase letter
                </li>
                <li style={{ color: requirements.lowercase ? '#28a745' : '#dc3545' }}>
                  {requirements.lowercase ? '✓' : '○'} One lowercase letter
                </li>
                <li style={{ color: requirements.number ? '#28a745' : '#dc3545' }}>
                  {requirements.number ? '✓' : '○'} One number
                </li>
              </ul>
            </div>

            <button 
              type="submit" 
              className={styles.button}
              disabled={loading || !isPasswordValid}
              style={{ cursor: (loading || !isPasswordValid) ? 'not-allowed' : 'pointer' }}
            >
              {loading ? "Resetting..." : "Reset Password"}
            </button>

            <div className={styles.backToLogin}>
              <Link to="/login">
                <FaArrowLeft className={styles.arrowIcon} />
                Back to Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Reset;