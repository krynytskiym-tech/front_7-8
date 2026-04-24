import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { InventoryProvider } from "./store/InventoryContext";
import Gallery from "./pages/Gallery";
import Favorites from "./pages/Favorites";
import AdminInventory from "./pages/AdminInventory";
import "./App.css";

function App() {
  return (
    <InventoryProvider>
      <div className="app-container">
        <nav className="main-nav">
          <Link to="/">Галерея</Link>
          <Link to="/favorites">Улюблені</Link>
          <Link to="/admin" className="admin-link">
            Адмін-панель
          </Link>
        </nav>
        <main className="content">
          <Routes>
            <Route path="/" element={<Gallery />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/admin/*" element={<AdminInventory />} />
          </Routes>
        </main>
      </div>
    </InventoryProvider>
  );
}

export default App;
