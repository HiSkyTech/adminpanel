// src/pages/Exercise.jsx
import { Search, Plus, Edit, Trash2, Eye, Dumbbell } from "lucide-react";
import { useState } from "react";
import styles from "./Exercise.module.css";

function Exercise() {
  const [searchQuery, setSearchQuery] = useState("");
  const [exercises, setExercises] = useState([
    { 
      id: 1, 
      name: "Bench Press", 
      category: "Strength", 
      bodyPart: "Chest", 
      difficulty: "Intermediate", 
      equipment: "Barbell", 
      duration: "30 min", 
      status: "Active",
      createdDate: "2024-01-15" 
    },
    { 
      id: 2, 
      name: "Running", 
      category: "Cardio", 
      bodyPart: "Full Body", 
      difficulty: "Beginner", 
      equipment: "None", 
      duration: "45 min", 
      status: "Active",
      createdDate: "2024-02-20" 
    },
    { 
      id: 3, 
      name: "Deadlift", 
      category: "Strength", 
      bodyPart: "Back", 
      difficulty: "Advanced", 
      equipment: "Barbell", 
      duration: "40 min", 
      status: "Active",
      createdDate: "2024-03-10" 
    },
    { 
      id: 4, 
      name: "Yoga Flow", 
      category: "Flexibility", 
      bodyPart: "Full Body", 
      difficulty: "Beginner", 
      equipment: "Mat", 
      duration: "60 min", 
      status: "Active",
      createdDate: "2024-04-05" 
    },
    { 
      id: 5, 
      name: "Squats", 
      category: "Strength", 
      bodyPart: "Legs", 
      difficulty: "Intermediate", 
      equipment: "Barbell", 
      duration: "35 min", 
      status: "Inactive",
      createdDate: "2024-05-12" 
    },
  ]);

  const filteredExercises = exercises.filter(exercise =>
    exercise.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    exercise.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    exercise.bodyPart.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.exercise}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.title}>Exercise Management</h2>
          <p className={styles.subtitle}>Create and manage workout exercises</p>
        </div>
        <button className={styles.addButton}>
          <Plus size={18} />
          <span>Add Exercise</span>
        </button>
      </div>

      <div className={styles.controls}>
        <div className={styles.searchContainer}>
          <Search size={18} className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search exercises..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
        </div>
        <div className={styles.filters}>
          <select className={styles.filterSelect}>
            <option value="">All Categories</option>
            <option value="strength">Strength</option>
            <option value="cardio">Cardio</option>
            <option value="flexibility">Flexibility</option>
          </select>
          <select className={styles.filterSelect}>
            <option value="">All Body Parts</option>
            <option value="chest">Chest</option>
            <option value="back">Back</option>
            <option value="legs">Legs</option>
            <option value="fullbody">Full Body</option>
          </select>
          <select className={styles.filterSelect}>
            <option value="">All Difficulty</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Exercise Name</th>
              <th>Category</th>
              <th>Body Part</th>
              <th>Difficulty</th>
              <th>Equipment</th>
              <th>Duration</th>
              <th>Status</th>
              <th>Created Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredExercises.map((exercise) => (
              <tr key={exercise.id}>
                <td>{exercise.id}</td>
                <td className={styles.exerciseName}>
                  <Dumbbell size={16} className={styles.exerciseIcon} />
                  {exercise.name}
                </td>
                <td>
                  <span className={`${styles.category} ${styles[exercise.category.toLowerCase()]}`}>
                    {exercise.category}
                  </span>
                </td>
                <td className={styles.bodyPart}>{exercise.bodyPart}</td>
                <td>
                  <span className={`${styles.difficulty} ${styles[exercise.difficulty.toLowerCase()]}`}>
                    {exercise.difficulty}
                  </span>
                </td>
                <td className={styles.equipment}>{exercise.equipment}</td>
                <td className={styles.duration}>{exercise.duration}</td>
                <td>
                  <span className={`${styles.status} ${styles[exercise.status.toLowerCase()]}`}>
                    {exercise.status}
                  </span>
                </td>
                <td>{exercise.createdDate}</td>
                <td>
                  <div className={styles.actions}>
                    <button className={styles.actionBtn} title="View">
                      <Eye size={16} />
                    </button>
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
        <p className={styles.paginationText}>Showing {filteredExercises.length} of {exercises.length} exercises</p>
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

export default Exercise;