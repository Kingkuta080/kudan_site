'use client'

import { motion } from 'framer-motion'
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const footerSections = {
    company: ['About Us', 'Careers', 'Contact Us', 'Blog'],
    services: ['Cloud Solutions', 'AI & Machine Learning', 'Digital Transformation', 'Consulting'],
    resources: ['Documentation', 'Support', 'Terms of Service', 'Privacy Policy'],
  }

  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Linkedin, href: '#' },
    { icon: Instagram, href: '#' },
  ]

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Kudan</h3>
            <p className="text-gray-400 mb-4">
              Transforming businesses through innovative technology solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-400 hover:text-emerald-500 transition-colors"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          {Object.entries(footerSections).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-lg font-semibold mb-4 capitalize">{title}</h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-emerald-500 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-400">
            <div className="flex items-center">
              <Mail className="mr-2" size={20} />
              <span>contact@Kudan.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="mr-2" size={20} />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2" size={20} />
              <span>123 Tech Street, Silicon Valley, CA</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm mt-8">
          © {new Date().getFullYear()} Kudan. All rights reserved.
        </div>
      </div>
    </footer>
  )
}