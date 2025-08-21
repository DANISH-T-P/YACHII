import { useState, useEffect, useMemo } from "react";
import "./ImageSlider.css";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  // Array of slides
  const images = useMemo(
    () => [
      { 
        url: "/images/banner_12.jpg", 
        title: "YChat", 
        description: "Nurturing relationships by bringing friends and family closer through shared virtual experiences",
        overlayImage: "/images/YChat_logo.png"
      },
      { 
        url: "/images/banner_123.jpeg", 
        title: "YWork", 
        description: "Transforming the gig economy for millions—one trusted job at a time",
        overlayImage: "/images/YWork_logo.png"
      }
    ],
    []
  );

  // Preload images
  useEffect(() => {
    const preloadImages = async () => {
      try {
        const imagePromises = images.map((img) => {
          return new Promise((resolve) => {
            const image = new Image();
            image.onload = resolve;
            image.onerror = () => {
              console.error(`Failed to load image: ${img.url}`);
              resolve();
            };
            image.src = img.url;
          });
        });

        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch (error) {
        console.error("Error preloading images:", error);
        setImagesLoaded(true);
      }
    };

    preloadImages();
  }, [images]);

  // Auto-advance with progress tracking
  useEffect(() => {
    if (!imagesLoaded) return;

    const startTime = Date.now();
    const duration = 4000; // 4 seconds per slide

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProgress = (elapsed % duration) / duration;
      setProgress(currentProgress);

      if (elapsed >= duration) {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setProgress(0);
      }
    }, 16); // 60fps

    return () => clearInterval(interval);
  }, [images.length, imagesLoaded, currentIndex]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setProgress(0);
  };
  
  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    setProgress(0);
  };
  
  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    setProgress(0);
  };

  if (!imagesLoaded) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div id="home" className="slider-container">
      {/* Slides */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
          style={{
            backgroundImage: `url(${image.url})`,
            opacity: index === currentIndex ? 1 : 0,
            zIndex: index === currentIndex ? 1 : 0,
          }}
        >
          <div className="slide-overlay">
            {/* Overlay image */}
            {image.overlayImage && (
              <img 
                src={image.overlayImage} 
                alt={image.title} 
                className="slide-overlay-image"
              />
            )}

            {/* Text content */}
            <div className="slide-content">
              <h1 className="slide-title">
                {image.title}
              </h1>
              <p className="slide-description">
                {image.description}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Enhanced Navigation Arrows */}
      <button 
        className="slider-arrow prev" 
        onClick={goToPrevious}
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button 
        className="slider-arrow next" 
        onClick={goToNext}
        aria-label="Next slide"
      >
        ›
      </button>

      {/* Enhanced Dot Indicators */}
      <div className="slider-controls">
        {images.map((_, index) => (
          <button
            key={index}
            className={`slider-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Enhanced Progress Bar */}
      <div className="slider-progress" style={{ width: `${progress * 100}%` }} />
    </div>
  );
};

export default ImageSlider;
