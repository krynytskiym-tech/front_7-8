import { Routes, Route, Link } from "react-router-dom";
import { InventoryProvider } from "./store/InventoryContext"; // Імпорт
import AdminInventory from "./pages/AdminInventory";
import Gallery from "./pages/Gallery";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <InventoryProvider>
      {" "}
      {/* Обгортаємо тут */}
      <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
        <nav style={{ marginBottom: "30px", display: "flex", gap: "20px" }}>
          <Link to="/">Галерея</Link>
          <Link to="/favorites">Улюблені</Link>
          <Link to="/admin" style={{ marginLeft: "auto", color: "#ff4444" }}>
            Адмін-панель
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/admin/*" element={<AdminInventory />} />
        </Routes>
      </div>
    </InventoryProvider>
  );
}

export default App;
