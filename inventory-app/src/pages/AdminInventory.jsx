// src/pages/AdminInventory.jsx
import React, { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useInventory } from "../store/InventoryContext"; // ВИКОРИСТОВУЄМО КОНТЕКСТ
import InventoryTable from "../components/inventory/InventoryTable";
import AdminInventoryCreate from "./AdminInventoryCreate";
import ConfirmModal from "../components/inventory/ConfirmModal";

const AdminInventory = () => {
  // Беремо все з глобального сховища
  const { inventory, loading, refreshInventory, deleteItem } = useInventory();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedId, setSelectedId] = React.useState(null);

  useEffect(() => {
    refreshInventory(); // Завантажуємо актуальні дані при відкритті
  }, []);

  const confirmDelete = async () => {
    await inventoryApi.delete(selectedId);
    await refreshInventory(); // Оновлюємо глобальний список після видалення
    setIsModalOpen(false);
  };

  return (
    <div>
      <Routes>
        <Route
          index
          element={
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <h2>Управління інвентарем</h2>
                <Link
                  to="create"
                  style={{
                    backgroundColor: "#4caf50",
                    color: "white",
                    padding: "10px 15px",
                    textDecoration: "none",
                    borderRadius: "4px",
                  }}
                >
                  + Додати позицію
                </Link>
              </div>

              {inventory.length === 0 && !loading ? (
                <p
                  style={{
                    textAlign: "center",
                    padding: "40px",
                    color: "#888",
                  }}
                >
                  Інвентар порожній. Додайте нові позиції.
                </p>
              ) : (
                <InventoryTable
                  inventory={inventory}
                  onDelete={(id) => {
                    setSelectedId(id);
                    setIsModalOpen(true);
                  }}
                  isLoading={loading}
                />
              )}

              <ConfirmModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={confirmDelete}
                message="Видалити цей товар?"
              />
            </>
          }
        />
        <Route path="create" element={<AdminInventoryCreate />} />
      </Routes>
    </div>
  );
};

export default AdminInventory;
