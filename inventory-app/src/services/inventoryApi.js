// src/services/inventoryApi.js

// Важливо: використовуємо let, щоб можна було змінювати масив
let mockData = [
  {
    id: 1,
    inventory_name: "Ноутбук Dell XPS 13",
    description: "Потужний ультрабук для розробки",
    photo: "https://picsum.photos/id/0/400/300",
  },
  {
    id: 2,
    inventory_name: "Мишка Logitech MX Master 3",
    description: "Ергономічна бездротова мишка",
    photo: "https://picsum.photos/id/2/400/300",
  },
];

export const inventoryApi = {
  getAll: async () => ({ data: [...mockData] }), // Повертаємо копію масиву

  create: async (formData) => {
    const newItem = {
      id: Date.now(),
      inventory_name: formData.get("inventory_name"),
      description: formData.get("description"),
      photo: "https://picsum.photos/400/300",
    };
    mockData.push(newItem); // Реально додаємо в масив
    return { success: true, data: newItem };
  },

  delete: async (id) => {
    mockData = mockData.filter((item) => item.id !== parseInt(id));
    return { success: true };
  },
};
