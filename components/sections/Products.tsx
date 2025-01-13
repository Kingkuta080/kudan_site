'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from '@/components/ui/button'

export default function Products() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const products = [
    {
      title: 'Enterprise Suite',
      description: 'Comprehensive enterprise management solution.',
      logo: '🏢',
    },
    {
      title: 'Cloud Platform',
      description: 'Scalable cloud infrastructure platform.',
      logo: '☁️',
    },
    {
      title: 'Analytics Engine',
      description: 'Advanced data analytics and reporting.',
      logo: '📊',
    },
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Innovative solutions designed to meet your business needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-emerald-50 p-8 rounded-lg text-center"
            >
              <div className="text-4xl mb-4">{product.logo}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.title}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                Learn More
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}