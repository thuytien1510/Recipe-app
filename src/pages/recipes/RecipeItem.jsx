import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { getIngredients } from "../../redux/selectors";
import "./StyleRecipeComponent.css";
import "./RecipeItemStyle.css";

export default function RecipeItem({ recipe, onClick, display }) {
  const ingredients = useSelector(getIngredients);
  const [count, setCount] = useState(0);
  const handelPlus = () => {
    setCount(count + 1);
  };
  const handelMinus = () => {
    setCount(count - 1);
  };
  const ingredientsDisplay = useMemo(() => {
    return recipe.ingredients
      .map((item) => {
        const ing = ingredients.find((i) => i.id === item.id);
        return ing?.name;
      })
      .join(", ");
  }, [ingredients, recipe]);

  return (
    <div
      onClick={() => {
        onClick(recipe);
      }}
      key={recipe.id}
      className="d-flex list-item border rounded p-2 bg-white text-black mb-2 form-recipe box-hover recipe-item"
      style={{ minHeight: "100px", cursor: "pointer" }}
    >
      <img
        src={recipe.imgURL}
        alt={`img-recipe-${recipe.name}`}
        width="200px"
        className="img-recipe"
      />
      <div className="content mx-2">
        <h3>{recipe.name}</h3>
        <p className="text-break desc-recipe">
          Descriptiton: {recipe.description}
        </p>
        <p>
          Ingredients:{" "}
          <span className="me-2 fst-italic fw-semibold">
            {ingredientsDisplay}
          </span>
        </p>
        {display && (
          <div className="d-flex gap-2 ms-4">
            <div onClick={handelMinus}>
              <i class="fa-sharp fa-solid fa-minus"></i>
            </div>
            {count}
            <div onClick={handelPlus}>
              <i class="fa-solid fa-plus"></i>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
