"use client"; // Ensure this is a Client Component

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";

export default function AboutKudan() {
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
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        {/* Title Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-green-800 mb-4">About Kudan</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {/* Text Content */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-green-800 mb-4">
              General Information
            </h3>
            <p className="text-gray-700 mb-4">
              Kudan Local Government Area is located in Kaduna State with its
              headquarters in Hunkuyi. Spanning an area of 345.4 km², Kudan is
              led by Hon. Dauda Ilya Abba (Chairman) and Usman Abbas Likoro
              (Vice Chairman).
            </p>
            <p className="text-gray-700 mb-6">
              The major tribes are Hausa and Fulani, with Hausa and Fulfulde
              being the predominant languages. The main economic activities
              include farming, livestock rearing, and trading.
            </p>
            <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
              <Link href="/about">
                Read More <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          {/* Map Card */}
          <motion.div variants={itemVariants}>
            <Card className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d130412.4717321086!2d7.786765501681929!3d11.262539404798725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11b27fc3df7cf997%3A0x7f813ac2a29bec28!2sKudan%2C%20Kaduna%2C%20Nigeria!5e1!3m2!1sen!2sus!4v1741206962840!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}