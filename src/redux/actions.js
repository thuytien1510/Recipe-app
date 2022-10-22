export const addRecipe = (data) => {
  return {
    type: "recipeList/addRecipe",
    payload: data,
  };
};

export const updateRecipe = (data) => {
  return {
    type: "recipeList/updateRecipe",
    payload: data,
  };
};

export const removeRecipe = (data) => {
  return {
    type: "recipeList/removeRecipe",
    payload: data,
  };
};

export const addIngredient = (data) => {
  return {
    type: "shoppingList/addIngredient",
    payload: data,
  };
};

export const updateIngredient = (data) => {
  return {
    type: "shoppingList/updateIngredient",
    payload: data,
  };
};

export const removeIngredient = (data) => {
  return {
    type: "shoppingList/removeIngredient",
    payload: data,
  };
};
