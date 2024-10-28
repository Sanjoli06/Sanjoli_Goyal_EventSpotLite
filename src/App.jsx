// src/App.jsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import EventCard from './components/EventCard';
import CategoryTabs from './components/CategoryTabs';
import events from './data/events';
import './App.css';

const App = () => {
  const [theme, setTheme] = useState("light");
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState(null); // Manage currently selected event

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.body.className = theme;
  };

  const handleEventClick = (event) => {
    setSelectedEvent(event); // Set the selected event for modal
  };

  const closeModal = () => {
    setSelectedEvent(null); // Clear the selected event to close modal
  };

  const filteredEvents = events.filter(
    event =>
      (selectedCategory === "All" || event.category === selectedCategory) &&
      (event.name.toLowerCase().includes(search.toLowerCase()) || 
       event.location.toLowerCase().includes(search.toLowerCase()))
  );

  const categories = ["All", "Music", "Art", "Food"];

  return (
    <div className={`App ${theme}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} search={search} onSearchChange={setSearch} />
      <CategoryTabs categories={categories} selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
      <div className="event-list">
        {filteredEvents.map(event => (
          <EventCard key={event.id} event={event} onClick={handleEventClick} />
        ))}
      </div>

      {selectedEvent && ( // Render modal if there's a selected event
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>×</button>
            <img src={selectedEvent.image} alt={selectedEvent.name} className="modal-image" />
            <div className="modal-content">
              <h2>{selectedEvent.name}</h2>
              <p><strong>Date:</strong> {selectedEvent.date}</p>
              <p><strong>Location:</strong> {selectedEvent.location}</p>
              <p><strong>Description:</strong> {selectedEvent.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
