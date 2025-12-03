import React, { useState, useEffect, useRef } from "react";
import ActivityCard from "../components/ActivityCard";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { useActivityStore } from "../../../../store/singapore";

const ActivityCarousel = () => {
  const { activities } = useActivityStore();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const intervalRef = useRef(null);

  // Duplicate activities for seamless infinite loop
  const duplicatedActivities = [...activities, ...activities, ...activities];

  // Responsive cards per view
  const getCardsPerView = () => {
    if (window.innerWidth < 640) return 1; // mobile
    if (window.innerWidth < 1024) return 2; // tablet
    return 4; // desktop
  };

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView());

  useEffect(() => {
    const updateView = () => setCardsPerView(getCardsPerView());
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  // Infinite loop next (with seamless transition)
  const nextSlide = () => {
    if (currentIndex >= activities.length) {
      // Jump to middle section without animation
      setIsTransitioning(false);
      setCurrentIndex(currentIndex - activities.length);
      // Force reflow and re-enable transition
      setTimeout(() => setIsTransitioning(true), 50);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  // Infinite loop previous (with seamless transition)
  const prevSlide = () => {
    if (currentIndex <= 0) {
      // Jump to middle section without animation
      setIsTransitioning(false);
      setCurrentIndex(activities.length);
      // Force reflow and re-enable transition
      setTimeout(() => setIsTransitioning(true), 50);
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Auto-play
  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, []);

  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 3000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  // Card width based on screen size
  const cardWidthPercent = 100 / cardsPerView;

  return (
    <div
      className="relative w-full max-w-7xl mx-auto pt-20 px-6"
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          Best Activities in Singapore
        </h2>

        <div className="flex gap-3">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-white shadow hover:shadow-lg transition"
          >
            <ChevronLeftIcon className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-white shadow hover:shadow-lg transition"
          >
            <ChevronRightIcon className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>

      {/* SLIDER */}
      <div className="overflow-hidden w-full">
        <div
          className="flex gap-6 transition-transform duration-700 ease-out"
          style={{
            transform: `translateX(-${currentIndex * cardWidthPercent}%)`,
            transition: isTransitioning ? "transform 700ms ease-out" : "none",
          }}
        >
          {duplicatedActivities.map((activity, index) => (
            <div
              key={`${activity.id}-${index}`}
              style={{ width: `${cardWidthPercent}%` }}
              className="flex-shrink-0"
            >
              <ActivityCard activity={activity} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityCarousel;