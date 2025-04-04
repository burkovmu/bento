'use client'

import { motion } from 'framer-motion'
import { Menu, X, ShoppingCart, Phone, Heart } from 'lucide-react'
import { useState } from 'react'
import { useCart } from '@/hooks/useCart'
import { useFavorites } from '@/context/FavoritesContext'
import Link from 'next/link'

const menuItems = [
  { title: 'Главная', href: '/' },
  { title: 'Каталог', href: '/catalog' },
  { title: 'О нас', href: '/about' },
  { title: 'Доставка', href: '/delivery' },
  { title: 'FAQ', href: '/faq' },
  { title: 'Контакты', href: '/contacts' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { items, openCart } = useCart()
  const { favoritesCount } = useFavorites()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-display font-bold text-secondary hover-lift">
          BentoCakes
        </Link>

        <div className="flex items-center gap-8">
          <Link href="/catalog" className="hover:text-primary transition-colors">
            Каталог
          </Link>
          <Link href="/delivery" className="hover:text-primary transition-colors">
            Доставка
          </Link>
          <Link href="/about" className="hover:text-primary transition-colors">
            О нас
          </Link>
          <Link href="/faq" className="hover:text-primary transition-colors">
            FAQ
          </Link>
          <Link href="/contacts" className="hover:text-primary transition-colors">
            Контакты
          </Link>

          <motion.a
            href="tel:+79001234567"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors hover-lift"
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            <Phone size={20} />
            <span>+7 900 123-45-67</span>
          </motion.a>
          
          {/* Кнопка избранного */}
          <motion.div
            className="relative p-2 hover:text-primary transition-colors hover-lift"
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            <Link href="/favorites">
              <Heart className="w-6 h-6" />
              {favoritesCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white text-xs rounded-full flex items-center justify-center">
                  {favoritesCount}
                </span>
              )}
            </Link>
          </motion.div>

          <motion.button
            className="relative btn-primary flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={openCart}
          >
            <ShoppingCart size={20} />
            <span>Корзина</span>
            {items.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-secondary text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">
                {items.length}
              </span>
            )}
          </motion.button>
        </div>
      </nav>
    </header>
  )
} 