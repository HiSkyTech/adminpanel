import React, { useState } from 'react';
import styles from './Coaches.module.css';
import RegisterCoachModal from '../components/RegisterCoachModal';

const Coaches = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const coaches = [
    {
      id: 1,
      name: 'Alex Johnson',
      email: 'alex.johnson@coachcorp.com',
      clients: 26,
      dateJoined: '2024-03-15',
      status: 'Active',
      avatar: 'AJ'
    },
    {
      id: 2,
      name: 'Maria Garcia',
      email: 'maria.garcia@coachcorp.com',
      clients: 18,
      dateJoined: '2024-01-20',
      status: 'Active',
      avatar: 'MG'
    },
    {
      id: 3,
      name: 'David Smith',
      email: 'david.smith@coachcorp.com',
      clients: 32,
      dateJoined: '2023-11-08',
      status: 'Suspended',
      avatar: 'DS'
    },
    {
      id: 4,
      name: 'Emily White',
      email: 'emily.white@coachcorp.com',
      clients: 22,
      dateJoined: '2023-09-10',
      status: 'Active',
      avatar: 'EW'
    }
  ];

  const filteredCoaches = coaches.filter(coach =>
    coach.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    coach.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>Manage Coaches</h1>
          <p className={styles.subtitle}>Register new coaches and manage existing ones.</p>
        </div>
        <div className={styles.headerActions}>
          <div className={styles.searchBox}>
            <svg className={styles.searchIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
            <input
              type="text"
              placeholder="Search coaches..."
              className={styles.searchInput}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className={styles.registerBtn} onClick={handleOpenModal}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <line x1="19" y1="8" x2="19" y2="14"></line>
              <line x1="22" y1="11" x2="16" y2="11"></line>
            </svg>
            Register Coach
          </button>
        </div>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Coach</th>
              <th>Clients</th>
              <th>Date Joined</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCoaches.map((coach) => (
              <tr key={coach.id}>
                <td>
                  <div className={styles.coachInfo}>
                    <div className={styles.avatar}>{coach.avatar}</div>
                    <div className={styles.coachDetails}>
                      <div className={styles.coachName}>{coach.name}</div>
                      <div className={styles.coachEmail}>{coach.email}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className={styles.clientCount}>{coach.clients}</span>
                </td>
                <td>
                  <span className={styles.dateText}>{coach.dateJoined}</span>
                </td>
                <td>
                  <span className={`${styles.statusBadge} ${styles[coach.status.toLowerCase()]}`}>
                    {coach.status}
                  </span>
                </td>
                <td>
                  <div className={styles.actions}>
                    <button className={styles.actionBtn} title="Edit">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                      </svg>
                    </button>
                    <button className={styles.actionBtn} title="Message">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                      </svg>
                    </button>
                    <button className={styles.actionBtn} title="More">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="12" cy="5" r="1"></circle>
                        <circle cx="12" cy="19" r="1"></circle>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.footer}>
        <span className={styles.footerText}>Showing 1 to 4 of 16 entries</span>
        <div className={styles.pagination}>
          <button className={styles.pageBtn}>Previous</button>
          <button className={`${styles.pageBtn} ${styles.active}`}>1</button>
          <button className={styles.pageBtn}>2</button>
          <button className={styles.pageBtn}>3</button>
          <button className={styles.pageBtn}>Next</button>
        </div>
      </div>

      {/* Register Coach Modal */}
      <RegisterCoachModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </div>
  );
};

export default Coaches;