"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
};

export default function Project() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" variants={cardVariants}>
          <h2 className="text-3xl font-bold text-green-800 mb-4">Current Projects</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" initial="hidden" whileInView="visible" variants={cardVariants}>
          {projects.map((project, index) => (
            <motion.div key={index} className="relative group overflow-hidden rounded-lg shadow-lg" variants={cardVariants}>
              <Image 
                src={project.image} 
                alt={project.title} 
                width={400} 
                height={300} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white transition-all duration-300 group-hover:backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm">{project.description}</p>
                <Button variant="ghost" size="sm" className="text-white mt-2 self-start hover:bg-white/20">
                  <Play className="mr-2 h-4 w-4" /> Watch Progress
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div className="text-center mt-10" initial="hidden" whileInView="visible" variants={cardVariants}>
          <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
            <Link href="/projects">View All Projects</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

const projects = [
  {
    title: "Borehole Constructions",
    description: "Borehole Construction to Mitigate Water Shortages for Local Farmers",
    image: "https://images.unsplash.com/photo-1584824388878-91b5ad632e31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Healthcare Center Renovations",
    description: "Rehabilitation of primary healthcare Centers for better service delivery",
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "WASH Program",
    description: "Improving community health by ensuring access to Water, Sanitation, and Proper Hygiene Practices",
    image: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];