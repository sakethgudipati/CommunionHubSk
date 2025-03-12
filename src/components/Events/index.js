import React, { useState } from "react";
import "./index.css";
import EventItem from "../EventItem";

const Events = () => {
  const [events, setEvents] = useState([
    { id: 1, title: "Charity Drive", date: "March 15, 2025", location: "NYC", category: "Charity", img: "https://source.unsplash.com/400x300/?charity" },
    { id: 2, title: "Music Fest", date: "April 2, 2025", location: "LA", category: "Social", img: "https://source.unsplash.com/400x300/?music" },
    { id: 3, title: "Faith Gathering", date: "May 10, 2025", location: "Chicago", category: "Religious", img: "https://source.unsplash.com/400x300/?prayer" },
    { id: 4, title: "Tech Conference", date: "June 5, 2025", location: "San Francisco", category: "Social", img: "https://source.unsplash.com/400x300/?technology" },
    { id: 5, title: "Food Festival", date: "July 18, 2025", location: "Houston", category: "Social", img: "https://source.unsplash.com/400x300/?food" },
    { id: 6, title: "Blood Donation Camp", date: "August 8, 2025", location: "Miami", category: "Charity", img: "https://source.unsplash.com/400x300/?blood-donation" },
    { id: 7, title: "Cultural Night", date: "September 22, 2025", location: "Seattle", category: "Social", img: "https://source.unsplash.com/400x300/?culture" },
    { id: 8, title: "Yoga Retreat", date: "October 12, 2025", location: "Denver", category: "Religious", img: "https://source.unsplash.com/400x300/?yoga" },
    { id: 9, title: "Marathon Fundraiser", date: "November 3, 2025", location: "Boston", category: "Charity", img: "https://source.unsplash.com/400x300/?marathon" },
    { id: 10, title: "Interfaith Dialogue", date: "December 5, 2025", location: "Washington D.C.", category: "Religious", img: "https://source.unsplash.com/400x300/?discussion" }
  ]);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [newEvent, setNewEvent] = useState({ title: "", date: "", location: "", category: "" });

  const filteredEvents = selectedCategory === "All" ? events : events.filter(event => event.category === selectedCategory);

  const handleAddEvent = (e) => {
    e.preventDefault();
    if (newEvent.title && newEvent.date && newEvent.location && newEvent.category) {
      const newEventData = {
        id: events.length + 1,
        title: newEvent.title,
        date: newEvent.date,
        location: newEvent.location,
        category: newEvent.category
      };
      setEvents([...events, newEventData]);
      setNewEvent({ title: "", date: "", location: "", category: "" });
    }
  };

  return (
    <div className="events-container">
      <h1 className="events-title">Upcoming Events</h1>

      <div className="filter-container">
        <label>Filter by Category:</label>
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="All">All</option>
          <option value="Religious">Religious</option>
          <option value="Social">Social</option>
          <option value="Charity">Charity</option>
        </select>
      </div>

      <div className="events-list">
        {filteredEvents.map(event => (
          <EventItem key={event.id} event={event} />
        ))}
      </div>

      <h2 className="add-event-title">Add a New Event</h2>
      <form className="add-event-form" onSubmit={handleAddEvent}>
        <input type="text" placeholder="Event Title" value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} required />
        <input type="date" value={newEvent.date} onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })} required />
        <input type="text" placeholder="Location" value={newEvent.location} onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })} required />
        <select value={newEvent.category} onChange={(e) => setNewEvent({ ...newEvent, category: e.target.value })} required>
          <option value="">Select Category</option>
          <option value="Religious">Religious</option>
          <option value="Social">Social</option>
          <option value="Charity">Charity</option>
        </select>
        <button type="submit" className="add-event-button">Add Event</button>
      </form>
    </div>
  );
};

export default Events;