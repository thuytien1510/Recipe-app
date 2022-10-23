import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { getIngredients } from "../../redux/selectors";
import './StyleRecipeComponent.css'

export default function RecipeItem({ recipe, onClick }) {
  const ingredients = useSelector(getIngredients);
  const ingredientsDisplay = useMemo(() => {
    return recipe.ingredients
      .map((item) => {
        const ing = ingredients.find(i => i.id === item.id);
        return ing?.name
      })
      .join(', ');
  }, [ingredients, recipe]);

  return (
    <div
      onClick={() => {
        onClick(recipe);
      }}
      key={recipe.id}
      className="d-flex justify-content-between align-items-center list-item flex-wrap border rounded p-2 bg-white text-black mb-4 form-recipe box-hover"
      style={{ minHeight: "100px", cursor: "pointer" }}
    >
      <div className="content ">
        <h3>{recipe.name}</h3>
        <p>Descriptiton: {recipe.description}</p>
        <p>
          Ingredients:{" "}
          <span className="me-2 fst-italic fw-semibold">
            {ingredientsDisplay}
          </span>
        </p>
      </div>
      <img
        src={recipe.imgURL}
        alt={`img-recipe-${recipe.name}`}
        width="100px"
        style={{ maxWidth: "100px" }}
      />
    </div>
  );
}
