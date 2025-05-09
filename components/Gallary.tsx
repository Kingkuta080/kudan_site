"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { galleryData } from "@/store/data";


interface GalleryItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageOpen = (item: GalleryItem, index: number) => {
    setSelectedImage(item);
    setCurrentIndex(index);
  };

  const handleNavigation = (direction: 'next' | 'prev') => {
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % galleryData.length
      : (currentIndex - 1 + galleryData.length) % galleryData.length;
    
    setSelectedImage(galleryData[newIndex]);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="py-16 bg-green-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-green-800 mb-4"
          >
            Our Gallery
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-1 bg-green-600 mx-auto"
          ></motion.div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-16">
          {galleryData.slice(0, 3).map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
              onClick={() => handleImageOpen(item, index)}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                {/* <p className="text-white text-lg font-medium">{item.title}</p> */}
                <ZoomIn color="white" size={32}/>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-6xl w-full max-h-[90vh]">
              {/* Close Button */}
              <Button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 right-0 text-white hover:text-green-400 transition-colors"
              >
                <X size={32} />
              </Button>

              {/* Image Content */}
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                width={1200}
                height={800}
                className="object-contain w-full h-full"
              />

              {/* Navigation Arrows */}
              <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4">
                <Button
                  onClick={() => handleNavigation('prev')}
                  className="text-white hover:text-green-400 transition-colors"
                >
                  <ChevronLeft size={40} />
                </Button>
                <Button
                  onClick={() => handleNavigation('next')}
                  className="text-white hover:text-green-400 transition-colors"
                >
                  <ChevronRight size={40} />
                </Button>
              </div>

              {/* Caption */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-white">
                <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
                <p className="text-sm mt-2">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}

        {/* View More Button */}
        <div className="flex justify-center mt-12">
          <Link href="/gallery">
          <Button
            variant="outline"
            className="bg-green-700 text-white hover:bg-green-800 hover:text-white"
          >
            View More Gallery
          </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}