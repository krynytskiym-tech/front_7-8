import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { inventoryApi } from "../services/inventoryApi";
import InventoryTable from "../components/inventory/InventoryTable";
import AdminInventoryCreate from "./AdminInventoryCreate";

const AdminInventory = () => {
  const [inventory, setInventory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Функція для отримання списку всього інвентарю через API [cite: 29, 62, 63]
  const fetchInventory = async () => {
    setIsLoading(true);
    try {
      const response = await inventoryApi.getAll();
      setInventory(response.data);
    } catch (error) {
      console.error("Помилка при завантаженні інвентарю:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Викликаємо завантаження даних при першому рендері компонента [cite: 63]
  useEffect(() => {
    fetchInventory();
  }, []);

  // Функція для видалення позиції [cite: 32, 98, 100]
  const handleDelete = async (id) => {
    // Перед видаленням обов'язково показуємо підтвердження
    if (window.confirm("Ви впевнені, що хочете видалити цю позицію?")) {
      try {
        await inventoryApi.delete(id);
        // Після успішного видалення оновлюємо список у стані
        setInventory(inventory.filter((item) => item.id !== id));
      } catch (error) {
        console.error("Помилка при видаленні:", error);
        alert("Не вдалося видалити елемент.");
      }
    }
  };

  return (
    <div>
      <Routes>
        {/* Головний шлях адмінки: список інвентарю [cite: 26, 53] */}
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
                {/* Посилання на сторінку створення [cite: 30, 43] */}
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

              {/* Таблиця з даними [cite: 38, 54] */}
              <InventoryTable
                inventory={inventory}
                onDelete={handleDelete}
                isLoading={isLoading}
              />
            </>
          }
        />

        {/* Вкладений маршрут для створення нової позиції [cite: 43] */}
        <Route path="create" element={<AdminInventoryCreate />} />

        {/* Тут пізніше можна додати маршрути для Edit та View [cite: 44, 45] */}
      </Routes>
    </div>
  );
};

export default AdminInventory;
