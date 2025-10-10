import React, { useState } from 'react';
import styles from './Subscription.module.css';

const Subscription = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [userFilter, setUserFilter] = useState('All Users');

  const stats = [
    {
      id: 1,
      title: 'Open Tickets',
      value: '12',
      icon: '🎫',
      iconBg: '#ef4444',
      bgColor: '#1f2937'
    },
    {
      id: 2,
      title: 'In Progress',
      value: '8',
      icon: '🔄',
      iconBg: '#f59e0b',
      bgColor: '#1f2937'
    },
    {
      id: 3,
      title: 'Resolved Today',
      value: '15',
      icon: '✓',
      iconBg: '#10b981',
      bgColor: '#1f2937'
    },
    {
      id: 4,
      title: 'Avg Response',
      value: '2.3h',
      icon: '⏱',
      iconBg: '#06b6d4',
      bgColor: '#1f2937'
    }
  ];

  const tickets = [
    {
      id: 1,
      title: 'Payment Issue',
      user: 'John Smith',
      userRole: 'Coach',
      description: 'Unable to receive payment for last month\'s coaching sessions. Getting error message...',
      time: '2 hours ago',
      priority: 'High',
      status: 'Open',
      avatar: 'JS',
      priorityColor: '#ef4444',
      statusColor: '#ef4444'
    },
    {
      id: 2,
      title: 'App Crashes on Workout',
      user: 'Sarah Wilson',
      userRole: 'Client',
      description: 'App keeps crashing when I try to start my workout routine. This has been happening...',
      time: '5 hours ago',
      priority: 'Medium',
      status: 'In Progress',
      avatar: 'SW',
      priorityColor: '#f59e0b',
      statusColor: '#f59e0b'
    },
    {
      id: 3,
      title: 'Recipe Not Loading',
      user: 'Mike Peterson',
      userRole: 'Client',
      description: 'Cannot access the meal plan recipes section. It shows loading indefinitely...',
      time: '1 day ago',
      priority: 'Low',
      status: 'Resolved',
      avatar: 'MP',
      priorityColor: '#10b981',
      statusColor: '#10b981'
    },
    {
      id: 4,
      title: 'Client Communication',
      user: 'Emma Davis',
      userRole: 'Coach',
      description: 'Having trouble sending messages to my clients. Messages appear to send but...',
      time: '2 days ago',
      priority: 'Medium',
      status: 'Open',
      avatar: 'ED',
      priorityColor: '#f59e0b',
      statusColor: '#ef4444'
    }
  ];

  const priorityData = [
    { label: 'High', value: 35, color: '#ef4444' },
    { label: 'Medium', value: 45, color: '#f59e0b' },
    { label: 'Low', value: 20, color: '#10b981' }
  ];

  const filteredTickets = tickets.filter(ticket =>
    ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ticket.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ticket.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>Customer Support</h1>
          <p className={styles.subtitle}>Manage support tickets from coaches and clients.</p>
        </div>
        <div className={styles.headerFilters}>
          <select 
            className={styles.filterSelect}
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option>All Status</option>
            <option>Open</option>
            <option>In Progress</option>
            <option>Resolved</option>
          </select>
          <select 
            className={styles.filterSelect}
            value={userFilter}
            onChange={(e) => setUserFilter(e.target.value)}
          >
            <option>All Users</option>
            <option>Coaches</option>
            <option>Clients</option>
          </select>
        </div>
      </div>

      {/* Stats Cards */}
      <div className={styles.statsGrid}>
        {stats.map((stat) => (
          <div key={stat.id} className={styles.statCard}>
            <div className={styles.statContent}>
              <div className={styles.statInfo}>
                <p className={styles.statTitle}>{stat.title}</p>
                <h2 className={styles.statValue}>{stat.value}</h2>
              </div>
              <div 
                className={styles.statIcon}
                style={{ backgroundColor: stat.iconBg }}
              >
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        {/* Support Tickets Section */}
        <div className={styles.ticketsSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Support Tickets</h2>
            <div className={styles.searchBox}>
              <svg className={styles.searchIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
              <input
                type="text"
                placeholder="Search tickets..."
                className={styles.searchInput}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.ticketsList}>
            {filteredTickets.map((ticket) => (
              <div key={ticket.id} className={styles.ticketCard}>
                <div className={styles.ticketHeader}>
                  <div className={styles.ticketUser}>
                    <div className={styles.avatar}>{ticket.avatar}</div>
                    <div className={styles.userInfo}>
                      <h3 className={styles.ticketTitle}>{ticket.title}</h3>
                      <p className={styles.userName}>
                        {ticket.user} • <span className={styles.userRole}>{ticket.userRole}</span>
                      </p>
                    </div>
                  </div>
                  <div className={styles.ticketBadges}>
                    <span 
                      className={styles.priorityBadge}
                      style={{ 
                        backgroundColor: `${ticket.priorityColor}20`,
                        color: ticket.priorityColor 
                      }}
                    >
                      {ticket.priority}
                    </span>
                    <span 
                      className={styles.statusBadge}
                      style={{ 
                        backgroundColor: `${ticket.statusColor}20`,
                        color: ticket.statusColor 
                      }}
                    >
                      {ticket.status}
                    </span>
                  </div>
                </div>
                <p className={styles.ticketDescription}>{ticket.description}</p>
                <div className={styles.ticketFooter}>
                  <span className={styles.ticketTime}>{ticket.time}</span>
                  <button className={styles.viewDetailsBtn}>View Details</button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className={styles.pagination}>
            <button className={styles.pageBtn}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button className={`${styles.pageBtn} ${styles.active}`}>1</button>
            <button className={styles.pageBtn}>2</button>
            <button className={styles.pageBtn}>3</button>
            <button className={styles.pageBtn}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className={styles.sidebar}>
          {/* Quick Actions */}
          <div className={styles.quickActions}>
            <h3 className={styles.sidebarTitle}>Quick Actions</h3>
            <button className={styles.actionBtn}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
              </svg>
              Export Reports
            </button>
            <button className={styles.settingsBtn}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M12 1v6m0 6v6m5.3-13.7 4.2 4.2M7.5 16.5l-4.2 4.2M1 12h6m6 0h6m-13.7-5.3 4.2-4.2M16.5 16.5l4.2 4.2"></path>
              </svg>
              Settings
            </button>
          </div>

          {/* Priority Distribution */}
          <div className={styles.prioritySection}>
            <h3 className={styles.sidebarTitle}>Priority Distribution</h3>
            <div className={styles.priorityChart}>
              {priorityData.map((item, index) => (
                <div key={index} className={styles.priorityItem}>
                  <div className={styles.priorityBar}>
                    <div 
                      className={styles.priorityFill}
                      style={{ 
                        width: `${item.value}%`,
                        backgroundColor: item.color 
                      }}
                    ></div>
                  </div>
                  <div className={styles.priorityInfo}>
                    <span className={styles.priorityLabel}>{item.label}</span>
                    <span 
                      className={styles.priorityValue}
                      style={{ color: item.color }}
                    >
                      {item.value}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;