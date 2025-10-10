import React, { useState } from 'react';
import styles from './RegisterCoachModal.module.css';

const RegisterCoachModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    specialty: '',
    phone: '',
    experience: '',
    certifications: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>Register New Coach</h2>
          <button 
            className={styles.closeBtn} 
            onClick={onClose}
            aria-label="Close modal"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className={styles.form}>
          {/* Full Name */}
          <div className={styles.formGroup}>
            <label htmlFor="fullName" className={styles.label}>Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. John Doe"
              className={styles.input}
              required
            />
          </div>

          {/* Email Address */}
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. john.doe@example.com"
              className={styles.input}
              required
            />
          </div>

          {/* Temporary Password */}
          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>Temporary Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className={styles.input}
              required
            />
          </div>

          {/* Specialty */}
          <div className={styles.formGroup}>
            <label htmlFor="specialty" className={styles.label}>Specialty</label>
            <input
              type="text"
              id="specialty"
              name="specialty"
              value={formData.specialty}
              onChange={handleChange}
              placeholder="e.g. Body Building, CrossFit"
              className={styles.input}
              required
            />
          </div>

          {/* Phone Number */}
          <div className={styles.formGroup}>
            <label htmlFor="phone" className={styles.label}>Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. +1 (555) 123-4567"
              className={styles.input}
              required
            />
          </div>

          {/* Years of Experience */}
          <div className={styles.formGroup}>
            <label htmlFor="experience" className={styles.label}>Years of Experience</label>
            <select
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className={styles.select}
              required
            >
              <option value="">Select experience level</option>
              <option value="0-1">0-1 years</option>
              <option value="1-3">1-3 years</option>
              <option value="3-5">3-5 years</option>
              <option value="5-10">5-10 years</option>
              <option value="10+">10+ years</option>
            </select>
          </div>

          {/* Certifications */}
          <div className={styles.formGroup}>
            <label htmlFor="certifications" className={styles.label}>Certifications</label>
            <textarea
              id="certifications"
              name="certifications"
              value={formData.certifications}
              onChange={handleChange}
              placeholder="e.g. NASM-CPT, ACSM-CPT, etc."
              className={styles.textarea}
              rows="3"
              required
            />
          </div>

          {/* Action Buttons */}
          <div className={styles.formActions}>
            <button 
              type="button" 
              className={styles.cancelBtn}
              onClick={onClose}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className={styles.submitBtn}
            >
              Register Coach
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterCoachModal;