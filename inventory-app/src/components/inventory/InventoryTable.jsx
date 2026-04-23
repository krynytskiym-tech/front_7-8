// src/components/inventory/InventoryTable.jsx
import React from "react";
import { Link } from "react-router-dom";

const InventoryTable = ({ inventory, onDelete, isLoading }) => {
  if (isLoading) {
    return <div>Завантаження інвентарю...</div>; // Стан loading
  }

  if (!inventory || inventory.length === 0) {
    return <div>Інвентар порожній. Додайте нові позиції.</div>; // Стан empty
  }

  return (
    <div style={{ overflowX: "auto" }}>
      <table
        style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}
      >
        <thead>
          <tr
            style={{
              backgroundColor: "#333",
              color: "white",
              textAlign: "left",
            }}
          >
            <th style={{ padding: "12px", border: "1px solid #ddd" }}>Фото</th>
            <th style={{ padding: "12px", border: "1px solid #ddd" }}>Назва</th>
            <th style={{ padding: "12px", border: "1px solid #ddd" }}>Опис</th>
            <th style={{ padding: "12px", border: "1px solid #ddd" }}>Дії</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr key={item.id} style={{ borderBottom: "1px solid #444" }}>
              <td style={{ padding: "12px", border: "1px solid #ddd" }}>
                <img
                  src={item.photo}
                  alt={item.inventory_name}
                  style={{
                    width: "50px",
                    height: "50px",
                    objectFit: "cover",
                    borderRadius: "4px",
                  }}
                />
              </td>
              <td
                style={{
                  padding: "12px",
                  border: "1px solid #ddd",
                  fontWeight: "bold",
                }}
              >
                {item.inventory_name}
              </td>
              <td style={{ padding: "12px", border: "1px solid #ddd" }}>
                {item.description}
              </td>
              <td style={{ padding: "12px", border: "1px solid #ddd" }}>
                <Link
                  to={`/admin/view/${item.id}`}
                  style={{ marginRight: "10px", color: "#4caf50" }}
                >
                  Переглянути
                </Link>
                <Link
                  to={`/admin/edit/${item.id}`}
                  style={{ marginRight: "10px", color: "#2196f3" }}
                >
                  Редагувати
                </Link>
                <button
                  onClick={() => onDelete(item.id)}
                  style={{
                    backgroundColor: "#f44336",
                    color: "white",
                    border: "none",
                    padding: "5px 10px",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Видалити
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryTable;
