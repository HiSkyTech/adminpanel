import React, { useState } from 'react';
import { Search, Clock, Flame, TrendingUp, Plus, X } from 'lucide-react';
import styles from './Exercise.module.css';
import { useNavigate } from "react-router-dom";


export default function Exercise() {
  const navigate = useNavigate();

  const [selectedFilters, setSelectedFilters] = useState(['Strength']);
  const [sortBy, setSortBy] = useState('newest');

  const exercises = [
    {
      id: 1,
      name: 'Barbell Squat',
      description: 'Compound lower body exercise targeting quads, glutes, and core muscles',
      duration: '45 mins',
      difficulty: 'Intermediate',
      calories: 350,
      category: 'Strength',
      tag: 'Lower Body',
      image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 2,
      name: 'HIIT Cardio Blast',
      description: 'High-intensity interval training for maximum calorie burn and endurance',
      duration: '30 mins',
      difficulty: 'Advanced',
      calories: 420,
      category: 'Cardio',
      tag: 'Full Body',
      image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      id: 3,
      name: 'Yoga Flow Sequence',
      description: 'Gentle flowing movements to improve flexibility and reduce stress',
      duration: '60 mins',
      difficulty: 'Beginner',
      calories: 180,
      category: 'Flexibility',
      tag: 'Full Body',
      image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      id: 4,
      name: 'Deadlift Mastery',
      description: 'Perfect your deadlift form with progressive loading and technique drills',
      duration: '50 mins',
      difficulty: 'Advanced',
      calories: 380,
      category: 'Strength',
      tag: 'Lower Body',
      image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      id: 5,
      name: 'Core Power Circuit',
      description: 'Intense core workout targeting abs, obliques, and lower back stability',
      duration: '25 mins',
      difficulty: 'Intermediate',
      calories: 220,
      category: 'Strength',
      tag: 'Core',
      image: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
    },
    {
      id: 6,
      name: 'Swimming Intervals',
      description: 'Pool-based cardio workout with varied strokes and intensity levels',
      duration: '40 mins',
      difficulty: 'Intermediate',
      calories: 310,
      category: 'Cardio',
      tag: 'Full Body',
      image: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    }
  ];

  const filterOptions = ['Strength', 'Cardio', 'Flexibility', 'HIIT'];

  const toggleFilter = (filter) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter(f => f !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  const clearFilters = () => {
    setSelectedFilters([]);
  };

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Beginner': return styles.difficultyBeginner;
      case 'Intermediate': return styles.difficultyIntermediate;
      case 'Advanced': return styles.difficultyAdvanced;
      default: return styles.difficultyDefault;
    }
  };

  const filteredExercises = selectedFilters.length > 0
    ? exercises.filter(ex => selectedFilters.includes(ex.category))
    : exercises;

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* Header */}
        <div className={styles.header}>
          <div>
            <h1 className={styles.title}>Exercise Library</h1>
            <p className={styles.subtitle}>
              Manage and browse all exercises available for coaches to use in client workout plans.
            </p>
          </div>
          <button
  className={styles.addButton}
  onClick={() => navigate('/exercise/add-exercise')}
>
  <Plus className={styles.iconSmall} />
  Add Exercise
</button>

        </div>

        {/* Search and Filters */}
        <div className={styles.filtersSection}>
          <div className={styles.filtersRow}>
            <div className={styles.searchContainer}>
              <Search className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Search exercises..."
                className={styles.searchInput}
              />
            </div>
            <select 
              className={styles.select}
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="newest">All Categories</option>
              <option value="popular">Popular</option>
              <option value="duration">By Duration</option>
            </select>
            <select className={styles.select}>
              <option>All Prep Times</option>
              <option>Quick (0-30 mins)</option>
              <option>Medium (30-60 mins)</option>
              <option>Long (60+ mins)</option>
            </select>
            <select className={styles.select}>
              <option>All Difficulty Levels</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>

          {/* Filter Pills */}
          <div className={styles.filterPills}>
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => toggleFilter(filter)}
                className={`${styles.filterPill} ${
                  selectedFilters.includes(filter)
                    ? styles.filterPillActive
                    : styles.filterPillInactive
                }`}
              >
                {filter}
              </button>
            ))}
            {selectedFilters.length > 0 && (
              <button
                onClick={clearFilters}
                className={styles.clearButton}
              >
                <X className={styles.iconSmall} />
                Clear All
              </button>
            )}
          </div>
        </div>

        {/* Results Count and Sort */}
        <div className={styles.resultsHeader}>
          <p className={styles.resultsText}>
            Showing {filteredExercises.length} of {exercises.length} exercises
          </p>
          <select 
            className={styles.sortSelect}
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="newest">Sort by: Newest</option>
            <option value="popular">Sort by: Popular</option>
            <option value="duration">Sort by: Duration</option>
            <option value="difficulty">Sort by: Difficulty</option>
          </select>
        </div>

        {/* Exercise Grid */}
        <div className={styles.grid}>
          {filteredExercises.map((exercise) => (
            <div key={exercise.id} className={styles.card}>
              {/* Exercise Image/Gradient */}
              <div 
                className={styles.imageContainer}
                style={{ background: exercise.image }}
              >
                <div className={styles.tag}>
                  {exercise.tag}
                </div>
                <div className={styles.overlay}></div>
              </div>

              {/* Exercise Details */}
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>
                  {exercise.name}
                </h3>
                <p className={styles.cardDescription}>
                  {exercise.description}
                </p>

                {/* Stats */}
                <div className={styles.stats}>
                  <span className={styles.stat}>
                    <Clock className={styles.iconSmall} />
                    {exercise.duration}
                  </span>
                  <span className={styles.stat}>
                    <Flame className={styles.iconSmall} />
                    {exercise.calories} cal
                  </span>
                </div>

                {/* Tags */}
                <div className={styles.tagsRow}>
                  <span className={`${styles.badge} ${getDifficultyColor(exercise.difficulty)}`}>
                    {exercise.difficulty}
                  </span>
                  <button className={styles.actionButton}>
                    <TrendingUp className={styles.iconSmall} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}