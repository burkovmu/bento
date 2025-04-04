'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Heart } from 'lucide-react'

interface CakeCardProps {
  title: string
  description: string
  price: number
  image: string
}

export function CakeCard({ title, description, price, image }: CakeCardProps) {
  return (
    <motion.div
      className="card p-4 w-72 hover-lift"
      whileHover={{ y: -10, scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="relative h-48 mb-4 overflow-hidden rounded-lg bg-peach/20">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <motion.button
          className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm text-primary"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Heart className="w-4 h-4" />
        </motion.button>
      </div>

      <h3 className="text-xl font-display font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-gray-800">{price} ₽</span>
        <motion.button
          className="btn-secondary text-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          В корзину
        </motion.button>
      </div>
    </motion.div>
  )
} 