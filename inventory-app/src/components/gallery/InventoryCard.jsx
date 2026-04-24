import React from "react";

const InventoryCard = ({ item, isFavorite, onToggleFavorite, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        border: "1px solid #333",
        borderRadius: "12px",
        overflow: "hidden",
        backgroundColor: "#1a1a1a",
        cursor: "pointer",
        transition: "all 0.3s ease",
        position: "relative",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.5)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <img
        src={item.photo}
        alt={item.inventory_name}
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
      />
      <div style={{ padding: "15px" }}>
        <h4 style={{ margin: "0 0 10px 0", color: "white" }}>
          {item.inventory_name}
        </h4>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite();
          }}
          style={{
            backgroundColor: isFavorite ? "#ff4081" : "#333",
            color: "white",
            border: "none",
            padding: "8px 12px",
            borderRadius: "20px",
            cursor: "pointer",
          }}
        >
          {isFavorite ? "❤️ Улюблений" : "🤍 В улюблені"}
        </button>
      </div>
    </div>
  );
};

export default InventoryCard;
