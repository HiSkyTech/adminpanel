// src/components/Profile.jsx
import { Camera, User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import styles from "./Profile.module.css";

function Profile() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [profileData, setProfileData] = useState({
    name: "Admin",
    email: "123@gmail.com"
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    console.log("Profile updated:", profileData);
    // Add your profile update logic here
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    console.log("Password update:", passwordData);
    // Add your password update logic here
  };

  const handlePasswordReset = () => {
    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    });
  };

  return (
    <div className={styles.profile}>
      <div className={styles.header}>
        <h2 className={styles.title}>Profile Settings</h2>
        <p className={styles.subtitle}>Manage your account information and security</p>
      </div>

      <div className={styles.content}>
        {/* Profile Picture Section */}
        <div className={styles.profileCard}>
          <div className={styles.avatarSection}>
            <div className={styles.avatar}>
              <span className={styles.avatarText}>BB</span>
              <button className={styles.cameraButton}>
                <Camera size={16} />
              </button>
            </div>
            <p className={styles.email}>{profileData.email}</p>
            <button className={styles.uploadButton}>
              <Camera size={18} />
              <span>UPLOAD IMAGE</span>
            </button>
          </div>
        </div>

        {/* Personal Information Section */}
        <div className={styles.infoCard}>
          <div className={styles.cardHeader}>
            <User size={20} className={styles.headerIcon} />
            <h3 className={styles.cardTitle}>PERSONAL INFORMATION</h3>
          </div>
          
          <form onSubmit={handleProfileSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Name</label>
              <div className={styles.inputWrapper}>
                <input
                  type="text"
                  value={profileData.name}
                  onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                  className={styles.input}
                  placeholder="Enter your name"
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Email Address</label>
              <div className={styles.inputWrapper}>
                <input
                  type="email"
                  value={profileData.email}
                  onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                  className={styles.input}
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className={styles.formActions}>
              <button type="submit" className={styles.submitButton}>
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Change Password Section */}
        <div className={styles.infoCard}>
          <div className={styles.cardHeader}>
            <Lock size={20} className={styles.headerIcon} />
            <h3 className={styles.cardTitle}>CHANGE PASSWORD</h3>
          </div>
          
          <form onSubmit={handlePasswordSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Current Password</label>
              <div className={styles.passwordInput}>
                <input
                  type={showCurrentPassword ? "text" : "password"}
                  value={passwordData.currentPassword}
                  onChange={(e) => setPasswordData({...passwordData, currentPassword: e.target.value})}
                  className={styles.input}
                  placeholder="Current Password"
                />
                <button
                  type="button"
                  className={styles.eyeButton}
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                >
                  {showCurrentPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>New Password</label>
              <div className={styles.passwordInput}>
                <input
                  type={showNewPassword ? "text" : "password"}
                  value={passwordData.newPassword}
                  onChange={(e) => setPasswordData({...passwordData, newPassword: e.target.value})}
                  className={styles.input}
                  placeholder="New Password"
                />
                <button
                  type="button"
                  className={styles.eyeButton}
                  onClick={() => setShowNewPassword(!showNewPassword)}
                >
                  {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Confirm New Password</label>
              <div className={styles.passwordInput}>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={passwordData.confirmPassword}
                  onChange={(e) => setPasswordData({...passwordData, confirmPassword: e.target.value})}
                  className={styles.input}
                  placeholder="Confirm New Password"
                />
                <button
                  type="button"
                  className={styles.eyeButton}
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <p className={styles.passwordHint}>Password must be at least 6 characters</p>

            <div className={styles.formActions}>
              <button type="submit" className={styles.submitButton}>
                Update Password
              </button>
              <button 
                type="button" 
                className={styles.resetButton}
                onClick={handlePasswordReset}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;