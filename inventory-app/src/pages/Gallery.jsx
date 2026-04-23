import React, { useEffect, useState } from "react";
import { useInventory } from "../store/InventoryContext";
import InventoryCard from "../components/gallery/InventoryCard";
import InventoryQuickView from "../components/gallery/InventoryQuickView";

const Gallery = () => {
  const {
    inventory,
    loading,
    error,
    refreshInventory,
    favorites,
    toggleFavorite,
  } = useInventory();
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (inventory.length === 0) refreshInventory();
  }, []);

  if (loading)
    return <div style={{ textAlign: "center" }}>Завантаження галереї...</div>; // Стан loading [cite: 160]
  if (error) return <div style={{ color: "red" }}>{error}</div>; // Стан error [cite: 161]

  return (
    <div>
      <h2 style={{ marginBottom: "20px" }}>Склад інвентарю</h2>

      {/* Адаптивна grid-галерея [cite: 139, 157] */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {inventory.map((item) => (
          <InventoryCard
            key={item.id}
            item={item}
            isFavorite={favorites.some((f) => f.id === item.id)}
            onToggleFavorite={() => toggleFavorite(item)}
            onClick={() => setSelectedItem(item)} // Модалка Quick View [cite: 141-142]
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
