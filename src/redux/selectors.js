export const recipeListSelector = (state) => state.recipes;

export const getIngredients = (state) => state.ingredients;

export const getShoppingRecipeQuantity = (recipeId) =>
	(state) =>
		state.shopping.find(s => s.recipeId === recipeId)?.quantity || 0;

export const getShoppingIngredients = (state) => {
	const ingredients = [];

	state.shopping.forEach(({ recipeId, quantity }) => {
		const recipeIngredients = state.recipes.find(recipe => recipe.id === recipeId).ingredients;
		ingredients.push(...recipeIngredients.map(ing => ({ id: ing.id, quantity: ing.quantity * quantity })));
	});

	const parsedIngredients = ingredients.reduce((total, item) => {
		const foundIndex = total.findIndex(ing => ing.id === item.id);
		if (foundIndex > -1) {
			total[foundIndex] = { id: item.id, quantity: total[foundIndex].quantity + item.quantity };
			return total;
		} else {
			return [...total, item];
		}
	}, []);

	return parsedIngredients;
}