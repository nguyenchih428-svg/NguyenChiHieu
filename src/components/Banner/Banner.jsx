import React, { useState, useEffect } from 'react';
import './Banner.css';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Dữ liệu nội dung các slide banner
  const slides = [

  ];

  // Tự động chuyển slide sau mỗi 5 giây
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  return (
    <div className="banner-container">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`banner-slide ${index === currentSlide ? 'active' : ''}`}
          style={{ 
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${slide.image})` 
          }}
        >
          <div className="banner-content container">
            <h1 className="banner-title fade-in-up">
              {slide.title}
            </h1>
            <p className="banner-desc fade-in-up delay-1">
              {slide.description}
            </p>
            <button 
              className="banner-btn fade-in-up delay-2"
              style={{ backgroundColor: slide.color }}
            >
              {slide.buttonText}
            </button>
          </div>
        </div>
      ))}

      {/* Nút điều hướng mũi tên */}
      <button className="nav-btn prev" onClick={prevSlide} aria-label="Previous slide">
        <i className="fas fa-chevron-left"></i>
      </button>
      <button className="nav-btn next" onClick={nextSlide} aria-label="Next slide">
        <i className="fas fa-chevron-right"></i>
      </button>

      {/* Chỉ số chấm tròn (Pagination dots) */}
      <div className="banner-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Banner;