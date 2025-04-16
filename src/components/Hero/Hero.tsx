import "./Hero.css";
import { useState, useEffect, useCallback } from "react";
import HeroImage from "../../assets/hero.jpg";
import HeroImage2 from "../../assets/hero2.jpeg";
import { Line, ArrowLeft, ArrowRight } from "../../icons";
import { motion, AnimatePresence } from "framer-motion";
import { wrap, variants } from "../../utils/slider";

function Hero() {
  const images = [
    { src: HeroImage, alt: "hero1" },
    { src: HeroImage2, alt: "hero2" },
    // Add more images here
  ];
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, images.length, page);
  const paginate = useCallback(
    (newDirection: number, e?: React.MouseEvent<HTMLButtonElement>) => {
      e?.preventDefault();
      setPage([page + newDirection, newDirection]);
    },
    [page]
  );
  // Automatic slideshow effect for mobile screens only
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;

    const handleResize = () => {
      if (window.innerWidth < 768) {
        if (!interval) {
          // Only set interval if it doesn't exist
          interval = setInterval(() => {
            paginate(1);
          }, 6000);
        }
      } else {
        if (interval) {
          // Clear interval if window is resized to desktop
          clearInterval(interval);
          interval = null;
        }
      }
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize); // Check on resize

    return () => {
      if (interval) clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, [paginate]);

  return (
    <section className="hero-container">
      <div className="hero">
        <div className="hero-img-container">
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
              }}
              src={images[imageIndex].src}
              alt={images[imageIndex].alt}
              loading="lazy"
            />
          </AnimatePresence>
        </div>
        <div className="hero-overlay" />
        <div className="hero-text">
          <p>특별한 나눔</p>
          <Line />
          <h1>함께하는 마음이 만드는 소중한 변화</h1>
          <p>즐거움과 나눔이 있는 감동의 순간</p>
        </div>
        <div className="hero-slider">
          <div className="slider-indicator">
            <span className="slide-number">1</span>
            <div className="slider-line">
              <div
                className="slider-fill"
                style={{
                  left: `${imageIndex * (100 / images.length)}%`,
                  width: `${100 / images.length}%`,
                }}
              />
            </div>
            <span className="slide-number">{images.length}</span>
          </div>
          <div className="slider-controls">
            <button
              className="control-btn"
              onClick={(e) => paginate(-1, e)}
              type="button"
              aria-label="left"
            >
              <ArrowLeft />
            </button>
            <button
              className="control-btn"
              onClick={(e) => paginate(1, e)}
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
