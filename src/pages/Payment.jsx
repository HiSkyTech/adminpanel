import React, { useState } from 'react';
import { DollarSign, TrendingUp, CreditCard, Clock, Eye, Filter, FileText } from 'lucide-react';
import styles from './Payment.module.css';

export default function Payment() {
  const [timeRange, setTimeRange] = useState('Last 30 Days');

  const stats = [
    {
      id: 1,
      icon: DollarSign,
      title: 'Total Revenue',
      value: '$45,890',
      change: '+12.5%',
      changePositive: true,
      bgColor: styles.stat1Bg,
      iconColor: styles.stat1Icon
    },
    {
      id: 2,
      icon: TrendingUp,
      title: 'Coach Payouts',
      value: '$32,123',
      change: '+8.3%',
      changePositive: true,
      bgColor: styles.stat2Bg,
      iconColor: styles.stat2Icon
    },
    {
      id: 3,
      icon: CreditCard,
      title: 'Platform Earnings',
      value: '$13,767',
      change: '+16.2%',
      changePositive: true,
      bgColor: styles.stat3Bg,
      iconColor: styles.stat3Icon
    },
    {
      id: 4,
      icon: Clock,
      title: 'Pending Payments',
      value: '$2,450',
      change: '5 Pending',
      changePositive: false,
      bgColor: styles.stat4Bg,
      iconColor: styles.stat4Icon
    }
  ];

  const coaches = [
    {
      id: 1,
      name: 'Alex Johnson',
      clients: '28 clients',
      earnings: '$8,450',
      period: 'This month',
      avatar: 'AJ',
      avatarColor: styles.avatar1
    },
    {
      id: 2,
      name: 'Maria Garcia',
      clients: '31 clients',
      earnings: '$9,230',
      period: 'This month',
      avatar: 'MG',
      avatarColor: styles.avatar2
    },
    {
      id: 3,
      name: 'David Lee',
      clients: '22 clients',
      earnings: '$7,890',
      period: 'This month',
      avatar: 'DL',
      avatarColor: styles.avatar3
    }
  ];

  const transactions = [
    {
      id: 1,
      type: 'Client Payment',
      description: 'Emma Wilson - Premium Plan',
      amount: '+$149.99',
      date: '2025-03-15',
      status: 'Completed',
      statusColor: styles.statusCompleted,
      icon: DollarSign,
      iconBg: styles.iconBg1,
      iconColor: styles.iconColor1,
      isPositive: true
    },
    {
      id: 2,
      type: 'Coach Payout',
      description: 'Alex Johnson - Monthly Earnings',
      amount: '-$2,340.00',
      date: '2025-03-14',
      status: 'Processing',
      statusColor: styles.statusProcessing,
      icon: TrendingUp,
      iconBg: styles.iconBg2,
      iconColor: styles.iconColor2,
      isPositive: false
    },
    {
      id: 3,
      type: 'Refund Issued',
      description: 'David Wilson - Basic Plan',
      amount: '-$79.99',
      date: '2025-03-13',
      status: 'Completed',
      statusColor: styles.statusCompleted,
      icon: CreditCard,
      iconBg: styles.iconBg3,
      iconColor: styles.iconColor3,
      isPositive: false
    }
  ];

  // Chart data for Revenue Trend
  const chartData = [
    { value: 6.5, highlight: false },
    { value: 4.2, highlight: false },
    { value: 7.8, highlight: false },
    { value: 3.9, highlight: false },
    { value: 8.4, highlight: true },
    { value: 5.1, highlight: false },
    { value: 7.2, highlight: false },
    { value: 9.1, highlight: false },
    { value: 4.8, highlight: false },
    { value: 6.9, highlight: false }
  ];

  const maxValue = Math.max(...chartData.map(d => d.value));

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* Header */}
        <div className={styles.header}>
          <div>
            <h1 className={styles.title}>Payment Monitoring</h1>
            <p className={styles.subtitle}>
              Track revenue, coach payouts, and financial performance.
            </p>
          </div>
          <div className={styles.headerControls}>
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className={styles.timeSelect}
            >
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>Last 90 Days</option>
              <option>This Year</option>
            </select>
            <button className={styles.exportButton}>
              <FileText className={styles.iconSmall} />
              Export Report
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className={styles.statsGrid}>
          {stats.map((stat) => (
            <div key={stat.id} className={styles.statCard}>
              <div className={styles.statHeader}>
                <div className={`${styles.statIcon} ${stat.bgColor}`}>
                  <stat.icon className={`${styles.statIconSvg} ${stat.iconColor}`} />
                </div>
                <span className={`${styles.statChange} ${
                  stat.changePositive ? styles.changePositive : styles.changeNegative
                }`}>
                  {stat.change}
                </span>
              </div>
              <h3 className={styles.statValue}>{stat.value}</h3>
              <p className={styles.statTitle}>{stat.title}</p>
            </div>
          ))}
        </div>

        {/* Charts Row */}
        <div className={styles.chartsRow}>
          {/* Revenue Trend Chart */}
          <div className={styles.chartCard}>
            <h2 className={styles.chartTitle}>Revenue Trend</h2>
            <div className={styles.chartContainer}>
              {chartData.map((data, index) => (
                <div key={index} className={styles.chartBarWrapper}>
                  <div className={styles.chartPoint} style={{ bottom: `${(data.value / maxValue) * 100}%` }}></div>
                  <div 
                    className={`${styles.chartBar} ${data.highlight ? styles.chartBarHighlight : styles.chartBarNormal}`}
                    style={{ height: `${(data.value / maxValue) * 200}px` }}
                  ></div>
                </div>
              ))}
            </div>
            <div className={styles.chartLabels}>
              <span>$ 0</span>
              <span>$ 5k</span>
              <span>$ 10k</span>
            </div>
          </div>

          {/* Coach Performance */}
          <div className={styles.coachCard}>
            <h2 className={styles.chartTitle}>Coach Performance</h2>
            <div className={styles.coachList}>
              {coaches.map((coach) => (
                <div key={coach.id} className={styles.coachItem}>
                  <div className={styles.coachInfo}>
                    <div className={`${styles.coachAvatar} ${coach.avatarColor}`}>
                      {coach.avatar}
                    </div>
                    <div>
                      <h3 className={styles.coachName}>{coach.name}</h3>
                      <p className={styles.coachClients}>{coach.clients}</p>
                    </div>
                  </div>
                  <div className={styles.coachEarnings}>
                    <p className={styles.earningsAmount}>{coach.earnings}</p>
                    <p className={styles.earningsPeriod}>{coach.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className={styles.transactionsCard}>
          <div className={styles.transactionsHeader}>
            <h2 className={styles.transactionsTitle}>Recent Transactions</h2>
            <button className={styles.filterButton}>
              <Filter className={styles.iconMedium} />
            </button>
          </div>

          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr className={styles.tableHeaderRow}>
                  <th className={styles.tableHeader}>Transaction</th>
                  <th className={styles.tableHeader}>Type</th>
                  <th className={styles.tableHeader}>Amount</th>
                  <th className={styles.tableHeader}>Date</th>
                  <th className={styles.tableHeader}>Status</th>
                  <th className={styles.tableHeader}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr key={transaction.id} className={styles.tableRow}>
                    <td className={styles.tableCell}>
                      <div className={styles.transactionInfo}>
                        <div className={`${styles.transactionIcon} ${transaction.iconBg}`}>
                          <transaction.icon className={`${styles.transactionIconSvg} ${transaction.iconColor}`} />
                        </div>
                        <div>
                          <div className={styles.transactionType}>{transaction.type}</div>
                          <div className={styles.transactionDescription}>{transaction.description}</div>
                        </div>
                      </div>
                    </td>
                    <td className={styles.tableCell}>
                      <span className={`${styles.typeBadge} ${
                        transaction.type.includes('Payment') ? styles.typePayment :
                        transaction.type.includes('Payout') ? styles.typePayout :
                        styles.typeRefund
                      }`}>
                        {transaction.type.split(' ')[0]}
                      </span>
                    </td>
                    <td className={styles.tableCell}>
                      <span className={`${styles.amount} ${
                        transaction.isPositive ? styles.amountPositive : styles.amountNegative
                      }`}>
                        {transaction.amount}
                      </span>
                    </td>
                    <td className={styles.tableCell}>
                      <span className={styles.date}>{transaction.date}</span>
                    </td>
                    <td className={styles.tableCell}>
                      <span className={`${styles.statusBadge} ${transaction.statusColor}`}>
                        {transaction.status}
                      </span>
                    </td>
                    <td className={styles.tableCell}>
                      <button className={styles.actionButton}>
                        <Eye className={styles.iconSmall} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className={styles.pagination}>
            <span className={styles.paginationText}>Showing 1 to 3 of 45 transactions</span>
            <div className={styles.paginationButtons}>
              <button className={styles.paginationButton}>
                Previous
              </button>
              <button className={styles.paginationButtonActive}>
                1
              </button>
              <button className={styles.paginationButton}>
                2
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}