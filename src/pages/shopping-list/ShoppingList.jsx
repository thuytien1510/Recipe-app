import React from "react";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { getIngredients, getShoppingIngredients } from "../../redux/selectors";
import "./ShoppingList.style.css";
import { recipeListSelector } from "../../redux/selectors";
import RecipeItem from "../recipes/RecipeItem";

export default function ListItem() {
  const recipes = useSelector(recipeListSelector);
  const ingredients = useSelector(getIngredients);
  const totalIngreditents = useSelector(getShoppingIngredients);

  const totalPrice = useMemo(() => {
    const totalPrc = totalIngreditents.reduce((total, item) => {
      return total + ingredients.find(ing => ing.id === item.id).price * item.quantity;
    }, 0);

    return totalPrc;
  }, [ingredients, totalIngreditents]);

  return (
    <div className="container">
      <div className="header my-3">Shopping List</div>
      <div className="row">
        <div class="row g-4">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="col-12 col-lg-6">
              <RecipeItem
                recipe={recipe}
                isShoppingList
              />
            </div>
          ))}
        </div>
        <div className="col-md-6 statistical px-4">
          <div className="card mt-4 pb-5 p-4 box-show">
            <div>
              {totalIngreditents.map((item) => {
                const ingItem = ingredients.find(ing => ing.id === item.id);
                return (
                  <>
                    <div
                      key={item.id}
                      className="p-1 ps-3 m-2 ms-0 rounded-3 border text-dark box-hover"
                    >
                      <p
                        style={{
                          cursor: "pointer",
                          margin: "10px 0",
                          fontWeight: 500,
                          fontSize: 16,
                        }}
                      >
                        {item.quantity} {ingItem.unit} {ingItem.name} ~~ ${item.quantity * ingItem.price}
                      </p>
                    </div>
                  </>
                )
              })}
            </div>

            <div>Total: ${totalPrice}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
