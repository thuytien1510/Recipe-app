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
    <>
    <div className="container card mt-5 mb-5 p-2 box-show ">
      <div className="header mb-4 fs-1">Ingredients</div>
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
    <div className="p-2"></div>
    </>
  );
}