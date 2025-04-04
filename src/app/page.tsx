'use client'

import { motion } from 'framer-motion'
import { Sparkles, ChevronDown, Star, Heart } from 'lucide-react'
import { CakeCard } from '@/components/CakeCard'
import Image from 'next/image'
import { ParallaxBackground } from '@/components/ParallaxBackground'
import { useRouter } from 'next/navigation'
import { useFavorites } from '@/context/FavoritesContext'

const cakes = [
  {
    id: '1',
    title: 'Нежная ваниль',
    description: 'Воздушный ванильный бисквит с кремом из маскарпоне и свежими ягодами',
    price: 2500,
    image: '/images/placeholder.svg'
  },
  {
    id: '2',
    title: 'Клубничный рай',
    description: 'Бисквит с клубничным муссом и кусочками свежей клубники',
    price: 2800,
    image: '/images/placeholder.svg'
  },
  {
    id: '3',
    title: 'Шоколадный бархат',
    description: 'Шоколадный бисквит с ганашем и карамельной прослойкой',
    price: 3200,
    image: '/images/placeholder.svg'
  },
  {
    id: '4',
    title: 'Лавандовый сон',
    description: 'Лавандовый бисквит с черничным кремом и съедобными цветами',
    price: 2900,
    image: '/images/placeholder.svg'
  },
]

const ZigzagPattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-[0.02]" width="100%" height="100%">
    <pattern id="zigzag" width="84" height="48" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <path d="M42 0L84 48H0z" fill="currentColor" />
    </pattern>
    <rect width="100%" height="100%" fill="url(#zigzag)" />
  </svg>
)

const HeroImage = ({ src, alt, className }: { src: string; alt: string; className: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
    className={`relative ${className}`}
  >
    <div className="relative w-full h-full rounded-2xl overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
    </div>
  </motion.div>
)

const StarIcon = ({ delay }: { delay: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.5,
      delay,
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 2
    }}
  >
    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
  </motion.div>
)

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
}

