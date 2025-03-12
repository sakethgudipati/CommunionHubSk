import React from "react";
import "./index.css";

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About CommunionHub</h1>
        <p>Bringing communities together through shared values, faith, and meaningful events.</p>
      </header>

      <section className="about-content">
        <div className="about-text">
          <h2>Our Mission</h2>
          <p>
            CommunionHub is dedicated to uniting people across faiths and communities. We provide a platform for
            individuals to connect, participate in engaging events, and foster meaningful relationships.
          </p>
          <p>
            Our vision is to create a global space where people can learn, share, and grow together while embracing
            diversity and inclusivity.
          </p>
        </div>

        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952" alt="Community Gathering" />
        </div>
      </section>

      <section className="about-values">
        <h2>Our Core Values</h2>
        <div className="values-container">
          <div className="value-card">
            <img src="https://images.unsplash.com/photo-1520975916090-3105956dac38" alt="Unity" />
            <h3>Unity</h3>
            <p>We believe in the power of unity and collaboration to bring people closer.</p>
          </div>
          <div className="value-card">
            <img src="https://images.unsplash.com/photo-1501555088652-021faa106b9b" alt="Respect" />
            <h3>Respect</h3>
            <p>Respect for all cultures, traditions, and beliefs is at the heart of our mission.</p>
          </div>
          <div className="value-card">
            <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df" alt="Innovation" />
            <h3>Innovation</h3>
            <p>We embrace modern technology to create meaningful connections and experiences.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;