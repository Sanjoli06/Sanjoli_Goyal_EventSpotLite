
// src/components/CategoryTabs.jsx
import React from 'react';

const CategoryTabs = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="category-tabs">
      {categories.map(category => (
        <button
          key={category}
          className={selectedCategory === category ? 'active' : ''}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
