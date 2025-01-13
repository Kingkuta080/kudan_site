'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from '@/components/ui/button'
import { Users, Target, Rocket } from 'lucide-react'

export default function AboutUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: Users,
      title: 'Our Mission',
      description: 'To empower businesses through innovative technology solutions.',
    },
    {
      icon: Target,
      title: 'Our Vision',
      description: 'To be the leading force in digital transformation globally.',
    },
    {
      icon: Rocket,
      title: 'Our Values',
      description: 'Excellence, innovation, and customer success drive everything we do.',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are an innovative technology company dedicated to transforming businesses through cutting-edge solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <Button variant="outline" className="text-emerald-600 border-emerald-600 hover:bg-emerald-50">
                Learn More
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}