"use client"; // Mark this component as a client component
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion'; // Framer Motion is a client-side library
import { Bg } from "@/public/index";

export default function Agri() {
  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-green-800 mb-4"
          >
            Agriculture - Farming is our Pride
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-1 bg-green-600 mx-auto"
          ></motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Potatoes Card */}
          <motion.div variants={cardVariants} initial="hidden" whileInView="visible">
            <Card className="hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-green-800">Potatoes</CardTitle>
                <CardDescription>High-quality produce</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <Image
                  src={Bg}
                  alt="Potatoes"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p className="text-gray-700">
                  Kudan&apos;s farmers are celebrated for producing high-quality potatoes that are distributed across the Country.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Grapes Card */}
          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" transition={{ delay: 0.2 }}>
            <Card className="hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-green-800">Grapes</CardTitle>
                <CardDescription>Gaining recognition</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <Image
                  src="https://images.unsplash.com/photo-1596363505729-4190a9506133?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Grapes"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p className="text-gray-700">
                We proudly account for approximately 85% of Nigeria&apos;s grape production, with over 80 vineyards yielding high-quality grapes.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Other Crops Card */}
          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" transition={{ delay: 0.4 }}>
            <Card className="hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-green-800">Other Crops</CardTitle>
                <CardDescription>Diverse agricultural products</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
              <Image
                src="https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Various Crops"
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
                <p className="text-gray-700">
                  Other prominent crops include cabbage, carrots, and tomatoes, contributing to the region&apos;s agricultural diversity.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Learn More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-10"
        >
          <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
            <Link href="/agriculture">Learn More About Our Agriculture</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}