import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addIngredient,
  updateIngredient,
  removeIngredient,
} from "../../redux/actions";
import IngredientItem from "./IngredientItem";
import { getIngredients } from "../../redux/selectors";
import IngredientInput from "./IngredientInput";

export default function Ingredients() {
  const ingredients = useSelector(getIngredients);
  const dispatch = useDispatch();

  const handleAdd = (ingredient) => {
    dispatch(
      addIngredient(ingredient)
    );
  };

  const handleUpdate = (ingredient) => {
    dispatch(
      updateIngredient(ingredient)
    );
  };

  const handleRemove = (ingredientId) => {
    dispatch(
      removeIngredient(ingredientId)
    );
  };

  return (
    <div className="container card mt-4 pb-5 p-4 w-50 box-show">
      <IngredientInput
        onChange={handleAdd}
      />

      {ingredients.map(ing =>
        <IngredientItem
          key={ing.name}
          ingredient={ing}
          onRemove={handleRemove}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
}