'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Partners() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const partners = [
    'Microsoft',
    'AWS',
    'Google Cloud',
    'Oracle',
    'IBM',
    'Salesforce',
    'SAP',
    'Adobe',
  ]

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Partners</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We collaborate with leading technology providers to deliver the best solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex items-center justify-center p-8 bg-gray-50 rounded-lg"
            >
              <span className="text-xl font-semibold text-gray-600">{partner}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}