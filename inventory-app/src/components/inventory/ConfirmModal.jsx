import React from "react";

const ConfirmModal = ({ isOpen, onClose, onConfirm, message }) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.8)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: "#1e1e1e",
          padding: "30px",
          borderRadius: "12px",
          border: "1px solid #333",
          textAlign: "center",
          maxWidth: "400px",
          width: "90%",
        }}
      >
        <h3 style={{ marginTop: 0 }}>Підтвердіть дію</h3>
        <p style={{ color: "#ccc", marginBottom: "25px" }}>{message}</p>
        <div style={{ display: "flex", gap: "15px", justifyContent: "center" }}>
          <button
            onClick={onConfirm}
            style={{
              backgroundColor: "#f44336",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Видалити
          </button>
          <button
            onClick={onClose}
            style={{
              backgroundColor: "#444",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Скасувати
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
