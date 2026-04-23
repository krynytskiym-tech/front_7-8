import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { inventoryApi } from "../services/inventoryApi";
import InventoryForm from "../components/inventory/InventoryForm";

const AdminInventoryEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const res = await inventoryApi.getOne(id);
      setInitialData(res.data);
      setLoading(false);
    };
    loadData();
  }, [id]);

  const handleUpdate = async (formData) => {
    try {
      // 1. Оновлюємо текст [cite: 87]
      const textData = {
        inventory_name: formData.get("inventory_name"),
        description: formData.get("description"),
      };
      await inventoryApi.updateText(id, textData);

      // 2. Оновлюємо фото, якщо воно вибране [cite: 94]
      const photoFile = formData.get("photo");
      if (photoFile && photoFile.size > 0) {
        const photoData = new FormData();
        photoData.append("photo", photoFile);
        await inventoryApi.updatePhoto(id, photoData);
      }

      alert("Дані оновлено!");
      navigate("/admin");
    } catch (e) {
      alert("Помилка при оновленні");
    }
  };

  if (loading) return <div>Завантаження форми...</div>;

  return (
    <div>
      <h3>Редагувати позицію #{id}</h3>
      <InventoryForm
        onSubmit={handleUpdate}
        initialData={initialData}
        isSubmitting={false}
      />
    </div>
  );
};

export default AdminInventoryEdit;
