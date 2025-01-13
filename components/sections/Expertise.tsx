'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Brain, Bot, Cloud } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Expertise() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const areas = [
    {
      icon: Brain,
      title: 'Artificial Intelligence',
      description: 'Advanced AI solutions for business automation and optimization.',
    },
    {
      icon: Bot,
      title: 'Process Automation',
      description: 'Streamline operations with intelligent automation solutions.',
    },
    {
      icon: Cloud,
      title: 'Cloud Computing',
      description: 'Scalable and secure cloud infrastructure services.',
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Areas of Expertise</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our core competencies span across various technological domains.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-emerald-50 p-6 rounded-lg"
            >
              <area.icon className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{area.title}</h3>
              <p className="text-gray-600 mb-4">{area.description}</p>
              <Button variant="outline" className="text-emerald-600 border-emerald-600 hover:bg-emerald-100">
                Learn More
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}