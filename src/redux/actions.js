export const ACTION = {
  ADD_RECIPE: "recipeList/addRecipe",
  UPDATE_RECIPE: "recipeList/updateRecipe",
  REMOVE_RECIPE: "recipeList/removeRecipe",
  ADD_INGREDIENT: "ingredients/addIngredient",
  UPDATE_INGREDIENT: "ingredients/updateIngredient",
  REMOVE_INGREDIENT: "ingredients/removeIngredient",
}

export const addRecipe = (data) => {
  return {
    type: ACTION.ADD_RECIPE,
    payload: data,
  };
};

export const updateRecipe = (data) => {
  return {
    type: ACTION.UPDATE_RECIPE,
    payload: data,
  };
};

export const removeRecipe = (data) => {
  return {
    type: ACTION.REMOVE_RECIPE,
    payload: data,
  };
};

export const addIngredient = (data) => {
  return {
    type: ACTION.ADD_INGREDIENT,
    payload: data,
  };
};

export const updateIngredient = (ingredient) => {
  return {
    type: ACTION.UPDATE_INGREDIENT,
    payload: ingredient,
  };
};

export const removeIngredient = (ingredientId) => {
  return {
    type: ACTION.REMOVE_INGREDIENT,
    payload: ingredientId,
  };
};
