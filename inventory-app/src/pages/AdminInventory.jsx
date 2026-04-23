import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { inventoryApi } from "../services/inventoryApi";
import InventoryTable from "../components/inventory/InventoryTable";
import AdminInventoryCreate from "./AdminInventoryCreate";
import AdminInventoryDetails from "./AdminInventoryDetails";
import AdminInventoryEdit from "./AdminInventoryEdit";
import ConfirmModal from "../components/inventory/ConfirmModal";

const AdminInventory = () => {
  const [inventory, setInventory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const fetchInventory = async () => {
    setIsLoading(true);
    try {
      const response = await inventoryApi.getAll();
      setInventory(response.data);
    } catch (error) {
      console.error("Помилка:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchInventory();
  }, []);

  const openDeleteModal = (id) => {
    setSelectedId(id);
    setIsModalOpen(true);
  };

  const confirmDelete = async () => {
    try {
      await inventoryApi.delete(selectedId);
      setInventory(inventory.filter((item) => item.id !== selectedId));
    } catch (error) {
      console.error("Помилка при видаленні:", error);
    } finally {
      setIsModalOpen(false);
      setSelectedId(null);
    }
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
                    fontWeight: "bold",
                  }}
                >
                  + Додати позицію
                </Link>
              </div>
              <InventoryTable
                inventory={inventory}
                onDelete={openDeleteModal}
                isLoading={isLoading}
              />
              <ConfirmModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={confirmDelete}
                message="Ви впевнені, що хочете видалити цей предмет?"
              />
            </>
          }
        />
        <Route path="create" element={<AdminInventoryCreate />} />
        <Route path="view/:id" element={<AdminInventoryDetails />} />
        <Route path="edit/:id" element={<AdminInventoryEdit />} />
      </Routes>
    </div>
  );
};

export default AdminInventory;
