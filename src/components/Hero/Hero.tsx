import "./Hero.css";
import { useState } from "react";
import HeroImage from "../../assets/hero.jpg";
import { Line, ArrowLeft, ArrowRight } from "../../icons";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(1);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === 2 ? 1 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 1 ? 2 : prev - 1));
  };
  return (
    <section className="hero-container">
      <div className="hero">
        <img src={HeroImage} alt="Hero" className="hero-image" />
        <div className="hero-overlay" />
        <div className="hero-text">
          <p>특별한 나눔</p>
          <Line />
          <h1>함께하는 마음이 만드는 소중한 변화</h1>
          <p>즐거움과 나눔이 있는 감동의 순간</p>
        </div>
        <div className="hero-slider">
          <div className="slider-indicator">
            <span className="slide-number">{currentSlide}</span>
            <div className="slider-line">
              <div
                className="slider-fill"
                style={{ width: currentSlide === 1 ? "50%" : "100%" }}
              />
            </div>
            <span className="slide-number">2</span>
          </div>
          <div className="slider-controls">
            <button
              className="control-btn"
              onClick={handlePrev}
              type="button"
              aria-label="left"
            >
              <ArrowLeft />
            </button>
            <button
              className="control-btn"
              onClick={handleNext}
              type="button"
              aria-label="right"
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
