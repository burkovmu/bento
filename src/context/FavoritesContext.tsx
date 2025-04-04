'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

interface FavoritesContextType {
  favorites: string[]
  addToFavorites: (id: string) => void
  removeFromFavorites: (id: string) => void
  isFavorite: (id: string) => boolean
  favoritesCount: number
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined)

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<string[]>([])

  // Загружаем избранное из localStorage при инициализации
  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites')
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites))
    }
  }, [])

  // Сохраняем избранное в localStorage при изменении
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  const addToFavorites = (id: string) => {
    setFavorites(prev => [...prev, id])
  }

  const removeFromFavorites = (id: string) => {
    setFavorites(prev => prev.filter(item => item !== id))
  }

  const isFavorite = (id: string) => favorites.includes(id)

  return (
    <FavoritesContext.Provider value={{
      favorites,
      addToFavorites,
      removeFromFavorites,
      isFavorite,
      favoritesCount: favorites.length
    }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites() {
  const context = useContext(FavoritesContext)
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider')
  }
  return context
} 