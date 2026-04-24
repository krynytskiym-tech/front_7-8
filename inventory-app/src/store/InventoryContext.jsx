import React, { createContext, useState, useContext, useEffect } from "react";
import { inventoryApi } from "../services/inventoryApi";

const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
  const [inventory, setInventory] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });
  const [loading, setLoading] = useState(false);

  const refreshInventory = async () => {
    setLoading(true);
    try {
      const response = await inventoryApi.getAll();
      setInventory(response.data);
    } catch (err) {
      console.error("Помилка завантаження", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (item) => {
    setFavorites((prev) => {
      const isFav = prev.some((f) => f.id === item.id);
      return isFav ? prev.filter((f) => f.id !== item.id) : [...prev, item];
    });
  };

  return (
    <InventoryContext.Provider
      value={{
        inventory,
        favorites,
        loading,
        refreshInventory,
        toggleFavorite,
      }}
    >
      {children}
    </InventoryContext.Provider>
  );
};

export const useInventory = () => useContext(InventoryContext);
