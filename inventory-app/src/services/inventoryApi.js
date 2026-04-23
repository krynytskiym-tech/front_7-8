import axios from "axios";

const API_URL = "http://localhost:3000/api";

const mockData = [
  {
    id: 1,
    inventory_name: "Ноутбук Dell XPS 13",
    description: "Потужний ультрабук для роботи",
    photo: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    inventory_name: "Мишка Logitech MX Master 3",
    description: "Ергономічна бездротова мишка",
    photo: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    inventory_name: "Монітор LG UltraFine",
    description: "4K монітор з чудовою передачею кольору",
    photo: "https://via.placeholder.com/150",
  },
];

export const inventoryApi = {
  // 1. Отримання всього списку (GET /inventory) [cite: 63]
  getAll: async () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ data: mockData }), 300);
    });
  },

  // 2. Отримання однієї позиції (GET /inventory/:id) [cite: 78]
  getOne: async (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const item = mockData.find((i) => i.id === parseInt(id));
        resolve({ data: item });
      }, 300);
    });
  },

  // 3. Створення нової позиції (POST /register) [cite: 71]
  create: async (formData) => {
    console.log("Дані для створення (FormData):", formData);
    return new Promise((resolve) =>
      setTimeout(() => resolve({ success: true }), 500),
    );
  },

  // 4. Оновлення тексту (PUT /inventory/:id) [cite: 88]
  updateText: async (id, data) => {
    console.log("Оновлення тексту (JSON) для ID:", id, data);
    return new Promise((resolve) =>
      setTimeout(() => resolve({ success: true }), 500),
    );
  },

  // 5. Оновлення фото (PUT /inventory/:id/photo) [cite: 95]
  updatePhoto: async (id, formData) => {
    console.log("Оновлення фото (FormData) для ID:", id);
    return new Promise((resolve) =>
      setTimeout(() => resolve({ success: true }), 500),
    );
  },

  // 6. Видалення (DELETE /inventory/:id) [cite: 100]
  delete: async (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`Видалено елемент з id: ${id}`);
        resolve({ data: { success: true } });
      }, 300);
    });
  },
};
