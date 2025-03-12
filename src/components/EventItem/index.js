import React from "react";
import "./index.css";

const EventItem = ({ event }) => {
  return (
    <div className="event-card">
      <div className="event-info">
        <h3>{event.title}</h3>
        <p><strong>Date:</strong> {event.date}</p>
        <p><strong>Location:</strong> {event.location}</p>
        <p className={`category ${event.category.toLowerCase()}`}>{event.category}</p>
      </div>
    </div>
  );
};

export default EventItem;