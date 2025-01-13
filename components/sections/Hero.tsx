'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-emerald-900 to-emerald-700 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3')] bg-cover bg-center opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Bridging Ideas,<br />
            Connecting Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-emerald-100 max-w-2xl mx-auto">
            We transform your business challenges into innovative solutions through cutting-edge technology and expertise.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Button size="lg" className="bg-white text-emerald-900 hover:bg-emerald-50">
              Get Started
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}