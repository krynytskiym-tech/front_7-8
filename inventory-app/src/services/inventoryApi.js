// src/services/inventoryApi.js
import axios from "axios";

// Базовий URL твого API. Поки що використовуємо заглушку.
// Коли бекенд буде готовий, зміниш це посилання.
const API_URL = "http://localhost:3000/api";

// Тимчасові тестові дані, поки немає реального бекенду
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
  // Отримання всього інвентарю
  getAll: async () => {
    // Імітація затримки мережі
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: mockData });
      }, 500);
    });

    // Коли буде реальне API, розкоментуй цей код:
    // return await axios.get(`${API_URL}/inventory`);
  },

  // Видалення (поки що просто повертає success)
  delete: async (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`Видалено елемент з id: ${id}`);
        resolve({ data: { success: true } });
      }, 500);
    });
    // return await axios.delete(`${API_URL}/inventory/${id}`);
  },
};
create: async (formData) => {
  // Коли буде реальний бекенд:
  // return await axios.post(`${API_URL}/register`, formData, {
  //   headers: { 'Content-Type': 'multipart/form-data' }
  // });

  // Імітація для тестів:
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Дані форми отримано (імітація POST /register)");
      resolve({ data: { success: true } });
    }, 1000);
  });
};
// Додай це в об'єкт inventoryApi в src/services/inventoryApi.js
getOne: async (id) => {
  // Імітація запиту GET /inventory/:id
  return new Promise((resolve) => {
    setTimeout(() => {
      const item = mockData.find((i) => i.id === parseInt(id));
      resolve({ data: item });
    }, 300);
  });
  // Реальний запит: return await axios.get(`${API_URL}/inventory/${id}`);
};
