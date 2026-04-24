// src/components/inventory/InventoryForm.jsx
import React from "react";

const InventoryForm = ({ onSubmit, initialData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget); // Збираємо дані з полів name
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        maxWidth: "400px",
      }}
    >
      <input
        name="inventory_name"
        defaultValue={initialData?.inventory_name}
        placeholder="Назва товару"
        required
        style={{
          padding: "10px",
          borderRadius: "4px",
          border: "1px solid #444",
          background: "#222",
          color: "white",
        }}
      />
      <textarea
        name="description"
        defaultValue={initialData?.description}
        placeholder="Опис"
        required
        style={{
          padding: "10px",
          borderRadius: "4px",
          border: "1px solid #444",
          background: "#222",
          color: "white",
          minHeight: "100px",
        }}
      />
      <button
        type="submit"
        style={{
          backgroundColor: "#4caf50",
          color: "white",
          padding: "10px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Зберегти
      </button>
    </form>
  );
};

export default InventoryForm;
