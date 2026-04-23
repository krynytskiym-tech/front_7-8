import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { inventoryApi } from "../services/inventoryApi";

const AdminInventoryDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await inventoryApi.getOne(id);
        setItem(response.data);
      } catch (error) {
        console.error("Помилка:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchItem();
  }, [id]);

  if (loading) return <div>Завантаження деталей...</div>;
  if (!item) return <div>Елемент не знайдено.</div>;

  return (
    <div
      style={{ padding: "20px", border: "1px solid #444", borderRadius: "8px" }}
    >
      <button
        onClick={() => navigate("/admin")}
        style={{ marginBottom: "20px" }}
      >
        ← Назад
      </button>
      <h2>{item.inventory_name}</h2> [cite: 80]
      <p>
        <strong>Опис:</strong> {item.description}
      </p>{" "}
      [cite: 82]
      <div style={{ marginTop: "20px" }}>
        <strong>Повне зображення:</strong> [cite: 84]
        <br />
        <img
          src={item.photo}
          alt={item.inventory_name}
          style={{ maxWidth: "100%", height: "auto", marginTop: "10px" }}
        />
      </div>
    </div>
  );
};

export default AdminInventoryDetails;
