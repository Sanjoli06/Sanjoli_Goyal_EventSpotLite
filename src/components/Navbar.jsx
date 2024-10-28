// // src/components/Navbar.jsx
// import React from 'react';

// const Navbar = ({ theme, toggleTheme, search, onSearchChange }) => (
//   <nav className="navbar">
//     <h1>EventSpot Lite</h1>
//     <input
//       type="text"
//       placeholder="Search events..."
//       value={search}
//       onChange={(e) => onSearchChange(e.target.value)}
//     />
//     <button onClick={toggleTheme}>
//       {theme === "light" ? "Dark Mode" : "Light Mode"}
//     </button>
//   </nav>
// );

// export default Navbar;

// src/components/Navbar.jsx
import React from 'react';

const Navbar = ({ theme, toggleTheme, search, onSearchChange }) => {
  return (
    <nav className={`navbar ${theme}`}>
      <h1>EventSpot Lite</h1>
      <input
        type="text"
        placeholder="Search events..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </nav>
  );
};

export default Navbar;