export default function Home() {
  const router = useRouter()
  const { isFavorite, addToFavorites, removeFromFavorites } = useFavorites()

  const handleFavoriteClick = (id: string) => {
    if (isFavorite(id)) {
      removeFromFavorites(id)
    } else {
      addToFavorites(id)
    }
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-[#FDF8F7] overflow-hidden">
        {/* Декоративный фон */}
        <div className="absolute inset-0 bg-gradient-to-b from-background to-cream/5" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-cream/10 rounded-full blur-3xl animate-pulse" />
        </div>

        {/* Основной контент */}
        <div className="container mx-auto px-4 min-h-screen flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 py-20 relative z-10">
          {/* Левая колонка */}
          <div className="w-full lg:w-1/2 flex flex-col items-start space-y-8">
            <motion.div 
              className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full"
              {...fadeInUp}
            >
              <span className="text-primary">★★★★★</span>
              <span className="text-gray-600">Более 1000 довольных клиентов</span>
            </motion.div>

            <motion.h1 
              className="text-5xl lg:text-7xl font-bold leading-tight"
              {...fadeInUp}
              transition={{ delay: 0.2 }}
            >
              Создаем
              <span className="block font-['NeueMetanaNextOutline'] text-6xl lg:text-8xl my-2 text-gradient">
                сладкие моменты
              </span>
              вашей жизни
            </motion.h1>

            <motion.p 
              className="text-gray-600 text-lg max-w-xl"
              {...fadeInUp}
              transition={{ delay: 0.3 }}
            >
              Уникальные бенто-торты ручной работы, которые делают каждый ваш праздник 
              особенным и незабываемым. Создаем с любовью, украшаем с вдохновением.
            </motion.p>

            <div className="flex flex-col items-center gap-6">
              <motion.button
                onClick={() => router.push('/checkout')}
                className="btn-primary text-lg px-12 py-4 rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <span>Заказать торт</span>
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <Sparkles className="w-6 h-6" />
                </motion.div>
              </motion.button>
            </div>

            <motion.div 
              className="grid grid-cols-3 gap-8 mt-12"
              {...fadeInUp}
              transition={{ delay: 0.5 }}
            >
              <div className="text-center">
                <div className="font-['NeueMetanaNextOutline'] text-4xl text-primary mb-1">500+</div>
                <div className="text-sm text-gray-600">Выполненных заказов</div>
              </div>
              <div className="text-center">
                <div className="font-['NeueMetanaNextOutline'] text-4xl text-primary mb-1">4.9</div>
                <div className="text-sm text-gray-600">Средняя оценка</div>
              </div>
              <div className="text-center">
                <div className="font-['NeueMetanaNextOutline'] text-4xl text-primary mb-1">2ч</div>
                <div className="text-sm text-gray-600">Время доставки</div>
              </div>
            </motion.div>
          </div>

          {/* Правая колонка с изображениями */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative aspect-square max-w-2xl mx-auto">
              {/* Основное изображение */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative z-20 rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="/images/hero-main.webp"
                  alt="Изысканный бенто-торт"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>

              {/* Плавающие элементы */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute -left-4 top-1/4 bg-white rounded-xl p-3 shadow-lg z-30"
              >
                <Heart className="w-6 h-6 text-red-500 fill-red-500" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -right-4 top-1/3 bg-white rounded-xl p-4 shadow-lg z-30"
              >
                <div className="text-sm font-medium">Топ продаж</div>
                <div className="text-xs text-gray-500">Бенто-торт</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg z-30 flex items-center gap-3"
              >
                <div className="w-12 h-12 relative rounded-full overflow-hidden">
                  <Image
                    src="/images/hero-3.webp"
                    alt="Довольный клиент"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-medium">Анна К.</div>
                  <div className="text-xs text-gray-500">★★★★★ "Превзошли ожидания!"</div>
                </div>
              </motion.div>

              {/* Декоративные изображения */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute -left-12 top-1/4 w-48 h-48 rounded-2xl overflow-hidden shadow-xl z-10"
              >
                <Image
                  src="/images/hero-1.webp"
                  alt="Детали торта"
                  fill
                  className="object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: 6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -right-12 top-1/3 w-48 h-48 rounded-2xl overflow-hidden shadow-xl z-10"
              >
                <Image
                  src="/images/hero-2.webp"
                  alt="Процесс создания"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Скролл индикатор */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-1"
          >
            <motion.div className="w-1 h-2 bg-gray-400 rounded-full" />
          </motion.div>
          <span className="text-sm text-gray-400">Прокрутите вниз</span>
        </motion.div>
      </section>

      {/* Наши особенные торты */}
      <section className="relative py-32">
        <ParallaxBackground>
          <div className="absolute inset-0 bg-gradient-to-b from-background via-cream/5 to-background">
            <ZigzagPattern />
          </div>
        </ParallaxBackground>
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block mb-6"
            >
              <div className="bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-medium">
                Популярные торты
              </div>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Наши особенные торты
            </h2>
            <p className="text-gray-600 text-lg">
              Каждый торт - это уникальное произведение кондитерского искусства,
              созданное с любовью и вниманием к деталям
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cakes.map((cake, index) => (
              <motion.div
                key={cake.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-white rounded-3xl shadow-soft overflow-hidden transition-all duration-500 hover:shadow-hover">
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={cake.image}
                      alt={cake.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Цена и кнопка */}
                    <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col items-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-2xl font-bold text-white mb-4">
                        {cake.price} ₽
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-gray-800 px-8 py-3 rounded-full font-medium shadow-lg hover:bg-primary hover:text-white transition-colors duration-300"
                      >
                        Заказать
                      </motion.button>
                    </div>

                    {/* Иконка избранного */}
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleFavoriteClick(cake.id)}
                      className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-primary hover:text-white transition-colors duration-300"
                    >
                      <Heart 
                        className={`w-5 h-5 ${isFavorite(cake.id) ? 'fill-primary text-primary' : ''}`} 
                      />
                    </motion.button>
                  </div>

                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2 text-gray-800 group-hover:text-primary transition-colors duration-300">
                      {cake.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-2 mb-4 leading-relaxed">
                      {cake.description}
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">(24 отзыва)</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <motion.a
              href="/catalog"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-10 py-4 bg-primary text-white rounded-full font-medium shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300"
            >
              <span className="mr-2">Смотреть все торты</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronDown className="w-5 h-5 rotate-[-90deg]" />
              </motion.div>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
