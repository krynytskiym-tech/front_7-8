import { Routes, Route, Link } from "react-router-dom";
import AdminInventory from "./pages/AdminInventory"; // Імпортуємо новий компонент

const Gallery = () => (
  <div>
    <h2>Галерея інвентарю (Лаб 8)</h2>
    <p>Тут будуть красиві картки товарів.</p>
  </div>
);
const Favorites = () => (
  <div>
    <h2>Улюблені</h2>
    <p>Тут будуть збережені товари.</p>
  </div>
);

function App() {
  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <nav
        style={{
          marginBottom: "20px",
          paddingBottom: "10px",
          borderBottom: "2px solid #eee",
        }}
      >
        <Link
          to="/"
          style={{ marginRight: "15px", fontWeight: "bold", color: "white" }}
        >
          Галерея
        </Link>
        <Link
          to="/favorites"
          style={{ marginRight: "15px", fontWeight: "bold", color: "white" }}
        >
          Улюблені
        </Link>
        <Link to="/admin" style={{ fontWeight: "bold", color: "#f44336" }}>
          Адмін-панель
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/favorites" element={<Favorites />} />
        {/* Оновлений маршрут для адмінки */}
        <Route path="/admin/*" element={<AdminInventory />} />
      </Routes>
    </div>
  );
}

export default App;
