// src/pages/AdminInventoryCreate.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { inventoryApi } from "../services/inventoryApi";
import { useInventory } from "../store/InventoryContext"; // Додай цей імпорт
import InventoryForm from "../components/inventory/InventoryForm";

const AdminInventoryCreate = () => {
  const navigate = useNavigate();
  const { refreshInventory } = useInventory(); // Беремо функцію оновлення

  const handleCreate = async (formData) => {
    try {
      await inventoryApi.create(formData);
      await refreshInventory(); // ОНОВЛЮЄМО СПИСОК У КОНТЕКСТІ
      alert("Товар додано!");
      navigate("/admin"); // Повертаємось до списку
    } catch (e) {
      alert("Помилка при створенні");
    }
  };

  return (
    <div>
      <h3>Додати нову позицію</h3>
      <InventoryForm onSubmit={handleCreate} />
    </div>
  );
};

export default AdminInventoryCreate;
