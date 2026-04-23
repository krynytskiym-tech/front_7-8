import React, { useState } from "react";

const InventoryForm = ({ onSubmit, initialData = {}, isSubmitting }) => {
  const [formData, setFormData] = useState({
    inventory_name: initialData.inventory_name || "",
    description: initialData.description || "",
  });
  const [photo, setPhoto] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.inventory_name.trim()) {
      newErrors.inventory_name = "Назва є обов'язковою"; // Валідація за вимогою [cite: 67, 74]
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const data = new FormData();
    data.append("inventory_name", formData.inventory_name);
    data.append("description", formData.description);
    if (photo) data.append("photo", photo);

    onSubmit(data);
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
      <div>
        <label>Назва інвентарю *</label>
        <input
          type="text"
          name="inventory_name"
          value={formData.inventory_name}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "8px",
            border: errors.inventory_name ? "1px solid red" : "1px solid #ccc",
          }}
        />
        {errors.inventory_name && (
          <span style={{ color: "red", fontSize: "12px" }}>
            {errors.inventory_name}
          </span>
        )}
      </div>

      <div>
        <label>Опис</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          style={{ width: "100%", padding: "8px", minHeight: "80px" }}
        />
      </div>

      <div>
        <label>Фото інвентарю</label>
        <input type="file" accept="image/*" onChange={handleFileChange} />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        style={{
          padding: "10px",
          backgroundColor: "#4caf50",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        {isSubmitting ? "Збереження..." : "Створити позицію"}
      </button>
    </form>
  );
};

export default InventoryForm;
