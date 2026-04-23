import { useState, useEffect } from "react";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState(() => {
    // Завантажуємо дані з localStorage при ініціалізації [cite: 153]
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    // Зберігаємо зміни [cite: 153]
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (item) => {
    setFavorites((prev) => {
      const isFavorite = prev.some((fav) => fav.id === item.id);
      if (isFavorite) {
        return prev.filter((fav) => fav.id !== item.id); // Видалення [cite: 155]
      }
      return [...prev, item]; // Додавання
    });
  };

  const isFavorite = (id) => favorites.some((fav) => fav.id === id);

  return { favorites, toggleFavorite, isFavorite };
};
