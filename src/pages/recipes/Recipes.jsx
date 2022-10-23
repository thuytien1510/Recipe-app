import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addRecipe } from "../../redux/actions";
import { recipeListSelector } from "../../redux/selectors";
import '../../App.css'
import RecipeItem from "./RecipeItem";
import RecipesModal from "./RecipesModal";

export default function Recipes() {
  const [displayForm, setDisplayForm] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState();
  const dispatch = useDispatch();
  const recipes = useSelector(recipeListSelector);

  // const handelDisplay = () => {
  //   setDisplayForm(!displayForm);
  //   setRecipe(false);
  // };

  // const addNewRecipe = (data) => {
  //   const recipe = {
  //     id: uuidv4(),
  //     ...data,
  //   };
  //   dispatch(addRecipe(recipe));
  // };

  const handleCloseForm = () => {
    setDisplayForm(false);
  }

  const handleViewRecipe = (recipe) => {
    setSelectedRecipe(recipe);
    setDisplayForm(true);
  }

  const handleAddRecipe = () => {
    setSelectedRecipe();
    setDisplayForm(true);
  }

  return (
    <div className="container mt-4">
      <Button variant="dark" onClick={handleAddRecipe} className="mb-5 p-2 px-4">
        Add New Recipe
      </Button>

      <div className="row">
        <div className="col-md-6">
          {recipes.map((recipe) => (
            <RecipeItem
              key={recipe.id}
              recipe={recipe}
              onClick={handleViewRecipe}
            />
          ))}
        </div>
      </div>

      <RecipesModal
        recipe={selectedRecipe}
        displayForm={displayForm}
        onClose={handleCloseForm}
      />
    </div>
  );
}
