
// src/pages/AddExercise.jsx
import { Upload, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AddRecipe.module.css"; // ✅ reuse same styles

function AddExercise() {
  const navigate = useNavigate();
  const [equipment, setEquipment] = useState([]);
  const [steps, setSteps] = useState([]);

  const categories = [
    { icon: "🏋️", name: "Strength", count: 23 },
    { icon: "🏃", name: "Cardio", count: 32 },
    { icon: "🧘", name: "Flexibility", count: 28 },
    { icon: "🔥", name: "HIIT", count: 15 },
  ];

  const recentExercises = [
    { name: "Barbell Squat", category: "Strength", duration: "45 mins" },
    { name: "HIIT Cardio Blast", category: "Cardio", duration: "30 mins" },
  ];

  const addEquipment = () => {
    setEquipment([...equipment, { name: "", amount: "", unit: "" }]);
  };

  const addStep = () => {
    setSteps([...steps, ""]);
  };

  return (
    <div className={styles.addRecipe}>
      <div className={styles.mainSection}>
        <div className={styles.header}>
          <h2 className={styles.title}>Add New Exercise</h2>
        </div>

        <form className={styles.form}>
          <div className={styles.row}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Exercise Name</label>
              <input
                type="text"
                placeholder="Enter exercise name"
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Category</label>
              <select className={styles.select}>
                <option>Select category</option>
                <option>Strength</option>
                <option>Cardio</option>
                <option>Flexibility</option>
                <option>HIIT</option>
              </select>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Duration (mins)</label>
              <input type="number" placeholder="30" className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Calories Burned</label>
              <input type="number" placeholder="250" className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Difficulty</label>
              <select className={styles.select}>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Exercise Image</label>
            <div className={styles.uploadBox}>
              <Upload size={32} className={styles.uploadIcon} />
              <p>Click to upload or drag and drop</p>
              <span>Max. file size: 10 MB</span>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Description</label>
            <textarea
              placeholder="Brief description of the exercise..."
              className={styles.textarea}
              rows={3}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Equipment Used</label>
            {equipment.map((eq, idx) => (
              <div key={idx} className={styles.ingredientRow}>
                <input
                  type="text"
                  placeholder="Equipment name"
                  className={styles.input}
                />
                <button type="button" className={styles.deleteBtn}>
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
            <button
              type="button"
              className={styles.addBtn}
              onClick={addEquipment}
            >
              <Plus size={16} />
              Add Equipment
            </button>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Exercise Steps</label>
            {steps.map((step, idx) => (
              <div key={idx} className={styles.instructionRow}>
                <span className={styles.stepNumber}>{idx + 1}</span>
                <input
                  type="text"
                  placeholder={`Step ${idx + 1} instructions...`}
                  className={styles.input}
                />
                <button type="button" className={styles.deleteBtn}>
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
            <button type="button" className={styles.addBtn} onClick={addStep}>
              <Plus size={16} />
              Add Step
            </button>
          </div>

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.cancelBtn}
              onClick={() => navigate("/exercise")}
            >
              Cancel
            </button>
            <button type="submit" className={styles.saveBtn}>
              Save Exercise
            </button>
          </div>
        </form>
      </div>

      <div className={styles.sidebar}>
        <div className={styles.sidebarSection}>
          <h3 className={styles.sidebarTitle}>Exercise Categories</h3>
          {categories.map((cat) => (
            <div key={cat.name} className={styles.categoryItem}>
              <div className={styles.categoryInfo}>
                <span className={styles.categoryIcon}>{cat.icon}</span>
                <span className={styles.categoryName}>{cat.name}</span>
              </div>
              <span className={styles.categoryCount}>{cat.count}</span>
            </div>
          ))}
        </div>

        <div className={styles.sidebarSection}>
          <h3 className={styles.sidebarTitle}>Recent Exercises</h3>
          {recentExercises.map((ex, idx) => (
            <div key={idx} className={styles.recentItem}>
              <div className={styles.recipeThumb} />
              <div className={styles.recipeInfo}>
                <p className={styles.recipeName}>{ex.name}</p>
                <p className={styles.recipeCategory}>
                  {ex.category} {ex.duration}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AddExercise;
