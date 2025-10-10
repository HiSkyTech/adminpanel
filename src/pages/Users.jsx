import React, { useState } from 'react';
import styles from './Users.module.css';
import {
  ArrowLeft,
  Search,
  Users as UsersIcon,
  Mail,
  Calendar,
  RefreshCw,
  MessageSquare,
  UserPlus
} from 'lucide-react';

export default function Users() {
  const [selectedCoach] = useState({
    name: 'Alex Johnson',
    email: 'alex.johnson@coachcorp.com',
    activeClients: 25,
    joinedDate: 'March 2024',
    tags: ['Readability', 'CrossFit']
  });

  const clients = [
    {
      id: 1,
      name: 'Michael Brown',
      email: 'michael.brown@email.com',
      subscription: 'Premium',
      paymentStatus: 'Paid',
      joinDate: '2024-01-15',
      avatar: 'MB'
    },
    {
      id: 2,
      name: 'Sarah Wilson',
      email: 'sarah.wilson@email.com',
      subscription: 'Basic',
      paymentStatus: 'Pending',
      joinDate: '2024-02-28',
      avatar: 'SW'
    },
    {
      id: 3,
      name: 'James Davis',
      email: 'james.davis@email.com',
      subscription: 'Premium',
      paymentStatus: 'Paid',
      joinDate: '2023-12-10',
      avatar: 'JD'
    },
    {
      id: 4,
      name: 'Lisa Martinez',
      email: 'lisa.martinez@email.com',
      subscription: 'Basic',
      paymentStatus: 'Overdue',
      joinDate: '2024-03-05',
      avatar: 'LM'
    },
    {
      id: 5,
      name: 'Robert Taylor',
      email: 'robert.taylor@email.com',
      subscription: 'Premium',
      paymentStatus: 'Paid',
      joinDate: '2024-01-22',
      avatar: 'RT'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Paid':
        return 'bg-emerald-500/20 text-emerald-400';
      case 'Pending':
        return 'bg-amber-500/20 text-amber-400';
      case 'Overdue':
        return 'bg-red-500/20 text-red-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getSubscriptionColor = (subscription) => {
    return subscription === 'Premium'
      ? 'bg-amber-500/20 text-amber-400'
      : 'bg-blue-500/20 text-blue-400';
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <button className={styles.backButton}>
              <ArrowLeft className={styles.iconSmall} />
            </button>
            <div>
              <h1 className={styles.title}>Coach Clients</h1>
              <p className={styles.subtitle}>
                View and manage all clients under selected coach.
              </p>
            </div>
          </div>
          <button className={styles.switchCoach}>Switch Coach</button>
        </div>

        {/* Coach Info Card */}
        <div className={styles.coachCard}>
          <div className={styles.coachHeader}>
            <div className={styles.coachInfo}>
              <div className={styles.avatar}>AJ</div>
              <div>
                <h2 className={styles.coachName}>{selectedCoach.name}</h2>
                <p className={styles.coachEmail}>
                  <Mail className={styles.iconSmall} />
                  {selectedCoach.email}
                </p>
                <div className={styles.coachMeta}>
                  <span className={styles.metaItem}>
                    <UsersIcon className={styles.iconAccent} />
                    {selectedCoach.activeClients} Active Clients
                  </span>
                  <span className={styles.metaItem}>
                    <Calendar className={styles.iconAccent} />
                    Joined {selectedCoach.joinedDate}
                  </span>
                  <div className={styles.tags}>
                    {selectedCoach.tags.map((tag, idx) => (
                      <span key={idx} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <button className={styles.activeCoach}>Active Coach</button>
          </div>
        </div>

        {/* Search Bar */}
        <div className={styles.searchContainer}>
          <div className={styles.searchWrapper}>
            <Search className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search clients..."
              className={styles.searchInput}
            />
          </div>
        </div>

        {/* Clients Table */}
        <div className={styles.tableContainer}>
          <div className={styles.tableWrapper}>
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
                {clients.map((client) => (
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
                      <span className={`${styles.badge} ${getSubscriptionColor(client.subscription)}`}>
                        {client.subscription}
                      </span>
                    </td>
                    <td>
                      <span className={`${styles.badge} ${getStatusColor(client.paymentStatus)}`}>
                        {client.paymentStatus}
                      </span>
                    </td>
                    <td>{client.joinDate}</td>
                    <td>
                      <div className={styles.actions}>
                        <button className={styles.actionBtn}>
                          <RefreshCw className={styles.iconGray} />
                        </button>
                        <button className={styles.actionBtn}>
                          <MessageSquare className={styles.iconGray} />
                        </button>
                        <button className={styles.actionBtn}>
                          <UserPlus className={styles.iconGray} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className={styles.pagination}>
            <span>Showing 1 to 5 of 25 clients</span>
            <div className={styles.pages}>
              <button className={styles.pageBtn}>Previous</button>
              <button className={styles.pageActive}>1</button>
              <button className={styles.pageBtn}>2</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
