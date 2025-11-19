import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import styles from "./Login.module.css";
import myPic from "../assets/gym.jpeg";
import { API_ENDPOINTS } from "../config/api"; // ✅ Import API config

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ Redirect to Home if already logged in (fixed infinite loop)
  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (token) {
      // Run navigation only once on mount
      const timer = setTimeout(() => navigate("/"), 0);
      return () => clearTimeout(timer);
    }
  }, []); // ✅ empty dependency array to avoid re-run

  // ✅ Handle Login Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch(API_ENDPOINTS.AUTH.LOGIN, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // ✅ Save token and admin info in localStorage
        localStorage.setItem("adminToken", data.token);
        localStorage.setItem("adminEmail", data.admin.email);
        localStorage.setItem("adminId", data.admin.id);

        // ✅ Redirect to Home Page after successful login
        navigate("/");
      } else {
        setError(data.message || "Login failed. Please try again.");
      }
    } catch (err) {
      console.error("❌ Login error:", err);
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      {/* ===== LEFT SECTION ===== */}
      <div className={styles.left}>
        <div className={styles.decorativeElements}>
          <div className={styles.circle1}></div>
          <div className={styles.circle2}></div>
          <div className={styles.circle3}></div>
        </div>

        {/* Logo top left */}
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

      {/* ===== RIGHT SECTION ===== */}
      <div className={styles.right}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h2 className={styles.welcome}>WELCOME BACK</h2>
            <h1 className={styles.title}>Log In</h1>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className={styles.inputGroup}>
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
              />
            </div>

            {/* Password Input */}
            <div className={styles.inputGroup}>
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
              />
            </div>

            {/* Error Message */}
            {error && (
              <p style={{ color: "red", marginTop: "8px", fontWeight: "500" }}>
                {error}
              </p>
            )}

            {/* Forgot Password */}
            <div className={styles.forgot}>
              <Link to="/forgot" className={styles.forgotLink}>
                Forgot password?
              </Link>
            </div>

            {/* Login Button */}
            <button 
              type="submit" 
              className={styles.button}
              disabled={loading}
            >
              {loading ? "Logging in..." : "Log In"}
            </button>
          </form>

{/*           
          <p style={{ textAlign: "center", marginTop: "20px", color: "#666" }}>
            Don't have an account?{" "}
            <Link to="/signup" style={{ color: "#4CAF50", fontWeight: "600" }}>
              Sign Up
            </Link>
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default Login;
