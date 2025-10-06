// src/pages/Settings.jsx
import { useState } from "react";
import styles from "./Settings.module.css";

function Settings() {
  const [settings, setSettings] = useState({
    // Zegocloud Settings
    zegoAppId: "1625281660",
    zegoAppSignIn: "aecd0a849aa8227568b8c0dc003c31d8bfe98df6b3f43d67ba847f082f28d45a7",
    
    // App Settings
    privacyPolicyLink: "https://www.termsfeed.com/live/32b980c4-2ic9-4d63-b903-c9b1f0a553ed",
    privacyPolicyText: "Privacy Policy Text",
    
    // Toggle Settings
    addProductRequest: true,
    updateProductRequest: true,
    fakeData: true,
    
    // Charges
    cancelOrderCharges: "1",
    adminCommissionCharges: "1",
    
    // Firebase & Resend API
    firebasePrivateKey: '{"type":"service_account","project_id":"brands-boutique-17297","private_key_id":"0536cc9fd7b4d3d979386d94575282836e61b7b4eb","private_key":"-----BEGIN PRIVATE KEY-----\\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDdW5rPKKsszx8n6\nYoYiHr\nnezxuPGWUhZk/mOfG+m+A12hnpcmCh+9YM829ntdnQckzTYr8z9NCboWs8M\nhh+IqB8XBQtJ+sJhWTrh5jaf6f06WddEn4vYdJIwLLlJ+GpzAMDjDnfNQrHiSCa8XM+l\nm+IZKq1lTaGia7xzqqLVvTgzxKpP/PNvt5dWHoyJ3XNPxVzjeetOCKUfyXBZzuWbcnUAmhiGAchesoSQNIzGZcisw3UJmb30}XB05pH7gTkdBHiVvHw+qzvdCa1nN+uYt0aDlTZneuhzbSEhyPDcOSh0wGEan1ZQf10wDSuW3nocO3cjR2pnO9MC5LIz7a0f7EYRelInK+EccESZAgMBAAECggEAHaZ4EzjWMfze+rHok3PH3AENcpOiA9C0t4easxBV6YYoiNCMAe6iaWlEOy2ai2WUK5JJ7KejpEGFdr39FPDLQ+xbc+1a04I+396GJyznRuBTy\nI/pP\nw9Y+bzq448OcmohIskh2SevvwfB7/8B6iQoG92iEYsi/D76TP2Pbfnlne89bMwYQKGmLD6wKXQhK3lrr1q63o5yIEo4k//vSmeDoFAZRBn26r4VS6z+EhOivnqQDPwVRir9+H6UPKAiLkVQiCSzcxPzDVH2b5Friaq9B3Yrr4o2b51zqFLMwG5SCxqn2ZLD+r+l4l4lQwvsZ+NBFe/Ip2ToKf0dB71YqhPR+wKBgQD33qLHiqQbUcT7z8SH0m\nvO+lb4mK7RX/ST9xFIyqsFUJOFWUFL96UYQIxxWcPT+5MY0/M+CVd/iDp6vMf4t\nEAsEp7\nPiw9Y+bzq448OcmohIskh2SevvwfB7/8B6iQoG92iEYsi/D76TP2Pbfnlne89bMwYQKGmLD6wKXQhK3lrr1q63o5yIEo4k//vSmeDoFAZRBn26r4VS6z+EhOivnqQDPwVRir9+H6UPKAiLkVQiCSzcxPzDVH2b5Friaq9B3Yrr4o2b51zqFLMwG5SCxqn2ZLD+r+l4l4lQwvsZ+NBFe/Ip2ToK',
    resendApiKey: "re_CyZxPk2C_6piH4wg7SaTpkoPUewgnmwP"
  });

  const handleInputChange = (field, value) => {
    setSettings(prev => ({ ...prev, [field]: value }));
  };

  const handleToggle = (field) => {
    setSettings(prev => ({ ...prev, [field]: !prev[field] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Settings saved:", settings);
    // Add your save logic here
  };

  return (
    <div className={styles.settings}>
      <div className={styles.header}>
        <h2 className={styles.title}>App Setting</h2>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.grid}>
          {/* Zegocloud Setting */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Zegocloud Setting</h3>
            
            <div className={styles.formGroup}>
              <label className={styles.label}>Zegocloud App Id</label>
              <input
                type="text"
                value={settings.zegoAppId}
                onChange={(e) => handleInputChange('zegoAppId', e.target.value)}
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Zegocloud App Sign In</label>
              <input
                type="text"
                value={settings.zegoAppSignIn}
                onChange={(e) => handleInputChange('zegoAppSignIn', e.target.value)}
                className={styles.input}
              />
            </div>
          </div>

          {/* App Setting */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>App Setting</h3>
            
            <div className={styles.formGroup}>
              <label className={styles.label}>Privacy Policy Link ( redirect user to this link in app )</label>
              <input
                type="text"
                value={settings.privacyPolicyLink}
                onChange={(e) => handleInputChange('privacyPolicyLink', e.target.value)}
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Privacy Policy Text</label>
              <input
                type="text"
                value={settings.privacyPolicyText}
                onChange={(e) => handleInputChange('privacyPolicyText', e.target.value)}
                className={styles.input}
              />
            </div>
          </div>

          {/* Add Product Request */}
          <div className={styles.card}>
            <div className={styles.toggleHeader}>
              <div>
                <h3 className={styles.cardTitle}>Add Product Request</h3>
                <p className={styles.cardDescription}>New product request enable/disable for seller</p>
              </div>
              <label className={styles.switch}>
                <input
                  type="checkbox"
                  checked={settings.addProductRequest}
                  onChange={() => handleToggle('addProductRequest')}
                />
                <span className={styles.slider}></span>
              </label>
            </div>
          </div>

          {/* Update Product Request */}
          <div className={styles.card}>
            <div className={styles.toggleHeader}>
              <div>
                <h3 className={styles.cardTitle}>Update Product Request</h3>
                <p className={styles.cardDescription}>Enable/disable product request update for seller</p>
              </div>
              <label className={styles.switch}>
                <input
                  type="checkbox"
                  checked={settings.updateProductRequest}
                  onChange={() => handleToggle('updateProductRequest')}
                />
                <span className={styles.slider}></span>
              </label>
            </div>
          </div>

          {/* Charges Setting */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Charges Setting</h3>
            
            <div className={styles.row}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Cancel Order Charges (%)</label>
                <input
                  type="text"
                  value={settings.cancelOrderCharges}
                  onChange={(e) => handleInputChange('cancelOrderCharges', e.target.value)}
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Admin Commission Charges (%)</label>
                <input
                  type="text"
                  value={settings.adminCommissionCharges}
                  onChange={(e) => handleInputChange('adminCommissionCharges', e.target.value)}
                  className={styles.input}
                />
              </div>
            </div>
          </div>

          {/* Fake Data */}
          <div className={styles.card}>
            <div className={styles.toggleHeader}>
              <div>
                <h3 className={styles.cardTitle}>Fake Data</h3>
                <p className={styles.cardDescription}>Disable/Enable fake data in app</p>
              </div>
              <label className={styles.switch}>
                <input
                  type="checkbox"
                  checked={settings.fakeData}
                  onChange={() => handleToggle('fakeData')}
                />
                <span className={styles.slider}></span>
              </label>
            </div>
          </div>

          {/* Firebase Notification Setting */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Firebase Notification Setting</h3>
            
            <div className={styles.formGroup}>
              <label className={styles.label}>Private Key (JSON | To handle firebase push notification )</label>
              <textarea
                value={settings.firebasePrivateKey}
                onChange={(e) => handleInputChange('firebasePrivateKey', e.target.value)}
                className={styles.textarea}
                rows={8}
              />
            </div>
          </div>

          {/* Resend API Setting */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Resend API Setting</h3>
            
            <div className={styles.formGroup}>
              <label className={styles.label}>Resend Api Key</label>
              <input
                type="text"
                value={settings.resendApiKey}
                onChange={(e) => handleInputChange('resendApiKey', e.target.value)}
                className={styles.input}
              />
            </div>
          </div>
        </div>

        <div className={styles.submitContainer}>
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Settings;