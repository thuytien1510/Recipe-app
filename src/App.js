import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./recipe-components/Home";
import Recipes from "./recipe-components/page/recipes/Recipes";
import ShoppingList from "./recipe-components/page/shoppingList/ShoppingList";
import Headers from './recipe-components/Layout/Headers';

function App() {
  return (
    <>
      <Headers />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/shopping-list" element={<ShoppingList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
