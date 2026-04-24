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
        zIndex: 1000,
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
          overflow: "hidden",
          position: "relative",
          border: "1px solid #333",
          color: "white",
        }}
      >
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
            width: "30px",
            height: "30px",
            cursor: "pointer",
          }}
        >
          ✕
        </button>
        <img
          src={item.photo}
          style={{ width: "50%", height: "400px", objectFit: "cover" }}
          alt=""
        />
        <div style={{ padding: "30px", flex: 1 }}>
          <h2>{item.inventory_name}</h2>
          <p style={{ color: "#ccc" }}>{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default InventoryQuickView;
