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
      return (
        total +
        ingredients.find((ing) => ing.id === item.id).price * item.quantity
      );
    }, 0);

    return totalPrc;
  }, [ingredients, totalIngreditents]);

  return (
    <div className="container">
      <div className="header my-3">Shopping List</div>
      <div className="d-flex flex-wrap gap-3 justify-content-center w-100 custom">
        <div className="custom">
          <h3 className="fw-bold fs-2 text-center">BILL</h3>
          <div className="container card px-0 text-center box-show me-2 custom">
            <div>
              <table className="table table-striped table-borderless mb-0">
                <thead className="text-bg-dark bgc-default-tp1 text-white fs-6">
                  <tr>
                    <th>Quantity</th>
                    <th>Unit</th>
                    <th>Ingredient</th>
                    <th>Price/Unit</th>
                    <th width="140" className="text-right">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody className="text-secondary-d3">
                  {totalIngreditents.map((item) => {
                    const ingItem = ingredients.find(
                      (ing) => ing.id === item.id
                    );
                    return (
                      <tr>
                        <td>{item.quantity}</td>
                        <td>{ingItem.unit}</td>
                        <td>{ingItem.name}</td>
                        <td className="text-95">${ingItem.price}</td>
                        <td className="text-right">
                          ${item.quantity * ingItem.price}
                        </td>
                      </tr>
                    );
                  })}

                  <tr>
                    <td
                      colSpan={4}
                      className="py-2 text-bg-warning fs-6 fw-bold"
                    >
                      Total Amount:
                    </td>
                    <td className="text-right py-2 text-bg-warning fs-6 fw-bold">
                      ${totalPrice}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-6 custom mb-5">
          <h3 className="fw-bold fs-2 text-center">MENU</h3>
          <div className="d-flex flex-wrap gap-3">
            {recipes.map((recipe) => (
              <div key={recipe.id}>
                <RecipeItem recipe={recipe} isShoppingList />
              </div>
            ))}
          </div>
        </div>
        <div className="mb-4"></div>
      </div>
    </div>
  );
}
