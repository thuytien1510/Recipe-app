import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Headers from './components/layout/Headers';
import Home from "./pages/home/Home";
import Recipes from "./pages/recipes/Recipes";
import ShoppingList from "./pages/shopping-list/ShoppingList";
import Ingredients from "./pages/ingredients/Ingredients";

function App() {
  return (
    <>
      <BrowserRouter>
        <Headers />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ingredients" element={<Ingredients />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/shopping-list" element={<ShoppingList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
