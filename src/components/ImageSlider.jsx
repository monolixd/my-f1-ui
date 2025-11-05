import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; 

export const ImageSlider = ({
  images = [], 
  autoPlay = true, 
  autoPlayInterval = 3000, 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    if (!autoPlay) return; 
    const intervalId = setInterval(goToNext, autoPlayInterval);
    return () => clearInterval(intervalId);
  }, [autoPlay, autoPlayInterval, goToNext, currentIndex]);

  if (images.length === 0) {
    return <div className="text-center p-4">No images provided.</div>;
  }

  return (
    <div className="relative w-full max-w-2xl mx-auto overflow-hidden rounded-lg shadow-lg">
      {/* Container ของรูปภาพที่เลื่อนได้ */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {/* วนลูปสร้างรูปภาพ */}
        {images.map((imgUrl, index) => (
          <img
            key={index}
            src={imgUrl}
            alt={`Slide ${index + 1}`}
            className="w-full flex-shrink-0" 
            data-testid={`slide-image-${index}`} 
          />
        ))}
      </div>

      {/* ปุ่มควบคุม ซ้าย/ขวา */}
      <button
        onClick={goToPrevious}
        aria-label="Previous slide" 
        className="absolute top-1/2 left-2 -translate-y-1/2 z-10 p-2 bg-white/50 rounded-full hover:bg-white focus:outline-none"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goToNext}
        aria-label="Next slide" 
        className="absolute top-1/2 right-2 -translate-y-1/2 z-10 p-2 bg-white/50 rounded-full hover:bg-white focus:outline-none"
      >
        <ChevronRight size={24} />
      </button>

      {/* จุด Indicators ด้านล่าง */}
      <div className="absolute bottom-4 left-0 right-0 z-10 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`} 
            aria-current={index === currentIndex} 
            className={`
              w-3 h-3 rounded-full transition-colors duration-200
              ${
                index === currentIndex
                  ? "bg-white"
                  : "bg-white/50 hover:bg-white/75"
              }
            `}
          />
        ))}
      </div>
    </div>
  );
};
