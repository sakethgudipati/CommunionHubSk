import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import { motion } from "framer-motion";
import "./index.css";

const Home = () => {
  const jwtToken = Cookies.get("jwt_token");
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    { text: "This platform has connected me with wonderful people across the world!", name: "Sarah P.", location: "UK", img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39" },
    { text: "I love the events and the community-building aspect!", name: "David C.", location: "Canada", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9" },
    { text: "This is the best platform for cultural exchange and faith-based discussions.", name: "Emily R.", location: "Australia", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1" },
    { text: "Great initiative that brings people together for meaningful conversations!", name: "James T.", location: "USA", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330" },
    { text: "A life-changing experience! Highly recommend it to everyone.", name: "Sophia M.", location: "Germany", img: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef" },
    { text: "A perfect way to bridge faith-based communities worldwide!", name: "Michael B.", location: "France", img: "https://images.unsplash.com/photo-1560807707-8cc77767d783" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials.length]);
  if (!jwtToken) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Connecting People Across Faiths & Interests</h1>
        <p>Bringing communities together through meaningful events and shared experiences.</p>
        <button className="explore-button">Explore Events</button>
      </header>
      <section className="why-communion">
        <h2>Why Communion Rocks!</h2>
        <motion.div className="why-cards" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          {[
            { title: "Unifying Communities", img: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5", desc: "Communion bridges diverse religious communities, creating a meaningful hub for connections." },
            { title: "Innovative and Fun", img: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6", desc: "Experience faith in a fresh way with engaging features and modern technology." },
            { title: "Promoting Unity", img: "https://images.unsplash.com/photo-1501555088652-021faa106b9b", desc: "We foster understanding and harmony between different communities." }
          ].map((item, index) => (
            <motion.div className="why-card" key={index} whileHover={{ scale: 1.05 }}>
              <img src={item.img} alt={item.title} />
              <div className="card-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
      <section className="trusted-users">
        <h2>Trusted by Over 1500+ Active Global Users</h2>
        <p>Join a growing community of users worldwide who trust us to connect and thrive together.</p>
        
        <motion.div className="carousel">
          {[0, 1].map((offset) => (
            <motion.div className="testimonial" key={offset} whileHover={{ scale: 1.05 }}>
              <p>"{testimonials[(currentIndex + offset) % testimonials.length].text}"</p>
              <div className="user-info">
                <img src={testimonials[(currentIndex + offset) % testimonials.length].img} alt={testimonials[(currentIndex + offset) % testimonials.length].name} />
                <div className="user-details">
                  <span className="user-name">{testimonials[(currentIndex + offset) % testimonials.length].name}</span>
                  <span className="user-location">{testimonials[(currentIndex + offset) % testimonials.length].location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="testimonial-nav">
          <button className="prev-button" onClick={() => setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length)}>←</button>
          <button className="next-button" onClick={() => setCurrentIndex((currentIndex + 1) % testimonials.length)}>→</button>
        </div>
      </section>
    </div>
  );
};

export default Home;