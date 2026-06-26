import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from '../data/products.json';
import './HeroBanner.css';

const HeroBanner = () => {
  const { collections } = data;
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % collections.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [collections.length]);

  return (
    <div className="hero-container">
      {collections.map((col, index) => (
        <div 
          key={col.id}
          className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${col.image})` }}
        />
      ))}
      <div className="hero-content">
        <h1 className="hero-title">Elegance Redefined.</h1>
        <p className="hero-subtitle">Discover the exclusive VESatikaa fashion collections, where modern aesthetics meet timeless heritage.</p>
        <div className="hero-btns">
          <Link to="/collections" className="btn btn-primary">
            👗 Browse Collections
          </Link>
          <Link to="/contact" className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>
            Book Appointment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
