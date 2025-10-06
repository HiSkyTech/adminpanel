// src/pages/FAQ.jsx
import { Plus, ChevronDown } from "lucide-react";
import { useState } from "react";
import styles from "./Faq.module.css";

function FAQ() {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: "What is Brands Boutique?",
      answer: "Brands Boutique is a premium online marketplace...",
      isOpen: false
    },
    {
      id: 2,
      question: "ORDER & DELIVERY INFO",
      answer: "We deliver worldwide with tracking...",
      isOpen: false
    },
    {
      id: 3,
      question: "How can we contact you?",
      answer: "You can reach us via email, phone, or our contact form...",
      isOpen: false
    },
    {
      id: 4,
      question: "Report any violations",
      answer: "Please report any violations to our support team...",
      isOpen: false
    }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newQuestion, setNewQuestion] = useState({
    question: "",
    answer: ""
  });

  const toggleFAQ = (id) => {
    setFaqs(faqs.map(faq => 
      faq.id === id ? { ...faq, isOpen: !faq.isOpen } : faq
    ));
  };

  const handleAddQuestion = (e) => {
    e.preventDefault();
    const newFaq = {
      id: faqs.length + 1,
      question: newQuestion.question,
      answer: newQuestion.answer,
      isOpen: false
    };
    setFaqs([...faqs, newFaq]);
    setNewQuestion({ question: "", answer: "" });
    setIsModalOpen(false);
  };

  return (
    <div className={styles.faq}>
      <div className={styles.header}>
        <div className={styles.titleSection}>
          <h2 className={styles.title}>
            Frequently Asked <span className={styles.highlight}>Questions</span>
          </h2>
          <p className={styles.subtitle}>Need help or have questions? Find your answers below.</p>
        </div>
        <button 
          className={styles.addButton}
          onClick={() => setIsModalOpen(true)}
        >
          <Plus size={20} />
          Add Question
        </button>
      </div>

      <div className={styles.faqList}>
        {faqs.map((faq) => (
          <div key={faq.id} className={styles.faqItem}>
            <button
              className={styles.faqQuestion}
              onClick={() => toggleFAQ(faq.id)}
            >
              <span>{faq.question}</span>
              <ChevronDown 
                size={20} 
                className={`${styles.chevron} ${faq.isOpen ? styles.open : ''}`}
              />
            </button>
            {faq.isOpen && (
              <div className={styles.faqAnswer}>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Add Question Modal */}
      {isModalOpen && (
        <>
          <div className={styles.overlay} onClick={() => setIsModalOpen(false)}></div>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>Add New Question</h3>
            </div>
            <form onSubmit={handleAddQuestion} className={styles.form}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Question</label>
                <input
                  type="text"
                  value={newQuestion.question}
                  onChange={(e) => setNewQuestion({...newQuestion, question: e.target.value})}
                  className={styles.input}
                  placeholder="Enter your question"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Answer</label>
                <textarea
                  value={newQuestion.answer}
                  onChange={(e) => setNewQuestion({...newQuestion, answer: e.target.value})}
                  className={styles.textarea}
                  placeholder="Enter the answer"
                  rows={4}
                  required
                />
              </div>
              <div className={styles.modalActions}>
                <button type="submit" className={styles.submitButton}>
                  Add Question
                </button>
                <button 
                  type="button" 
                  className={styles.cancelButton}
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
}

export default FAQ;