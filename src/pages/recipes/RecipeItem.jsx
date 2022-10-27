import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIngredients, getShoppingRecipeQuantity } from "../../redux/selectors";
import "./Recipes.style.css";
import "./RecipeItem.style.css";
import { updateShoppingRecipe } from "../../redux/actions";

export default function RecipeItem({ recipe, onClick, isShoppingList }) {
  const dispatch = useDispatch();
  const ingredients = useSelector(getIngredients);
  const quantity = useSelector(getShoppingRecipeQuantity(recipe.id));

  const handelPlus = (event) => {
    event.stopPropagation()
    dispatch(updateShoppingRecipe({ recipeId: recipe.id, quantity: quantity + 1 }))
  };

  const handelMinus = (event) => {
    event.stopPropagation()
    dispatch(updateShoppingRecipe({ recipeId: recipe.id, quantity: quantity - 1 }))
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
        onClick && onClick(recipe);
      }}
      key={recipe.id}
      className="d-flex list-item border rounded p-2 bg-white text-black form-recipe box-hover mb-3"
      style={{ cursor: "pointer", height: '100%'}}
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

        {isShoppingList && (
          <div className="d-flex ms-4 fs-4 justify-content-end flex-column align-items-end">
            <p className="fs-6">Quantity purchase</p>
            <div className="d-flex gap-3">
            <div onClick={handelMinus} className="">
              <i className="fa-sharp fa-solid fa-minus"></i>
            </div>
            {quantity}
            <div onClick={handelPlus}>
              <i className="fa-solid fa-plus"></i>
            </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
