'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function News() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const news = [
    {
      title: 'Latest Technology Trends',
      date: 'March 15, 2024',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3',
    },
    {
      title: 'Digital Transformation Success',
      date: 'March 10, 2024',
      image: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-4.0.3',
    },
    {
      title: 'Innovation Awards 2024',
      date: 'March 5, 2024',
      image: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-4.0.3',
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest News & Updates</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay informed about our latest developments and industry insights.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-emerald-600 mb-2">{item.date}</p>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                <Button variant="outline" className="text-emerald-600 border-emerald-600 hover:bg-emerald-50">
                  Read More
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}