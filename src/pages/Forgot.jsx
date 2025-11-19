import { useState } from "react";
import styles from "./Forgot.module.css";
import myPic from "../assets/gym.jpeg";
import { FaArrowLeft, FaEnvelope } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { API_ENDPOINTS } from "../config/api";

function Forgot() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // Step 1: Email, Step 2: Code
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Step 1: Send Reset Code
  const handleSendCode = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setLoading(true);

    try {
      const response = await fetch(API_ENDPOINTS.AUTH.FORGOT_PASSWORD, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setStep(2); // Move to code verification step
      } else {
        setError(data.message || "Failed to send reset code.");
      }
    } catch (err) {
      console.error("Forgot password error:", err);
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Step 2: Verify Reset Code
  const handleVerifyCode = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setLoading(true);

    try {
      const response = await fetch(API_ENDPOINTS.AUTH.VERIFY_RESET_CODE, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, code }),
      });

      const data = await response.json();

      if (response.ok) {
        // ✅ Navigate to Reset page with email and code
        navigate("/reset", { state: { email, code } });
      } else {
        setError(data.message || "Invalid or expired code.");
      }
    } catch (err) {
      console.error("Verify code error:", err);
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
            <h1 className={styles.mainTitle}>Reset Password</h1>
            <p className={styles.subtitle}>
              {step === 1 && "Don't worry! It happens. Please enter the email address associated with your account."}
              {step === 2 && "Enter the 6-digit code we sent to your email address."}
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
            <h1 className={styles.title}>
              {step === 1 && "Forgot Password?"}
              {step === 2 && "Verify Code"}
            </h1>
            <p className={styles.description}>
              {step === 1 && "Enter your email address and we'll send you a verification code."}
              {step === 2 && "Check your email for the 6-digit verification code."}
            </p>
          </div>

          {/* Success Message */}
          {message && (
            <div
              style={{
                padding: "12px",
                backgroundColor: "#d4edda",
                color: "#155724",
                borderRadius: "8px",
                marginBottom: "15px",
                border: "1px solid #c3e6cb",
              }}
            >
              {message}
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div
              style={{
                padding: "12px",
                backgroundColor: "#f8d7da",
                color: "#721c24",
                borderRadius: "8px",
                marginBottom: "15px",
                border: "1px solid #f5c6cb",
              }}
            >
              {error}
            </div>
          )}

          {/* STEP 1: Enter Email */}
          {step === 1 && (
            <form className={styles.form} onSubmit={handleSendCode}>
              <div className={styles.inputGroup}>
                <label>Email Address</label>
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

              <button
                type="submit"
                className={styles.button}
                disabled={loading}
                style={{ cursor: loading ? "not-allowed" : "pointer" }}
              >
                {loading ? "Sending..." : "Send Verification Code"}
              </button>

              <div className={styles.backToLogin}>
                <Link to="/login">
                  <FaArrowLeft className={styles.arrowIcon} />
                  Back to Login
                </Link>
              </div>
            </form>
          )}

          {/* STEP 2: Enter Verification Code */}
          {step === 2 && (
            <form className={styles.form} onSubmit={handleVerifyCode}>
              <div className={styles.inputGroup}>
                <label>Verification Code</label>
                <input
                  type="text"
                  placeholder="Enter 6-digit code"
                  className={styles.input}
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  maxLength={6}
                  required
                  disabled={loading}
                  style={{ textAlign: "center", fontSize: "24px", letterSpacing: "10px" }}
                />
              </div>

              <button
                type="submit"
                className={styles.button}
                disabled={loading}
                style={{ cursor: loading ? "not-allowed" : "pointer" }}
              >
                {loading ? "Verifying..." : "Verify Code"}
              </button>

              <div className={styles.backToLogin}>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#4CAF50",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <FaArrowLeft />
                  Back to Email
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Forgot;