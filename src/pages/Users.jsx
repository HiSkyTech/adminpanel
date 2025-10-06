// src/pages/Users.jsx
import { Search, Plus, Edit, Trash2, MoreVertical } from "lucide-react";
import { useState } from "react";
import styles from "./Users.module.css";
import AddUser from "../components/AddUser";

function Users() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active", joinDate: "2024-01-15" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", status: "Active", joinDate: "2024-02-20" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Coach", status: "Inactive", joinDate: "2024-03-10" },
    { id: 4, name: "Alice Brown", email: "alice@example.com", role: "User", status: "Active", joinDate: "2024-04-05" },
    { id: 5, name: "Charlie Wilson", email: "charlie@example.com", role: "User", status: "Active", joinDate: "2024-05-12" },
  ]);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className={styles.users}>
        <div className={styles.header}>
          <div>
            <h2 className={styles.title}>Users Management</h2>
            <p className={styles.subtitle}>Manage and monitor all users in the system</p>
          </div>
          <button 
            className={styles.addButton}
            onClick={() => setIsAddUserModalOpen(true)}
          >
            <Plus size={18} />
            <span>Add User</span>
          </button>
        </div>

        <div className={styles.controls}>
          <div className={styles.searchContainer}>
            <Search size={18} className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
          </div>
          <div className={styles.filters}>
            <select className={styles.filterSelect}>
              <option value="">All Roles</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
              <option value="coach">Coach</option>
            </select>
            <select className={styles.filterSelect}>
              <option value="">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>

        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Join Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td className={styles.userName}>{user.name}</td>
                  <td className={styles.userEmail}>{user.email}</td>
                  <td>
                    <span className={`${styles.badge} ${styles[user.role.toLowerCase()]}`}>
                      {user.role}
                    </span>
                  </td>
                  <td>
                    <span className={`${styles.status} ${styles[user.status.toLowerCase()]}`}>
                      {user.status}
                    </span>
                  </td>
                  <td>{user.joinDate}</td>
                  <td>
                    <div className={styles.actions}>
                      <button className={styles.actionBtn} title="Edit">
                        <Edit size={16} />
                      </button>
                      <button className={styles.actionBtn} title="Delete">
                        <Trash2 size={16} />
                      </button>
                      <button className={styles.actionBtn} title="More">
                        <MoreVertical size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.pagination}>
          <p className={styles.paginationText}>Showing {filteredUsers.length} of {users.length} users</p>
          <div className={styles.paginationButtons}>
            <button className={styles.pageBtn}>Previous</button>
            <button className={`${styles.pageBtn} ${styles.active}`}>1</button>
            <button className={styles.pageBtn}>2</button>
            <button className={styles.pageBtn}>3</button>
            <button className={styles.pageBtn}>Next</button>
          </div>
        </div>
      </div>

      {/* Add User Modal */}
      <AddUser 
        isOpen={isAddUserModalOpen}
        onClose={() => setIsAddUserModalOpen(false)}
      />
    </>
  );
}

export default Users;