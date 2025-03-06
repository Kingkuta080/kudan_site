"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Volume2 } from "lucide-react";
import { chairman } from "@/public";
import { motion } from "framer-motion";

export default function Chairman() {
  // const audioRef = useRef(null);
  // const [isPlaying, setIsPlaying] = useState(false);

  // const toggleAudio = () => {
  //   if (audioRef.current) {
  //     if (isPlaying) {
  //       audioRef.current.pause();
  //     } else {
  //       audioRef.current.play();
  //     }
  //     setIsPlaying(!isPlaying);
  //   }
  // };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Stagger animations for children
        delayChildren: 0.5, // Delay before animations start
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <div className="py-16 bg-green-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-green-800 mb-4">
            Message from the Chairman
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {/* Image Section */}
          <motion.div
            className="order-1 md:order-1"
            variants={itemVariants}
          >
            <Image
              src={chairman}
              alt="Hon. Dauda Ilya Abba - Chairman"
              width={400}
              height={200}
              className="rounded-lg shadow-lg mx-auto hover:shadow-2xl transition-shadow duration-300"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="order-2 md:order-2"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-semibold text-green-800 mb-4">
              Hon. Dauda Ilya Abba
            </h3>
            <p className="text-gray-700 mb-4">
              Welcome to the official website of Kudan Local Government Area. It
              is with great pleasure that I address you as the Chairman of this
              vibrant and progressive community.
            </p>
            <p className="text-gray-700 mb-4">
              Our administration is committed to transparent governance,
              sustainable development, and improving the quality of life for all
              residents of Kudan.
            </p>
            {/* <div className="mt-6 flex items-center">
              <Button
                variant="outline"
                className="flex items-center text-green-700 border-green-700 hover:bg-green-700 hover:text-white"
                onClick={toggleAudio}
              >
                <Volume2 className="mr-2 h-4 w-4" />
                {isPlaying ? "Pause Audio" : "Listen to Full Message"}
              </Button>
              <audio ref={audioRef} className="hidden">
                <source
                  src="path"
                  type="audio/mpeg"
                />
                Your browser does not support the audio element.
              </audio>
            </div> */}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}