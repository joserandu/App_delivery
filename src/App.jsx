import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Restaurants from "./pages/Restaurants";
import Dishes from "./pages/Dishes";
import Orders from "./pages/Orders";
import About from "./pages/About";

import "./index.css";

function App() {
  return (
    <BrowserRouter>

      <div className="app-container">

        {/* HEADER */}
        <Header />

        {/* MENU */}
        <Navbar />

        {/* CONTEÚDO DAS PÁGINAS */}
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/restaurants" element={<Restaurants />} />
            <Route path="/dishes" element={<Dishes />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        {/* FOOTER */}
        <Footer />

      </div>

    </BrowserRouter>
  );
}

export default App;