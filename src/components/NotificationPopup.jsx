// src/components/NotificationModal.jsx
import { X } from "lucide-react";
import { useState } from "react";
import styles from "./NotificationPopup.module.css";

function NotificationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    type: "",
    title: "",
    description: "",
    image: null
  });

  const [fileName, setFileName] = useState("No file chosen");

  if (!isOpen) return null;

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, image: file }));
      setFileName(file.name);
    } else {
      setFileName("No file chosen");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Notification data:", formData);
    // Add your submit logic here
    handleClose();
  };

  const handleClose = () => {
    setFormData({
      type: "",
      title: "",
      description: "",
      image: null
    });
    setFileName("No file chosen");
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      <div className={styles.overlay} onClick={handleClose}></div>

      {/* Modal */}
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2 className={styles.title}>Notification</h2>
          <button 
            className={styles.closeButton}
            onClick={handleClose}
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          {/* Notification Type */}
          <div className={styles.formGroup}>
            <label className={styles.label}>Notification Type</label>
            <select
              value={formData.type}
              onChange={(e) => handleInputChange('type', e.target.value)}
              className={styles.select}
              required
            >
              <option value="">Select Type</option>
              <option value="info">Info</option>
              <option value="alert">Alert</option>
              <option value="promotion">Promotion</option>
              <option value="update">Update</option>
            </select>
          </div>

          {/* Title */}
          <div className={styles.formGroup}>
            <label className={styles.label}>Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
              className={styles.input}
              required
            />
          </div>

          {/* Description */}
          <div className={styles.formGroup}>
            <label className={styles.label}>Description</label>
            <input
              type="text"
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              className={styles.input}
              required
            />
          </div>

          {/* Image Upload */}
          <div className={styles.formGroup}>
            <label className={styles.label}>Image (Optional)</label>
            <div className={styles.fileInputWrapper}>
              <label htmlFor="file-upload" className={styles.fileLabel}>
                Choose file
              </label>
              <input
                id="file-upload"
                type="file"
                onChange={handleFileChange}
                className={styles.fileInput}
                accept="image/*"
              />
              <span className={styles.fileName}>{fileName}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className={styles.actions}>
            <button
              type="submit"
              className={styles.submitButton}
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleClose}
              className={styles.closeBtn}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default NotificationModal;