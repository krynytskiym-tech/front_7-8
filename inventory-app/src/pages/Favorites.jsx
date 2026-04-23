import React from "react";
import { useFavorites } from "../hooks/useFavorites";
import InventoryCard from "../components/gallery/InventoryCard";

const Favorites = () => {
  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  if (favorites.length === 0) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Список улюблених порожній</h2>
        <p>Додайте щось із галереї, щоб побачити це тут.</p>
      </div>
    );
  }

  return (
    <div>
      <h2 style={{ marginBottom: "30px" }}>Ваші улюблені товари</h2>
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
            isFavorite={isFavorite(item.id)}
            onToggleFavorite={toggleFavorite}
            onClick={() => {}}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
