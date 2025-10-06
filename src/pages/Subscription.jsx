// src/pages/Subscription.jsx
import { Search, Plus, Edit, Trash2, Crown, Calendar } from "lucide-react";
import { useState } from "react";
import styles from "./Subscription.module.css";

function Subscription() {
  const [searchQuery, setSearchQuery] = useState("");
  const [subscriptions, setSubscriptions] = useState([
    { 
      id: 1, 
      user: "John Doe", 
      email: "john@example.com",
      plan: "Premium", 
      price: 49.99,
      duration: "Monthly",
      startDate: "2024-01-15", 
      endDate: "2024-07-15",
      status: "Active",
      autoRenew: true
    },
    { 
      id: 2, 
      user: "Jane Smith", 
      email: "jane@example.com",
      plan: "Enterprise", 
      price: 199.99,
      duration: "Yearly",
      startDate: "2024-02-01", 
      endDate: "2025-02-01",
      status: "Active",
      autoRenew: true
    },
    { 
      id: 3, 
      user: "Bob Johnson", 
      email: "bob@example.com",
      plan: "Basic", 
      price: 29.99,
      duration: "Monthly",
      startDate: "2024-03-10", 
      endDate: "2024-06-10",
      status: "Expired",
      autoRenew: false
    },
    { 
      id: 4, 
      user: "Alice Brown", 
      email: "alice@example.com",
      plan: "Premium", 
      price: 49.99,
      duration: "Monthly",
      startDate: "2024-04-05", 
      endDate: "2024-07-05",
      status: "Cancelled",
      autoRenew: false
    },
    { 
      id: 5, 
      user: "Charlie Wilson", 
      email: "charlie@example.com",
      plan: "Basic", 
      price: 29.99,
      duration: "Monthly",
      startDate: "2024-05-12", 
      endDate: "2024-08-12",
      status: "Active",
      autoRenew: true
    },
  ]);

  const filteredSubscriptions = subscriptions.filter(sub =>
    sub.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
    sub.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    sub.plan.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.subscription}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.title}>Subscription Management</h2>
          <p className={styles.subtitle}>Manage user subscriptions and plans</p>
        </div>
        <button className={styles.addButton}>
          <Plus size={18} />
          <span>Add Subscription</span>
        </button>
      </div>

      <div className={styles.controls}>
        <div className={styles.searchContainer}>
          <Search size={18} className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search subscriptions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
        </div>
        <div className={styles.filters}>
          <select className={styles.filterSelect}>
            <option value="">All Plans</option>
            <option value="basic">Basic</option>
            <option value="premium">Premium</option>
            <option value="enterprise">Enterprise</option>
          </select>
          <select className={styles.filterSelect}>
            <option value="">All Status</option>
            <option value="active">Active</option>
            <option value="expired">Expired</option>
            <option value="cancelled">Cancelled</option>
          </select>
          <select className={styles.filterSelect}>
            <option value="">All Duration</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>User</th>
              <th>Email</th>
              <th>Plan</th>
              <th>Price</th>
              <th>Duration</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Auto Renew</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredSubscriptions.map((sub) => (
              <tr key={sub.id}>
                <td>{sub.id}</td>
                <td className={styles.userName}>{sub.user}</td>
                <td className={styles.userEmail}>{sub.email}</td>
                <td>
                  <span className={`${styles.plan} ${styles[sub.plan.toLowerCase()]}`}>
                    <Crown size={12} />
                    {sub.plan}
                  </span>
                </td>
                <td className={styles.price}>${sub.price}</td>
                <td>
                  <span className={styles.duration}>
                    <Calendar size={12} />
                    {sub.duration}
                  </span>
                </td>
                <td>{sub.startDate}</td>
                <td>{sub.endDate}</td>
                <td>
                  <span className={`${styles.autoRenew} ${sub.autoRenew ? styles.yes : styles.no}`}>
                    {sub.autoRenew ? 'Yes' : 'No'}
                  </span>
                </td>
                <td>
                  <span className={`${styles.status} ${styles[sub.status.toLowerCase()]}`}>
                    {sub.status}
                  </span>
                </td>
                <td>
                  <div className={styles.actions}>
                    <button className={styles.actionBtn} title="Edit">
                      <Edit size={16} />
                    </button>
                    <button className={styles.actionBtn} title="Delete">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.pagination}>
        <p className={styles.paginationText}>Showing {filteredSubscriptions.length} of {subscriptions.length} subscriptions</p>
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

export default Subscription;