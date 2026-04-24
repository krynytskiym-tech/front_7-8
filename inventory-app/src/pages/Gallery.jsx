import React, { useEffect, useState } from "react";
import { useInventory } from "../store/InventoryContext";
import InventoryCard from "../components/gallery/InventoryCard";
import InventoryQuickView from "../components/gallery/InventoryQuickView";

const Gallery = () => {
  const { inventory, loading, refreshInventory, favorites, toggleFavorite } =
    useInventory();
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    refreshInventory();
  }, []);

  if (loading)
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        Завантаження...
      </div>
    );

  return (
    <div style={{ width: "100%" }}>
      <h2 style={{ marginBottom: "20px" }}>Галерея інвентарю</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "25px",
        }}
      >
        {inventory.map((item) => (
          <InventoryCard
            key={item.id}
            item={item}
            isFavorite={favorites.some((f) => f.id === item.id)}
            onToggleFavorite={() => toggleFavorite(item)}
            onClick={() => setSelectedItem(item)}
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
