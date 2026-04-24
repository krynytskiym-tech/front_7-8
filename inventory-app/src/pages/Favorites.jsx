import React from "react";
import { useInventory } from "../store/InventoryContext";
import InventoryCard from "../components/gallery/InventoryCard";

const Favorites = () => {
  const { favorites, toggleFavorite } = useInventory();

  if (favorites.length === 0) {
    return (
      <div style={{ textAlign: "center", marginTop: "100px", color: "#888" }}>
        <h2 style={{ fontSize: "48px" }}>📦</h2>
        <h3>У ваших улюблених ще нічого немає</h3>
        <p>Додайте товари з головної сторінки.</p>
      </div>
    );
  }

  return (
    <div>
      <h2 style={{ marginBottom: "30px" }}>Ваші улюблені</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "25px",
        }}
      >
        {favorites.map((item) => (
          <InventoryCard
            key={item.id}
            item={item}
            isFavorite={true}
            onToggleFavorite={() => toggleFavorite(item)}
            onClick={() => {}}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
