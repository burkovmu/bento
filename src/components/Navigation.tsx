'use client'

import { motion, AnimatePresence } from 'framer-motion'
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

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-display font-bold text-secondary hover-lift">
          BentoCakes
        </Link>

        {/* Десктопное меню */}
        <div className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href} 
              className="hover:text-primary transition-colors"
            >
              {item.title}
            </Link>
          ))}

          <motion.a
            href="tel:+79001234567"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors hover-lift"
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            <Phone size={20} />
            <span>+7 900 123-45-67</span>
          </motion.a>
        </div>

        {/* Иконки корзины и избранного */}
        <div className="flex items-center gap-4">
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
            <span className="hidden sm:inline">Корзина</span>
            {items.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-secondary text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">
                {items.length}
              </span>
            )}
          </motion.button>

          {/* Кнопка мобильного меню */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Мобильное меню */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col gap-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg hover:text-primary transition-colors py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
                <motion.a
                  href="tel:+79001234567"
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors py-2"
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone size={20} />
                  <span>+7 900 123-45-67</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
} 