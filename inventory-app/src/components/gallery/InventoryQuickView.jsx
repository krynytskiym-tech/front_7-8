import React from "react";

const InventoryQuickView = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.85)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 2000,
        padding: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "#1e1e1e",
          borderRadius: "15px",
          maxWidth: "800px",
          width: "100%",
          display: "flex",
          flexDirection: window.innerWidth < 600 ? "column" : "row",
          overflow: "hidden",
          position: "relative",
          border: "1px solid #333",
        }}
      >
        {/* Кнопка закриття */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "15px",
            right: "15px",
            background: "#333",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "35px",
            height: "35px",
            cursor: "pointer",
          }}
        >
          ✕
        </button>

        <img
          src={item.photo}
          alt={item.inventory_name}
          style={{
            width: window.innerWidth < 600 ? "100%" : "50%",
            height: "400px",
            objectFit: "cover",
          }}
        />

        <div style={{ padding: "30px", flex: 1 }}>
          <h2 style={{ marginTop: 0, color: "#fff" }}>{item.inventory_name}</h2>
          <p style={{ color: "#aaa", lineHeight: "1.6" }}>{item.description}</p>
          <div style={{ marginTop: "20px", fontSize: "14px", color: "#888" }}>
            ID товару: #{item.id}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryQuickView;
