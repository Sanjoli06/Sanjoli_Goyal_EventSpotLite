// src/components/EventCard.jsx
import React from 'react';
import './EventCard.css'; // Ensure this CSS file exists

const EventCard = ({ event, onClick }) => {
  return (
    <div className="event-card" onClick={() => onClick(event)}>
      <img src={event.image} alt={event.name} className="event-image" />
      <h2 className="event-name">{event.name}</h2>
      <p className="event-date">{event.date}</p>
      <p className="event-location">{event.location}</p>
    </div>
  );
};

export default EventCard;
