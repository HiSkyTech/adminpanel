// src/pages/FoodPlans.jsx
import { Search, Plus, Clock, Users, Flame } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FoodPlans.module.css";

function FoodPlans() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("High Protein");

  const recipes = [
    {
      id: 1,
      name: "Grilled Chicken Salad",
      description: "Fresh mixed greens with grilled chicken breast and balsamic vinaigrette",
      image: "/recipes/chicken-salad.jpg",
      category: "Lunch",
      prepTime: "25 mins",
      servings: 2,
      calories: "380 cal",
      tags: ["High Protein", "Low Carb"]
    },
    {
      id: 2,
      name: "Berry Protein Bowl",
      description: "Protein-packed smoothie bowl topped with fresh berries and granola",
      image: "/recipes/berry-bowl.jpg",
      category: "Breakfast",
      prepTime: "10 mins",
      servings: 1,
      calories: "320 cal",
      tags: ["High Protein"]
    },
    {
      id: 3,
      name: "Quinoa Salmon Bowl",
      description: "Baked salmon with quinoa and roasted vegetables",
      image: "/recipes/salmon-bowl.jpg",
      category: "Dinner",
      prepTime: "35 mins",
      servings: 2,
      calories: "450 cal",
      tags: ["High Protein"]
    },
    {
      id: 4,
      name: "Avocado Toast",
      description: "Whole grain toast topped with smashed avocado and poached eggs",
      image: "/recipes/avocado-toast.jpg",
      category: "Breakfast",
      prepTime: "15 mins",
      servings: 1,
      calories: "340 cal",
      tags: ["High Protein"]
    },
    {
      id: 5,
      name: "Greek Yogurt Parfait",
      description: "Layered Greek yogurt with fresh berries and homemade granola",
      image: "/recipes/yogurt-parfait.jpg",
      category: "Snack",
      prepTime: "10 mins",
      servings: 1,
      calories: "280 cal",
      tags: ["High Protein"]
    }
  ];

  const filteredRecipes = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    recipe.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.foodPlans}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.title}>Recipe Library</h2>
          <p className={styles.subtitle}>Manage and browse all recipes available for coaches to use in client meal plans.</p>
        </div>
        <button 
          className={styles.addButton}
          onClick={() => navigate('/food-plans/add-recipe')}
        >
          <Plus size={18} />
          <span>Add Recipe</span>
        </button>
      </div>

      <div className={styles.controls}>
        <div className={styles.searchContainer}>
          <Search size={18} className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search recipes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
        </div>
        <div className={styles.filters}>
          <select className={styles.filterSelect}>
            <option value="">All Categories</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="snack">Snack</option>
          </select>
          <select className={styles.filterSelect}>
            <option value="">All Prep Times</option>
            <option value="quick">Under 15 mins</option>
            <option value="medium">15-30 mins</option>
            <option value="long">Over 30 mins</option>
          </select>
          <select className={styles.filterSelect}>
            <option value="">All Nutrition Types</option>
            <option value="highprotein">High Protein</option>
            <option value="lowcarb">Low Carb</option>
            <option value="lowfat">Low Fat</option>
          </select>
          <button className={styles.clearBtn}>✕ Clear All</button>
        </div>
      </div>

      <div className={styles.tags}>
        {["High Protein", "Low Carb", "Quick Meals", "Breakfast"].map(tag => (
          <button
            key={tag}
            className={`${styles.tag} ${activeFilter === tag ? styles.active : ''}`}
            onClick={() => setActiveFilter(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className={styles.recipeCount}>
        Showing {filteredRecipes.length} of 100 recipes
      </div>

      <div className={styles.recipeGrid}>
        {filteredRecipes.map((recipe) => (
          <div key={recipe.id} className={styles.recipeCard}>
            <div className={styles.recipeImage}>
              <span className={styles.categoryBadge}>{recipe.category}</span>
            </div>
            <div className={styles.recipeContent}>
              <h3 className={styles.recipeName}>{recipe.name}</h3>
              <p className={styles.recipeDescription}>{recipe.description}</p>
              <div className={styles.recipeMeta}>
                <span className={styles.metaItem}>
                  <Clock size={14} />
                  {recipe.prepTime}
                </span>
                <span className={styles.metaItem}>
                  <Users size={14} />
                  {recipe.servings} servings
                </span>
                <span className={styles.metaItem}>
                  <Flame size={14} />
                  {recipe.calories}
                </span>
              </div>
              <div className={styles.recipeFooter}>
                <span className={styles.proteinTag}>{recipe.tags[0]}</span>
                {recipe.tags[1] && <span className={styles.carbTag}>{recipe.tags[1]}</span>}
                <button className={styles.editBtn}>✎</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodPlans;