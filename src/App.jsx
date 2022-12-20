import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./Home";
import Checkout from "./pages/Checkout"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
