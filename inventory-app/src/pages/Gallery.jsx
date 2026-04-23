import React, { useState, useEffect } from "react";
import { inventoryApi } from "../services/inventoryApi";
import { useFavorites } from "../hooks/useFavorites";
import InventoryCard from "../components/gallery/InventoryCard";
import InventoryQuickView from "../components/gallery/InventoryQuickView"; // Імпорт

const Gallery = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null); // Стан для модалки
  const { toggleFavorite, isFavorite } = useFavorites();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await inventoryApi.getAll();
        setItems(res.data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  return (
    <div>
      <h2>Галерея інвентарю</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "25px",
        }}
      >
        {items.map((item) => (
          <InventoryCard
            key={item.id}
            item={item}
            isFavorite={isFavorite(item.id)}
            onToggleFavorite={toggleFavorite}
            onClick={() => setSelectedItem(item)} // Відкриваємо по кліку
          />
        ))}
      </div>

      <InventoryQuickView
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </div>
  );
};

export default Gallery;
