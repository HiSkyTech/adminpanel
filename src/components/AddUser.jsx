// src/components/AddUser.jsx
import { X } from "lucide-react";
import { useState } from "react";
import styles from "./AddUser.module.css";

function AddUser({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "",
    phone: "",
    status: "Active"
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User added:", formData);
    // Add your submit logic here
    onClose();
  };

  const handleCancel = () => {
    setFormData({
      fullName: "",
      email: "",
      password: "",
      role: "",
      phone: "",
      status: "Active"
    });
    onClose();
  };

  return (
    <>
      <div className={styles.overlay} onClick={handleCancel}></div>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2 className={styles.title}>Register New User</h2>
          <button className={styles.closeButton} onClick={handleCancel}>
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Full Name</label>
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              placeholder="e.g. John Doe"
              className={styles.input}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Email Address</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder="e.g. john.doe@example.com"
              className={styles.input}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Temporary Password</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              placeholder="••••••••"
              className={styles.input}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Role</label>
            <select
              value={formData.role}
              onChange={(e) => setFormData({...formData, role: e.target.value})}
              className={styles.select}
              required
            >
              <option value="">Select role</option>
              <option value="Admin">Admin</option>
              <option value="User">User</option>
              <option value="Coach">Coach</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Phone Number</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              placeholder="e.g. +1 (555) 123-4567"
              className={styles.input}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Status</label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({...formData, status: e.target.value})}
              className={styles.select}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <div className={styles.actions}>
            <button type="button" onClick={handleCancel} className={styles.cancelBtn}>
              Cancel
            </button>
            <button type="submit" className={styles.registerBtn}>
              Register User
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddUser;