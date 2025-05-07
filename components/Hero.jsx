"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Bg1, Bg2, Bg4 } from "@/public";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      image: Bg2,
      title: "Welcome to Kudan Local Government",
      subtitle:
        "Farming is our source of pride. Our vibrant community thrives on agricultural excellence, producing maize, millet, and groundnuts in abundance. With fertile lands and hardworking farmers, Kudan continues to lead in food security and sustainability.",
    },
    {
      image: Bg1,
      title: "Kudan is not just about agriculture",
      subtitle:
        "It’s a community of unity and progress. Our local economy flourishes through trade, education, and infrastructural development, reflecting our commitment to growth and modernization.",
    },
    {
      image: Bg4,
      title: "Our heritage runs deep",
      subtitle:
        "From colorful festivals to traditional crafts, Kudan embraces cultural diversity and proudly promotes youth empowerment, education, and social welfare for all residents.",
    },
  ];
  

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setDirection(1);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isAnimating, slides.length]);

  // Animation variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative h-[85vh] py-20 flex items-center overflow-hidden bg-black">
      {/* Image Slideshow */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-0"
          onAnimationStart={() => setIsAnimating(true)}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <Image
            src={slides[currentSlide].image}
            alt="Slide background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </motion.div>
      </AnimatePresence>

      {/* Preload images */}
      <div className="hidden">
        {slides.map((slide, index) => (
          <Image key={index} src={slide.image} alt="preload" priority />
        ))}
      </div>

      {/* Persistent Text Content */}
      <div className="container mx-auto px-8 sm:px-6 lg:px-8 relative z-10 text-white">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            {/* Title */}
            <motion.h1
              key={`title-${currentSlide}`}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={textVariants}
              transition={{ duration: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-shadow-lg"
              style={{
                textShadow: "0 2px 4px rgba(0, 0, 0, 0.7)",
              }}
            >
              {/* Slide Title */}
              {slides[currentSlide].title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              key={`subtitle-${currentSlide}`}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={textVariants}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-md mb-8 text-shadow-lg"
              security={{
                textShadow: "0 2px 4px rgba(0, 0, 0, 0.7)",
              }}
            >
              {slides[currentSlide].subtitle}
            </motion.p>
          </AnimatePresence>

          {/* Persistent Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-wrap gap-4"
          >
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link href="/about">Learn More</Link>
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-green-800"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1);
              setCurrentSlide(index);
            }}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentSlide === index ? 'bg-white' : 'bg-gray-400 hover:bg-green-600'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}