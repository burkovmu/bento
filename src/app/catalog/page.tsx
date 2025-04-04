'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { products } from '@/data/products'
import { useCart } from '@/hooks/useCart'

const categories = [
  'Все', 'Торты', 'Пирожные', 'Капкейки', 'Макаруны'
]

export default function CatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState('Все')
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)
  const { addToCart } = useCart()

  const filteredProducts = selectedCategory === 'Все'
    ? products
    : products.filter(product => product.category === selectedCategory)

  return (
    <main className="page-container">
      <div className="container mx-auto px-4">
        {/* Заголовок */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-display font-bold text-gray-800 text-center mb-12"
        >
          Каталог десертов
        </motion.h1>

        {/* Категории */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Продукты */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * (index % 3) }}
              className="relative group"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative h-[300px] rounded-xl overflow-hidden mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-110"
                />
                {hoveredProduct === product.id && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <button 
                      onClick={() => addToCart(product)}
                      className="bg-white text-gray-900 px-6 py-2 rounded-full font-medium hover:bg-primary hover:text-white transition-colors"
                    >
                      В корзину
                    </button>
                  </div>
                )}
              </div>
              <h3 className="font-display font-bold text-xl mb-2 text-gray-800">{product.name}</h3>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <p className="font-bold text-primary">{product.price} ₽</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
} 