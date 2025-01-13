'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Shield, Users, Zap } from 'lucide-react'

export default function WhyChooseUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const reasons = [
    {
      icon: Shield,
      title: 'Innovative Technology',
      description: 'Cutting-edge solutions that keep you ahead of the competition.',
    },
    {
      icon: Users,
      title: 'Strategic Partnership',
      description: 'We work closely with you to understand and meet your unique needs.',
    },
    {
      icon: Zap,
      title: 'Agility and Flexibility',
      description: 'Quick adaptation to changing market demands and requirements.',
    },
  ]

  return (
    <section className="py-20 bg-emerald-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine expertise with innovation to deliver exceptional results for our clients.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <reason.icon className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}