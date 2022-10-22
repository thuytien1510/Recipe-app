import React from "react";
import Recipes from "./page/recipes/Recipes";
import ShoppingList from "./page/shoppingList/ShoppingList";

export default function Home() {
  return (
    <div className="row m-0">
      <div className="col-md-6">
        <Recipes />
      </div>
      <div className="col-md-6">
        <ShoppingList />
      </div>
    </div>
  );
}
