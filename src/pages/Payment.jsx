// src/pages/Payment.jsx
import { Search, Download, Eye, DollarSign, CreditCard } from "lucide-react";
import { useState } from "react";
import styles from "./Payment.module.css";

function Payment() {
  const [searchQuery, setSearchQuery] = useState("");
  const [payments, setPayments] = useState([
    { 
      id: 1, 
      transactionId: "TXN001234567", 
      user: "John Doe", 
      amount: 49.99, 
      paymentMethod: "Credit Card", 
      plan: "Premium Monthly", 
      status: "Completed", 
      date: "2024-06-15" 
    },
    { 
      id: 2, 
      transactionId: "TXN001234568", 
      user: "Jane Smith", 
      amount: 99.99, 
      paymentMethod: "PayPal", 
      plan: "Premium Yearly", 
      status: "Completed", 
      date: "2024-06-14" 
    },
    { 
      id: 3, 
      transactionId: "TXN001234569", 
      user: "Bob Johnson", 
      amount: 29.99, 
      paymentMethod: "Debit Card", 
      plan: "Basic Monthly", 
      status: "Pending", 
      date: "2024-06-13" 
    },
    { 
      id: 4, 
      transactionId: "TXN001234570", 
      user: "Alice Brown", 
      amount: 49.99, 
      paymentMethod: "Credit Card", 
      plan: "Premium Monthly", 
      status: "Failed", 
      date: "2024-06-12" 
    },
    { 
      id: 5, 
      transactionId: "TXN001234571", 
      user: "Charlie Wilson", 
      amount: 199.99, 
      paymentMethod: "Bank Transfer", 
      plan: "Enterprise Yearly", 
      status: "Completed", 
      date: "2024-06-11" 
    },
  ]);

  const filteredPayments = payments.filter(payment =>
    payment.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
    payment.transactionId.toLowerCase().includes(searchQuery.toLowerCase()) ||
    payment.plan.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalRevenue = payments.reduce((sum, payment) => 
    payment.status === "Completed" ? sum + payment.amount : sum, 0
  );

  return (
    <div className={styles.payment}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.title}>Payment Management</h2>
          <p className={styles.subtitle}>Track and manage all payment transactions</p>
        </div>
        <button className={styles.exportButton}>
          <Download size={18} />
          <span>Export Report</span>
        </button>
      </div>

      <div className={styles.statsContainer}>
        <div className={styles.statCard}>
          <div className={styles.statIcon} style={{ backgroundColor: '#f0fdf4' }}>
            <DollarSign size={24} style={{ color: '#10b981' }} />
          </div>
          <div className={styles.statContent}>
            <p className={styles.statLabel}>Total Revenue</p>
            <h3 className={styles.statValue}>${totalRevenue.toFixed(2)}</h3>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon} style={{ backgroundColor: '#f0f3ff' }}>
            <CreditCard size={24} style={{ color: '#667eea' }} />
          </div>
          <div className={styles.statContent}>
            <p className={styles.statLabel}>Total Transactions</p>
            <h3 className={styles.statValue}>{payments.length}</h3>
          </div>
        </div>
      </div>

      <div className={styles.controls}>
        <div className={styles.searchContainer}>
          <Search size={18} className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search payments..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
        </div>
        <div className={styles.filters}>
          <select className={styles.filterSelect}>
            <option value="">All Methods</option>
            <option value="creditcard">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="debitcard">Debit Card</option>
            <option value="banktransfer">Bank Transfer</option>
          </select>
          <select className={styles.filterSelect}>
            <option value="">All Status</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
            <option value="failed">Failed</option>
          </select>
        </div>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Transaction ID</th>
              <th>User</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>Plan</th>
              <th>Status</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredPayments.map((payment) => (
              <tr key={payment.id}>
                <td>{payment.id}</td>
                <td className={styles.transactionId}>{payment.transactionId}</td>
                <td className={styles.userName}>{payment.user}</td>
                <td className={styles.amount}>${payment.amount.toFixed(2)}</td>
                <td>
                  <span className={styles.paymentMethod}>
                    {payment.paymentMethod}
                  </span>
                </td>
                <td className={styles.plan}>{payment.plan}</td>
                <td>
                  <span className={`${styles.status} ${styles[payment.status.toLowerCase()]}`}>
                    {payment.status}
                  </span>
                </td>
                <td>{payment.date}</td>
                <td>
                  <div className={styles.actions}>
                    <button className={styles.actionBtn} title="View Details">
                      <Eye size={16} />
                    </button>
                    <button className={styles.actionBtn} title="Download Receipt">
                      <Download size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.pagination}>
        <p className={styles.paginationText}>Showing {filteredPayments.length} of {payments.length} payments</p>
        <div className={styles.paginationButtons}>
          <button className={styles.pageBtn}>Previous</button>
          <button className={`${styles.pageBtn} ${styles.active}`}>1</button>
          <button className={styles.pageBtn}>2</button>
          <button className={styles.pageBtn}>3</button>
          <button className={styles.pageBtn}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default Payment;