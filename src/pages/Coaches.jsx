// src/pages/Coaches.jsx
import { Search, ArrowLeft, RefreshCw, Eye, MessageSquare, UserMinus } from "lucide-react";
import { useState } from "react";
import styles from "./Coaches.module.css";

function Coaches() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCoach] = useState({
    name: "Alex Johnson",
    email: "alex.j@kineticcoach.com",
    activeClients: 25,
    joinDate: "March 2024",
    specialties: ["Bodybuilding", "CrossFit"],
    status: "Active Coach"
  });

  const [clients] = useState([
    { 
      id: 1, 
      name: "Michael Brown", 
      email: "michael.b@gmail.com",
      avatar: "MB",
      subscription: "Premium",
      paymentStatus: "Paid",
      joinDate: "2024-01-15"
    },
    { 
      id: 2, 
      name: "Sarah Wilson", 
      email: "sarah.w@email.com",
      avatar: "SW",
      subscription: "Basic",
      paymentStatus: "Pending",
      joinDate: "2024-02-28"
    },
    { 
      id: 3, 
      name: "James Davis", 
      email: "james.d@email.com",
      avatar: "JD",
      subscription: "Premium",
      paymentStatus: "Paid",
      joinDate: "2023-12-10"
    },
    { 
      id: 4, 
      name: "Lisa Martinez", 
      email: "lisa.m@email.com",
      avatar: "LM",
      subscription: "Basic",
      paymentStatus: "Overdue",
      joinDate: "2024-03-05"
    },
    { 
      id: 5, 
      name: "Robert Taylor", 
      email: "robert.t@email.com",
      avatar: "RT",
      subscription: "Premium",
      paymentStatus: "Paid",
      joinDate: "2024-01-22"
    },
  ]);

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    client.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.coaches}>
      <div className={styles.header}>
        <div className={styles.headerTop}>
          <button className={styles.backButton}>
            <ArrowLeft size={20} />
          </button>
          <div>
            <h2 className={styles.title}>Coach Clients</h2>
            <p className={styles.subtitle}>View and manage all clients under selected coach.</p>
          </div>
        </div>
        <button className={styles.switchButton}>
          <RefreshCw size={18} />
          <span>Switch Coach</span>
        </button>
      </div>

      <div className={styles.coachCard}>
        <div className={styles.coachAvatar}>AJ</div>
        <div className={styles.coachInfo}>
          <h3 className={styles.coachName}>{selectedCoach.name}</h3>
          <p className={styles.coachEmail}>{selectedCoach.email}</p>
          <div className={styles.coachMeta}>
            <span className={styles.metaItem}>👥 {selectedCoach.activeClients} Active Clients</span>
            <span className={styles.metaItem}>📅 Joined {selectedCoach.joinDate}</span>
            <span className={styles.metaItem}>🏋️ {selectedCoach.specialties.join(", ")}</span>
          </div>
        </div>
        <div className={styles.statusBadge}>{selectedCoach.status}</div>
      </div>

      <div className={styles.controls}>
        <div className={styles.searchContainer}>
          <Search size={18} className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search clients..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
        </div>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Client</th>
              <th>Subscription</th>
              <th>Payment Status</th>
              <th>Join Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredClients.map((client) => (
              <tr key={client.id}>
                <td>
                  <div className={styles.clientInfo}>
                    <div className={styles.clientAvatar}>{client.avatar}</div>
                    <div>
                      <div className={styles.clientName}>{client.name}</div>
                      <div className={styles.clientEmail}>{client.email}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className={`${styles.subscription} ${styles[client.subscription.toLowerCase()]}`}>
                    {client.subscription}
                  </span>
                </td>
                <td>
                  <span className={`${styles.paymentStatus} ${styles[client.paymentStatus.toLowerCase()]}`}>
                    {client.paymentStatus}
                  </span>
                </td>
                <td className={styles.joinDate}>{client.joinDate}</td>
                <td>
                  <div className={styles.actions}>
                    <button className={styles.actionBtn} title="View Profile">
                      <Eye size={16} />
                    </button>
                    <button className={styles.actionBtn} title="Message">
                      <MessageSquare size={16} />
                    </button>
                    <button className={styles.actionBtn} title="Remove Client">
                      <UserMinus size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.pagination}>
        <p className={styles.paginationText}>Showing 1 to 5 of 25 clients</p>
        <div className={styles.paginationButtons}>
          <button className={styles.pageBtn}>Previous</button>
          <button className={`${styles.pageBtn} ${styles.active}`}>1</button>
          <button className={styles.pageBtn}>2</button>
        </div>
      </div>
    </div>
  );
}

export default Coaches;