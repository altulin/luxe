import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Template from "./pages/Template";
import HomePage from "./pages/HomePage";
import Category from "./componenets/category/Category";
import Product from "./pages/ProductPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Template />}>
        <Route index element={<HomePage />} />
        <Route path="/:category" element={<Category />} />
        <Route path="/:category/:product" element={<Product />} />
      </Route>
    </Routes>
  );
}

export default App;
