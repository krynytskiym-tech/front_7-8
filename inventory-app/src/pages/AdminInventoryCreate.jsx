import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { inventoryApi } from "../services/inventoryApi";
import InventoryForm from "../components/inventory/InventoryForm";

const AdminInventoryCreate = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCreate = async (formData) => {
    setIsSubmitting(true);
    try {
      await inventoryApi.create(formData);
      alert("Позицію успішно створено!");
      navigate("/admin"); // Повертаємось до списку
    } catch (error) {
      console.error("Помилка при створенні:", error);
      alert("Не вдалося створити позицію.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h3>Додати нову позицію</h3>
      <InventoryForm onSubmit={handleCreate} isSubmitting={isSubmitting} />
    </div>
  );
};

export default AdminInventoryCreate;
