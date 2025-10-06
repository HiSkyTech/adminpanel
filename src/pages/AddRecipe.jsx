// src/pages/AddRecipe.jsx
import { Upload, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AddRecipe.module.css";

function AddRecipe() {
  const navigate = useNavigate();
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);

  const categories = [
    { icon: "🍳", name: "Breakfast", count: 23 },
    { icon: "🍱", name: "Lunch", count: 32 },
    { icon: "🍽️", name: "Dinner", count: 28 },
    { icon: "🍿", name: "Snacks", count: 15 }
  ];

  const recentRecipes = [
    { name: "Grilled Chicken Salad", category: "Lunch", calories: "380 cal" },
    { name: "Berry Protein Bowl", category: "Breakfast", calories: "" }
  ];

  const addIngredient = () => {
    setIngredients([...ingredients, { name: "", amount: "", unit: "cups" }]);
  };

  const addInstruction = () => {
    setInstructions([...instructions, ""]);
  };

  return (
    <div className={styles.addRecipe}>
      <div className={styles.mainSection}>
        <div className={styles.header}>
          <h2 className={styles.title}>Add New Recipe</h2>
        </div>

        <form className={styles.form}>
          <div className={styles.row}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Recipe Name</label>
              <input
                type="text"
                placeholder="Enter recipe name"
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Category</label>
              <select className={styles.select}>
                <option>Select category</option>
                <option>Breakfast</option>
                <option>Lunch</option>
                <option>Dinner</option>
                <option>Snacks</option>
              </select>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Prep Time (mins)</label>
              <input type="number" placeholder="15" className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Cook Time (mins)</label>
              <input type="number" placeholder="20" className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Servings</label>
              <input type="number" placeholder="4" className={styles.input} />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Recipe Image</label>
            <div className={styles.uploadBox}>
              <Upload size={32} className={styles.uploadIcon} />
              <p>Click to upload or drag and drop</p>
              <span>Max. file size: 10 MB</span>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Description</label>
            <textarea
              placeholder="Brief description of the recipe..."
              className={styles.textarea}
              rows={3}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Ingredients</label>
            {ingredients.map((ing, idx) => (
              <div key={idx} className={styles.ingredientRow}>
                <input
                  type="text"
                  placeholder="Ingredient name"
                  className={styles.input}
                />
                <input
                  type="text"
                  placeholder="Amount"
                  className={styles.inputSmall}
                />
                <select className={styles.selectSmall}>
                  <option>cups</option>
                  <option>tbsp</option>
                  <option>tsp</option>
                  <option>grams</option>
                </select>
                <button type="button" className={styles.deleteBtn}>
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
            <button
              type="button"
              className={styles.addBtn}
              onClick={addIngredient}
            >
              <Plus size={16} />
              Add Ingredient
            </button>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Instructions</label>
            {instructions.map((inst, idx) => (
              <div key={idx} className={styles.instructionRow}>
                <span className={styles.stepNumber}>{idx + 1}</span>
                <input
                  type="text"
                  placeholder="step 1 instructions..."
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
              onClick={addInstruction}
            >
              <Plus size={16} />
              Add Step
            </button>
          </div>

          <div className={styles.nutritionRow}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Calories</label>
              <input type="number" placeholder="350" className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Protein (g)</label>
              <input type="number" placeholder="25" className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Carbs (g)</label>
              <input type="number" placeholder="30" className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Fat (g)</label>
              <input type="number" placeholder="15" className={styles.input} />
            </div>
          </div>

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.cancelBtn}
              onClick={() => navigate('/food-plans')}
            >
              Cancel
            </button>
            <button type="submit" className={styles.saveBtn}>
              Save Recipe
            </button>
          </div>
        </form>
      </div>

      <div className={styles.sidebar}>
        <div className={styles.sidebarSection}>
          <h3 className={styles.sidebarTitle}>Recipe Categories</h3>
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
          <h3 className={styles.sidebarTitle}>Recent Recipes</h3>
          {recentRecipes.map((recipe, idx) => (
            <div key={idx} className={styles.recentItem}>
              <div className={styles.recipeThumb} />
              <div className={styles.recipeInfo}>
                <p className={styles.recipeName}>{recipe.name}</p>
                <p className={styles.recipeCategory}>{recipe.category} {recipe.calories}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AddRecipe;