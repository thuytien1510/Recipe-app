import React from "react";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { useSelector } from "react-redux";
import { recipeListSelector } from "../../redux/selectors";
import RecipeItem from "./RecipeItem";
import RecipesModal from "./RecipesModal";
import "./Recipes.style.css";

export default function Recipes() {
  const [displayForm, setDisplayForm] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState();
  const recipes = useSelector(recipeListSelector);
  const handleCloseForm = () => {
    setDisplayForm(false);
    setSelectedRecipe();
  };

  const handleViewRecipe = (recipe) => {
    setSelectedRecipe(recipe);
    setDisplayForm(true);
  };

  const handleAddRecipe = () => {
    
    setSelectedRecipe();
    setDisplayForm(true);
  };

  return (
    <div className="container mt-4">
      <div className="header">Recipes</div>

      <Button
        variant="dark"
        onClick={handleAddRecipe}
        className="mb-4 ms-2 mt-3 p-2 px-3"
      >
        Add New Recipe
      </Button>

      <div className="row g-4 pb-5">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="col-12 col-lg-6">
            <RecipeItem recipe={recipe} onClick={handleViewRecipe} />
          </div>
        ))}
      </div>

      {displayForm && (
        <RecipesModal recipe={selectedRecipe} onClose={handleCloseForm} />
      )}
    </div>
  );
}
